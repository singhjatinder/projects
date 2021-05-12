<template>
  <main>
    <section class="col">
      <h1 v-once>{{ greeting }}</h1>
    </section>
    <section class="row">
      <aside>
        <figure v-for="welcomePic in welcomePics" v-bind:key="welcomePic">
          <img :src="welcomePic.path" :alt="welcomePic.alt">
          <figcaption>{{welcomePic.caption}}</figcaption>
        </figure>
      </aside>
      <section>
        <p>
          <em><q>{{quote}}</q></em>
          <br>
          <strong>{{quoteAuthor}}</strong>
        </p>
      </section>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//

export default {
  data () {
    return {
      greeting: 'Welcome!!!',
      welcomePics: [
        { path:require('../assets/images/jaysingh_welcome.png'), alt: 'Jatinder Singh Profile Pic', caption: 'Jatinder Singh'}
      ],
      quote: 'Your time is limited, so don\'t waste it living someone else\'s life.' +
              ' Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
      quoteAuthor: '-Steve Jobs',
      footer: "2020 Jay Singh",
      print: 'Printed from jaysingh.net'
    };
  }

  // components: {
  //   HelloWorld
  // }
}
</script>

<style src="../css/main.css"></style>
