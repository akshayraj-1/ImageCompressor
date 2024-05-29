const form = document.querySelector("form");
const btnUpload = document.querySelector("#btnUpload");
const inputImage = document.querySelector("#inputImage");

btnUpload.addEventListener("click", () => {
    inputImage.click();
});

inputImage.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
        const formData = new FormData(form);
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
});