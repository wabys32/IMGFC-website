document.getElementById("copyright_text").innerHTML = "© " + new Date().getFullYear() + " I make games for comments";

function changeClassElementColor(col, el){
    const els = document.querySelectorAll(el);
    els.forEach(element => {
        element.style.backgroundColor = col;
    });
}

var dark_mode = 1;

if(localStorage.getItem("dark_mode") == null){
    localStorage.setItem("dark_mode", 1);
}else{
    dark_mode = localStorage.getItem("dark_mode");
}

console.log(localStorage.getItem("dark_mode") + " "+ dark_mode)


function switchToDarkTheme() {
  location.reload();
  dark_mode = 1;
    localStorage.setItem("dark_mode", 1)
    console.log(localStorage.getItem("dark_mode") + " "+ dark_mode)
}

function switchToLightTheme() {
    const elementsToStyle = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a');
    elementsToStyle.forEach(element => {
        element.style.color = 'black';
    });
    
    changeClassElementColor('white', '.header, .navbar, .ex-basic-2, .spinner-wrapper');
    changeClassElementColor('#eeeeee', '.dropdown-menu, .footer, .copyright, .ex-basic-1, .bounce1, .bounce2, .bounce3')

    var l = document.getElementById("logotype1");
    l.setAttribute("src", "images/logo_light.png")


    const els = document.querySelectorAll("navbar-toggler");
    els.forEach(element => {
        element.style.color = 'black';
    });

    document.getElementById("themeSwitcher").style.backgroundColor = "black";
    document.getElementById("themeSwitcherIcon").setAttribute("src", "images/sun_d.png")
    dark_mode = 0;
    localStorage.setItem("dark_mode", 0)
    console.log(localStorage.getItem("dark_mode") + " "+ dark_mode)

    if(document.getElementById("title_text") != null){
        document.getElementById("title_text").style.color = "white";
    }
    if(document.getElementById("cards") != null){
        document.getElementById("cards").style.backgroundColor = "#eeeeee";
    }
    
}

function switchTheme(){
    if(dark_mode == 1){
        switchToLightTheme();
    }else{
        switchToDarkTheme();
    }
}

if(localStorage.getItem("dark_mode") == 0){
    switchToLightTheme()
}
