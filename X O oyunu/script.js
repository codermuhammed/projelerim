let sira = 'x';

let baslik = document.querySelector('.title');

    // 1 sira fonksiyonu

function oyun(id){

    let eleman = document.getElementById(id);

    if(sira === 'x' && eleman.innerHTML == ''){

        eleman.innerHTML = 'X';

        sira = 'o';

        baslik.innerHTML = "O'NUN SIRASI";

        // harf.style.color = 'cadetblue';

    }
    else if(sira === 'o' && eleman.innerHTML == ''){

        eleman.innerHTML = 'O';

        sira = 'x';

        baslik.innerHTML = "X'İN SIRASI";

    }

    // her tiklandiginda 'kazanan' fonskyonu calissin

    kazanan();

}

    // 2 karsilastirma fonksyonu

let kutular = [];
    
function kazanan(){

    for(let i = 1; i < 10; i++){

        kutular[i] = document.getElementById('oge' + i).innerHTML;

    }
    if(kutular[1] == kutular[2] && kutular[2] == kutular[3] && kutular[1] != ''){

        bitir(1,2,3)

    }
    else if(kutular[4] == kutular[5] && kutular[5] == kutular[6] && kutular[4] != ''){

        bitir(4,5,6)
        
    }
    else if(kutular[7] == kutular[8] && kutular[8] == kutular[9] && kutular[7] != ''){

        bitir(7,8,9)

    }
    else if(kutular[1] == kutular[4] && kutular[4] == kutular[7] && kutular[1] != ''){

        bitir(1,4,7)

    }
    else if(kutular[2] == kutular[5] && kutular[5] == kutular[8] && kutular[2] != ''){

        bitir(2,5,8)
        
    }
    else if(kutular[3] == kutular[6] && kutular[6] == kutular[9] && kutular[3] != ''){

        bitir(3,6,9)

    }
    else if(kutular[1] == kutular[5] && kutular[5] == kutular[9] && kutular[1] != ''){

        bitir(1,5,9)
        
    }
    else if(kutular[3] == kutular[5] && kutular[5] == kutular[7] && kutular[3] != ''){

        bitir(3,5,7)

    }
}

    // 3 bitirme fonksiyonu

function bitir(n1,n2,n3){

    baslik.innerHTML = `${kutular[n1]} KAZANDI`;

    document.getElementById('oge' + n1).style.background = '#000';
    document.getElementById('oge' + n2).style.background = '#000';
    document.getElementById('oge' + n3).style.background = '#000';

        // 3 nokta ekleme hazir fonksiyonu (setInterval)
        // 1 fonksiyon, 2 zaman icerir

    setInterval(function(){baslik.innerHTML += '.'},1000);

        // herseyi ifirlama fonksiyonu (setTimeout)
        // 1 fonksiyon, 2 zaman icerir (girilen sure sonra sifirlanir)

    setTimeout(function(){location.reload()},4000)

}