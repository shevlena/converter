let amount = document.querySelector('.currence_amount')

let UAHexchange = document.querySelector('.UAH_exchange');
let EURexchange = document.querySelector('.EUR_exchange');
let USDexchange = document.querySelector('.USD_exchange');
let PLNexchange = document.querySelector('.PLN_exchange');

let UAHrate = document.querySelector('.UAH_rate');
let USDrate = document.querySelector('.USD_rate');
let EURrate = document.querySelector('.EUR_rate');
let PLNrate = document.querySelector('.PLN_rate');


USD = 37.6115;
EUR = 41.090;
PLN = 9.0155;
USDrate.innerText = USD.toFixed(4);
EURrate.innerText = EUR.toFixed(4);
PLNrate.innerText = PLN.toFixed(4);


function exchangeCurrency() {
    let select = document.querySelector('.converter_currency');
    sum = Number(amount.value)
    switch (select.value) {
        case 'UAH':
            document.querySelector('.UAH').style.display = 'none';
            document.querySelector('.USD').style.display = 'flex';
            document.querySelector('.EUR').style.display = 'flex';
            document.querySelector('.PLN').style.display = 'flex';
            UAH = 37.1641;
            UAHrate.innerText = UAH.toFixed(4);
            USDexchange.innerText = (sum / USD).toFixed(2);
            EURexchange.innerText = (sum / EUR).toFixed(2);
            PLNexchange.innerText = (sum / PLN).toFixed(2);
            break
        case 'USD':
            document.querySelector('.USD').style.display = 'none';
            document.querySelector('.UAH').style.display = 'flex';
            document.querySelector('.EUR').style.display = 'flex';
            document.querySelector('.PLN').style.display = 'flex';
            UAH = 37.1641;
            UAHrate.innerText = UAH.toFixed(4);
            UAHexchange.innerText = (sum * UAH).toFixed(2);
            EURexchange.innerText = (sum * UAH / EUR).toFixed(2);
            PLNexchange.innerText = (sum * UAH / PLN).toFixed(2);
            break;
        case 'EUR':
            document.querySelector('.EUR').style.display = 'none';
            document.querySelector('.UAH').style.display = 'flex';
            document.querySelector('.USD').style.display = 'flex';
            document.querySelector('.PLN').style.display = 'flex';
            UAH = 39.9300;
            UAHrate.innerText = UAH.toFixed(4);
            UAHexchange.innerText = (sum * UAH).toFixed(2);
            USDexchange.innerText = (sum * UAH / USD).toFixed(2);
            PLNexchange.innerText = (sum * UAH / PLN).toFixed(2);
            break;
        case 'PLN':
            document.querySelector('.PLN').style.display = 'none';
            document.querySelector('.UAH').style.display = 'flex';
            document.querySelector('.USD').style.display = 'flex';
            document.querySelector('.EUR').style.display = 'flex';
            UAH = 8.6536;
            UAHrate.innerText = UAH.toFixed(4);
            UAHexchange.innerText = (sum * UAH).toFixed(2);
            USDexchange.innerText = (sum * UAH / USD).toFixed(2);
            EURexchange.innerText = (sum * UAH / EUR).toFixed(2);
            break;
    }
}
