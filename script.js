
let liczba1 = 0;
let tablica = [];
let a = 0;
let DM  = 1;
let rot = 0;
let licz = 0;
function losuj(){
    liczba = Math.ceil(Math.random(1 , 90)* 90);
        if(tablica.includes(liczba)){
            losuj();
        }
        else if(licz >= 89){
            document.getElementById("losuj").disabled = true;
            document.getElementById("losuj").innerHTML = "wylosowano wszystkie liczby";
            document.getElementById("losuj").style.fontSize = "15pt";
        }
        else{
            document.getElementById('okno').innerHTML = '<div id="wylosowana">Wylosowana liczba:</div><div id="liczba1">'+liczba+'</div>';
            document.getElementById("liczby").innerHTML += '<div class="liczba">'+liczba+',&nbsp</div>';
            a++;
            tablica[a] = liczba;
            licz++;
            if(liczba == 21 || liczba == 37){
                document.getElementById('liczba1').style.color = "yellow";
            }
        }
}

function DarkMode(){
    DM++;
    rot+=180;
    if(DM %2==0){
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "#FFFFFF";
        document.getElementById("header").style.backgroundColor = "#333333";
        document.getElementById("footer").style.backgroundColor = "#333333";
        document.getElementById("dm").style.rotate = rot+"deg";
        document.getElementById("logo").style.backgroundImage = "url('MBP_white_transparent.png')";
    }
    else{
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        document.getElementById("header").style.backgroundColor = "#DDDDDD";
        document.getElementById("footer").style.backgroundColor = "#DDDDDD";
        document.getElementById("dm").style.rotate = rot+"deg";
        document.getElementById("logo").style.backgroundImage = "url('MBP_black_transparent.png')";
    }

}