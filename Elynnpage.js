function addTodolist(e){
    var obj_list={
        to:"",
        done:false
    };
    document.getElementById("add_list").value=documen.getElementById("add_list").value.trim();
    if (document.getElementById("add_list").value.length === 0){
        alert("不能为空")；
        return;
    }

obj_list.todo = document.getElementById("add_list").value;
todolist.push(obj_list);

savedata(todolist)

document.getElementById("add_list").value = "";
load();
document.getElementById("add_list").focus();
}