let doc=prompt("nhập vào số độ C bạn muốn đổi sang độ F: ");
doc=parseInt(doc);
let dof=doc*(9/5)+32;
alert("kết quả sau khi đổi: "+dof+" F");


let m=prompt("nhập vào số m: ");
m=parseInt(m);
let feet=m*3.2808;
alert("kết quả sau khi đổi: "+feet+" feet");


let canh_a=prompt("nhập vào cạnh a: ");
canh_a=parseInt(canh_a);
let s_Hinhvuong=canh_a*canh_a;
alert("diện tích hình vuông là: "+ s_Hinhvuong);


let chieu_dai=prompt("nhập vào chiều dài chữ nhật: ");
let chieu_rong=prompt("nhập vào chiều rộng chữ nhật: ");
chieu_dai=parseInt(chieu_dai);
chieu_rong=parseInt(chieu_rong);
let s_Hinh_chunhat=chieu_dai*chieu_rong;
alert("diện tích hình chữ nhật là: "+ s_Hinh_chunhat);


let chieu_dai1=prompt("nhập vào 1 cạnh kề tam giác vuông: ");
let chieu_dai2=prompt("nhập vào cạnh kề còn lại tam giác vuông: ");
chieu_dai1=parseInt(chieu_dai1);
chieu_dai2=parseInt(chieu_dai2);
let s_Tam_giac_vuong=chieu_dai1*chieu_dai2*(1/2);
alert("diện tích tam giác vuông là: "+ s_Tam_giac_vuong);


let so_a=prompt("chương trinh tính phương trình bậc 1 có dạng ax+b=0. Mời nhập vào số a: ");
let so_b=prompt("Mời nhập vào số b: ");
so_a=parseInt(so_a);
so_b=parseInt(so_b);
if(so_a==0)
{if(so_b==0)
    {alert("Phương trình có vô số nghiệm!");}
    else
    {alert("Phương trình vô nghiệm!");}
}
else if(so_a!=0 )
{
alert("Phương trình có nghiệm là:"+ (-so_b/so_a));
}


let so_a1=prompt("chương trình tính phương trình bậc 2 có dạng ax^2+bx+c=0 (a!=0). Mời nhập vào số a: ");
let so_b1=prompt("Mời nhập vào số b: ");
let so_c=prompt("Mời nhập vào số c: ");
so_a1=parseInt(so_a1);
so_b1=parseInt(so_b1);
so_c=parseInt(so_c);
let delta=(so_b1*so_b1)-4*so_a1*so_c;
if(delta<0)
{
    alert("Phương trình vô nghiệm!");
}
else if(delta=0)
{
    let nghiem_kep=(-so_b1)/(2*so_a1);
    alert("Phương trình có nghiệm kép: x1=x1=" + nghiem_kep);
}
else
{
    let nghiem_1=(-so_b1+Math.sqrt(delta))/(2*so_a1);
    let nghiem_2=(-so_b1-Math.sqrt(delta))/(2*so_a1);
    alert("Phương trình có nghiệm 1: x1" + nghiem_1);
    alert("Phương trình có nghiệm 2: x2" + nghiem_2);
}

let tuoi=prompt("Chương trình kiểm tra tuổi của một người. Nhập vào số tuổi muốn kiểm tra: ");
tuoi=parseInt(tuoi);
if(tuoi<0 || tuoi>120)
{
    alert("Số tuổi không phải tuổi của con người!");
}
else
{
    alert("Số tuổi là tuổi của con người!");
}

let canh_a1=prompt("chương trình kiểm tra xem 3 cạnh nhập vào có tạo thành tam giác hay không, nhập vào cạnh a:");
let canh_b1=prompt("nhập vào cạnh b: ");
let canh_c1=prompt("nhập vào cạnh c: ");
canh_a1=parseInt(canh_a1);
canh_b1=parseInt(canh_b1);
canh_c1=parseInt(canh_c1);
if(canh_a1<=0||canh_b1<=0||canh_c1<=0)
{alert("3 cạnh không hợp thành một tam giác!");}
else if(canh_a1+canh_b1<canh_c1||canh_b1+canh_c1<canh_a1||canh_a1+canh_c1<canh_b1)
{alert("3 cạnh không hợp thành một tam giác!");}
else 
{alert("3 cạnh hợp thành một tam giác!");}


let so_dien=prompt("Nhập vào số điện cần tính: ");
so_dien=parseInt(so_dien);
alert("số điện cần trả là: " + (so_dien*3000)+" VND" )

let so_tien=prompt("Nhập vào số tiền cần tính thu nhập cá nhân (VND): ");
so_tien=parseInt(so_tien);
let TNCN;
if(so_tien<=5000000)
{
    TNCN=so_tien*(5/100);
}
else if(so_tien<=10000000)
{
    TNCN=so_tien*(10/100)
}
else if(so_tien<=18000000)
{
    TNCN=so_tien*(15/100)
}
alert("thuế thu nhập cá nhân có giá trị là: "+TNCN);

let gui_ngan_hang=prompt("Nhập vào số tiền ban đầu cần tính lãi ngân hàng (VND): ");
let thang_cho_vay=prompt("số tháng vay (tháng): ");
let lai_suat=prompt("lãi suất hàng tháng là (%): ");
gui_ngan_hang=parseInt(gui_ngan_hang);
thang_cho_vay=parseInt(thang_cho_vay);
lai_suat=parseInt(lai_suat);
let so_tien2=gui_ngan_hang*Math.pow((1+((lai_suat)/100)),thang_cho_vay);
alert("Số tiền "+gui_ngan_hang+" trong "+thang_cho_vay+" với lãi suất "+lai_suat+" hàng tháng là "+so_tien2+" VND"  );
