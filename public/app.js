const app = function () {
    //API request
    const europeAPIRequestURL = 'https://restcountries.eu/rest/v2/region/europe'
    makeRequest(europeAPIRequestURL, requestComplete);

}

function makeRequest(europeAPIRequestURL, requestComplete) {
    const request = new XMLHttpRequest();
    request.open('GET', europeAPIRequestURL);
    request.addEventListener('load', requestComplete);
    request.send();
}

function requestComplete() {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const europeCountries = JSON.parse(jsonString);
    createColumnChart(europeCountries);

}

function createColumnChart(dataArray) {
    const container = document.querySelector('#population-chart');
    new ColumnChart(container, dataArray);
}

document.addEventListener('DOMContentLoaded', app);