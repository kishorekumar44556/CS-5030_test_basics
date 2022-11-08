class todoservice{
    todo_data = {
        "todo":[{
            "title": "K1",
            "description": "N1",
            "done": false
        },{
            "title": "K2",
            "description": "N2",
            "done": false
        },{
            "title": "K3",
            "description": "N3",
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