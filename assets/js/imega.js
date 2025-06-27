function downloadImage(image) {
    const link = document.createElement('a'); 
    link.href = image.src;

    const fileName = image.getAttribute('image-name') || image.alt || 'download';
    link.download = fileName; 

    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
}

document.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.tagName === 'IMG' && (target.classList.contains('downloadable') || target.hasAttribute('downloadable'))) {
        downloadImage(target); 
    }
});




// <!-- Example images with image-name attribute -->
// <img src="files/qr-codes/2.png" class="downloadable" image-name="deilux-oladipupo-isaac-tunji-qr-code" alt="Image 1">
// <img src="files/qr-codes/2.png" downloadable="true" image-name="image2.jpg" alt="Image 2">
