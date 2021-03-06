let selectedRegion;

const app = function () {
    //get data
    const dataProvider = new RequestDataProvider();
    const chartCreator = new ChartCreator();
    const mapCreator = new MapCreator();
    const chartContainer = document.querySelector('#population-chart');
    const mapContainer = document.querySelector('#population-map');
    const listButton = document.getElementById('button-list-page');
    //Region select
    const regionSelect = document.getElementById('region-select');
    const regionSelector = new RegionSelector(regionSelect);
    regionSelector.onChange = function (selected) {
        selectedRegion = selected;
        const aPIRequestURL = `https://restcountries.eu/rest/v2/region/${selectedRegion}`;
        dataProvider.getData(aPIRequestURL);
    }

    //work with updated data
    dataProvider.onUpdate = function (countries) {
        chartCreator.createChart(selectedRegion, chartContainer, countries);
        mapCreator.createMap(selectedRegion, mapContainer, countries);
    }

    listButton.addEventListener('click', function () {
        window.location.href = 'list_page.html';
    });

}




document.addEventListener('DOMContentLoaded', app);

