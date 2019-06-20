<template>
  <div>
    <input
      type="text"
      class="task-input"
      placeholder="New Task"
      v-model="newTask"
      @keyup.enter="addTask"
    />
    <div v-for="task in tasks" :key="task.id" class="task-item">
      {{ task.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "taskList",
  data() {
    return {
      newTask: "",
        idForTask: 3,
      tasks: [
        {
          id: 1,
          title: "Gas",
          completed: false
        },
        {
          id: 2,
          title: "Food",
          completed: false
        }
      ]
    };
  },
    methods: {
      addTask() {
          this.tasks.push({
              id: this.idForTask,
              title: this.newTask,
              completed: false,
          })

          this.newTask = ''
          this.idForTask++
      }
    }
};
</script>

<style lang="scss">
.task-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
}
</style>
