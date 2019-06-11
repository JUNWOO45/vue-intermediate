<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-folder-plus addBtn"></i>
    </span>
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

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    display: flex;
  }
  .inputBox input {
    width: 100%;
    height: 100%;
    border-style: none;
    font-size: 20px;
    padding: 0 0 0 20px;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, rgb(255, 0, 0), purple);
    display: flex;
    width: 50px;
    border-radius: 0 5px 5px 0;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .addContainer:hover {
    cursor: pointer;
  }
  .addBtn {
    font-size: 30px;
    color: white;
  }
</style>
