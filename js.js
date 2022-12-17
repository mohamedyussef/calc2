let add=document.getElementById('add');
let sub=document.getElementById('sub');
let mult=document.getElementById('mult');
let div=document.getElementById('div');
let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let six=document.getElementById('six');
let seven=document.getElementById('seven');
let eight=document.getElementById('eight');
let nune=document.getElementById('nune');
let zero=document.getElementById('zero');
let dot=document.getElementById('dot');
let empty=document.getElementById('empty');
let equal=document.getElementById('equal');
let screen=document.getElementById('screen');
let arr=[];
let v1="";
let v2="";
let sum=0;
let op='';
let t=0;


one.onclick=()=>{
    arr.push("1");
    console.log(arr);
  screen.innerHTML+="1";
}
two.onclick=()=>{
    arr.push("2");
    console.log(arr);
    screen.innerHTML+="2";
}
three.onclick=()=>{
    arr.push("3");
    console.log(arr);
    screen.innerHTML+="3";
}
four.onclick=()=>{
    arr.push("4");
    console.log(arr);
    screen.innerHTML+="4";
}
five.onclick=()=>{
    arr.push("5");
    console.log(arr);
    screen.innerHTML+="5";
}
six.onclick=()=>{
    arr.push("6");
    console.log(arr);
    screen.innerHTML+="6";
}
seven.onclick=()=>{
    arr.push("7");
    console.log(arr);
    screen.innerHTML+="7";
}
eight.onclick=()=>{
    arr.push("8");
    console.log(arr);
    screen.innerHTML+="8";
}
nune.onclick=()=>{
    arr.push("9");
    console.log(arr);
    screen.innerHTML+="9";
}
zero.onclick=()=>{
    arr.push("0");
    console.log(arr);
    screen.innerHTML+="0";
}
dot.onclick=()=>{
    arr.push(".");
    console.log(arr);
    screen.innerHTML+=".";
}
empty.onclick=()=>{
    v1="";
    v2="";
    sum=0;
    op='';
    arr=[];
    console.clear();
    screen.innerHTML="";
}

add.onclick=()=>{
    op='+';
    screen.innerHTML+="+";
    for(let i=0;i<arr.length;i++){
        v1+=arr[i];
    }
    arr=[];
    console.log(`array ${arr}  + v1 ${v1}`);
}
sub.onclick=()=>{
    op='-';
    screen.innerHTML+="-";
    for(let i=0;i<arr.length;i++){
        v1+=arr[i];
    }
    arr=[];
    console.log(`array ${arr}  + v1 ${v1}`);
}
mult.onclick=()=>{
    op='*';
    screen.innerHTML+="×";
    for(let i=0;i<arr.length;i++){
        v1+=arr[i];
    }
    arr=[];
    console.log(`array ${arr}  + v1 ${v1}`);
}
div.onclick=()=>{
    op='/';
    screen.innerHTML+="÷";
    for(let i=0;i<arr.length;i++){
        v1+=arr[i];
    }
    arr=[];
    console.log(`array ${arr}  + v1 ${v1}`);
}

equal.onclick=()=>{
    for(let i=0;i<arr.length;i++){
        v2+=arr[i];
    }
    let temp1=Number(v1);
    let temp2=Number(v2);
    if(op==='+'){
        sum=temp1+temp2
        console.log(sum);
    }else if(op==='-'){
        sum=temp1-temp2
        console.log(sum);
    }
    else if(op==='*'){
        sum=temp1*temp2
        console.log(sum);
    }
    else if(op==='/'){
        sum=temp1/temp2
        console.log(sum);
    }
    screen.innerHTML=`=${sum}`;
    arr=[];
    console.log(`array ${arr}  + v2 ${v2}`);
}