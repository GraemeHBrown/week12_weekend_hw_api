const MapDataObject = class MapDataObject {
    constructor(map, container, mapTitle, subTitle, seriesName, dataArray) {
        this.map = map;
        this.container = container;
        this.mapTitle = mapTitle;
        this.subTitle = subTitle;
        this.seriesName = seriesName;
        this.dataArray = dataArray;
    };

}

MapDataObject.prototype.createObject = function () {
    const mapDataObject = {};
    mapDataObject.chart = {map: this.map, renderTo: this.container};
    mapDataObject.title = {text: this.mapTitle};
    mapDataObject.subtitle = {text: this.subTitle};
    mapDataObject.mapNavigation = {enabled: true, buttonOptions: {verticalAlign: 'bottom'}};
    mapDataObject.colorAxis = {min: 0};
    mapDataObject.series = [{data: this.dataArray,
        name: this.seriesName,
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }];
    return mapDataObject;
}

