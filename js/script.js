document.addEventListener('DOMContentLoaded', () => {
    // Hitung Luas Segitiga
    document.getElementById('bon').addEventListener('click', (event) => {
        event.preventDefault();
        const panjangalas = parseFloat(document.getElementById('panjangalas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        if (!isNaN(panjangalas) && !isNaN(tinggi) && panjangalas > 0 && tinggi > 0) {
            const luas = 0.5 * panjangalas * tinggi;
            document.getElementById('ros').textContent = `Luas segitiga: ${luas}`;
        } else {
            document.getElementById('ros').textContent = 'Harap masukkan nilai yang valid untuk panjang alas dan tinggi.';
        }
    });

    // Reset Luas Segitiga
    document.getElementById('bol').addEventListener('click', () => {
        document.getElementById('panjangalas').value = '';
        document.getElementById('tinggi').value = '';
        document.getElementById('ros').textContent = 'Luas segitiga';
    });

    // Hitung Keliling Segitiga
    document.getElementById('btn').addEventListener('click', (event) => {
        event.preventDefault();
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);

        if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
            const keliling = sideA + sideB + sideC;
            document.getElementById('segitiga').textContent = `Keliling segitiga: ${keliling}`;
        } else {
            document.getElementById('segitiga').textContent = 'Harap masukkan nilai yang valid untuk semua sisi.';
        }
    });

    // Reset Keliling Segitiga
    document.getElementById('ben').addEventListener('click', () => {
        document.getElementById('sideA').value = '';
        document.getElementById('sideB').value = '';
        document.getElementById('sideC').value = '';
        document.getElementById('segitiga').textContent = 'Keliling segitiga';
    });
});
