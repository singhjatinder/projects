
<template>
  <!--    Grid Container-->
  <div class="container">
    <!--        Time Section-->
    <div class="time">
      <h1>Current Time</h1>
      <h2>{{time}}</h2>
      <h2>{{day}}</h2>
    </div>

    <!--        Weather Section-->
    <div class="info">
      <h1>Weather</h1>
      <h2>Current Temp: {{temp}}&deg;F</h2>
      <img :src="icon" alt="weatherIcon">
      <span>**Refreshes every min once loaded**</span>
      <ul>
        <li>Min Temp: {{minTemp}}&deg;F</li>
        <li>Max Temp: {{maxTemp}}&deg;F</li>
        <li>Humidity: {{humidity}}%</li>
        <li>Description: {{desc}}</li>
      </ul>
    </div>
    <div class="course">
      <section v-for="row in result" class="row" v-bind:key="row">
        <h2>{{row.courseID}} - {{row.courseName}}</h2>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  data() {
    return {
      //Weather Details
      dataURL: process.env.VUE_APP_WEATHER_URL,
      coursesURL: process.env.VUE_APP_COURSE_URL,
      temp: '',
      minTemp: '',
      maxTemp: '',
      humidity: '',
      desc:'',
      icon:'',
      day:'',
      posts: [],
      result: '',
      // time
      time: '',
    }
  },
  created() {
    // Fetch Data
    this.fetchData();
    this.updateTime();
    this.fetchCourses();
    setInterval(this.fetchData, 60000);
    setInterval(this.updateTime, 1000);
  },
  computed:{

  },
  methods: {
    updateTime: function(){
      let date = new Date();
      let hours = date.getHours().toString();
      let mins = date.getMinutes().toString();
      let secs = date.getSeconds().toString();
      let month = (date.getMonth()+1).toString();
      let day = date.getDate().toString();
      let mode = "am";

      if (Number.parseFloat(hours) > 12){
        hours = Number.parseFloat(hours)-12;
        mode="pm";
      }
      if(hours.length < 2){
        hours = 0 + hours;
      }
      if(mins.length < 2){
        mins = 0 + mins;
      }
      if(secs.length < 2){
        secs = 0 + secs;
      }
      this.day = month + '/' +day;
      this.time = hours + ':' + mins + ':' + secs + ' ' + mode;
    },
    fetchData: function() {
      axios.get(this.dataURL).then(response => {
        //Temp
        this.temp = response.data.main.temp;
        this.minTemp = response.data.main.temp_min;
        this.maxTemp = response.data.main.temp_max;
        this.humidity = response.data.main.humidity;

        //Other details about weather
        this.desc = response.data.weather[0].description;
        this.icon = "http://openweathermap.org/img/wn/"+ response.data.weather[0].icon+"@2x.png";

        // this.posts = response.data;
        console.log(response);
      });
    },
    fetchCourses: function() {
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      axios.get(this.coursesURL).then(response => {
        this.result = response.data;

        // this.posts = response.data;
        console.log(response);
      });
    }
  }
}
</script>

<style>
.container{
  display: grid;
  grid-template-columns: 400px auto 400px;
  grid-template-rows: 200px 400px 200px;
  margin: 20px;
}
.time{
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  justify-self: center;
  align-self: center;
  text-align: center;
}
.info{
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  justify-self: center;
  align-self: center;
  text-align: center;
}

.course{
  grid-column: 2 / 2;
  grid-row: 3 / 3;
  justify-self: center;
  align-self: center;
  text-align: center;
}

.container, .info, .time {
  background: none;
}
ul li{
  display: grid;
}

h1, h2{
  padding: 0;
  margin: 10px 0;
  text-align: center;
}

h2 img{
  padding: 0;
  margin: 0;
  width: 100px;
  height: 100px;
}
</style>