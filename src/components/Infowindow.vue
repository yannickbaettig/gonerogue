<template>
    <div class="infowindow">
         <div class = "name">
          <h3> {{place.fields.name}}</h3>
             </div>
        
        <img class = "rating" v-bind:src="rating">
        <div class ="image"> <img v-bind:src=place.fields.photos[0].fields.file.url /> </div>

        <div class ="description">{{place.fields.description}}</div>
        <div class="skip-btn" v-on:click="$emit('skip')">SKIP</div>
        <div class = "close" v-on:click="$emit('closeInfowindow')"></div>
    </div>
</template>

<script>
    export default {
        name: 'infowindow',
        data: function(){
            return {
                rating: ""
                
                }
            
        },
        props: {
            place: Object
        },
        methods: {
        },
        mounted (){
            console.log(this.place.fields.rating);
            if (this.place.fields.rating===1){
                this.rating=require("../assets/level1.svg")
            }
            if (this.place.fields.rating===2){
                this.rating=require("../assets/level2.svg")
            }
            if (this.place.fields.rating===3){
                this.rating=require("../assets/level3.svg")
            }
        }
    }
</script>

<style scoped lang="scss">
    .infowindow {
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: rgba(29, 31, 54, 0.9);
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 10% 20% 40% 10% 10% 10%;
     .name {
         color: white;
         background-color: $background-title;
         border: 3px solid rgba(255, 255,255,0.8);
         border-radius: 3px;
         display: flex;
         justify-content: center;
         align-content: center;

         h3 {
             display: flex;
             align-self: center;
             justify-self: center;
         }
    }   
    .image {
        max-width: 100%;
        height: auto;

        img{
            height: 90%;
        }
    }
    .rating {
        width: 100%;
        height: 50%;
        display: flex;
        justify-self: center; 
        align-self: center;
    }
    .description {
        color: white;
    }
    .close {
        background-image: url("../assets/delete.svg");
        width: 50px;
        height: 50px;
        display: flex;
        justify-self: center; 
        align-self: center;

    }

     .skip-btn {
         //width: 40px;
         //height: 40px;
         display: flex;
         justify-self: center;
         align-self: center;  
         align-items: center;
         justify-items: center;
         border: 2px solid $accent_color_one;
         //background-color: $accent_color_one;
         color: white;
         border-radius: 100px;
         padding: 16px 48px;
         cursor: pointer;
     }



    }
    



</style>