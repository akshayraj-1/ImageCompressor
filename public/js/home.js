const form = document.querySelector("#upload-form");
const btnUpload = document.querySelector("#btn-upload");
const inputImage = document.querySelector("#inp-image");
const dropArea = document.querySelector("#drop-area");

btnUpload.addEventListener("click", () => {
    inputImage.click();
});

const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
};

["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false)
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false)
});

dropArea.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length === 1 && isValidFileType(files[0])) {
        uploadImage(files[0]);
    } else {
        alert('Please drop a single valid image file.');
    }
}, false);

function isValidFileType(file) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return validTypes.includes(file.type);
}

dropArea.addEventListener("drop", (e) => {
    inputImage.files = e.dataTransfer.files;
    uploadImage();
});




inputImage.addEventListener("change", (e) => {
    uploadImage(e.target.files[0]);
});

const uploadImage = (file) => {
    const formData = new FormData(form);
    formData.set("image", file);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    fetch(form.action, {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Image uploaded successfully!", data);
        })
        .catch(error => {
            console.error("Image upload failed!", error);
        });
}