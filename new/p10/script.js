const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const styleBody = getComputedStyle(document.body);
const backgroundColor = styleBody.backgroundColor;
console.log(backgroundColor);

for (let p of ps) {
    p.style.backgroundColor = "pink";
    p.style.color = '#ffffff';
    console.log(p);
}