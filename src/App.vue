<template>
  <div id="app">
    <nav>
      <li><router-link to="/"><img src="../src/assets/home.svg" alt=""></router-link></li>
      <li><router-link to="Tools"><img src="../src/assets/repair-tools.svg" alt=""></router-link></li>
      <li><router-link to="Portfolio"><img src="../src/assets/artistic-brush.svg" alt=""></router-link></li>
      <li><img src="../src/assets/man-user.svg" alt=""></li>
      <li><router-link to="Contact"><img src="../src/assets/envelope.svg" alt=""></router-link></li>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  nav{
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    background: #2e8b57;
    height: 100vh;
    margin: 0;
    padding: 0;
    color: #ffffff;
    list-style: none;
    font-weight: bold;
    padding-top: 50px;
  }
  nav li{
    display: block;
    margin-bottom: 60px;
    padding: 5px;
  }
  nav li:hover{
    background: #333333;
    transition: .3s;
  }
  body{
    margin: 0;
    margin-left: 60px;
    background: #fff;
  /*  background: url("../src/assets/grey-triangle.svg");
    background-size: cover;
    */
  }
  nav li img{
    width: 60%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 440px){
    nav{
      width: 40px;
    }
    body{
      margin-left: 0;
    }
  }
</style>
