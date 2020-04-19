import axios from "axios"

var getWeather = {
    data(){
      return {
        selectedLoc: "", 
        weatherlist1: "",
        weatherDates: [],
        weatherTemp: [],
        weatherPrecip: [],
        weatherText: [],
        selectedDates: [],
        selectedTemp: [],
        selectedPrecip: [],
        selectedText: [],
        weatherKey: "044eaf7b72344f028c703df8689b2197"
        }
    },
    methods:{
        getWeather (lat, lng, endDate, diff) {
          this.weatherDates = [] //reset arrays when new inputs are entered without resetting the page
          this.weatherTemp = []
          this.weatherPrecip = []
          this.weatherText = []
          this.selectedDates = []
          this.selectedTemp = []
          this.selectedPrecip = []
          this.selectedText = []
            axios.get("https://api.weatherbit.io/v2.0/forecast/daily?lat="+this.coordLat+"&"+"lon="+this.coordLng+"&key="+this.weatherKey
         ).then(response => {
           this.weatherlist1 = response.data
           this.selectedLoc = this.weatherlist1.city_name //identifying location
           for (var i = 0; i < 16; i++) { // filling arrays with relevant info
             this.weatherDates.push(this.weatherlist1.data[i].datetime)
             this.weatherTemp.push(this.weatherlist1.data[i].temp)
             this.weatherPrecip.push(this.weatherlist1.data[i].precip)
             this.weatherText.push(this.weatherlist1.data[i].weather.description)
           }
           for (i = 0; i < 16; i++) { //finding travel end date
             if (this.weatherDates[i] == this.endDate) {
               this.selectedDates.push(this.weatherDates[i])
               this.selectedTemp.push(this.weatherTemp[i])
               this.selectedPrecip.push(this.weatherPrecip[i])
               this.selectedText.push(this.weatherText[i])
               for (var y = 1; y < diff + 1; y++) { //recounting travel duration from end dates
                 this.selectedDates.push(this.weatherDates[i - y])
                 this.selectedTemp.push(this.weatherTemp[i - y])
                 this.selectedPrecip.push(this.weatherPrecip[i - y])
                 this.selectedText.push(this.weatherText[i - y])
               }
             }
           }
           this.selectedDates = this.selectedDates.reverse() //reversing arrays to print it from day 1 to day 16 instead of reverse
           this.selectedTemp = this.selectedTemp.reverse()
           this.selectedPrecip = this.selectedPrecip.reverse()
           this.selectedText = this.selectedText.reverse()
           for (i = 0; i < this.selectedDates.length; i++) { //posting the results to DOM
           console.log(100 * this.selectedPrecip[i].toFixed(2)) //to trigger result
         }
         }).catch ((error)=>{
           console.log(error)
           alert("Earliest day should be today!")
           location.reload()
         });}
    }
};
export default getWeather