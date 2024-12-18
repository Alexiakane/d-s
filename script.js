let btnLancer = document.getElementById("btnLancer");
let listResultats = document.getElementById("listResultats");
let message = document.getElementById("message");
let ul = document.createElement("ul");
let de = document.getElementById("des");

let resultat = "";

btnLancer.addEventListener("click",lancer);

function lancer(){
    resultat = Math.floor((Math.random() * 6) + 1);
    console.log(resultat);

    let face1 = document.createElement("img");
    face1.src = "un.PNG"; 
    let face2 = document.createElement("img");
    face2.src = "deux.PNG";
    let face3 = document.createElement("img");
    face3.src = "trois.PNG";
    let face4 = document.createElement("img");
    face4.src = "quatre.PNG";
    let face5 = document.createElement("img");
    face5.src = "cinq.PNG";
    let face6 = document.createElement("img");
    face6.src = "six.PNG";

    let newItem = document.createElement("li");

    switch (resultat) {
        case 1:
            resultat = face1;
            newItem.appendChild(resultat);
            document.body.appendChild(face1);
            break;
        case 2:
            resultat = face2;
            newItem.appendChild(resultat);
            document.body.appendChild(face2);
            break;
        case 3:
            resultat = face3;
            newItem.appendChild(resultat);
            document.body.appendChild(face3);
            break;
        case 4:
            resultat = face4;
            newItem.appendChild(resultat);
            document.body.appendChild(face4);
            break;
        case 5:
            resultat = face5;
            newItem.appendChild(resultat);
            document.body.appendChild(face5);
            break;
        case 6:
            resultat = face6;
            newItem.appendChild(resultat);
            document.body.appendChild(face6);
            break;
        default:
            newItem.innerHTML = resultat;
    }

//     console.log(resultat);
 }