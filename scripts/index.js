const button = document.getElementById('button')
const options2 = document.getElementById('options2')
const overlay = document.getElementById('overlay')

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



