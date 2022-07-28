import fn from "./base.js";
function fn1() {
    let newDiv = document.createElement('div')
    newDiv.style.backgroundColor = 'red'
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    document.body.appendChild(newDiv)
}
export default fn1