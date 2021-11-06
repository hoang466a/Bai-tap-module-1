function tinh(value)
{
document.getElementById("cal").value+=value;
}

function reset()
{
document.getElementById("cal").value="";
}
function calculator()
{
    let flag=document.getElementById("cal").value;
    document.getElementById("cal").value=eval(flag);   
}