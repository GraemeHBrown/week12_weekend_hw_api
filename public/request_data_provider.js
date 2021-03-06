const RequestDataProvider = class RequestDataProvider {
    constructor(url) {
        this.url = url;
        this.countries = [];
        this.onUpdate = null;
    }
};

RequestDataProvider.prototype.getData = function (url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', function () {
        if (request.status !== 200) return;
        var jsonString = request.responseText;
        var returnedCountries = JSON.parse(jsonString);
        this.countries = returnedCountries;
        this.onUpdate(returnedCountries);
    }.bind(this));

    request.send();
}