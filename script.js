const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BOTON = document.getElementById("calcular");

BOTON.addEventListener("click", () => {
    let peso = INPUT.valueAsNumber;

    if(peso > 0 && peso <= 30){
        ERROR.style.display = "none";

       let res = holliday(peso);
       let man = (res/24)*1.5;
       FLU.innerHTML = (res/24) + " cc/h";
       MAN.innerHTML = "m+m/2 " + man + " cc/h";
       FLU.style.display = "block";
       MAN.style.display = "block";
    } else if (peso>30){
        ERROR.style.display = "none";

        let respuesta = superficieCorporal(peso);
        let mante = (respuesta * 2000);
        FLU.innerHTML = respuesta * 1500 + " diario" + " " + (respuesta*1500)/24 + " cc/h";
        FLU.style.display = "block"
        MAN.innerHTML = mante + " diario" + mante/24 + " cc/h";
        MAN.style.display = "block";

    } else {
        console.log ("error");
        ERROR.style.display = "block";
        FLU.style.display = "none";
        MAN.style.display = "none";
    }
});

function holliday(peso){
    let volumen;

    if (peso <= 10){
        volumen= peso*100
    } else if (peso>10 && peso<= 20){
        volumen = 1000 + (peso-10)*50;
    } else{
        volumen = 1500 + (peso-20)*20;
    }
    return volumen;
}

function superficieCorporal(peso){
    let flujo;
    if (peso> 30){
        flujo = ((peso*4)+7)/(peso+90)
    }
    return flujo;
}





