let button = document.querySelector('#btn');


function Toogle() {
    let sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle('active')

}
var count = 16
function Plus() {
    count++;
    document.querySelector('#count').style.fontSize = count + 'px'
}
function Minus() {
    if (count > 0) {
        count--;
    }
    document.querySelector('#count').style.fontSize = count + 'px'
}


function Color() {
    let inp = document.getElementById('inp').value;
    console.log(inp);

    var color = document.querySelector('.text h1')
    color.style.color = inp
}



