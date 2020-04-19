const checkInput = {
    methods: {
        checkInput(start, end, place) { //checks if user typed start and end dates
            if (start === "" || end === "") {
                alert("Please enter a valid date")
                location.reload()
            }
            else if (place === "" || place.match(/^\d/)) { //checks if user typed city name and it doesnt contain numbers
                alert("Please enter a valid destination")
                location.reload()
            }
        }
    }
};

export default checkInput