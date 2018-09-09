<template>
    <div v-show='toggle'>
      <section id="left">
        <h2>{{name}}</h2>
        <img src="../assets/creator.jpg" alt="">
        <p><span>Specialization:</span> {{position}}</p>
        <p><span>Age:</span> {{age}}</p>
      </section>
      <section id="right">
        <h2>{{title2}}</h2>
        <p><span>Email:</span> {{email}}</p>
        <p><span>Phone:</span> {{phone}}</p>
        <p><span>GitHub:</span> <a v-bind:href="github">williemaxt</a></p>
        <p><span>LinkedIn:</span> <a v-bind:href="linkedin">William Thompson</a></p>
        <p><span>Business:</span> <a v-bind:href="business">611 Solutions, LLC</a></p>
      </section>
      <img id="close" src="../assets/cancel.svg" alt="" @click='toggle = !toggle'>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data(){
          return{
            title: 'My Contact Info',
            name: 'William Thompson',
            position: 'FullStack Developer',
            age: 21,
            title2: 'My Info',
            email: 'williemaxt@gmail.com',
            phone: '215-824-5998',
            github: 'https://github.com/williemaxt',
            linkedin: 'https://www.linkedin.com/in/william-thompson-a0039b123/',
            business: 'http://www.611solutions.com',
            toggle: true
          }
        }
    }
</script>

<style scoped>
div{
  max-width: 700px;
  width: 90%;
  height: 50vh;
  display: block;
  margin: 0 auto;
  background: url("../assets/blue-green.svg");
  position: relative;
  top: -35vh;
  left: 0;
  z-index: 3;
  border-radius: 5px;
  box-shadow: 0 0 50px #333;
}
  h1{
    background: #2e8b57;
    margin: 0;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    color: #ffffff;
  }
  img{
    width: 100%;
    border-radius: 50%;
    border: 5px solid #2e8b57;
  }
  #left{
    width: 40%;
    height: 100%;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
#right{
  width: 45%;
  height: 100%;
  float: right;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  text-align: left;
}
  span{
    font-weight: bold;
  }
  a{
    text-decoration: none;
    color: #fff;
    background: #2e8b57;
    padding: 5px;
    border-radius: 3px;
    font-weight: bold;
    box-shadow: 0px 0px 2px #333;
  }
  a:hover{
    box-shadow: 0px 0px 10px #333;
    transition: .2s;
  }
  #close{
    width: 50px;
    height: auto;
    border: none;
    position: relative;
    top: -80px;
    left: 320px;
    z-index: 3;
  }

  @media srceen and (max-width: 668px){
    #left{
      float: none;
      width: 100%;
    }
    #right{
      float: none;
      width: 100%;
      display: block;
    }
  }
</style>
