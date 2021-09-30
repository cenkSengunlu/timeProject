let gunArr = ["Pazartesi", "Sali", "Çarsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"];

function dateTime(){

    let userName = prompt("Lütfen İsminizi Yazın").toUpperCase().split('');
	
    //kötü kod örneği :'(
    for(let i = 0; i <= userName.length; i++){
        switch(userName[i]) {
            case 'Ğ':
                userName[i] = 'G';
                break;
            case 'Ş':
                userName[i] = 'S';
                break;
          }
    }

    document.querySelector('#name').innerHTML = userName.join('');

    const format = (num) => String(num).padStart(2, '0');

    let tarih;

    let gun;
    let ay;
    let yil;

    let saat;
    let dakika;
    let saniye;
    

    setInterval(function(){ 
        tarih = new Date;

        gun = format(tarih.getDate());
        ay = format(tarih.getMonth() + 1);
        yil = format(tarih.getFullYear());

        saat = format(tarih.getHours());
        dakika = format(tarih.getMinutes());
        saniye = format(tarih.getSeconds());

        document.querySelector('#gun').innerHTML = gunArr[tarih.getDay() - 1];
        document.querySelector('#date').innerHTML = `${gun}.${ay}.${yil}`;
        document.querySelector('#time').innerHTML = `${saat}:${dakika}:${saniye}`;
    }, 100);
}

dateTime();