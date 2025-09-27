const uploadBox =  document.querySelector('.upload-box'),
    previewImg =  uploadBox.querySelector('img'),
    fileInput =  uploadBox.querySelector('input'),
    widthInput = document.querySelector('.width input'),
    heightInput = document.querySelector('.height input'),
    ratioInput = document.querySelector('.ratio input'),
    qualityInput = document.querySelector('.quality input'),
    downloadBtn = document.querySelector('.download-btn')


let ogImageRatio;


const loadFile = (e) => {
    const file = e.target.files[0]

    if(!file) return;



    previewImg.src = URL.createObjectURL(file);


    previewImg.addEventListener('load', () => {
        widthInput.value  = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight
        document.querySelector('.wrapper').classList.add('active')
    })
}