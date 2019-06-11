<template>
  <main>
    <AddCategory v-if="shouldShowAddCategory" v-on:addCategory="addCategory"/>
    <div v-else>
      <NavBar :categories=categories v-on:triggerShowAddCategory=triggerShowAddCategory />
      <div class="container flex">
        <div class="w-1/2">
          <BillsTable />
        </div>
        <div class="w-1/2">
          <Chart />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import AddCategory from './components/AddCategory.vue'
  import AddBill from './components/AddBill.vue'
  import NavBar from './components/NavBar.vue'
  import Chart from './components/Chart.vue'
  import BillsTable from './components/BillsTable.vue'

  export default {
    name: 'app',
    components: {
      AddCategory,
      AddBill,
      Chart,
      BillsTable,
      NavBar
    },
    data() {
      return {
        bills: [],
        categories: [],
        shouldShowAddCategory: false
      }
    },
    methods: {
      addCategory(category) {
        this.categories.push(category)
        this.shouldShowAddCategory = false
      },
      triggerShowAddCategory() {
        this.shouldShowAddCategory = true
      }
    },
    watch: {
      categories() {
        localStorage.setItem('categories', JSON.stringify(this.categories))
      }
    },
    mounted() {
      if (localStorage.getItem('categories')) {
        this.categories = JSON.parse(localStorage.getItem('categories'))
      }

      if (!this.categories.length) {
        this.shouldShowAddCategory = true
      }
    }
  }
</script>
