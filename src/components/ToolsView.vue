<template>
    <div>
      <section class="top">
        <h1>{{title}}</h1>
        <h3>{{details}}</h3>
      </section>
      <SkillsPanel></SkillsPanel>
    </div>
</template>

<script>
  import SkillsPanel from '@/components/SkillsPanel'
    export default {
        name: "ToolsView",
        data(){
          return{
            title:'Tools & Languages',
            details:'Here are my favorite technologies and what I use them for',
          }
        },
      components:{
          SkillsPanel
      }
    }
</script>

<style scoped>
.top{
  min-height: 70vh;
  padding-top: 30vh;
  background: #c0c0c0;
  background: url("../assets/blue-green.svg");
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
