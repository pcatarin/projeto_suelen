const button = document.getElementById('button')
const options2 = document.getElementById('options2')
const overlay = document.getElementById('overlay')
const serv_open1 = document.getElementById('serv1-teste')
const serv_open2 = document.getElementById('serv2-teste')
const serv_open3 = document.getElementById('serv3-teste')
const serv_open4 = document.getElementById('serv4-teste')
const serv_open5 = document.getElementById('serv5-teste')
const serv_open6 = document.getElementById('serv6-teste')
const serv_open7 = document.getElementById('serv7-teste')
const serv_open8 = document.getElementById('serv8-teste')
const serv_open9 = document.getElementById('serv9-teste')
const serv_open10 = document.getElementById('serv10-teste')
const serv_open11 = document.getElementById('serv11-teste')
const serv_open12 = document.getElementById('serv12-teste')
const card1 = document.getElementById('servico1-1')
const card2 = document.getElementById('servico2-2')
const card3 = document.getElementById('servico3-3')
const card4 = document.getElementById('servico4-4')
const card5 = document.getElementById('servico5-5')
const card6 = document.getElementById('servico6-6')
const card7 = document.getElementById('servico7-7')
const card8 = document.getElementById('servico8-8')
const card9 = document.getElementById('servico9-9')
const card10 = document.getElementById('servico10-10')
const card11 = document.getElementById('servico11-11')
const card12 = document.getElementById('servico12-12')
const back_button1 = document.getElementById('box-seta1')
const back_button2 = document.getElementById('box-seta2')
const back_button3 = document.getElementById('box-seta3')
const back_button4 = document.getElementById('box-seta4')
const back_button5 = document.getElementById('box-seta5')
const back_button6 = document.getElementById('box-seta6')
const back_button7 = document.getElementById('box-seta7')
const back_button8 = document.getElementById('box-seta8')
const back_button9 = document.getElementById('box-seta9')
const back_button10 = document.getElementById('box-seta10')
const back_button11 = document.getElementById('box-seta11')
const back_button12 = document.getElementById('box-seta12')
const icons = document.getElementById('icons')

//funcionamento dos depoimentos
let selection = document.querySelectorAll('.radio-btn')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let size = selection.length
let marcado1 = document.getElementById('label1')
let marcado2 = document.getElementById('label2')

let count = 1
document.getElementById('radio1').checked = true;

setInterval(function(){
    nextImage()
},4000)

function nextImage(){
    count++;
    if(count>6){
        count=1;
    }
    document.getElementById('radio'+count).checked = true;
}

selection[0].checked = true



/*for(i = 0 ; i < check.length ; i++){
    if(i < check.length){
        i++
        console.log(check[i])
        
    }
}*/


next.onclick = () => {
    
}

prev.onclick = () => { 
    
}




 //final do funcionamento dos depoimentos

function handleClick() {
    button.classList.toggle('active')
    options2.classList.toggle('open-options2')
    overlay.classList.toggle('overlay-open')
}

overlay.addEventListener('click', ()=>{
    options2.classList.remove('open-options2')
    button.classList.remove('active')
    overlay.classList.remove('overlay-open')
})

options2.addEventListener('click', ()=>{
    options2.classList.remove('open-options2')
    button.classList.remove('active')
    overlay.classList.remove('overlay-open')
})

serv_open1.addEventListener('click', ()=>{
    //card1.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card1.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card1.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open2.addEventListener('click', ()=>{
    //card2.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card2.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card2.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open3.addEventListener('click', ()=>{
    //card3.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card3.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card3.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open4.addEventListener('click', ()=>{
    //card4.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card4.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card4.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open5.addEventListener('click', ()=>{
    //card5.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card5.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card5.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open6.addEventListener('click', ()=>{
    //card6.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card6.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card6.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open7.addEventListener('click', ()=>{
    //card7.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card7.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card7.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open8.addEventListener('click', ()=>{
    //card8.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card8.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card8.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open9.addEventListener('click', ()=>{
    //card9.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card9.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card9.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open10.addEventListener('click', ()=>{
    //card10.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card10.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card10.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open11.addEventListener('click', ()=>{
    //card11.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card11.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card11.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

serv_open12.addEventListener('click', ()=>{
    //card11.classList.add('open_detail-1')
    //icons.classList.add('icons-close')
    card12.style.animationName = 'entrar'
    icons.style.animationName = 'sair'
    setTimeout(() => {
        card12.classList.add('open_detail-1')
        icons.classList.add('icons-close')
    },300)
})

back_button1.addEventListener('click', ()=>{
    //card1.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card1.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card1.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button2.addEventListener('click', ()=>{
    //card2.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card2.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card2.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button3.addEventListener('click', ()=>{
    //card3.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card3.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card3.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button4.addEventListener('click', ()=>{
    //card4.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card4.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card4.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button5.addEventListener('click', ()=>{
    //card5.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card5.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card5.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button6.addEventListener('click', ()=>{
    //card6.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card6.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card6.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button7.addEventListener('click', ()=>{
    //card7.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card7.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card7.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button8.addEventListener('click', ()=>{
    //card8.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card8.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card8.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button9.addEventListener('click', ()=>{
    //card9.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card9.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card9.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button10.addEventListener('click', ()=>{
    //card10.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card10.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card10.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button11.addEventListener('click', ()=>{
    //card11.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card11.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card11.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

back_button12.addEventListener('click', ()=>{
    //card11.classList.remove('open_detail-1')
    //icons.classList.remove('icons-close')
    card12.style.animationName = 'sair2'
    icons.style.animationName = 'entrar2'
    setTimeout(() => {
        card12.classList.remove('open_detail-1')
        icons.classList.remove('icons-close')
    },700)
})

//funcionamento do scroll suave

let menulinks = document.querySelectorAll('#options2 a[href^="#"]')
let menulinks2 = document.querySelectorAll('#menu_desktop a[href^="#"]')
let btntop = document.querySelectorAll('#topo a[href^="#"]')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop, behavior:"smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target)-70;
    nativeScroll(distanceFromTheTop);
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop);
}

function scrollToSectionTop(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
}

menulinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})
menulinks2.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})
btntop.forEach((link) => {
    link.addEventListener('click', nativeScroll2)
})

console.log(btntop)