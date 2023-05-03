let greeting = 'Hey there!'; // Global variable
let btn = document.querySelector('.btn')

function games(){
    let title = 'Zelda'; // Local variable
    console.log(title);
}

btn.addEventListener('click', function(){
    console.log('Clicou!');
})

games();