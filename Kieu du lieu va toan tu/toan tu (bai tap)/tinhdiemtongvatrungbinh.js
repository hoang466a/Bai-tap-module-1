function button()
{
let vatly=document.getElementById("vatly").value;
let hoahoc=document.getElementById("hoahoc").value;
let sinhhoc=document.getElementById("sinhhoc").value;
vatly=parseInt(vatly);
hoahoc=parseInt(hoahoc);
sinhhoc=parseInt(sinhhoc);
let tong=vatly+hoahoc+sinhhoc;    
let trungbinh=(vatly+hoahoc+sinhhoc)/3;
document.getElementById("tong").value = tong;
document.getElementById("trungbinh").value = trungbinh;
}