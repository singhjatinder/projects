<template>
  <main>
    <section class="col">
      <h1>{{heading}}</h1>
    </section>
    <section class="row">
      <figure v-for="welcomePic in welcomePics" v-bind:key="welcomePic">
        <img v-bind:src="welcomePic.path" v-bind:alt="welcomePic.alt">
        <figcaption>{{welcomePic.caption}}</figcaption>
      </figure>
      <aside>
        <h2>{{subHeading}}</h2>
        <table>
          <tr v-for="row in rows" v-bind:key="row">
            <th>{{row.heading}}</th>
            <td v-if="row.valueType === 'text'">{{justText[row.valueIndex]}}</td>
            <td v-else-if="row.valueType === 'link'"><a v-bind:href="singleLink[row.valueIndex].link" target="_blank">{{singleLink[row.valueIndex].data}}</a></td>
            <td v-else-if="row.valueType === 'multiplelinks'">
              <ul>
                <li v-for="eachLink in listLink[row.valueIndex]" v-bind:key="eachLink"><a v-bind:href="eachLink.link" target="_blank">{{eachLink.data}}</a></li>
              </ul>
            </td>
          </tr>
        </table>
      </aside>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        heading: 'About',
        subHeading: 'Quick Details',
        welcomePics:[
          {path: require('../assets/images/jaysingh_about.jpg'),alt: 'Jay Singh Friends - About', caption:'Jay @ Friend\'s Showcase'}
        ],
        rows:[
          //{heading:'', valueType:'', valueIndex:''},
          {heading:'Name', valueType:'text', valueIndex:'0'},
          {heading:'Date Of Birth', valueType:'text', valueIndex:'1'},
          {heading:'Nationality', valueType:'text', valueIndex:'2'},
          {heading:'Background', valueType:'text', valueIndex:'3'},
          {heading:'Profession', valueType:'text', valueIndex:'4'},
          {heading:'Height', valueType:'text', valueIndex:'5'},
          {heading:'Eye Color', valueType:'text', valueIndex:'6'},
          {heading:'Hair Color', valueType:'text', valueIndex:'7'},

          //singlelink
          {heading:'Residence', valueType:'link', valueIndex:'0'},
          {heading:'Employer', valueType:'link', valueIndex:'1'},
          {heading:'Birth', valueType:'link', valueIndex:'2'},

          //multiple links
          {heading:'School(s)', valueType:'multiplelinks', valueIndex:'0'},
          {heading:'College', valueType:'multiplelinks', valueIndex:'1'}

        ],
        justText:[
          'Jatinder Singh',
          'September 26th, 1993',
          'American & Australian',
          'Indian subcontinent',
          'Escalation Engineer',
          '6ft',
          'Dark Brown',
          'Black'
        ],
        singleLink:[
          // {link:'',data:''}
          {link:'https://www.google.com/maps/place/Boston,+MA/',data:'Boston, M.A'},
          {link:'https://www.fuze.com/',data:'Fuze, Inc.'},
          {link:'https://www.google.com/maps/place/Punjab,+India/',data:'Punjab, India'}
        ],
        listLink:[
          [{link:'https://www.google.com/maps/place/SD+Model+Senior+Secondary+School,+Bansawala+Bazar,+Phagwara,+Punjab+144401,+India/',data:'SD Model Senior Secondary School (India)'},
            {link:'https://blacktowns-p.schools.nsw.gov.au/content/doe/sws/schools/b/blacktowns-p/www.html',data:'Blacktown South Public School (Australia)'},
            {link:'https://mitchell-h.schools.nsw.gov.au/',data:'Mitchell High School (Australia)'},
            {link:'https://somerville.k12.ma.us/schools/somerville-high-school',data:'Somerville High School (USA)'}],
          [{link:'https://wit.edu/',data:'Wentworth Institute of Technology(Undergraduate)'},
            {link:'https://www.bu.edu/',data:'Boston University(Graduate)'}]
        ],
        footer: '2020 Jay Singh',
        print: 'Printed from jaysingh.net'
      };
    }
  }
</script>

<style src="../css/main.css"></style>
