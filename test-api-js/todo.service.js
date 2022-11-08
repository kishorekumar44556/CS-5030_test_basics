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
        // Your code here
        this.todo_data.todo[1] = todo;
        this.todo_data.todo;
    }

    delete_todo(id){
        // Your code here
        this.todo_data.todo[id] = {};
        this.todo_data.todo;
    }

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id] = todo;
        this.todo_data.todo;
    }
}


module.exports= todoservice;
