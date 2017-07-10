<template>
  <div id="app">
  <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="ad">
    <input type="button" value="偶数点击" @click="aaa">
    <input type="button" value="异步" @click="bbb">
  <div>
   <!--  现在数字为： {{$store.state.count}} -->
   now Number；{{count}} {{Promise}}
  </div>
  </div>
</template>

<script>
 
 import {mapGetters,mapActions} from 'vuex';
export default {
    data(){        
    return {
          aa:this.$store.count
    }
    },      
  computed:mapGetters([
        'count',
        'Promise'
    ]),
  methods:mapActions([
        'increment',
        'ad',
        'aaa',
        'bbb'
    ]),  
}
</script>

<style>
 
</style>
