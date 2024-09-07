// Simuliertes Outfit-Datenbank
const outfits = [
    { id: 1, image: 'outfit1.jpg', name: 'Casual Look' },
    { id: 2, image: 'outfit2.jpg', name: 'Streetwear Style' },
    { id: 3, image: 'outfit3.jpg', name: 'Formal Attire' },
    // Füge hier weitere Outfits hinzu
];

// Funktion zum Generieren eines zufälligen Outfits
function generateOutfit() {
    const randomIndex = Math.floor(Math.random() * outfits.length);
    const outfit = outfits[randomIndex];
    
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = `
        <div class="outfit-item">
            <img src="${outfit.image}" alt="${outfit.name}">
            <h3>${outfit.name}</h3>
        </div>
    `;
}

// Funktion zum Hochladen eines Bildes und Vorhersagen
async function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/predict', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('prediction').innerText = `Vorhersage: ${result.prediction}`;
}

// Event Listener für den Button zum Generieren von Outfits
document.getElementById('generateOutfit').addEventListener('click', generateOutfit);

// Event Listener für den Upload-Button
document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        uploadImage(fileInput.files[0]);
    }
});
