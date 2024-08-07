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
const card1 = document.getElementById('servico1-1')
const card2 = document.getElementById('servico2-2')
const card3 = document.getElementById('servico3-3')
const card4 = document.getElementById('servico4-4')
const card5 = document.getElementById('servico5-5')
const card6 = document.getElementById('servico6-6')
const card7 = document.getElementById('servico7-7')
const card8 = document.getElementById('servico8-8')
const card9 = document.getElementById('servico9-9')
const back_button1 = document.getElementById('box-seta1')
const back_button2 = document.getElementById('box-seta2')
const back_button3 = document.getElementById('box-seta3')
const back_button4 = document.getElementById('box-seta4')
const back_button5 = document.getElementById('box-seta5')
const back_button6 = document.getElementById('box-seta6')
const back_button7 = document.getElementById('box-seta7')
const back_button8 = document.getElementById('box-seta8')
const back_button9 = document.getElementById('box-seta9')
const icons = document.getElementById('icons')


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
    card1.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open2.addEventListener('click', ()=>{
    card2.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open3.addEventListener('click', ()=>{
    card3.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open4.addEventListener('click', ()=>{
    card4.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open5.addEventListener('click', ()=>{
    card5.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open6.addEventListener('click', ()=>{
    card6.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open7.addEventListener('click', ()=>{
    card7.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open8.addEventListener('click', ()=>{
    card8.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

serv_open9.addEventListener('click', ()=>{
    card9.classList.add('open_detail-1')
    icons.classList.add('icons-close')
})

back_button1.addEventListener('click', ()=>{
    card1.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button2.addEventListener('click', ()=>{
    card2.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button3.addEventListener('click', ()=>{
    card3.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button4.addEventListener('click', ()=>{
    card4.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button5.addEventListener('click', ()=>{
    card5.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button6.addEventListener('click', ()=>{
    card6.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button7.addEventListener('click', ()=>{
    card7.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button8.addEventListener('click', ()=>{
    card8.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})

back_button9.addEventListener('click', ()=>{
    card9.classList.remove('open_detail-1')
    icons.classList.remove('icons-close')
})
