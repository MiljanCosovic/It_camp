function firstp(){
    var step1 = document.getElementById("step1")
    step1.setAttribute("style","font-weight:bold;text-decoration:none")
    var step2 = document.getElementById("step2")
    step2.setAttribute("style","font-weight:normal;text-decoration:underline")
    var step3 = document.getElementById("step3")
    step3.setAttribute("style","font-weight:normal;text-decoration:underline")
    var step4 = document.getElementById("step4")
    step4.setAttribute("style","font-weight:normal;text-decoration:underline")
    var step5 = document.getElementById("step5")
    step5.setAttribute("style","font-weight:normal;text-decoration:underline")
    
    var naslov = document.querySelectorAll("#h");
    var paragraf = document.querySelectorAll("#p");
    var li = document.querySelectorAll("#li");
    for(let i=0;i<9;i++)
    {
        li[i].style.backgroundColor = "#ffc";
        naslov[i].style.fontSize = "1em";
        paragraf[i].style.fontSize = "1em";
        naslov[i].style.fontWeight = "normal";
        paragraf[i].style.marginBlockStart = "-1em";
        li[i].style.boxShadow = "0px 0px 0px rgb(0 0 0 / 0%)";
        li[i].style.transform = "rotate(0deg)";
        li[i].style.boxShadow = "0px 0px 0px rgb(0 0 0 / 0%)";
        li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");
        li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(0deg)");
        li[i].addEventListener('mouseenter', () => li[i].style.height = "11em");
        li[i].addEventListener('mouseenter', () => li[i].style.width = "11em");


    }
}

function secondp(){
    var step1 = document.getElementById("step1");
    step1.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step2 = document.getElementById("step2");
    step2.setAttribute("style","font-weight:bold;text-decoration:none");
    var step3 = document.getElementById("step3");
    step3.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step4 = document.getElementById("step4")
    step4.setAttribute("style","font-weight:normal;text-decoration:underline")
    var step5 = document.getElementById("step5")
    step5.setAttribute("style","font-weight:normal;text-decoration:underline")
    var naslov = document.querySelectorAll("#h");
    var paragraf = document.querySelectorAll("#p");
    var li = document.querySelectorAll("#li");
    for(let i=0;i<9;i++)
    {
        li[i].style.backgroundColor = "#ffc";
        naslov[i].style.fontSize = "22px";
        naslov[i].style.fontWeight = "bold";
        paragraf[i].style.fontSize = "32px";
        paragraf[i].style.marginBlockStart = "-0.5em";
        li[i].style.boxShadow = "5px 5px 7px rgb(33 33 33 / 70%)";
        li[i].style.transform = "rotate(0deg)";
        li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");
        li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(0deg)");
        li[i].addEventListener('mouseenter', () => li[i].style.height = "11em");
        li[i].addEventListener('mouseenter', () => li[i].style.width = "11em");
    }
}

function thirdp(){
    
    var step1 = document.getElementById("step1");
    step1.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step2 = document.getElementById("step2");
    step2.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step3 = document.getElementById("step3");
    step3.setAttribute("style","font-weight:bold;text-decoration:none");
    var step4 = document.getElementById("step4")
    step4.setAttribute("style","font-weight:normal;text-decoration:underline")
    var step5 = document.getElementById("step5")
    step5.setAttribute("style","font-weight:normal;text-decoration:underline")
    var naslov = document.querySelectorAll("#h");
    var paragraf = document.querySelectorAll("#p");
    var li = document.querySelectorAll("#li");
    for(let i=0;i<=9;i++)
    {
        li[i].addEventListener('mouseenter', () => li[i].style.height = "11em");
        li[i].addEventListener('mouseenter', () => li[i].style.width = "11em");
        li[i].style.backgroundColor = "#ffc";
        naslov[i].style.fontSize = "22px";
        naslov[i].style.fontWeight = "bold";
        paragraf[i].style.fontSize = "32px";
        paragraf[i].style.marginBlockStart = "-0.5em";
        li[i].style.boxShadow = "5px 5px 7px rgb(33 33 33 / 70%)";
        if(i%2!=0)
        {
            li[i].style.transform = "rotate(10deg)";
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(10deg)");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(10deg)");
        }
        else
        {
            li[i].style.transform = "rotate(-10deg)";
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(-10deg)");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(-10deg)");
        }
    }
}

function fourp(){
    var step1 = document.getElementById("step1");
    step1.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step2 = document.getElementById("step2");
    step2.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step3 = document.getElementById("step3");
    step3.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step4 = document.getElementById("step4");
    step4.setAttribute("style","font-weight:bold;text-decoration:none");
    var step5 = document.getElementById("step5")
    step5.setAttribute("style","font-weight:normal;text-decoration:underline")


    var naslov = document.querySelectorAll("#h");
    var paragraf = document.querySelectorAll("#p");
    var li = document.querySelectorAll("#li")
    for(let i=0;i<=9;i++)
    {
        li[i].style.backgroundColor = "#ffc";
        naslov[i].style.fontSize = "22px";
        naslov[i].style.fontWeight = "bold";
        paragraf[i].style.fontSize = "32px";
        paragraf[i].style.marginBlockStart = "-0.5em";
        li[i].style.boxShadow = "5px 5px 7px rgb(33 33 33 / 70%)";
        
        if(i%2!=0)
        {
            li[i].style.transform = "rotate(10deg)";
        }
        else
        {
            li[i].style.transform = "rotate(-10deg)";
        }
        if(i%2!=0)
        {
            
            li[i].addEventListener('mouseenter', () => li[i].style.display = "inline-block");
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");
            li[i].addEventListener('mouseenter', () => li[i].style.height = "13em");
            li[i].addEventListener('mouseenter', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseleave', () => li[i].style.transition = "0.2s");  
            li[i].addEventListener('mouseenter', () => li[i].style.width = "13em");
            li[i].addEventListener('mouseleave', () => li[i].style.height = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.width = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(10deg)");
        }
        else
        {
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");                
            li[i].addEventListener('mouseenter', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseleave', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseenter', () => li[i].style.height = "13em");
            li[i].addEventListener('mouseenter', () => li[i].style.width = "13em");
            li[i].addEventListener('mouseleave', () => li[i].style.height = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.width = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(-10deg)");

        }
    }
}
function fivep(){
    var step1 = document.getElementById("step1");
    step1.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step2 = document.getElementById("step2");
    step2.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step3 = document.getElementById("step3");
    step3.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step4 = document.getElementById("step4");
    step4.setAttribute("style","font-weight:normal;text-decoration:underline");
    var step5 = document.getElementById("step5");
    step5.setAttribute("style","font-weight:bold;text-decoration:none");


    var naslov = document.querySelectorAll("#h");
    var paragraf = document.querySelectorAll("#p");
    var li = document.querySelectorAll("#li")
    for(let i=0;i<=9;i++)
    {
        naslov[i].style.fontSize = "22px";
        naslov[i].style.fontWeight = "bold";
        paragraf[i].style.fontSize = "32px";
        paragraf[i].style.marginBlockStart = "-0.5em";
        li[i].style.boxShadow = "5px 5px 7px rgb(33 33 33 / 70%)";
    
    
        
        if(i%2!=0)
        {
            li[i].style.transform = "rotate(10deg)";
        }
        else
        {
            li[i].style.transform = "rotate(-10deg)";
        }
        if(i%2!=0)
        {
            
            li[i].addEventListener('mouseenter', () => li[i].style.display = "inline-block");
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");
            li[i].addEventListener('mouseenter', () => li[i].style.height = "13em");
            li[i].addEventListener('mouseenter', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseleave', () => li[i].style.transition = "0.2s");  
            li[i].addEventListener('mouseenter', () => li[i].style.width = "13em");
            li[i].addEventListener('mouseleave', () => li[i].style.height = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.width = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(10deg)");
        }
        else
        {
            li[i].addEventListener('mouseenter', () => li[i].style.transform = "rotate(0deg)");                
            li[i].addEventListener('mouseenter', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseleave', () => li[i].style.transition = "0.2s");                
            li[i].addEventListener('mouseenter', () => li[i].style.height = "13em");
            li[i].addEventListener('mouseenter', () => li[i].style.width = "13em");
            li[i].addEventListener('mouseleave', () => li[i].style.height = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.width = "11em");
            li[i].addEventListener('mouseleave', () => li[i].style.transform = "rotate(-10deg)");

        }
        if(i%3==0)
            {
                li[i].style.backgroundColor = "#cfc";
            }
            else if(i%2==0)
            {
                li[i].style.backgroundColor = "#ccf";
            }
            else
                {
                    li[i].style.backgroundColor = "#ffc";
                }
    }
}