const counter = ()=>{
let seconds = 1;

function time () {
document.body.textContent = `you are on the site ${seconds}`
seconds++
}
return time
}
const start = counter()
setInterval(start,1000)