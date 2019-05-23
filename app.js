var app = new Vue({
    el: '#app',
    data: {
        tasks: [
          { id: 1, name: 'Item 1', description: 'Milk', completed: false},
          { id: 2, name: 'Item 2', description: 'Bread', completed: true},
        ],
        message: 'Hello World'
    },
    computed: {
      completedTasks: function() {
        return this.tasks.filter( item => item.completed == true);
      },
      todoTasks: function() {
        return this.tasks.filter( item => item.completed == false);
      }
    }
})


