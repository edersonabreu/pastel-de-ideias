  
<template>
    <div class="main">
        <div class="pasteis">
            <Form />
        </div>
        <div class="parallax-item"></div>
    </div>
</template>
<script>

    import Form from '../components/Form.vue'

    export default {
        components:{
            Form
        }
    }
    
    var fixed = {yparallax: false, xparallax: false};

    $('.main .parallax-item').parallax(fixed,
        {xparallax: -0.3, width: 100, height: 100, decay: 0.85},
        fixed,
        {xparallax: '50px', decay: 0.85}
    );
    
</script>

<style scoped>
    .main{
        padding: 400px 0 120px 0;
        background-image: url('../assets/imgs/cover-page.png');
        background-repeat: repeat;
        background-position: center;
    }
    .parallax-item{
        position: absolute;
        background-image: url('../assets/imgs/pastel-paralax.png');
        left: 10%;
        top: 15px;
        height: 395px;
        width: 395px;
        background-position: center;
        background-size: cover;
        
    }
    @media (min-width: 1920px) and (max-width: 2560px)  {
        .parallax-item{
            top: 80px;
        }
    }
</style>