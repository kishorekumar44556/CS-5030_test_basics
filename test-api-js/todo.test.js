var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    
    test("add_todos", () => {
        todo_service.add_todo({"title": "kishore", "description": "my name is kishore", "done": false});
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });

   test("update_todos", () => {
        todo_service.update_todo(1, {"title": "neerukonda", "description": "desripiton 2", "done": true});
        expect(todo_service.get_todos(1) == {"title": "neerukonda", "description": "description 2", "done": true});
    });
    
    test("delete_todos", () => {
        todo_service.delete_todo(2);
        expect(todo_service.get_todos(2) == true );
    });



});
