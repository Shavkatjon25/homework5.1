let a1 =document.querySelector(".bir");
let Asos=document.querySelector(".asos");
let x="";
a1.onclick=function(){
if (Asos.textContent==0){Asos.textContent=1}else{Asos.textContent=Asos.textContent+1}
}
let a2=document.querySelector(".ikki");
a2.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=2}else{Asos.textContent=Asos.textContent+2}
    }
let a3 = document.querySelector(".uch");
a3.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=3}else{Asos.textContent=Asos.textContent+3}
    }
let a4=document.querySelector(".tort");
a4.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=4}else{Asos.textContent=Asos.textContent+4}
    }
let a5=document.querySelector(".besh");
a5.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=5}else{Asos.textContent=Asos.textContent+5}
    }
let a6=document.querySelector(".olti");
a6.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=6}else{Asos.textContent=Asos.textContent+6}
    }
let a7=document.querySelector(".yetti");
a7.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=7}else{Asos.textContent=Asos.textContent+7}
    }
let a8=document.querySelector(".sakkiz");
a8.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=8}else{Asos.textContent=Asos.textContent+8}
    }
let a9=document.querySelector(".toqqiz");
a9.onclick=function(){
    if (Asos.textContent==0){Asos.textContent=9}else{Asos.textContent=Asos.textContent+9}
    }
let a0=document.querySelector(".nol");
a0.onclick=function(){
    Asos.textContent=Asos.textContent+0
    }
let yoq=document.querySelector(".och")
yoq.onclick=function(){
    Asos.textContent=0
    }
let q=document.querySelector(".plus");
q.onclick=function(){
    x=x+Asos.textContent+"+"
    Asos.textContent=0
    }
let m=document.querySelector(".mitus");
m.onclick=function(){
     x=x+Asos.textContent+"-"
     Asos.textContent=0
     }
let k=document.querySelector(".kop");
k.onclick=function(){
     x=x+Asos.textContent+"*"
     Asos.textContent=0
  }

let b=document.querySelector(".bol");
b.onclick=function(){
     x=x+Asos.textContent+"/"
    Asos.textContent=0
     }

let t=document.querySelector(".teng");
t.onclick=function(){
    x=x+Asos.textContent;
    x=eval(x);
    Asos.textContent=x;
    x=0;
    }
let oq=document.querySelector(".qo")
oq.onclick=function(){
    Asos.textContent=" "
    x=0
}
let n=document.querySelector(".nuxta");
n.onclick=function(){
    Asos.textContent=Asos.textContent+"."
}