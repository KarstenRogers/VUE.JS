<template>
  <div id="app">   <Form :handleGitHubData=handleGitHubData />
    <CardList :cards=cards />
  </div>
</template>

<script>
  import Form from './components/Form.vue'
  import CardList from './components/CardList.vue'

  export default {
    name: 'app',
    data: function() {
      return {
        cards: []
      }
    },
    components: {
      Form,
      CardList
    },
    methods: {
      handleGitHubData(data) {
        this.cards.push(data)
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
