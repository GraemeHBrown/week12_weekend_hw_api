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
    mapDataObject.tooltip = {
        useHTML: true,
        formatter: function () {
            return `<img src=${this.point.flag} height="40px" width="60px"><div><span>Name: </span>${this.point.name}</div>
<div><span>Population: </span>${this.point.value}</div>`
        }
    }

    mapDataObject.series = [{
        data: this.dataArray,
        name: this.seriesName,
        keys: ['hc-key', 'value', 'flag'],
        states: {
            hover: {
                color: '#c5da21'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }

    }];
    return mapDataObject;
}

