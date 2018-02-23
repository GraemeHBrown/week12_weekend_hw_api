const ColumnChart = function (container, dataArray) {
    this.container = container;
    this.dataArray = dataArray;
    console.log('Data array in chart:', this.dataArray)
    const chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: this.container
        },
        title: {
            text: "European Populations"
        },
        series: [{
            name: "European Countries",
            data: [
                {
                    name: "Albania",
                    y: 2886026

                },
                {
                    name: "Andorra",
                    y: 78014
                },
                {
                    name: "Austria",
                    y: 9498700
                }
            ]
        }],
        xAxis: {
            categories: ['Albania', 'Andorra', 'Austria']
        }
    });
}