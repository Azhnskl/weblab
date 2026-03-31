//  Получаем элементы из DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

//  Функция для добавления новой задачи
function addTodo() {
    const text = input.value.trim(); // убираем лишние пробелы

    if (text === "") return; // не добавляем пустую задачу

    // Создаем элементы DOM
    const li = document.createElement("li");       // новая задача
    const checkbox = document.createElement("input"); // чекбокс
    checkbox.type = "checkbox";

    const span = document.createElement("span");   // текст задачи
    span.textContent = text;

    const delBtn = document.createElement("button"); // кнопка удаления
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    // Добавляем элементы в li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    // Добавляем li в ul
    list.appendChild(li);

    // Очищаем input
    input.value = "";

    //  Обработчик изменения состояния чекбокса
    // checkbox.addEventListener("change", () => {
    //     if (checkbox.checked) {
    //         span.classList.add("done"); // применяем стиль выполнено
    //     } else {
    //         span.classList.remove("done");
    //     }
    // });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            let q = prompt('du u wanna delete?', 'y/n');
            if(q=='y'){
                 list.removeChild(li);
            }else{
                span.classList.add("done");
            }

        } else {
            span.classList.remove("done");
        }
    });

 
    delBtn.addEventListener("click", () => {
        list.removeChild(li); // удаляем конкретный li из списка
    });
}

//  Событие на кнопку добавления
addBtn.addEventListener("click", addTodo);

//  Также добавим возможность добавлять задачей при Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});
