//////////////// 1 //////////////////

let e1=document.getElementById('b1');

e1.onmouseover = function() {
    e1.style.fontWeight='bold';
    e1.style.backgroundColor='yellow';
}


/////////////// 2 //////////////////

let e2=document.getElementById('s1');
console.log(e2);

let s1=document.getElementById('flagImg');
        s1.setAttribute('src',"../assets/Flag_of_Jordan.svg.png");
        s1.setAttribute('alt',"Jordan flag");
        s1.setAttribute('width',"200");
        s1.setAttribute('width',"100");

e2.onchange= function(){
    if(this.value === "Jordan"){
        s1.setAttribute('src',"../assets/Flag_of_Jordan.svg.png");
        s1.setAttribute('alt',"Jordan flag");
        s1.setAttribute('width',"200");
        s1.setAttribute('width',"100");
    }
    else {
        s1.setAttribute('src',"../assets/Flag_of_Palestine.svg.png");
    }
}

//////////////// 3 /////////////////////


function toto(){
    let s123=document.getElementById('span1');
    let firstPassword=String(document.forms[0].p1.value);
    let secondPassword=document.forms[0].p2.value;
    if((firstPassword).length < 8) {
        s123.innerText="too short";
        s123.style.color='red';
    }
    else {
        s123.innerText="";
    }
}

function toto1(){
    let btn=document.getElementById('btn1');
    let s123=document.getElementById('span2');
    let firstPassword=document.forms[0].p1.value;
    let secondPassword=document.forms[0].p2.value;
    if(firstPassword !== secondPassword ) {
        s123.innerText="the two passwod does not match";
        s123.style.color='red';
        btn.disabled=true;
    }
    else {
        s123.innerText="";
        btn.disabled=false;
    }
}


function tatay1(){
    let ya=document.getElementById('yazeed1');
    ya.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum<a onclick=tatayz1() >Hide</a>";
    
}

function tatayz1(){
    let ya=document.getElementById('yazeed1');
    ya.innerHTML="what is lorem ipsum? <a  onclick=tatay1()>show</a>";

}

function tatay2(){
    let ya=document.getElementById('yazeed2');
    ya.innerHTML="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<a onclick=tatayz2()  >Hide</a>";
    
}

function tatayz2(){
    let ya=document.getElementById('yazeed2');
    ya.innerHTML="why do we use it? <a  onclick=tatay2() >show</a>";

}
function tatay3(){
    let ya=document.getElementById('yazeed3');
    ya.innerHTML="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.<a onclick=tatayz3()  >Hide</a>";
    
}

function tatayz3(){
    let ya=document.getElementById('yazeed3');
    ya.innerHTML="Where does it come from? <a  onclick=tatay3() >show</a>";

}




let textAria=document.getElementById("txt11");
let lolo=document.getElementById('cc1');


lolo.onchange=function(){
    if(this.value ==="arial"){
        textAria.style.fontFamily="Arial";
    }else{
        textAria.style.fontFamily="Verdana";
    }
}

let lolo2=document.getElementById("bold");

lolo2.onchange=function(){
    if(lolo2.checked){
        textAria.style.fontWeight="Bold";
    }
    else textAria.style.fontWeight="";
}


let lolo3=document.getElementById("underline");

lolo3.onchange=function(){
    if(lolo3.checked){
        textAria.style.textDecoration="underline";
    }
    else textAria.style.textDecoration="";
}

document.addEventListener('DOMContentLoaded', function() {
    let box = document.getElementById('colorBox');
    setInterval(changeColor, 1000);
    function changeColor() {
        let date = new Date();
        let seconds = date.getSeconds();
        let red = Math.round(255 * (seconds / 59));
        let green = 255 - red;
        let blue = Math.round(127.5 * (1 + Math.cos(seconds * Math.PI / 30)));
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
});

