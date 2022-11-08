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
        // Your code here
        this.todo_data.todo[3] = todo;
        return this.todo_data.todo;
    }

    delete_todo(id){
        // Your code here
        this.todo_data.todo[id] = {};
        return this.todo_data.todo;
    }

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id] = todo;
        return this.todo_data.todo;
    }
}


module.exports= todoservice;
