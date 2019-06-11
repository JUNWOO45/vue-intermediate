<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button @click="addTodo">
      Add
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style>

</style>
