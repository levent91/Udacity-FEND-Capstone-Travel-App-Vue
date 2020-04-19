import axios from "axios"

var getImage = {
    data(){ 
      return {
        newImage: "", //pixabayimage
        imageOrder: "",
        locImage: "",
        imageKey: "16110700-60855c209fb3cbd8dac323b21"
        }
    },
    methods:{
        getImage(city) {
            this.newImage = axios.get("https://pixabay.com/api/?key="+this.imageKey+"&q="+city+"&image_type=photo&min_height=320&min_width=320"
            ).then( response => {
              this.imageOrder = Math.floor(Math.random() * 11) //gets a random image every time
              this.locImage = response.data.hits[this.imageOrder].webformatURL
              this.locImage = this.locImage.replace("_640", "_340") //this is the max width setting, default value is 640
            }).catch((error) => {
              console.log(error)
              alert("Please enter a valid destination")
              location.reload()
            })}
    }
};
export default getImage