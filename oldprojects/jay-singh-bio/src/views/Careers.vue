<template>
    <main>
        <section class="col">
            <h1>{{heading}}</h1>
        </section>
        <section v-for="job in jobs" class="row" v-bind:key="job">
            <aside>
                <h2>{{job.company}}</h2>
                <figure v-if="job.type === 'pic'">
                    <img v-bind:src="pics[job.index-1].path" v-bind:alt="pics[job.index-1].alt">
                    <figcaption>{{pics[job.index-1].caption}}</figcaption>
                </figure>
                <video v-else-if="job.type === 'video'" muted height="200" width="300" autoplay>
                    <source v-bind:src="videos[job.index-1].mp4VideoPath" type="video/mp4">
                    <source v-bind:src="videos[job.index-1].oggVideoPath" type="video/ogg">
                </video>
            </aside>
            <p>{{job.data}}</p>
        </section>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                heading: 'Career',
                jobs:[
                    //With Pics
                    {company: 'Brightcove, Inc', type: 'pic', index: '1', data: 'Since I had recognized my passion for computer systems and engineering at a young age, I utilized my undergraduate career to gain practical knowledge through a short term internship at Brightcove, Inc. This foundational experience taught me the dynamics of the industry and gain key information in key functions such as generating scripts for tasks and solving consumer cases.' },

                    //Just Text
                    {company: 'MFS Investment Management',type: 'justText',data: 'After that, I gained additional meaningful experience in MFS Investment Management where I learned more about automation quality and control to develop scripts and develop better solutions for customers.'},
                    // For testing only {company: 'Dunkin Donuts',type: 'justText', data: 'Dunkin\' Donuts, officially known since 2019 as simply Dunkin\', is an American multinational coffeehouse and donut company. It was founded by William Rosenberg in Quincy, Massachusetts in 1950.'},

                    //With Video
                    // {company: 'Fuze, Inc.',type: 'video',index: '1',data:'After the end of my undergraduate career, I started my full time professional career as a Support Engineer at Fuze. I am currently an Escalation Engineer where I am responsible for creating wep apps and prioritizing customer needs to resolve technical issues.'}

                ],
                pics:[
                    {path: require('../assets/images/brightcove_career.png'),alt: 'Brightcove, Inc Logo', caption:'Brightcove, Inc Logo'}
                ],
                // videos:[
                //     {mp4VideoPath: require('../assets/videos/fuze-app-video.mp4'),oggVideoPath: require('../assets/videos/fuze-app-video.ogg')}
                // ],
                footer: '2020 Jay Singh',
                print: 'Printed from jaysingh.net'
            };
        }
    }
</script>

<style src="../css/main.css"></style>
