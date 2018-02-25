const listPage = function () {
    const ul = document.getElementById('country-list');
    fetch('https://restcountries.eu/rest/v2/region/europe').then(function (response) {
        // Convert to JSON
        return response.json();
    }).then(function (responseObject) {
        createList(ul, responseObject);
    });

}

function createList(ul, responseObject) {
    responseObject.forEach(country => {
        const li = document.createElement('li')
        li.innerText = country.name;
        ul.appendChild(li);
    })
}

document.addEventListener('DOMContentLoaded', listPage);