var broj=Number(prompt("Unesite broj u rasponu od 10 do 20:"));
while(true)
{
    if(broj==0)
    {
        alert("Uneli ste 0 program se prekida");
        break;
    }
    else if(broj >=10 && broj <=20)
    {
        broj=prompt("Tacno! Uneli ste broj koji je u rasponu od 10 do 20");
    }
    else
    {
        broj=prompt("Uneli ste broj koji nije u rasponu od 10 do 20");
    }
}