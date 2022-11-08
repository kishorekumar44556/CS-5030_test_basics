class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);  
      }

    delete_todo(id){
        this.todos.todo = this.todos.todo.filter((todo,index) => index != id); 
    }

    update_todo(id, todo){
        this.todos.todo = this.todos.todo.map((currentTodo,index) => {
            if(index === id)
                return todo;
            return currentTodo;
        })
    }
}

module.exports = todoservice
