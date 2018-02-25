const MapCreator = class MapCreator {


}

MapCreator.prototype.createMap = function (selectedRegion, container, countriesData) {
    const dataArray = this.createSeriesDataForMap(countriesData);
    // custom/usa-and-canada
    let regionMap = 'custom/' + selectedRegion.toLowerCase();
    if(selectedRegion ==='Americas'){
        regionMap ='custom/south-america';
    }
    const mapDataObject = new MapDataObject(regionMap,container,`Populations of ${selectedRegion}`,'','Population data',dataArray);
    const dataObject = mapDataObject.createObject();
    this.createPopMap(dataObject);
}

MapCreator.prototype.createPopMap = function (dataObject) {
    new PopMap(dataObject);
}

MapCreator.prototype.createSeriesDataForMap = function (countriesData) {
    const dataArray = [];
    countriesData.forEach(function (country) {
        const dataPointsArray = [country.alpha2Code.toLowerCase(), country.population];
        dataArray.push(dataPointsArray);
    })
    console.log('Array in map creator:',dataArray);
    return dataArray;
}