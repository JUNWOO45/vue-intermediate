<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item" class="list-container shadow">
        <i 
          class="far fa-square checkBtn" 
          :class="{checkBtnClicked: todoItem.completed}"
          @click="toggleComplete(todoItem, index)"
        ></i>
        <i class="far fa-check-square invisible"
          :class="{alreadyChecked: todoItem.completed}"
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
    </transition-group>
  </div>
</template>

<script>
export default {
  methods : {
    removeTodo(todoItem, index) {
      this.$store.commit('removeOneItem', {
        todoItem,
        index
      })
    },
    toggleComplete(todoItem, index) {
      this.$store.commit('toggleOneItem', {
        todoItem,
        index
      })
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
  .individual-list{
    font-size: 30px;
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

  /* 리스트 아이템 트랜지션 */
  .list-enter-active {
    transition: all 0.2s;
  }
  .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

