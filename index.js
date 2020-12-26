//script pour calculatrice.html
//les variables//
var affichage = document.getElementById("affichage");
var boutons = Array.from(document.getElementsByClassName("btn"));
var btnEgale = document.getElementById("egale");
var btnDecimale = document.getElementById("decimal");
var operateur = Array.from(document.getElementsByClassName("operateur"));
var tempnum = Array.from(document.getElementsByClassName("chiffre"));
var exposant = document.getElementById("exposant");
var videUn = document.getElementById("videUn");
var videTout = document.getElementById("videTout");
var btnAns = document.getElementById("ans");
var valeurAffichage = "";
var num1 = "", num2 = "", ans = "", op = "";
/////////////////////////////////////////////////////////////////////
//reajustument des chiffres//
var chiffres = [];
chiffres.push(tempnum[9]);
for(let i=2; i>=0; i--){
    for(let j=0;j<3; j++){
        chiffres.push(tempnum[i*3+j]);
    }
}
chiffres.forEach(chiffre => (console.log(chiffre.innerText)));
////////////////////////////////////////////////////////
//fonctions//
const add = (a, b) => a + b;
const dif = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b == 0? "STOP JS pense que l'on parle de l'infini" : a / b;
const exp = (a, b) => Math.pow(a, b);
var bar = {"+":add,"−":dif,"×":mul,"÷":div,"xy":exp};
//<CR>const calc =(foo,num1,num2)=> {foo(parseFloat(num1),parseFloat(num2))}; 
function spill(){
    console.log(`
        valeurAffichage = ${valeurAffichage}
        num1 = ${num1}
        num2 = ${num2}
        ans = ${ans}
        op = ${op}`);
}
///////////////////////////////////////////////////////////////
//ecouteurs des evenements//
chiffres.forEach((chiffre)=>{
    chiffre.addEventListener("click", (e) => {
        if(affichage.innerText == "" || num2 ==""){
            affichage.innerText = e.target.innerText;
        }else{
        affichage.innerText += e.target.innerText;
        }
        num2+= e.target.innerText;
        console.log(num2);
    })
});
btnDecimale.addEventListener("click", () => {
    if(affichage.innerText.search(/\./)==-1){
      affichage.innerText += ".";
        num2 += "."
    }
});
btnEgale.addEventListener("click", () => {
    console.log(`${num1} ${op} ${num2}`);
    let val = bar[op](parseFloat(num1),parseFloat(num2));
    console.log(val);
    affichage.innerText = val;
    ans = val;
    num2 = "";
    num1 = "";
    op = "";
});
operateur.forEach((operateur)=>{
    operateur.addEventListener("click", (e) => {
        if(num2 == ""){
num2 = ans;
            op = operateur.innerText;
        }else if(num1 !== "" ){
            console.log(`${num1} ${op} ${num2}`);
            num1 = bar[op](parseFloat(num1),parseFloat(num2));
            console.log(num1);
            num2 = "";
affichage.innerText = num1;
            op = operateur.innerText;
        }else{
            num1 = num2;
            num2 = "";
            op= operateur.innerText;
affichage.innerText = "";
        }
    }
    )
});


videUn.addEventListener("click", () =>{
    //<CR>valeurAffichage=valeurAffichage.substring(0,valeurAffichage.length-1);
    num2=num2.substring(0,num2.length-1);
    affichage.innerText = affichage.innerText.substring(0,affichage.innerText.length-1);
    console.log("éffacé");
});
videTout.addEventListener("click", () =>{
    num2 = "";
    valeurAffichage = "";
    affichage.innerText = valeurAffichage;
    console.log("tout vide!");
});
btnAns.addEventListener("click",() =>{
    num2 = ans;
    affichage.innerText = num2;
});
Array.from(document.getElementsByClassName("btn")).forEach((btn)=>{
    btn.addEventListener("click", ()=>{
spill();
    })
});
