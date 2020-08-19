import Vue from 'vue'
import App from './App.vue'
import TicTacToe from './components/TicTacToe.vue';
import Cell from './components/Cell.vue';

Vue.component('tic-tac-toe', TicTacToe);
Vue.component('Cell', Cell);
new Vue({
  el: '#app',
  render: h => {
    return h(App);
  }
})
