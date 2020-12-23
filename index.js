console.log("bueno");
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
var valeurAffichage = "";
var num1, num2, ans;
/////////////////////////////////////////////////////////////////////
//reajustument des chiffres//
var chiffres = [];
chiffres.push(tempnum[9]);
for(let i=2; i>=0; i--){
    for(let j=0;j<3; j++){
        chiffres.push(tempnum[i*3+j]);
    }
}
chiffres.forEach(truc => (console.log(truc.innerText)));
////////////////////////////////////////////////////////
//fonctions//
function numVal(math){
    return new Function("return " + math )();
}
const add = (a, b) => a + b;
const dif = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const exp = (a, b) => Math.pow(a, b);
///////////////////////////////////////////////////////////////
//ecouteurs des evenements//
chiffres.forEach((chiffre)=>{
    chiffre.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        valeurAffichage+=e.target.innerText;
        if(valeurAffichage == "" || affichage.innerText.includes("=")){
            affichage.innerText = valeurAffichage;
        }else{
            affichage.innerText += e.target.innerText;
            console.log(e.target.classList);
            e.target.classList.add("pressed");
            
        }
    })
});
btnDecimale.addEventListener("click", () => {
    if (valeurAffichage.match(/(0-9)+[^\.]/)){
        valeurAffichage+=".";
        console.log(".");
        affichage.innerText +=".";
    }else if(!valeurAffichage.match(/((0-9)+(\.(0-9)+)?(\/|\-|\*|\+)(0-9)+[^\.])/)){
        ///0-9+(\.0-9+)?(\/|\-|\*|\+)0-9+[^\.]/
        valeurAffichage+=".";
        console.log(".");
        affichage.innerText +=".";
    }else{
        console.log("bruh");
    }
})
btnEgale.addEventListener("click", () => {
    let resultat = numVal(valeurAffichage);
    console.log(resultat);
    affichage.innerText += ` = ${resultat}`;
    valeurAffichage = "";
});
operateur.forEach((operateur)=>{
    operateur.addEventListener("click", (e) => {
        num1 = affichage.innerText;
        //console.log(num1);
        let val = e.target.innerText;
        console.log(val);
        if(val === "×"){
            valeurAffichage +="*";
            affichage.innerText += "×";
        }
        else if(val === "÷"){
            valeurAffichage += "/";
            affichage.innerText += "÷";
        }
        else if(val === "−"){
            valeurAffichage += "-";
            affichage.innerText = valeurAffichage;
        }else if(val === "+"){
            valeurAffichage += "+";
            affichage.innerText = valeurAffichage;
        }
    });
});
exposant.addEventListener("click",() =>{
    valeurAffichage+="**";
    affichage.innerText+="^";
});
videUn.addEventListener("click", () =>{
    valeurAffichage=valeurAffichage.substring(0,valeurAffichage.length-1);
    affichage.innerText = affichage.innerText.substring(0,affichage.innerText.length-1);
    console.log("éffacé");
});
videTout.addEventListener("click", () =>{
    valeurAffichage = "";
    affichage.innerText = valeurAffichage;
    console.log("tout vide!");
});

