<template>
    <p id="data"> MAIN</p>
</template>
<script>
export default {
    name: 'test',
  data() {
    return {
      dataURL: 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02',
      posts: [] // initialize empty array
    }
  },
  mounted() {
    $.getJSON(this.dataURL, json => {
        let myArray = JSON.parse(json.data).weather;
        if(Array.isArray(myArray)){
            myArray.forEach((element) => {
                document.getElementById("data").innerHTML += element.main;
            });
        }
    })
  }
}
</script>

