circle = document.querySelectorAll(".circle");;

circle['0'].addEventListener('mouseenter', ()=>{
    circle['0'].classList.add('top_center');
    circle['1'].classList.remove('right_center');
    circle['2'].classList.remove('bottom_center');
    circle['3'].classList.remove('left_center');
})

circle['1'].addEventListener('mouseenter', ()=>{
    circle['1'].classList.add('right_center');
    circle['0'].classList.remove('top_center');
    circle['2'].classList.remove('bottom_center');
    circle['3'].classList.remove('left_center');
})

circle['2'].addEventListener('mouseenter', ()=>{
    circle['2'].classList.add('bottom_center');
    circle['3'].classList.remove('left_center');
    circle['1'].classList.remove('right_center');
    circle['0'].classList.remove('top_center');
})

circle['3'].addEventListener('mouseenter', ()=>{
    circle['3'].classList.add('left_center');
    circle['2'].classList.remove('bottom_center');
    circle['1'].classList.remove('right_center');
    circle['0'].classList.remove('top_center');
})
