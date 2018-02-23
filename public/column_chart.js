const ColumnChart = function (dataArray) {
    this.dataArray = dataArray;
    const chart = new Highcharts.Chart(
        this.dataArray
    )
}