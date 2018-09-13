<template>
    <div>
      <li v-for="project in projects" :class="project.projectImage">
        <h1 :class="project.projectImage">{{project.projectName}}</h1>
        <img src="../assets/code-terminal.svg" alt="">
        <p>{{project.description}}</p>
        <br>
        <a :href="project.projectUrl"><button name="button">Check It Out</button></a>
      </li>
    </div>
</template>

<script>
    export default {
        name: 'PortfolioItem',
        data(){
          return{
            projects:[
              {
                projectName: 'DriveTime',
                description: 'Shift Managing App For Trucking Companies',
                projectImage: 'orange',
                projectUrl: 'https://github.com/williemaxt/drivetime'
              },
              {
                projectName: '611 Solutions',
                description: 'Shift Managing App For Trucking Companies',
                projectImage: 'green',
                projectUrl: 'http://www.611solutions.com'
              },
              {
                projectName: 'Cafe Hound',
                description: 'An android for finding coffee anywhere',
                projectImage: 'orange',
                projectUrl: 'https://github.com/williemaxt/Cafe-Hound'
              },
              {
                projectName: 'Kala',
                description: 'Shift Managing App For Trucking Companies',
                projectImage: 'green',
                projectUrl: 'https://bookafade2.firebaseapp.com/#/'
              },
              {
                projectName: '4EZ Media',
                description: 'A website Created for a photography Company',
                projectImage: 'orange',
                projectUrl: 'http://www.4ezmedia.com'
              },
              {
                projectName: 'Atilla Browser',
                description: 'A simple web browser made in electron framework',
                projectImage: 'green',
                projectUrl: 'https://github.com/williemaxt/Atilla-Web-Browser'
              },
              {
                projectName: 'JavaFx Browser',
                description: 'A web browser made in JavaFx and the web engine',
                projectImage: 'orange',
                projectUrl: 'https://github.com/williemaxt/Java-FX-Web-Browser'
              },
              {
                projectName: 'IP Lookup',
                description: 'A JavaFx application that finds the IP of a URL',
                projectImage: 'green',
                projectUrl: 'https://github.com/williemaxt/IP-Lookup'
              }
              ]
          }
        }
    }
</script>

<style scoped>
button{
  width: 250px;
  height: 40px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: .3s;
}
ul{
    width: 85vw;
    height: 40vh;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    list-style: none;
    padding: 0;
  }
  li{
    width: 25%;
    min-width: 300px;
    height: auto;
    min-height: 300px;
    display: inline-block;
    box-shadow: 0 0 10px #333;
    margin-left:10px;
    margin-right: 10px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-radius: 3px;
    background: #ffffff;
  }
  li h1{
    color: #2e8b57;
    margin: 0;
    font-size: 3em;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom: #fff 2px solid;
    background: #fff;
    width: 90%;
    display: block;
    margin: 0 auto;
    outline: 1px;
    outline-color: #fff;
  }
  li p{
    width: 90%;
    display: block;
    margin: 0px auto;
    font-weight: bold;
    color: #333333;
  }
  li img{
    width: 50%;
    height: auto;
    margin: 20px auto;
    padding: 5px;
    border-radius: 5px;
  }
  .green{
    background: url(../assets/blue-green.svg)
  }
  .green h1{
    color: seagreen;
  }
  .green button{
    background: seagreen;
  }
  .orange{
    background: url(../assets/rainbow.svg)
  }
  .orange h1{
    color: orange;
  }
  .orange button{
    background: orange;
  }
  @media screen and (max-width: 1500px) {
    li h1{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 1139px) {
    li{
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 755px) {
    li{
      width: 90%;
    }
  }
  @media screen and (max-width: 440px){
    li{
      min-width:90%;
    }
    li h1{
      font-size: 30px;
    }
    button{
      width: 150px;
    }
  }
</style>
