<template>
  <div>
    <div class="imgHeader">
      <h1>{{name}}</h1>
      <img src="../assets/creator.jpg" alt=""/>
      <p>{{msg}}</p>
      <HorizontalList></HorizontalList>
    </div>
  </div>
</template>

<script>
  import HorizontalList from '@/components/HorizontalList'
export default {
  name: 'Home',
  data () {
    return {
      name: 'William Thompson',
      image: '../src/assets/creator.jpg',
      msg: 'A versatile & talented full-stack developer'
    }
  },
  components:{
    HorizontalList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    height: 30vh;
    width: auto;
    border: 5px #ffffff solid;
    border-radius: 50%;
  }
  .imgHeader{
    min-height: 100vh;
    background: url("../assets/green-triangle.svg");
    background-size: cover;
    color: #ffffff;
    font-weight: bold;
    padding-top: 0px;
  }
  .imgHeader h1{
    margin: 0;
    margin-top: -5px;
    font-size: 10em;
  }
  p{
    font-size: 2em;
  }
</style>
