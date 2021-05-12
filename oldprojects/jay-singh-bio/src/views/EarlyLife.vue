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
                heading: 'Early Life',
                rows:[
                    //With Pics
                    {title: 'Born in Punjab,India', type: 'pic', index: '1', data: 'Since my birth in 1993, I have been able to live in three different continents: South Asia, Australia and North America. Due to my exposure to a myriad of cultures, I quickly became an individual who thrived in diversity and differences of opinion. In my early years in India, I was able to experience a fast paced life in a middle class family. My modest roots and a passion for all things new helped my transition when I moved to Australia in 2004.' },
                    {title: 'Australia', type: 'pic', index: '2', data: 'Going to Australia as a young boy at age 11, I was able to grow and adapt to the western culture through integration in the Australian lifestyle. I made friends quickly and enjoyed playing outdoors during hot days in Australian summer. Furthermore, the passion for cricket in both countries allowed me to pursue the sport in my teenage years. It is through this experience that I learned key skills in life such as team work, collaboration and working towards a common goal.' },
                    {title: 'USA', type: 'pic', index: '3', data: 'In 2010, I moved to US with my family. The move to US was definitely a life changing event as it exposed me to a more capital society and made me learn key skills about free marketplace. Through my experience in Boston, I grew as an individual and as a professional as the place introduced me to a newer pace in life which in turn helped me drive become a more driven and focused individual.' },
                ],
                pics:[
                    {path:require('../assets/images/punjab_india_by_filpro.png'),alt: 'Punjab, India by Filpro', caption:'Punjab, India by Filpro'},
                    {path:require('../assets/images/australia_by_NordNordWest.png'),alt: 'Australia by NordNordWest', caption:'Australia by NordNordWest'},
                    {path:require('../assets/images/usa_by_Uwe_dedering.png'),alt: 'USA by Uwe Dedering', caption:'USA by Uwe Dedering'}
                ],
                footer: '2020 Jay Singh',
                print: 'Printed from jaysingh.net'
            };
        }
    }
</script>

<style src="../css/main.css"></style>
