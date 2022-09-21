const text = document.querySelector("h4")
const button = document.querySelector("button")
const form = document.querySelector("form")
const input = document.querySelector("input")

let now = new Date().toLocaleDateString('en-us', { weekday:"long"});
let today = new Date().getDay()


button.addEventListener("click", (e) => {
    e.preventDefault();
    text.innerText = `Hello ${input.value}! Today is ${now}. Only ${5-today} days left until weekend! 🚀🚀🚀`
    if(today === 0 || today === 6){
        text.innerText = `Hello ${input.value}! Today is ${now}. It's a weekend day! Have fun! 🚀🚀🚀`
    } if(5-today === 0){
        text.innerText = `Hello ${input.value}! Today is ${now}. Tomorrow is weekend! 🚀🚀🚀`
    }
})