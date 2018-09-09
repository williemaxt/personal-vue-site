<template>
  <div>
    <section class="top">
      <h1>{{title}}</h1>
      <h3>{{details}}</h3>
      <input v-model="title" type="text">
      <br>
      <button v-on:click="visibility = true" id="openBtn">Unlock Info</button>
      <Modal id="modal" v-show="toggle"></Modal>
    </section>
  </div>
</template>

<script>
    import Modal from '@/components/Modal'
    export default {
        name: "Contact",
      data(){
        return{
          title:'Get In Contact',
          details:"Before you see my details...Enter your email below so I know you're human",
          visibility: false
        }
      },
      components:{
          Modal
      }
    }
</script>

<style scoped>
  .top{
    min-height: 90vh;
    padding-top: 10vh;
    background: #c0c0c0;
    background: url("../assets/purple.svg");
    background-size: cover;
  }
  h1{
    margin-top: -35px;
    color: #ffffff;
    font-size: 10em;
  }
  h3{
    font-size: 2em;
  }
  input{
    max-width: 500px;
    width: 90%;
    height: 50px;
    font-size: 2em;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 0 10px #333;
  }
  button{
    margin-top: 20px;
    width: 300px;
    height: 50px;
    font-size: 2em;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #2e8b57;
    color: #ffffff;
    font-weight: bold;
    transition: .3s;
  }
  button:hover{
    color: #2e8b57;
    background: #ffffff;
    transition: .3s;
  }
  #modal{
    visibility: visible;
  }
</style>
