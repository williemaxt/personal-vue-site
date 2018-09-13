<template>
  <div>
    <section class="top">
      <h1>{{title}}</h1>
      <h3>{{details}}</h3>
    </section>
    <ul>
      <PortfolioItem></PortfolioItem>
    </ul>
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
  @media screen and (max-width: 750px){
    h1{
      font-size: 8em;
    }
  }
  @media screen and (max-width: 620px){
    h1{
      font-size: 5em;
    }
  }
  @media screen and (max-width: 470px){
    h1{
      font-size: 3em;
      margin-left: 40px;
    }
    h3{
      font-size: 1.5em;
      margin-left: 40px;
    }
  }
</style>
