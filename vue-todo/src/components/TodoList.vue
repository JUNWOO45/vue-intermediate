<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" :key="todoItem.item" class="list-container shadow">
        <i 
          class="far fa-square checkBtn" 
          :class="{checkBtnClicked: todoItem.completed}"
          @click="toggleComplete(todoItem, index)"
        ></i>
        <i class="far fa-check-square invisible"
          v-bind:class="{alreadyChecked: todoItem.completed}"
          @click="toggleComplete(todoItem, index)"
        ></i>
        <span 
          class="individual-list" 
          :class="{textCompleted: todoItem.completed}"
        >
          {{ todoItem.item }}
        </span>
        <span class="removeContainer" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt removeBtn"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods : {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      //localStorage에 update API가 없어서 삭제하고 다시 등록.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  
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
    justify-content: space-between;
    align-items: center;
  }
  .checkBtn {
    color: black;
    vertical-align: bottom;
    font-size: 30px;
  }
  .invisible{
    display: none;
  }
  .alreadyChecked {
    display: block;
    font-size: 30px;
    color: black;
  }
  .removeContainer {
    color: rgb(36, 33, 33);
  }
  .removeBtn {
    font-size: 20px;
    color: rgb(138, 0, 0);
  }
  .checkBtnClicked {
    display: none;
  }
  .textCompleted {
    text-decoration: line-through;
    color: gray;
  }
</style>

