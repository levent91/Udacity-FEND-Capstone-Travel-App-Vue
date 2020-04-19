var diff = {
  data() {
    return {
      date1: "",
      date2: "",
      date3: "",
      diffDays: "",
      diffEnd: "",
      diffAll: "",
      msDay: 1000 * 60 * 60 * 24,
      today: new Date().toISOString().slice(0, 10)
    }
  },
  methods: {
    diff(datSta, datEnd) {
      this.date1 = new Date(datSta)
      this.date2 = new Date(datEnd)
      this.diffDays = Math.abs((this.date1.getTime() - this.date2.getTime()) / this.msDay)
    },
    dateMax(now, end, start) { // since used API works for max 16 days here is the function to check it.
      this.date3 = new Date(now)
      this.date2 = new Date(end)
      this.date1 = new Date(start)
      this.diffEnd = Math.abs((this.date3.getTime() - this.date2.getTime()) / this.msDay)
      this.diffAll = this.date1.getTime() - this.date2.getTime()
      this.diffStart = Math.abs((this.date1.getTime() - this.date3.getTime()) / this.msDay)
      if (this.diffEnd > 15) {
        alert("Latest date can be maximum 15 days later than today")
        location.reload()
      } else if (this.diffAll >= 0) { // to check departure day is earlier than return day
        alert("Departure date should be earlier than return date")
        location.reload()
      }
    }
  }
}
export default diff