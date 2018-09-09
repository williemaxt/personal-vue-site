<template>
  <div>
    <section class="top">
      <h1>{{title}}</h1>
      <h3>{{details}}</h3>
    </section>
    <PortfolioItem></PortfolioItem>
  </div>
</template>

<script>
  import PortfolioItem from '@/components/PortfolioItem'
  import Modal from '@/components/Modal'
    export default {
        name: "Portfolio",
        data(){
          return{
            title: 'Portfolio',
            details: 'See some of my work'
          }
        },
      components: {
        PortfolioItem
      }
    }
</script>

<style scoped>
  .top{
    min-height: 70vh;
    padding-top: 30vh;
    background: #c0c0c0;
    background: url("../assets/rainbow.svg");
    background-size: cover;
  }
  h1{
    margin-top: 0;
    color: #ffffff;
    font-size: 10em;
  }
  h3{
    font-size: 2em;
  }
</style>
