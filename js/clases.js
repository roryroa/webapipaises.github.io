class country{
    constructor( pais ){
        this.capital = pais.capital;
        this.flag = pais.flag;
        this.region = pais.region;
        this.name = pais.name;
        this.borders = pais.borders;
        this.currencies = pais.currencies;
        this.languages = pais.languages;
    }
}

const getCountry = async ( name ) => {
    const uri = `https://restcountries.com/v2/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();
    
    console.log(data);
    let pais = new country(data[0]);
    let region = pais.region;
    let capital = pais.capital;
    let moneda = pais.currencies[0].name;
    let idioma = pais.languages[0].nativeName;
    let flag = pais.flag;
    let { borders } = pais;
    console.log(pais.currencies[0].name);
    console.log(pais.languages[0].nativeName);
    console.log(pais);
    console.log(borders);

    document.getElementById('pais_name').innerHTML = pais.name;
    document.getElementById('pais_flag').src = pais.flag;
    document.getElementById('pais_region').innerHTML = pais.region;
    document.getElementById('pais_capital').innerHTML = pais.capital;
    document.getElementById('pais_idioma').innerHTML = idioma;
    document.getElementById('pais_moneda').innerHTML = moneda;
}

const $btn_search = document.getElementById('btn_search');

$btn_search.addEventListener('click', ()=> {
    const pais_sel = document.getElementById('pais_input');
    getCountry(pais_sel.value);

})

getCountry('El Salvador');

let saludo = 'Hola que tal!';
const Load = ( mensaje ) => console.log(mensaje);