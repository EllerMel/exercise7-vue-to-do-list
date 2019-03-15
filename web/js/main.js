var app = new Vue({
  el: '#app',
  data: {
    title: 'todos',
    todos: [],
    newTask: '',
    total: 0, 
    filterKey: 'all'
  },
  methods: {
    addTask() {
      this.todos.push({text: this.newTask, completed: false, index: this.total });
      console.log(this.todos[this.total].text);
      console.log(this.todos[this.total].completed);
      console.log(this.todos[this.total].index);
 
      console.log(this.newTask);
      this.total++;
      this.newTask = '';
    },
    showStatus(index) {
      console.log('we are here');
      console.log(this.todos[index].completed);
    }
  },
  computed: {
  	listFilter() {
    	return this[this.filterKey]
    },
    all() {
      return this.todos
    },
    completed() {
      return this.todos.filter((todo) => todo.completed == true)
    },
    still() {
      return this.todos.filter((todo) => todo.completed == false)
    }
  }
 })