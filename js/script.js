let btn = document.querySelector('.header-burger');
let menuBtn = document.querySelector('.menu');
let link = document.querySelector('.menu-items');
let list = document.querySelectorAll('.menu-link');
let log = document.querySelector('.header-logo');
console.log(log);

btn.addEventListener('click',function(){
    menuBtn.classList.toggle('active');
    btn.classList.toggle('active');
    link.classList.toggle('active');
    log.classList.toggle('active');
        for(let i = 0; i <list.length; i++){
            let li = list[i].classList.toggle('active');
        }
    
})


const sob = window.addEventListener('resize',function(){
    const width=document.body.clientWidth;
    
    if (width > 800){
        menuBtn.classList.remove('active');
        btn.classList.remove('active');
        link.classList.remove('active');
        log.classList.remove('active');
        for(let i = 0; i <list.length; i++){
            let li = list[i].classList.remove('active');
        }
        
    }
});


//-------------------------------------------------

let show = function(state){
    document.getElementById('modalForm').style.display = state;
    document.getElementById('filter').style.display = state;
}

//----------------------------


let vk = document.querySelector('.vk1');
let tel = document.querySelector('.vk2');
let vai = document.querySelector('.vk3');

vk.addEventListener('click',() => alert('Просим прощения, адаптив временно не работает'));
tel.addEventListener('click',() => alert('Просим прощения, адаптив временно не работает'));
vai.addEventListener('click',() => alert('Просим прощения, адаптив временно не работает'));


//---------------------------------------

let activ = 0;

const blockOne = document.querySelectorAll('.one');

document.getElementById('btn-activ').onclick = () =>{
    blockOne[activ].classList.remove('activ');
    if (activ + 1 == blockOne.length){
        activ = 0;
    }
    else{
        activ++;
    }
    blockOne[activ].classList.add('activ');
}
