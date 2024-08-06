let cards = document.getElementsByClassName('cards')[0];
let target = document.getElementsByClassName('target')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

let peliculas_populares = document.getElementById('peliculas_populares');

let json_url = "movie.json";

fetch(json_url)
    .then(Response => Response.json())
    .then((data) => {

        // prueba uno
let populares_array = data.filter(ele => {
    return ele.group_title === "peliculas_populares";
});


populares_array.forEach((ele, i) => {
    let { sposter, url } = ele;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = url;
    card.innerHTML = `
    <img src="${sposter}" alt="${name}" class="poster">
    `
    peliculas_populares.appendChild(card);
});

        // prueba series uno
    let series_array = data.filter(ele => {
            return ele.group_title === "series_populares";
});
        
series_array.forEach((ele, i) => {
    let { name, imdb, date, sposter, genre, url } = ele;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = url;
    card.innerHTML = `
    <img src="${sposter}" alt="${name}" class="poster">
    `
    series_populares.appendChild(card);
});

let estreno_array = data.filter(ele => {
    return ele.group_title === "peliculas_estreno";
});   

estreno_array.forEach((ele, i) => {
    let { sposter, url } = ele;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = url;
    card.innerHTML = `
    <img src="${sposter}" alt="${name}" class="poster">
    `
    peliculas_estreno.appendChild(card);
});

let picardia_array = data.filter(ele => {
    return ele.group_title === "picardia_mexicana";
});   

picardia_array.forEach((ele, i) => {
    let { sposter, url } = ele;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = url;
    card.innerHTML = `
    <img src="${sposter}" alt="${name}" class="poster">
    `
    picardia_mexicana.appendChild(card);
});

document.getElementById('title').innerText = data[0].name;
        document.getElementById('gen').innerText = data[0].genre;
        document.getElementById('date').innerText = data[0].date;
        document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`;

});