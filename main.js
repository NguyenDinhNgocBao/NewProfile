const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let Plus = $('.plus');
let X = $('#X');
let Phone = $('#phone');

let Main = $('.main');
let Profile = $('#profile');

let check = true
Plus.addEventListener('click', function(e){
    if (check == true){
        Main.style.display = 'none';
        Profile.style.display = 'block';
        check = false;
    }
})
X.addEventListener('click', function(e){
    if (check == false){
        Main.style.display = 'block';
        Profile.style.display = 'none';
        check = true;
    }
})

Phone.addEventListener('click', (e)=>{
    e.preventDefault()
    var link = Phone.getAttribute("href")
    Phone.style.transform = 'translateX(-10px)'
    setTimeout(()=>{
        window.location = link
    },500)
})
