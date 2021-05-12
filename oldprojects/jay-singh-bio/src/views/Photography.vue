<template>
    <main>
        <section class="row rowWidth">
            <figure v-for="welcomePic in welcomePics" v-bind:key="welcomePic">
                <img class="pics" v-bind:src="welcomePic.path" @click="enlarge(welcomePic.path,welcomePic.alt,welcomePic.caption)" v-bind:alt="welcomePic.alt">
                <figcaption>{{welcomePic.caption}}</figcaption>
            </figure>
        </section>
        <div v-if="isEnlarge" v-bind:class="class1" >
            <span class="options" @click="close()">X</span>
            <span class="options2" @click="back()">PREV</span>
            <span class="options3" @click="next()">NEXT</span>
            <figure class="col">
                <figcaption>{{enlargeCap}}</figcaption>
                <img class="modal-pic" v-bind:src="enlargeSrc" v-bind:alt="enlargeAlt">
            </figure>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                isEnlarge: false,
                enlargeSrc: '',
                enlargeAlt:'',
                enlargeCap:'',
                class1:'viewModel',
                welcomePics:[
                    {path: require('../assets/images/gallery/gallery1.jpg'),alt: 'Jay Singh - Photography Pic 1', caption:'Jay Singh - Photography Pic 1'},
                    {path: require('../assets/images/gallery/gallery2.jpg'),alt: 'Jay Singh - Photography Pic 2', caption:'Jay Singh - Photography Pic 2'},
                    {path: require('../assets/images/gallery/gallery3.jpg'),alt: 'Jay Singh - Photography Pic 3', caption:'Jay Singh - Photography Pic 3'},
                    {path: require('../assets/images/gallery/gallery4.jpg'),alt: 'Jay Singh - Photography Pic 4', caption:'Jay Singh - Photography Pic 4'},
                    {path: require('../assets/images/gallery/gallery5.jpg'),alt: 'Jay Singh - Photography Pic 5', caption:'Jay Singh - Photography Pic 5'},
                    {path: require('../assets/images/gallery/gallery6.jpg'),alt: 'Jay Singh - Photography Pic 6', caption:'Jay Singh - Photography Pic 6'},
                    {path: require('../assets/images/gallery/gallery7.jpg'),alt: 'Jay Singh - Photography Pic 7', caption:'Jay Singh - Photography Pic 7'},
                    {path: require('../assets/images/gallery/gallery8.jpg'),alt: 'Jay Singh - Photography Pic 8', caption:'Jay Singh - Photography Pic 8'},
                    {path: require('../assets/images/gallery/gallery9.jpg'),alt: 'Jay Singh - Photography Pic 9', caption:'Jay Singh - Photography Pic 9'},
                    {path: require('../assets/images/gallery/gallery10.jpg'),alt: 'Jay Singh - Photography Pic 10', caption:'Jay Singh - Photography Pic 10'}
                ],
                footer: '2020 Jay Singh',
                print: 'Printed from jaysingh.net'
            };
        },
        methods:{
            enlarge: function(src,alt,cap){
                this.enlargeSrc = src;
                this.enlargeAlt = alt;
                this.enlargeCap = cap;
                this.isEnlarge = true;
            },
            close: function () {
                this.enlargeSrc = '';
                this.isEnlarge = false;
            },
            next: function () {
                //find index of the current pic
                let index = this.welcomePics.findIndex(x => x.path === this.enlargeSrc);
                //set details for the next pic
                this.enlargeSrc = this.welcomePics[(index+1)%(this.welcomePics.length)].path;
                this.enlargeAlt = this.welcomePics[(index+1)%(this.welcomePics.length)].alt;
                this.enlargeCap = this.welcomePics[(index+1)%(this.welcomePics.length)].caption;
            },
            back:function () {
                //find index of the current pic
                let index = this.welcomePics.findIndex(x => x.path === this.enlargeSrc);
                //set details for the previous pic
                this.enlargeSrc = this.welcomePics[(index-1+this.welcomePics.length)%(this.welcomePics.length)].path;
                this.enlargeAlt = this.welcomePics[(index-1+this.welcomePics.length)%(this.welcomePics.length)].alt;
                this.enlargeCap = this.welcomePics[(index-1+this.welcomePics.length)%(this.welcomePics.length)].caption;
            }
        }
    }
</script>

<style src="../css/main.css"></style>
<style src="../css/photo.css"></style>
