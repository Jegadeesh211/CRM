let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
var adminbox1=document.getElementById('adminbox1');
var adminbox2=document.getElementById('adminbox2');
var form1=document.getElementById('form');
var formtable=document.getElementById("formtable")
var back1=document.getElementById('back');
var callog=document.getElementById('calllog');
var sidebar=document.getElementById("sidenav")
var menu=document.getElementById("menu")

// document.addEventListener("submit", myFunction());
function myFunction(){
    menu.style.display='none'
    adminbox1.style.display='none'
    adminbox2.style.display='none'
    callog.style.display='none'
    form1.style.display='grid'
    formtable.style.display='flex'
    back1.style.display='inline-block'
}


document.addEventListener("click", back());
function back(){
    adminbox1.style.display='flex'
    adminbox2.style.display='flex'
    callog.style.display=''
    form1.style.display='none'
    back1.style.display='none'
    menu.style.display='flex'
    formtable.style.display='none'



    
}

let username = id("fullName"),
    lastname = id("lastname"),
    title = id("title"),
    email0 = id("email0"),
    phone0=id("Phone0"),
    fax=id("Fax"),
    mobile=id("mobile"),
    Leadsource=id('Leadsource'),
    Leadstatus=id("Leadstatus"),
    Industry=id("Industry"),
    Rating=id("Rating"),
    Secondary=id("Secondary"),
    Twitter=id("Twitter"),
    Street=id('Street'),
    City =id("city"),
    State=id('State'),
    Zip=id('Zip')
    password = id("password"),
    form = id("form"),
    
    errorMsg = classes("error"),
    errorMsg1 = classes("error1"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault(e)
    console.log("Hello")
    engine(username, 0, "Username cannot be blank");
    engine(lastname, 1, "Username cannot be blank");
    engine(title, 2, "Username cannot be blank");
    engine(email, 3, "Email cannot be blank");
    engine(Phone, 4, "Username cannot be blank");
    engine(fax, 5, "Username cannot be blank");
    engine(mobile, 6, "Email cannot be blank");
    engine(Leadsource, 7, "Username cannot be blank");
    engine(Leadstatus, 8, "Username cannot be blank");
    engine(Industry, 9, "Username cannot be blank");
    engine(Employees,10, "Username cannot be blank");
    engine(Rating,11, "Username cannot be blank");
    engine(Secondary,12, "Username cannot be blank");
    engine(Twitter,13, "Username cannot be blank");
    engine(Street,14, "Username cannot be blank");
    engine(City,15, "Username cannot be blank");
    engine(State,16, "Username cannot be blank");
    engine(Zip,17, "Username cannot be blank");



    // engine(password, 3, "Password cannot be blank");
});

let engine = (id, serial, message) => {

    if (id.value.trim() == "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        
     
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
       
        button= (id,serial,message) => {
            logout.style.display="flex";
        } 
    }
    else {
        errorMsg[serial].innerHTML = "";

        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        button= (id,serial,message) => {
            model.style.display="flex";
        }
    }
}
// * pop*//
var show=document.getElementById("mybtn");
var close=document.getElementById("closebtn");
var model=document.getElementById("modelCon");
var sumb=document.getElementById("btn")
var logout=document.getElementById("faill")
// var close1=document.getElementById("log")




 // add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".container1");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


var show=document.getElementById("mybtn");
var close=document.getElementById("closebtn");
var model=document.getElementById("modelCon");
 
showpop = () => {
    model.style.display="flex";
}
 let closepop=()=>{
    model.style.display="none"
 }



//  form valid 

 
// crud

 
 
 
 


 