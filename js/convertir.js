const $form = document.forms[0],
    $spanNumeroRomano = document.getElementById("numero-romano"),
    $spanNumeroLetras = document.getElementById("numero-letras");

const NUMEROS_ROMANOS = {
    1: "I", 
    4: "IV",
    5: "V", 
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    4000: "<b>IV</b>",
    5000: "<b>V</b>",
    6000: "<b>VI</b>",
    7000: "<b>VII</b>",
    8000: "<b>VIII</b>",
    9000: "<b>IX</b>"
};




$form["numero-natural"].onkeypress = (e) => {
    const pattern = /(\d|BackSpace|Space)/;
    if (!pattern.test(e.key))
    {
        e.preventDefault();
    }
}

$form.onsubmit = (e) => {
    e.preventDefault();
 
    let numeroNatural = parseInt($form["numero-natural"].value);

    if (numeroNatural === 0)
    {
        alert("El número natural tiene que se mayor a 0 y menor o igual a 9999");
        return;
    }

    let aux = numeroNatural;
    let numeroRomano = "";

    while (aux > 0)
    {
        if (aux >= 9000) {
            numeroRomano += NUMEROS_ROMANOS[9000];
            aux = aux - 9000;
        }
         else if (aux >= 8000) {
            numeroRomano += NUMEROS_ROMANOS[8000];
            aux = aux - 8000;
        }
         else if (aux >= 7000) {
            numeroRomano += NUMEROS_ROMANOS[7000];
            aux = aux - 7000;
        }
        else if (aux >= 6000) {
            numeroRomano += NUMEROS_ROMANOS[6000];
            aux = aux - 6000;
        }
        else if (aux >= 5000) {
            numeroRomano += NUMEROS_ROMANOS[5000];
            aux = aux - 5000;
        }
        else if (aux >= 4000) {
            numeroRomano += NUMEROS_ROMANOS[4000];
            aux = aux - 4000;
        }
        else if (aux >= 1000) {
            numeroRomano += NUMEROS_ROMANOS[1000];
            aux = aux - 1000;
        }
        else if (aux >= 900) {
            numeroRomano += NUMEROS_ROMANOS[900];
            aux = aux - 900;
        }
        else if (aux >= 500) {
            numeroRomano += NUMEROS_ROMANOS[500];
            aux = aux - 500;
        }
        else if (aux >= 400) {
            numeroRomano += NUMEROS_ROMANOS[400];
            aux = aux - 400;
        }
        else if (aux >= 100) {
            numeroRomano += NUMEROS_ROMANOS[100];
            aux = aux - 100;
        }
        else if (aux >= 90) {
            numeroRomano += NUMEROS_ROMANOS[90];
            aux = aux - 90;
        }
        else if (aux >= 50) {
            numeroRomano += NUMEROS_ROMANOS[50];
            aux = aux - 50;
        }
        else if (aux >= 40) {
            numeroRomano += NUMEROS_ROMANOS[40];
            aux = aux - 40;
        }
        else if (aux >= 10) {
            numeroRomano += NUMEROS_ROMANOS[10];
            aux = aux - 10;
        }
        else if (aux >= 9) {
            numeroRomano += NUMEROS_ROMANOS[9];
            aux = aux - 9;
        }
        else if (aux >= 5) {
            numeroRomano += NUMEROS_ROMANOS[5];
            aux = aux - 5;
        }
        else if (aux >= 4)
        {
            numeroRomano += NUMEROS_ROMANOS[4];
            aux = aux - 4;
        }
        else {
            numeroRomano += NUMEROS_ROMANOS[1];
            aux = aux - 1;
        }

    }

    $spanNumeroRomano.innerHTML = numeroRomano;

    $spanNumeroLetras.innerHTML = convertirNumeroEnLetras(numeroNatural);

   

    
}


function convertirNumeroEnLetras(aux)
{
    let numeroLetra = "";

    while (aux > 0)
    {

        if (aux >= 9000) {
            numeroLetra += "NUEVE MIL ";
            aux -= 9000;
        }
        else if (aux >= 8000) {
            numeroLetra += "OCHO MIL ";
            aux -= 8000;
        }
        else if (aux >= 7000) {
            numeroLetra += "SIETE MIL ";
            aux -= 7000;
        }
        else if (aux >= 6000) {
            numeroLetra += "SEIS MIL ";
            aux -= 6000;
        }
        else if (aux >= 5000) {
            numeroLetra += "CINCO MIL ";
            aux -= 5000;
        }
        else if (aux >= 4000) {
            numeroLetra += "CUATRO MIL ";
            aux -= 4000;
        }
        else if (aux >= 3000) {
            numeroLetra += "TRES MIL ";
            aux -= 3000;
        }
        else if (aux >= 2000) {
            numeroLetra += "DOS MIL ";
            aux -= 2000;
        }
        else if (aux >= 1000) {
            numeroLetra += "MIL ";
            aux -= 1000;
        }
        else if (aux >= 900) {
            numeroLetra += "NOVECIENTOS ";
            aux -= 900;
        }
        else if (aux >= 800) {
            numeroLetra += "OCHOCIENTOS ";
            aux -= 800;
        }
        else if (aux >= 700) {
            numeroLetra += "SETECIENTOS ";
            aux -= 700;
        }
        else if (aux >= 600) {
            numeroLetra += "SEISCIENTOS ";
            aux -= 600;
        }
        else if (aux >= 500) {
            numeroLetra += "QUINIENTOS ";
            aux -= 500;
        }
        else if (aux >= 400) {
            numeroLetra += "CUATROCIENTOS ";
            aux -= 400;
        }
        else if (aux >= 300) {
            numeroLetra += "TRESCIENTOS ";
            aux -= 300;
        }
        else if (aux >= 200) {
            numeroLetra += "DOSCIENTOS ";
            aux -= 200;
        }
        else if (aux > 100) {
            numeroLetra += "CIENTO ";
            aux -= 100;
        }
        else if (aux === 100) {
            numeroLetra += "CIEN ";
            aux -= 100;
        }
        else if (aux > 90) {
            numeroLetra += "NOVENTA Y ";
            aux -= 90;
        }
        else if (aux === 90) {
            numeroLetra += "NOVENTA";
            aux -= 90;
        }
        else if (aux > 80) {
            numeroLetra += "OCHENTA Y ";
            aux -= 80;
        }
        else if (aux === 80) {
            numeroLetra += "OCHENTA";
            aux -= 80;
        }
        else if (aux > 70) {
            numeroLetra += "SETENTA Y ";
            aux -= 70;
        }
        else if (aux === 70) {
            numeroLetra += "SETENTA";
            aux -= 70;
        }
        else if (aux > 60) {
            numeroLetra += "SESENTA Y ";
            aux -= 60;
        }
        else if (aux === 60) {
            numeroLetra += "SESENTA";
            aux -= 60;
        }
        else if (aux > 50) {
            numeroLetra += "CINCUENTA Y ";
            aux -= 50;
        }
        else if (aux === 50) {
            numeroLetra += "CINCUENTA";
            aux -= 50;
        }
        else if (aux > 40) {
            numeroLetra += "CUARENTA Y ";
            aux -= 40;
        }
        else if (aux === 40) {
            numeroLetra += "CUARENTA";
            aux -= 40;
        }
        else if (aux >= 30) {
            numeroLetra += "TREINTA Y ";
            aux -= 30;
        }
        else if (aux === 30) {
            numeroLetra += "TREINTA";
            aux -= 30;
        }
        else if (aux > 20) {
            numeroLetra += "VEINTI";
            aux -= 20;
        }
        else if (aux === 20) {
            numeroLetra += "VEINTE";
            aux -= 20;
        }
        else if (aux === 19) {
            numeroLetra += "DIECINUEVE";
            aux -= 19;
        }
        else if (aux === 18) {
            numeroLetra += "DIECIOCHO";
            aux -= 18;
        }
        else if (aux === 17) {
            numeroLetra += "DIECISIETE";
            aux -= 17;
        }
        else if (aux === 16) {
            numeroLetra += "DIECISEIS";
            aux -= 16;
        }
        else if (aux === 15) {
            numeroLetra += "QUINCE";
            aux -= 15;
        }
        else if (aux === 14) {
            numeroLetra += "CATORCE";
            aux -= 14;
        }
        else if (aux === 13) {
            numeroLetra += "TRECE";
            aux -= 13;
        }
        else if (aux === 12) {
            numeroLetra += "DOCE";
            aux -= 12;
        }
        else if (aux === 11) {
            numeroLetra += "ONCE";
            aux -= 11;
        }
        else if (aux === 10) {
            numeroLetra += "DIEZ";
            aux -= 10;
        }
        else if (aux === 9) {
            numeroLetra += "NUEVE";
            aux -= 9;
        }
        else if (aux === 8) {
            numeroLetra += "OCHO";
            aux -= 8;
        }
        else if (aux === 7) {
            numeroLetra += "SIETE";
            aux -= 7;
        }
        else if (aux === 6) {
            numeroLetra += "SEIS";
            aux -= 6;
        }
        else if (aux === 5) {
            numeroLetra += "CINCO";
            aux -= 5;
        }
        else if (aux === 4) {
            numeroLetra += "CUATRO";
            aux -= 4;
        }
        else if (aux === 3) {
            numeroLetra += "TRES";
            aux -= 3;
        }
        else if (aux === 2) {
            numeroLetra += "DOS";
            aux -= 2;
        }
        else
        {
            numeroLetra += "UNO";
            aux -= 1;
        }
    }

    return numeroLetra;
}