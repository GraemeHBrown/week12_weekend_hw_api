const app = function () {
    //API request
    const regionSelect = document.getElementById('region-select');
    region = 'Africa';
    const aPIRequestURL = `https://restcountries.eu/rest/v2/region/${region}`
    makeRequest(aPIRequestURL, requestComplete);
}

function makeRequest(aPIRequestURL, requestComplete) {
    const request = new XMLHttpRequest();
    request.open('GET', aPIRequestURL);
    request.addEventListener('load', requestComplete);
    request.send();
}

function requestComplete() {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const countries = JSON.parse(jsonString);
    createChartData(countries);
}

function createChartData(countriesData) {
    const container = document.querySelector('#population-chart');
    const dataArray = createSeriesData(countriesData);
    const xAxisCategories = createXAxisCategories(countriesData);
    const chartDataObject = new ChartDataObject('column', `${region} Populations`, `${region} Countries`, dataArray, xAxisCategories);
    const template = chartDataObject.createObject();
    template.chart.renderTo = container;
    createColumnChart(template);
}

function createColumnChart(dataArray) {
    new ColumnChart(dataArray);
}

function createSeriesData(countriesData) {
    const dataArray = [];
    countriesData.forEach(function (country) {
        const dataPoints = {name: country.name, y: country.population};
        dataArray.push(dataPoints);
    })
    return dataArray;
}

function createXAxisCategories(countriesData) {
    const xAxisCategories = [];
    countriesData.forEach(function (country) {
        xAxisCategories.push(country.name);
    })
    return xAxisCategories;
}

document.addEventListener('DOMContentLoaded', app);

