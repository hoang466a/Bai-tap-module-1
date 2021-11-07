let a=prompt("nhập vào số a: ");
let b=prompt("nhập vào số b: ");
a=parseInt(a);
b=parseInt(b);
if (a%b==0)
{
    alert("a chia hết cho b");
}
else 
{
    alert("a không chia hết cho b");

}


let age=prompt("nhập tuổi học sinh: ");

age=parseInt(age);
if(age<15)
{ alert("Học sinh đó không đủ điều kiện vào lớp 10");}
else
{alert("Học sinh đó đủ điều kiện vào lớp 10");}

let sn0=prompt("nhập vào số nguyên muốn kiểm tra âm hay dương: ");
sn0=parseInt(sn0);
if(sn0>0)
{
document.writeln("số nguyên nhập vào lớn hơn 0");
document.writeln("<br>");
}
else if(sn0<0)
{
document.writeln("số nguyên nhập vào nhỏ hơn 0");
}

let sn1=prompt("nhập vào số nguyên số 1: ");
let sn2=prompt("nhập vào số nguyên số 2: ");
let sn3=prompt("nhập vào số nguyên số 3: ");
sn1=parseInt(sn1);
sn2=parseInt(sn2);
sn3=parseInt(sn3);
alert("giá trị lớn nhất trong 3 số nguyên là: "+ Math.max(sn1,sn2,sn3));

let kiemtra=prompt("nhập vào điểm kiểm tra: ");
let giuaki=prompt("nhập vào điểm giữa kì: ");
let cuoiky=prompt("nhập vào điểm cuối kỳ: ");
kiemtra=parseInt(kiemtra);
giuaki=parseInt(giuaki);
cuoiky=parseInt(cuoiky);
let trungbinh=(kiemtra+giuaki+cuoiky)/3;
if(trungbinh>=9)
{
alert("học sinh đạt hạng A!");
}
else if(trungbinh>=7)
{
    alert("học sinh đạt hạng B!");
}
else if(trungbinh>=5)
{
    alert("học sinh đạt hạng C!");
}
else
{
    alert("học sinh đạt hạng D!");
}

let hoahong=prompt("nhập vào doanh số bán hàng của bạn (VNĐ): ");
hoahong=parseInt(hoahong);
if (hoahong>500000)
{
    alert("hoa hồng bạn nhận dc là 9% tương đương với: "+hoahong*(9/100)+" VND");
}
else if (hoahong>=100000)
{
    alert("hoa hồng bạn nhận dc là 5% tương đương với: "+hoahong*(5/100)+" VND");
}
else if(hoahong>0)
{
    alert("hoa hồng bạn nhận dc là 2% tương đương với: "+hoahong*(2/100)+" VND");
}

let phutgoi=prompt("Nhập vào số phút gọi của b (phút): ");
phutgoi=parseInt(phutgoi);
alert("cước điện thoại của bạn phải trả là (VND): "+ phutgoi*870+" VND");
