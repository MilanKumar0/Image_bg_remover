// Variables to store the uploaded image URL
let imageURL;

// Function to handle image upload
function handleUpload() {
    const fileInput = document.getElementById('file-input');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append('size', 'auto');

    // Replace 'your-api-key' with your actual API key from remove.bg
    const apikey = "4Xcaaoqegt5ioxEs7tByoLcs";

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'post',
        headers: {
            'X-Api-Key': apikey,
        },
        body: formData
    })
    .then(function(response) {
        return response.blob();
    })
    .then(function(blob) {
        const url = URL.createObjectURL(blob);
        imageURL = url;
        const imgElement = document.getElementById('output-image');
        imgElement.src = url; // Set the source of the image element
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

// Function to handle image download
function downloadFile() {
    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;
    anchorElement.download = 'removed_bg.png';
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(anchorElement);
}
