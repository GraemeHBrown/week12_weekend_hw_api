// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.


const PopMap = function (dataObject) {
    this.dataObject = dataObject;
    const map = new Highcharts.Map( this.dataObject);

}