let selectedRegion;

const app = function () {
    //get data
    const dataProvider = new RequestDataProvider();
    const chartCreator = new ChartCreator();
    const chartContainer = document.querySelector('#population-chart');

    //Region select
    const regionSelect = document.getElementById('region-select');
    const regionSelector = new RegionSelector(regionSelect);
    regionSelector.onChange = function (selected) {
        selectedRegion = selected;
        const aPIRequestURL = `https://restcountries.eu/rest/v2/region/${selectedRegion}`;
        // makeRequest(aPIRequestURL, requestComplete);
        dataProvider.getData(aPIRequestURL);
    }

    //work with updated data
    dataProvider.onUpdate = function (countries) {
        // createChartData(countries);
        chartCreator.createChart(selectedRegion, chartContainer, countries);
    }

}


document.addEventListener('DOMContentLoaded', app);

