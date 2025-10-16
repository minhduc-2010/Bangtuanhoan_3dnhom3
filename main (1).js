// File: main.js (Bản cập nhật cuối cùng: Màu sắc theo 4 nhóm chính + Chú thích)

// --- PHẦN 1: INJECT CSS VÀO HEAD CỦA HTML VÀ THÊM CHÚ THÍCH ---

// Định nghĩa màu sắc cố định để sử dụng trong CSS
const COLORS = {
    "Kim loại": "#00BFFF",          // Xanh nước
    "Kim loại chuyển tiếp": "#FFFF00", // Vàng
    "Phi kim": "#FF0000",           // Đỏ
    "Khí hiếm": "#00FF00"           // Xanh lá
};

function injectLegendStyles() {
    const legendStyles = `
        #legend-container {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2000;
            padding: 10px 20px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 8px;
            display: flex;
            gap: 20px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .legend-item {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #ffffff;
        }

        .legend-color-box {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            border-radius: 4px;
            border: 1px solid #ffffff33;
            box-shadow: 0 0 8px;
        }
    `;
    return legendStyles;
}


function injectStyles() {
    // Màu Neon Cyan cũ (chỉ dùng cho Tiêu đề)
    const NEON_CYAN = '#00FFFF'; 
    const cssContent = `
        body { 
            margin: 0; 
            overflow: hidden; 
            background-color: #050518;
            font-family: Arial, sans-serif;
            color: #ffffff; 
        }

        #main-title {
            position: absolute; 
            top: 15px; 
            width: 100%; 
            text-align: center; 
            font-size: 24px; 
            font-weight: bold; 
            color: ${NEON_CYAN}; 
            z-index: 2000;
        }

        #css-container { 
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
        }
        
        .element {
            width: 240px; 
            height: 240px; 
            text-align: center;
            cursor: pointer;
            background-color: rgba(0,0,0,0.5);
            color: #ffffff;
            transition: all 0.5s;
        }

        .symbol {
            position: absolute;
            top: 25px; 
            left: 0;
            right: 0;
            font-size: 110px;
            font-weight: bold;
            color: #FFFFFF; 
        }

        .details {
            position: absolute;
            bottom: 10px; 
            left: 0;
            right: 0;
            font-size: 28px; 
        }

        .number {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 40px; 
            color: #FFFFFF; 
        }

        ${injectLegendStyles()}
    `;

    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = cssContent;
    } else {
        style.appendChild(document.createTextNode(cssContent));
    }
    document.head.appendChild(style);
    
    const title = document.createElement('div');
    title.id = 'main-title';
    title.textContent = 'BẢNG TUẦN HOÀN HÓA HỌC 3D';
    document.body.appendChild(title);

    // --- THÊM CHÚ THÍCH VÀO BODY ---
    const legendContainer = document.createElement('div');
    legendContainer.id = 'legend-container';
    
    // Tạo từng mục chú thích
    for (const [type, color] of Object.entries(COLORS)) {
        const item = document.createElement('div');
        item.className = 'legend-item';
        
        const colorBox = document.createElement('span');
        colorBox.className = 'legend-color-box';
        colorBox.style.backgroundColor = color;
        colorBox.style.boxShadow = `0 0 8px ${color}`;

        item.appendChild(colorBox);
        item.appendChild(document.createTextNode(type));
        legendContainer.appendChild(item);
    }

    document.body.appendChild(legendContainer);
}

injectStyles();


// --- PHẦN 2: LOGIC 3D & ÁNH XẠ MÀU ---

let camera, scene, renderer;
let controls;
const objects = [];
const targets = { table: [] }; 

const ELEMENT_WIDTH = 260; 
const ELEMENT_HEIGHT = 260; 
const MAX_COLUMNS = 18;
const CENTER_OFFSET = (MAX_COLUMNS + 1) / 2; 

// --- HÀM ÁNH XẠ MÀU (Sử dụng đối tượng COLORS cố định) ---
function getTypeColor(type) {
    const color = COLORS[type] || COLORS["Kim loại"]; // Fallback về Kim loại
    
    // Định nghĩa bóng mờ (shadow) và màu hover dựa trên màu chính
    let shadow, hover;
    switch(type) {
        case "Kim loại chuyển tiếp":
            shadow = "0 0 10px #FFFF00, 0 0 20px #FFFF00";
            hover = "#FFD700";
            break;
        case "Phi kim":
            shadow = "0 0 10px #FF0000, 0 0 20px #FF0000";
            hover = "#DC143C";
            break;
        case "Khí hiếm":
            shadow = "0 0 10px #00FF00, 0 0 20px #00FF00";
            hover = "#3CB371";
            break;
        case "Kim loại":
        default:
            shadow = "0 0 10px #00BFFF, 0 0 20px #00BFFF";
            hover = "#1E90FF";
            break;
    }

    return { color: color, shadow: shadow, hover: hover };
}


function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 
    
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 4500; 
    camera.position.y = 0; 

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('css-container').appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.enablePan = true;
    
    createElements();
    setupListeners();

    transform(targets.table, 0); 
    animate();
}

function createElements() {
    const elementCount = table.length; 
    
    for (let i = 0; i < elementCount; i++) {
        const item = table[i]; 
        const elementType = item[6]; 
        const elementColors = getTypeColor(elementType); 
        
        // --- TẠO PHẦN TỬ HTML ---
        const element = document.createElement('div');
        element.className = 'element';
        
        // Áp dụng màu viền và bóng dựa trên Loại Nguyên tố
        element.style.boxShadow = `0px 0px 12px ${elementColors.color}`;
        element.style.border = `1px solid ${elementColors.color}`;

        // Cập nhật CSS cho hiệu ứng hover 
        element.onmouseover = function() {
            this.style.boxShadow = `0px 0px 15px ${elementColors.hover}, ${elementColors.shadow}`;
            this.style.border = `1px solid ${elementColors.hover}`;
        };
        element.onmouseout = function() {
            this.style.boxShadow = `0px 0px 12px ${elementColors.color}`;
            this.style.border = `1px solid ${elementColors.color}`;
        };


        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = item[0]; 
        element.appendChild(number);

        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = item[1]; 
        symbol.style.textShadow = elementColors.shadow; // Bóng ký hiệu theo màu nhóm
        element.appendChild(symbol);

        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = item[2] + '<br>' + item[3].toFixed(3); 
        details.style.color = elementColors.color; // Tên/Khối lượng theo màu nhóm
        element.appendChild(details);

        const object = new THREE.CSS3DObject(element);
        object.position.x = 0;
        object.position.y = 0;
        object.position.z = 0;

        scene.add(object);
        objects.push(object);

        // --- TÍNH TOÁN VỊ TRÍ MỤC TIÊU ---
        const tableObject = new THREE.Object3D();
        const atomicNumber = item[0];
        const group = item[4]; 
        const period = item[5]; 
        
        let targetGroup = group;
        let targetPeriod = period;
        
        // Vị trí Lanthanide/Actinide phụ
        if (period === 8) { 
            targetGroup = (atomicNumber - 58) + 4; 
            targetPeriod = 8; 
        } else if (period === 9) { 
            targetGroup = (atomicNumber - 90) + 4; 
            targetPeriod = 9; 
        }

        tableObject.position.x = (targetGroup - CENTER_OFFSET) * ELEMENT_WIDTH;
        tableObject.position.y = (5 - targetPeriod) * ELEMENT_HEIGHT; 
        tableObject.position.z = 0;
        
        targets.table.push(tableObject);
    }
}

// --- HÀM CHUYỂN ĐỔI HÌNH DẠNG (TRANSFORM) ---
function transform(target, duration) {
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const targetObject = target[i];

        if (duration === 0) {
             object.position.copy(targetObject.position);
             object.rotation.copy(targetObject.rotation);
        } else {
             new TWEEN.Tween(object.position)
                .to({ x: targetObject.position.x, y: targetObject.position.y, z: targetObject.position.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

            new TWEEN.Tween(object.rotation)
                .to({ x: targetObject.rotation.x, y: targetObject.rotation.y, z: targetObject.rotation.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();
        }
    }

    if (duration > 0) {
        new TWEEN.Tween(this)
            .to({}, duration * 2)
            .onUpdate(render)
            .start();
    }
}


// --- Vòng lặp Animation & Render ---
function animate() {
    requestAnimationFrame(animate);
    TWEEN.update(); 
    controls.update(); 
    render();
}

function render() {
    renderer.render(scene, camera);
}

// --- THIẾT LẬP SỰ KIỆN NÚT BẤM ---
function setupListeners() {
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

init();