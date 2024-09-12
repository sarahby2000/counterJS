//set intials
let count = 0

let btns = document.querySelectorAll('.btn'),
    decrease = document.querySelector('.decrease'),
    reset = document.querySelector('.reset'),
    increase = document.querySelector('.increase'),
    value = document.querySelector('.value')
    console.log(value.textContent)

    value.textContent =count

btns.forEach((btn)=>{
    btn.addEventListener('click', clickEvent)
})
function clickEvent(e){
const style =e.currentTarget.classList
console.log(style)
if(style.contains('increase')){
    count++;
}
else if(style.contains('decrease')){
    count--
}
else{
    count=0
}
if(count>0){
    value.style.color='green'
}
if(count<0){
    value.style.color='red'
}
if(count===0){
    value.style.color='black'
}
value.textContent =count
console.log(value)

}