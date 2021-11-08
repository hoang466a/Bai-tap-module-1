
let goodElement=document.getElementById("good");
let fastElement=document.getElementById("fast");
let cheapElement=document.getElementById("cheap");
let good=false;
let fast=false;
let cheap=false;
function myfunction1()
{
    if (goodElement.checked==true)
    {
        if(fastElement.checked==true && cheapElement.checked==true){
            if(fast==true)
                {fastElement.checked=false;}
            else if(cheap==true)
                {cheapElement.checked=false;}
            good=true;}
        else{good=true;
            fast=false;
            cheap=false;}}}

function myfunction3()
{
    if (cheapElement.checked==true)
    {
        if(fastElement.checked==true && goodElement.checked==true){
            if(fast==true)
                {fastElement.checked=false;}
            else if(good==true)
                {goodElement.checked=false;}
            cheap=true}
        else{good=false;
            fast=false;
            cheap=true;}
    }
}

function myfunction2()
{
    if (fastElement.checked==true)
    {
        if(goodElement.checked==true && cheapElement.checked==true){
            if(cheap==true)
                {cheapElement.checked=false;}
            else if(good==true)
                {goodElement.checked=false;}
            fast=true;}
        else{good=false;
            fast=true;
            cheap=false;}
    }
}

    
