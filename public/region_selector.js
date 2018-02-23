const RegionSelector = class RegionSelector{
    constructor(select){
        this.select = select;
        this.onChange = null;
        this.selectedRegion ='';


        this.select.addEventListener('change', function (e)   {
            let target = e.target;
            const selectedRegion = target.selectedOptions[0].text;
            this.selectedRegion = selectedRegion;
            this.onChange(selectedRegion);
        }.bind(this), false);
    }


}