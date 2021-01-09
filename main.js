
const div = document.querySelector('div');
const counter = ()=>{
let seconds = 1;

function time () {
div.textContent = `You are on this site ${seconds} seconds`
seconds++
}
return time
}
const start = counter()
setInterval(start,1000)