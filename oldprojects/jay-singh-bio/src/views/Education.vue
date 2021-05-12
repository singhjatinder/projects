<template>
    <main>
        <section class="col">
            <h1>{{heading}}</h1>
        </section>
        <section v-for="row in rows" class="row" v-bind:key="row">
            <aside>
                <h2>{{row.company}}</h2>
                <figure v-if="row.type === 'pic'">
                    <img v-bind:src="pics[row.index-1].path" v-bind:alt="pics[row.index-1].alt">
                    <figcaption>{{pics[row.index-1].caption}}</figcaption>
                </figure>
            </aside>
            <p>{{row.data}}</p>
        </section>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                heading: 'Education',
                rows:[

                    //Just Text
                    {company: 'High School Diploma',type: 'justText',data: 'Throughout my life in three different continents, I was able to study in multiple schools and learn various teaching styles as well as education systems. In my early years in India, I studied at SD Model School where I completed my primary education. After finishing my middle school and part of high school in Australia, I finished my high school career in Somerville High School.'},

                    //With Pics
                    {company: 'Bachelors', type: 'pic', index: '1', data: 'By then, my passion for computers and the IT field prompted me to enroll in Wentworth Institute of Technology in Boston MA. Through this undergraduate career, I gained extensive knowledge in Computer engineering field which helped cement my professional career.' },
                    {company: 'Masters', type: 'pic', index: '2', data: 'To further pursue my passion and expertise, I am currently studying at Boston University to complete my graduate studies in Computer Information Systems with concentration in Web Application Development.' }
                ],

                pics:[
                    {path: require('../assets/images/Wentworth_by_Stoltze_Design.jpg'),alt: 'WIT Logo by Stoltze Design', caption:'WIT Logo by Stoltze Design'},
                    {path: require('../assets/images/bu_by_Boston_University.png'),alt: 'BU LOGO', caption:'Boston University Logo by Boston University'}
                ],

                footer: '2020 Jay Singh',
                print: 'Printed from jaysingh.net'
            };
        }
    }
</script>

<style src="../css/main.css"></style>
