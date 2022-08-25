const task = document.getElementById('task');
const addTaskButton = document.getElementById('addTaskButton');
const updateButton = document.getElementById("updateButton");
const taskBody = document.getElementById('taskBody');
const setTime = document.getElementById('setTime');
const setDate = document.getElementById('setDate');
const setPriority = document.getElementById('setPriority');
// This block needs to updated.
let currentdate = new Date();
let time = currentdate.getHours() + ":" + currentdate.getMinutes();
let date = currentdate.getDay() + "/" + (currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear();
setTime.value = time;
console.log(time);
setDate.value = date;
console.log(date);
function rm(element) {
    element.parentElement.parentElement.parentElement.parentElement.remove();
}

function update(element) {

    let taskItem = element.parentElement.parentElement.parentElement.children[0];
    let taskItemContainer = element.parentElement.parentElement.parentElement;
    taskItemContainer.classList.add("update");
    addTaskButton.style.display = "none";
    updateButton.style.display = "flex";
    task.value = taskItem.innerText;

}
// This block needs some button style and disable function.
function completed(element) {
    let completedTask = element.parentElement.parentElement.parentElement;
    completedTask.style.backgroundColor = 'darksalmon'
}
updateButton.addEventListener('click', function () {
    let updateList = document.querySelector('.update h2');
    // let a = task.value;
    updateList.innerHTML = task.value;
    addTaskButton.style.display = "flex";
    updateButton.style.display = "none";
    task.value = "";
})
addTaskButton.addEventListener('click', function () {
    const taskList = task.value;
    taskBody.innerHTML += `<li><div class="taskItem bg-white border border-3 p-6 rounded-lg shadow-lg mt-5">
    <h2 class="text-2xl font-light mb-2 text-gray-800">${taskList}</h2>
    <div class="flex justify-between mt-5">
        <div>
            <div
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                <span>${setTime.value}</span>
            </div>
            <div
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                <span>${setDate.value}</span>
            </div>
            <div
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                <span>${setPriority.options[setPriority.selectedIndex].value
        }</span >
            </div >
        </div >
    <div>
        <button type="submit" id="edit" onclick=update(this)
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Edit Task
        </button>
        <button type="submit" id="remove" onclick=rm(this)
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Remove Task
        </button>
        <button type="submit" id="remove" onclick=completed(this)
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Completed
        </button>
    </div>
    </div >
</div > </li>`;
    task.value = "";
})

