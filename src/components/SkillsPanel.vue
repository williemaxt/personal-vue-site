<template>
  <main>
    <section v-for="panel in panels">
      <aside>
        <h1>{{panel.title}}</h1>
        <img src="../assets/front-end.svg" alt="">
        <h3>{{panel.explanation}}</h3>
        <h2>{{panel.stack}}</h2>
      </aside>
      <div class="rightImg">
        <img src="../assets/coding.svg" alt="">
      </div>
    </section>
  </main>
</template>

<script>
    export default {
        name: "SkillsPanel",
        data(){
          return{
            panels:[
              {
                title: 'Front-End',
                titleImage: '../assets/browser.svg',
                explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                stack: 'HTML5, CSS3, JavaScript, Vue.js',
              },
              {
                title: 'Back-End',
                titleImage: 'front-end.svg',
                explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                stack: 'PHP, Node.js',
              },
              {
                title: 'Mobile',
                titleImage: 'front-end.svg',
                explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                stack: 'Android, Cordova',
              },
              {
                title: 'Desktop & Terminal',
                titleImage: 'front-end.svg',
                explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                stack: 'JavaFx, Electron, Java, Python',
              },
              {
                title: 'Editors & IDEs',
                titleImage: 'front-end.svg',
                explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                stack: 'Sublime, ATOM, PhpStorm, WebStorm, IntelliJ, PyCharm',
              }
            ]
          }
        }
    }
</script>

<style scoped>
  section{
    height: 750px;
    display: block;
    margin-bottom: 100px;
    margin-top: 20px;
  }
  aside{
    width: 50%;
    text-align: left;
    padding-left: 40px;
    float: left;
  }
   h1{
     font-size: 6em;
     color: #2e8b57;
     margin-bottom: 0;
    }
  h3{
    color: #333333;
  }
  h2{
    font-size: 3em;
  }
   section div{
     float: right;
     width: 40%;
  }
   section div img{
     width: 95%;
     height: auto;
     display: block;
     margin: 0 auto;
   }
  aside img{
    width: 100px;
    height: auto;
    background: #ffffff;
    padding: 10px;
    border-radius: 50%;
  }
</style>
