function iceBrickVolume(radius, bottleLength, rimLength) {
    if(radius > 0 && bottleLength > 0 && rimLength < bottleLength)
    {
        duzina=bottleLength-rimLength;
        a=duzina*2;
        console.log(a*(radius**2));
    }
    else{
        return console.log("Neispunjeni uslovi");
    }
  
}
iceBrickVolume(1,10,2);
iceBrickVolume(5,30,7);
iceBrickVolume(2,5,7);
iceBrickVolume(2,15,3)