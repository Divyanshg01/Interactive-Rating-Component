const submit = document.querySelector('button');
const rating = document.querySelectorAll('.n');
const num = document.querySelector('span.num');
const rating_section = document.querySelector('.rating')
const thanku__section = document.querySelector('.thanku')
let n;
rating.forEach(element => {
    element.addEventListener('click',(e)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked")
        n = e.target.innerText;

    })
});

submit.addEventListener('click',(e)=>{
    if(n){
        num.innerText = n;
    rating_section.classList.add('hidden')
    thanku__section.classList.remove('hidden')
    }
})