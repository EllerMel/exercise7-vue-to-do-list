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
      //console.log(this.todos[this.total].text);
      //console.log(this.todos[this.total].completed);
      //console.log(this.todos[this.total].index);
 
      //console.log(this.newTask);
      this.total++;
      this.newTask = '';
    },
    showStatus(index) {
      //console.log(this.todos[index].completed);
    },
    completeAll() {
      
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = true;
      }
    },
    reactivateAll() {

      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = false;
      }
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
    },
    countList() {
      return this.todos.filter((todo) => todo.completed == false)
    }
  }
 })