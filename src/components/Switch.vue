<template>
    <v-app>
        <v-switch
              v-model="switch1"
              color="red"
        ></v-switch>
       
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                switch1: false
            }
        },
    }
</script>

<style scoped>
    .v-application{
        display: inline-block;
        background-color: #FFCA00;
    }
    .v-application--wrap{
        max-width: initial;
    }


</style>
