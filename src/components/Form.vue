<template>
  <div class="form-box">
    <form class="form-area" @submit.prevent="bring()">
      <div class="form-label">
        <label for="startDate">Date of Departure</label>
        <input
          id="startDate"
          type="date"
          name="input-start"
          value
          placeholder="Starting Date"
          v-model="startDate"
        />
        <label for="endDate">Date of Return</label>
        <input
          id="endDate"
          type="date"
          name="input-end"
          value
          placeholder="Ending Date"
          v-model="endDate"
        />
        <label for="loc">Destination (City)</label>
        <input
          id="loc"
          type="text"
          name="input-location"
          value
          placeholder="Destination"
          v-model="loc"
        />
      </div>
      <Button ButtonText="Bring!" @click.prevent="bring()" value="submit" />
    </form>
    <div class="UI-zone">
      <div class="info-zone">
        <div
          v-for="item in selectedDates.length"
          :key="item.id"
          class="item-text"
        >Day-{{ item }}) Date: {{selectedDates[item-1]}} Avg Temp: {{selectedTemp[item-1]}}°C Overall: {{selectedText[item-1]}}</div>
        <br />
        <div v-if="selectedLoc" class="selectedloc-text">Data Location: {{selectedLoc}}</div>
        <br />
        <div v-if="diffDays" class="diffdays-text">{{diffStart}} days remaining for your journey!</div>
      </div>
      <div class="image-zone">
        <img v-if="locImage" :src="locImage" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import axios from "axios";
import diff from "@/mixins/diff.js";
import getWeather from "@/mixins/getWeather.js";
import getImage from "@/mixins/getImage.js";
import checkInput from "@/mixins/checkInput.js";

export default {
  mixins: [diff, getWeather, getImage, checkInput],
  data() {
    return {
      username: "levent91",
      startDate: "",
      endDate: "",
      loc: "",
      coordLat: "",
      coordLng: ""
    };
  },
  name: "Section",
  components: {
    Button
  },
  methods: {
    bring() {
      this.diff(this.startDate, this.endDate);
      this.checkInput(this.startDate, this.endDate, this.loc);
      axios
        .get(
          "http://api.geonames.org/searchJSON?name=" +
            this.loc +
            "&maxRows=1&username=" +
            this.username
        )
        .then(response => {
          this.coordLat = response.data.geonames[0].lat;
          this.coordLng = response.data.geonames[0].lng;
          this.getWeather(
            this.coordLat,
            this.coordLng,
            this.endDate,
            this.diffDays
          );
          this.getImage(this.loc);
        })
        .catch(error => {
          console.log(error);
          alert("Please enter a valid location");
          location.reload();
        })
        .then(() => {
          this.dateMax(this.today, this.endDate, this.startDate);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-zone {
  font-size: 1rem;
  color: #dff9fb;
  margin-right: 2rem;
}
img {
  width: 100%;
  max-width: 30rem;
  height: auto;
  opacity: 0.5;
  border-radius: 8px;
}

.UI-zone {
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  padding: 4rem;
}

.form-box {
  text-align: center;
  color: #dff9fb;
  margin: 2rem;
}

.form-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  margin: 0.5rem auto;
  padding: 0.3rem;
  border-radius: 2px;
  border: 0;
  max-width: 30rem;
  width: 90%;
}

#loc {
  padding: 0.4rem;
  margin: 0.5rem auto;
  max-width: 30rem;
  width: 90%;
}

@media only screen and (max-width: 880px) {
  .item-text {
    font-size: 0.9rem;
  }
  .selectedloc-text {
    font-size: 0.9rem;
  }
  .diffdays-text {
    font-size: 0.9rem;
  }
  .UI-zone {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  img {
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 588px) {
  .form-box {
    margin: 2rem 0;
  }
  .item-text {
    font-size: 0.85rem;
  }
  .selectedloc-text {
    font-size: 0.85rem;
  }
  .diffdays-text {
    font-size: 0.85rem;
  }
  .UI-zone {
    text-align: left;
  }
}
</style>