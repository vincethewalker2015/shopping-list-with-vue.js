/* global Vue */
var app = new Vue({
    el: '#app',
    components: {
      'task': { 
                props: ['task'],
                template: `
                 <div class="ui segment task"
                      v-bind:class="task.completed? 'done' : 'todo' " >
                      <div class="ui grid">
                        <div class="left floated twelve wide column">
                          <div class="ui checkbox">
                            <input type="checkbox" name="task" v-on:click="$parent.toggleDone($event, task.id)" :checked="task.completed" >
                            <label>{{ task.name }} <span class="description">{{ task.description }}</span></label>
                          </div>
                        </div>
                        <div class="right floated three wide column">
                          <i class="icon trash red" alt="Delete" v-on:click="$parent.deleteTask($event, task.id)"></i>
                        </div>
                      </div>
                 </div>
                `
               } 
    },
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
    },
    methods: {
      toggleDone: function(event, id) {
        event.stopImmediatePropagation();
        
        let task = this.tasks.find(item => item.id == id);
        
        if(task) {
          task.completed = !task.completed;
          console.log('task toggled');
        }
      },
      deleteTask: function(event, id){
        event.stopImmediatePropagation();
        
        let taskIndex = this.tasks.findIndex(item => item.id == id);
        
        if(taskIndex > -1){
          this.$delete(this.tasks, taskIndex);
        }
        
        console.log('task deleted');
      }
    }
});


