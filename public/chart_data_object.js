const ChartDataObject = class ChartDataObjectTemplate {
    constructor(chartType, chartTitle, seriesName, dataArray, xAxisCategories) {
        this.chartType = chartType;
        this.chartTitle = chartTitle;
        this.seriesName = seriesName;
        this.dataArray = dataArray;
        this.xAxisCategories = xAxisCategories;
    };

}

ChartDataObject.prototype.createObject = function () {
    const chartDataObject = {};
    chartDataObject.chart = {type: this.chartType, renderTo:''};
    chartDataObject.title = {text: this.chartTitle};
    chartDataObject.series = [{name: this.seriesName, data:this.dataArray}];
    chartDataObject.xAxis = {categories: this.xAxisCategories};
    console.log('Chart object in template: ', chartDataObject);
    return chartDataObject;
}



