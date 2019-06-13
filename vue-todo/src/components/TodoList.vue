<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
        <i class="fas fa-check" :class="{checkBtnClicked: todoItem.completed}" @click="toggleComplete"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeContainer" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt removeBtn"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods : {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function() {

    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 30px;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 10px;
    padding: 15px;
    background: white;
    border-radius: 10px;
  }
  .removeContainer {
    margin-left: auto;
    color: rgb(36, 33, 33);
  }
  .removeBtn {
    font-size: 20px;
    color: rgb(138, 0, 0);
  }
  .checkBtnCompleted {
    color: pink;
  }
  .textCompleted {
    text-decoration: line-through;
    color: gray;
  }
</style>

