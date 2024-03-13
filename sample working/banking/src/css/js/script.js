var dis_wid=document.getElementById("dis_wid");
var dis_dep=document.getElementById("dis_dep");
var dis_bal=document.getElementById("dis_bal");
// dis_bal=0;
//input
var in_wid=document.getElementById("withdraw");
var in_dep=document.getElementById("deposite");
var in_bal=document.getElementById("total");
//withdraw()
var s=0
// document.writeln("hai")
console.log("befor hai ")
function withdraw(){
    var value=in_wid.value;
    if(value <=s){
    s=s-(+value)
    dis_wid.innerText=value;
    dis_bal.innerText=s;
    console.log("in withdraw()"+value)
    console.log((+value));
    console.log(s-(+value));
}
else{
    alert("invalid amount")
}
}
function deposit(){
    var value=in_dep.value;

    // console.log(dis_bal.innerText="0");
    // dis_bal.innerText=1
    s+=(+value)
    dis_bal.innerText=s;
    console.log("dis_bal"+dis_bal.value)
    dis_dep.innerText=value;
    console.log("in deposite()"+value)
}
function balance(){
    console.log(s);
    console.log("in balance()")
}
