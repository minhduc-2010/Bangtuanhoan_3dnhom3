// File: elements_data.js (Đã gộp thành 4 nhóm: Kim loại, Phi kim, Kim loại chuyển tiếp, Khí hiếm)

// Format dữ liệu: [Số thứ tự, Ký hiệu, Tên, Khối lượng, Nhóm, Chu kỳ, Loại Nguyên tố (4 nhóm)]
const table = [
    [ 1, "H", "Hydrogen", 1.008, 1, 1, "Phi kim" ],
    [ 2, "He", "Helium", 4.003, 18, 1, "Khí hiếm" ],
    [ 3, "Li", "Lithium", 6.94, 1, 2, "Kim loại" ],
    [ 4, "Be", "Beryllium", 9.012, 2, 2, "Kim loại" ],
    [ 5, "B", "Boron", 10.81, 13, 2, "Phi kim" ], // Á kim -> Phi kim
    [ 6, "C", "Carbon", 12.01, 14, 2, "Phi kim" ],
    [ 7, "N", "Nitrogen", 14.01, 15, 2, "Phi kim" ],
    [ 8, "O", "Oxygen", 16.00, 16, 2, "Phi kim" ],
    [ 9, "F", "Fluorine", 19.00, 17, 2, "Phi kim" ],
    [ 10, "Ne", "Neon", 20.18, 18, 2, "Khí hiếm" ],
    [ 11, "Na", "Sodium", 22.99, 1, 3, "Kim loại" ],
    [ 12, "Mg", "Magnesium", 24.31, 2, 3, "Kim loại" ],
    [ 13, "Al", "Aluminium", 26.98, 13, 3, "Kim loại" ],
    [ 14, "Si", "Silicon", 28.09, 14, 3, "Phi kim" ], // Á kim -> Phi kim
    [ 15, "P", "Phosphorus", 30.97, 15, 3, "Phi kim" ],
    [ 16, "S", "Sulfur", 32.06, 16, 3, "Phi kim" ],
    [ 17, "Cl", "Chlorine", 35.45, 17, 3, "Phi kim" ],
    [ 18, "Ar", "Argon", 39.95, 18, 3, "Khí hiếm" ],
    [ 19, "K", "Potassium", 39.10, 1, 4, "Kim loại" ],
    [ 20, "Ca", "Calcium", 40.08, 2, 4, "Kim loại" ],
    [ 21, "Sc", "Scandium", 44.96, 3, 4, "Kim loại chuyển tiếp" ],
    [ 22, "Ti", "Titanium", 47.87, 4, 4, "Kim loại chuyển tiếp" ],
    [ 23, "V", "Vanadium", 50.94, 5, 4, "Kim loại chuyển tiếp" ],
    [ 24, "Cr", "Chromium", 52.00, 6, 4, "Kim loại chuyển tiếp" ],
    [ 25, "Mn", "Manganese", 54.94, 7, 4, "Kim loại chuyển tiếp" ],
    [ 26, "Fe", "Iron", 55.85, 8, 4, "Kim loại chuyển tiếp" ],
    [ 27, "Co", "Cobalt", 58.93, 9, 4, "Kim loại chuyển tiếp" ],
    [ 28, "Ni", "Nickel", 58.69, 10, 4, "Kim loại chuyển tiếp" ],
    [ 29, "Cu", "Copper", 63.55, 11, 4, "Kim loại chuyển tiếp" ],
    [ 30, "Zn", "Zinc", 65.38, 12, 4, "Kim loại chuyển tiếp" ],
    [ 31, "Ga", "Gallium", 69.72, 13, 4, "Kim loại" ],
    [ 32, "Ge", "Germanium", 72.63, 14, 4, "Phi kim" ], // Á kim -> Phi kim
    [ 33, "As", "Arsenic", 74.92, 15, 4, "Phi kim" ], // Á kim -> Phi kim
    [ 34, "Se", "Selenium", 78.97, 16, 4, "Phi kim" ],
    [ 35, "Br", "Bromine", 79.90, 17, 4, "Phi kim" ],
    [ 36, "Kr", "Krypton", 83.80, 18, 4, "Khí hiếm" ],
    [ 37, "Rb", "Rubidium", 85.47, 1, 5, "Kim loại" ],
    [ 38, "Sr", "Strontium", 87.62, 2, 5, "Kim loại" ],
    [ 39, "Y", "Yttrium", 88.91, 3, 5, "Kim loại chuyển tiếp" ],
    [ 40, "Zr", "Zirconium", 91.22, 4, 5, "Kim loại chuyển tiếp" ],
    [ 41, "Nb", "Niobium", 92.91, 5, 5, "Kim loại chuyển tiếp" ],
    [ 42, "Mo", "Molybdenum", 95.96, 6, 5, "Kim loại chuyển tiếp" ],
    [ 43, "Tc", "Technetium", 98.0, 7, 5, "Kim loại chuyển tiếp" ],
    [ 44, "Ru", "Ruthenium", 101.1, 8, 5, "Kim loại chuyển tiếp" ],
    [ 45, "Rh", "Rhodium", 102.9, 9, 5, "Kim loại chuyển tiếp" ],
    [ 46, "Pd", "Palladium", 106.4, 10, 5, "Kim loại chuyển tiếp" ],
    [ 47, "Ag", "Silver", 107.9, 11, 5, "Kim loại chuyển tiếp" ],
    [ 48, "Cd", "Cadmium", 112.4, 12, 5, "Kim loại chuyển tiếp" ],
    [ 49, "In", "Indium", 114.8, 13, 5, "Kim loại" ],
    [ 50, "Sn", "Tin", 118.7, 14, 5, "Kim loại" ],
    [ 51, "Sb", "Antimony", 121.8, 15, 5, "Phi kim" ], // Á kim -> Phi kim
    [ 52, "Te", "Tellurium", 127.6, 16, 5, "Phi kim" ], // Á kim -> Phi kim
    [ 53, "I", "Iodine", 126.9, 17, 5, "Phi kim" ],
    [ 54, "Xe", "Xenon", 131.3, 18, 5, "Khí hiếm" ],
    [ 55, "Cs", "Caesium", 132.9, 1, 6, "Kim loại" ],
    [ 56, "Ba", "Barium", 137.3, 2, 6, "Kim loại" ],
    [ 57, "La", "Lanthanum", 138.9, 3, 6, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 58, "Ce", "Cerium", 140.1, 4, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 59, "Pr", "Praseodymium", 140.9, 5, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 60, "Nd", "Neodymium", 144.2, 6, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 61, "Pm", "Promethium", 145.0, 7, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 62, "Sm", "Samarium", 150.4, 8, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 63, "Eu", "Europium", 152.0, 9, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 64, "Gd", "Gadolinium", 157.3, 10, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 65, "Tb", "Terbium", 158.9, 11, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 66, "Dy", "Dysprosium", 162.5, 12, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 67, "Ho", "Holmium", 164.9, 13, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 68, "Er", "Erbium", 167.3, 14, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 69, "Tm", "Thulium", 168.9, 15, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 70, "Yb", "Ytterbium", 173.1, 16, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 71, "Lu", "Lutetium", 175.0, 17, 8, "Kim loại chuyển tiếp" ], // Lanthanide -> Kim loại chuyển tiếp
    [ 72, "Hf", "Hafnium", 178.5, 4, 6, "Kim loại chuyển tiếp" ],
    [ 73, "Ta", "Tantalum", 180.9, 5, 6, "Kim loại chuyển tiếp" ],
    [ 74, "W", "Tungsten", 183.8, 6, 6, "Kim loại chuyển tiếp" ],
    [ 75, "Re", "Rhenium", 186.2, 7, 6, "Kim loại chuyển tiếp" ],
    [ 76, "Os", "Osmium", 190.2, 8, 6, "Kim loại chuyển tiếp" ],
    [ 77, "Ir", "Iridium", 192.2, 9, 6, "Kim loại chuyển tiếp" ],
    [ 78, "Pt", "Platinum", 195.1, 10, 6, "Kim loại chuyển tiếp" ],
    [ 79, "Au", "Gold", 197.0, 11, 6, "Kim loại chuyển tiếp" ],
    [ 80, "Hg", "Mercury", 200.6, 12, 6, "Kim loại chuyển tiếp" ],
    [ 81, "Tl", "Thallium", 204.4, 13, 6, "Kim loại" ],
    [ 82, "Pb", "Lead", 207.2, 14, 6, "Kim loại" ],
    [ 83, "Bi", "Bismuth", 209.0, 15, 6, "Kim loại" ],
    [ 84, "Po", "Polonium", 209.0, 16, 6, "Phi kim" ], // Á kim -> Phi kim
    [ 85, "At", "Astatine", 210.0, 17, 6, "Phi kim" ],
    [ 86, "Rn", "Radon", 222.0, 18, 6, "Khí hiếm" ],
    [ 87, "Fr", "Francium", 223.0, 1, 7, "Kim loại" ],
    [ 88, "Ra", "Radium", 226.0, 2, 7, "Kim loại" ],
    [ 89, "Ac", "Actinium", 227.0, 3, 7, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 90, "Th", "Thorium", 232.0, 4, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 91, "Pa", "Protactinium", 231.0, 5, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 92, "U", "Uranium", 238.0, 6, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 93, "Np", "Neptunium", 237.0, 7, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 94, "Pu", "Plutonium", 244.0, 8, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 95, "Am", "Americium", 243.0, 9, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 96, "Cm", "Curium", 247.0, 10, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 97, "Bk", "Berkelium", 247.0, 11, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 98, "Cf", "Californium", 251.0, 12, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 99, "Es", "Einsteinium", 252.0, 13, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 100, "Fm", "Fermium", 257.0, 14, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 101, "Md", "Mendelevium", 258.0, 15, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 102, "No", "Nobelium", 259.0, 16, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 103, "Lr", "Lawrencium", 262.0, 17, 9, "Kim loại chuyển tiếp" ], // Actinide -> Kim loại chuyển tiếp
    [ 104, "Rf", "Rutherfordium", 267.0, 4, 7, "Kim loại chuyển tiếp" ],
    [ 105, "Db", "Dubnium", 268.0, 5, 7, "Kim loại chuyển tiếp" ],
    [ 106, "Sg", "Seaborgium", 271.0, 6, 7, "Kim loại chuyển tiếp" ],
    [ 107, "Bh", "Bohrium", 270.0, 7, 7, "Kim loại chuyển tiếp" ],
    [ 108, "Hs", "Hassium", 277.0, 8, 7, "Kim loại chuyển tiếp" ],
    [ 109, "Mt", "Meitnerium", 276.0, 9, 7, "Kim loại chuyển tiếp" ],
    [ 110, "Ds", "Darmstadtium", 281.0, 10, 7, "Kim loại chuyển tiếp" ],
    [ 111, "Rg", "Roentgenium", 280.0, 11, 7, "Kim loại chuyển tiếp" ],
    [ 112, "Cn", "Copernicium", 285.0, 12, 7, "Kim loại chuyển tiếp" ],
    [ 113, "Nh", "Nihonium", 286.0, 13, 7, "Kim loại" ],
    [ 114, "Fl", "Flerovium", 289.0, 14, 7, "Kim loại" ],
    [ 115, "Mc", "Moscovium", 290.0, 15, 7, "Kim loại" ],
    [ 116, "Lv", "Livermorium", 293.0, 16, 7, "Phi kim" ],
    [ 117, "Ts", "Tennessine", 294.0, 17, 7, "Phi kim" ],
    [ 118, "Og", "Oganesson", 294.0, 18, 7, "Khí hiếm" ]
];