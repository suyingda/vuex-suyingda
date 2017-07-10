<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
<template>
  <div id="app">
<Hello></Hello>
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
 import Hello from './components/Hello'
export default {
  components:{
    Hello
  },
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
