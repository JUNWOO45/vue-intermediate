<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

// var my_cmp = {
//   template: '<div>hi?</div>'
// };

// new Vue({
//   el: '#app',
//   components: {
//     'my-cmp': my_cmp
//   }
// })
export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: rgb(240, 240, 240);
  }
  input {
    border-style: groove;
    width: 200px; 
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 2px 2px 2px gray;
  }
</style>
