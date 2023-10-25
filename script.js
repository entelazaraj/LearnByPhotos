function previewImage(event, imageId) {
    var fileInput = event.target;
    var imagePreview = document.getElementById(imageId);
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'inline';
    };

    reader.readAsDataURL(file);
}

function readText() {
    var textInput = document.getElementById('textInput');
    var text = textInput.value;
    var speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
