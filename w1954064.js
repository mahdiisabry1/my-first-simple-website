
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.card_premierleague')

prev.addEventListener('click', () =>{
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})

document.querySelectorAll('.navbar .active .btn').forEach(click => {
    click.onclick = () => {
        document.querySelector('.thesecondnavbar').style.display = 'block';
    } 
})

document.querySelector('.thesecondnavbar span').onclick = () => {
    document.querySelector('.thesecondnavbar').style.display = 'none';
}
