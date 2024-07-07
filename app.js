// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let tableBody = `      <tr>
            <th style="width: 200px;">Country </th>
            <th style="width: 200px;">Falg Type</th>
            <th style="width: 200px;">Population</th>
        </tr>` ;



fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td>${element.name.common}</td>
                        <td>${element.flag}</td>
                        <td>${element.population}</tr>`
        console.log(element.name.common);
    });

    tblCountries.innerHTML=tableBody;


})
function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })
    })
}

