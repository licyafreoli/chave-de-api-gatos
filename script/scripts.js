const botao = document.getElementById('botao');
const closeButton = document.getElementById('closeButton');
const catImagesContainer = document.getElementById('catImages');

botao.addEventListener('click', fetchCatImages);
closeButton.addEventListener('click', closeCatImages);

function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
    .then(response => {
        if (!response.ok) throw new Error('A solicitação não foi bem-sucedida.');
        return response.json();
    })
    .then(data => {
        catImagesContainer.innerHTML = '';
        data.forEach(cat => {
            const img = document.createElement('img');
            img.src = cat.url;
            img.alt = 'imagem de gato';
            catImagesContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function closeCatImages() {
    catImagesContainer.innerHTML = '';
}
