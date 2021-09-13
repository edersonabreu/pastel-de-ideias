<template>
    <div class="header">
        <v-container>
            <div class="header-content">
                <div class="content-logo">
                    <img src="../assets/imgs/logo-pastel-de-ideias.svg" alt="">
                </div>
                <div class="pastel-fixed"></div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {

    }
</script>
<style>
    .header{
        overflow: hidden;
        background-image: url('../assets/imgs/header-bordered.png');
        height: 545px;
        background-size: cover;
        margin-bottom: -200px;
        width: 100%;
        position: fixed;
    }
    .header .header-content{
        position: relative;
    }
    .header .header-content .content-logo{
        padding: 60px 0 0 0;
        text-align: center;
    }
    .header .header-content .pastel-fixed{
        position: absolute;
        right: 0;
        bottom: -165px;
        height: 240px;
        width: 310px;
        z-index: 2;
        background-size: contain;
        background-position: center;
        background-image: url('../assets/imgs/pasteis-img.png');
    }
    .header .header-content .content-logo img{
        max-width: 736px;
        height: auto;
    }
    @media (min-width: 1920px) and (max-width: 2560px)  {
         .header .header-content .pastel-fixed{
            right: 20%;
            bottom: -180px;
         }
    }
</style>


