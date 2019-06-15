<template>
  <div>
    <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
      <span class="addContainer" @click="addTodo">
        <i class="fas fa-folder-plus addBtn"></i>
      </span>
    </div>
    <Modal 
      v-if="showModal" 
      @close="showModal = false"
    >
      <h3 slot="header">
        <span>헤더 경고!</span>
        <i 
          class="fas fa-times closeModal"
          @click="showModal = false"
        ></i>
      </h3>

      <div slot="body">
        아무것도 입력하지 않으셨습니다!
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal: Modal
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
  .closeModal {
    color: black;
    border-radius: 10px;
  }
  .closeModal:hover {
    color: rgb(80, 80, 80);
    cursor: pointer;
  }
</style>
