const ChartCreator = class ChartCreator {


}

ChartCreator.prototype.createChart = function (selectedRegion, container, countriesData) {

    const dataArray = createSeriesData(countriesData);
    const xAxisCategories = createXAxisCategories(countriesData);
    const chartDataObject = new ChartDataObject('column', `${selectedRegion} Populations`, ``, dataArray, xAxisCategories, 'Millions');
    const dataObject = chartDataObject.createObject();
    dataObject.chart.renderTo = container;
    createColumnChart(dataObject);
}

function createColumnChart(dataObject) {
    new ColumnChart(dataObject);
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
