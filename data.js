let todos = [];

function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency,
    };
   todos.push(newTodo);
}

function modifyTodo(todos, newName, newUrgency) {
    let modifiedTask = {
        "id": "id",
        "name": "newname",
        "urgency": "newUrgency"
    }

    const indexToReplace = todos.findIndex(function(t){
        return t.id == id;
    })
    
    if (indexToReplace >-1) {
        todos[indexToReplace] = modifiedTask;
    }
    
}