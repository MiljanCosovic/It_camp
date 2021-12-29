var a=Number(prompt("Unesite broj od 0 do 100: "));


switch(true){
    case a>=0 && a<30:
        alert("Broj je LOW");
        break;
        case a>30 && a<70:
            a>30;
            alert("Broj je MEDIUM");
            break;
        case a>70 && a<=100:
            alert("Broj je HIGH");
            break;
            default:
                alert("Uneli ste pogresan broj");

        
}