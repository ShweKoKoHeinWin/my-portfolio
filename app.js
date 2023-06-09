
// dark Light
let check = document.querySelector('.dark-light-check');
let circle = document.querySelector('.circle');
let darkLightToggler = document.querySelector('.dark-light-toggler');
let body = document.querySelector('body');
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
let darkimg = './images/stars.jpg';
let lightimg = './images/day4.jpg';
let sunimg = './images/sun3.png';
let moonimg = './images/moon.png';
let container = document.querySelector('.container');
let object = document.querySelector('.object');

function checkDarkLight() {
    if(check.checked){
        // dark mode
        body.style.setProperty('--color-white', '#0d0c1d');
        body.style.setProperty('--color-rose', '#FF4500');
        body.style.setProperty('--color-green', '#FFD700');
        body.style.setProperty('--color-dark', '#f5e1c1dc');
        body.style.setProperty('--color-black', 'rgba(255,255,255,0.5)');

        circle.style.left = "unset";
        circle.style.right = "0"

        moon.style.color = "var(--color-green)";

        sun.style.color = "unset";

        body.style.backgroundImage = `url(${darkimg}),linear-gradient(135deg, var(--color-white), var(--color-black))`;

        object.src = moonimg;
        object.style.left = 'min(10%, 50px)';
        object.style.right = 'unset';
    } else {
        // light
        body.style.setProperty('--color-white', '#d2f7e8');
        body.style.setProperty('--color-rose', '#FF4500');
        body.style.setProperty('--color-green', 'orange');
        body.style.setProperty('--color-dark', '#1b1e28');
        body.style.setProperty('--color-black', 'rgba(0,0,0,0.5)');

        circle.style.left = "0";
        circle.style.right = "unset"
        sun.style.color = "var(--color-green)";
        moon.style.color = "unset";
        body.style.backgroundImage = `url(${lightimg}),linear-gradient(135deg, var(--color-white), var(--color-black))`;

        object.src = sunimg;
        object.style.right = 'min(10%, 50px)';
        object.style.left = 'unset';
    }
}
checkDarkLight()
check.addEventListener('change', function() {
    checkDarkLight();
})


// Image Preview
const images = document.querySelectorAll('figure img');
const imagebox = document.querySelector('.imgbox');
const img = document.querySelector('.preview-img');
const closebtn = document.querySelector('.closebtn');
// let imgFrame = document.createElement('div');
// imgFrame.classList.add('imgframe');
// let closebtn = document.createElement('i');
// closebtn.classList.add("fa-solid" ,"fa-rectangle-xmark");
// let img = document.createElement('img');

// imgFrame.appendChild(img);
// imgFrame.appendChild(closebtn);

function showImg() {
    imagebox.style.display = 'block';
    img.src = this.src;
}

function closeImg() {
    imagebox.style.display = "none";
}
closeImg();
closebtn.addEventListener('click', closeImg);

images.forEach(function (img) {
    img.addEventListener('click', showImg)
});