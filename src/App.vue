<template>
  <div>
    <Header/>
    <Pasteis/>
  </div>

</template>

<script>

import Pasteis from './pages/Pasteis.vue';
import Header from './components/Header.vue';
export default {

  components: { 
      Pasteis,
      Header 
  },

  name: 'app',

}
</script>
<style>
  *{
        font-family: 'Roboto', sans-serif;
    }
</style>


