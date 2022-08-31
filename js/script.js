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
    element.parentElement.parentElement.parentElement.remove();
}

function update(element) {
    let taskItem = element.parentElement.parentElement.children[1];
    console.log(taskItem)
    let taskItemContainer = element.parentElement.parentElement.parentElement;
    console.log(taskItemContainer)
    taskItemContainer.classList.add("update");
    addTaskButton.classList.add('hidden');
    updateButton.classList.remove('hidden');
    task.value = taskItem.innerText;

}




function completed(element) {
    let completedTask = element.parentElement.parentElement;
    completedTask.classList.add('bg-red-200');
    let buttons = element.parentElement.parentElement.querySelectorAll('button');
    for (let button of buttons) {
        button.setAttribute('disabled', true);
    }
}
updateButton.addEventListener('click', function () {
    let updateList = document.querySelector('.update h2');
    console.log(updateList);
    // let a = task.value;
    updateList.innerHTML = task.value;
    addTaskButton.classList.remove('hidden');
    updateButton.classList.add('hidden');
    task.value = "";
    // count();
})
addTaskButton.addEventListener('click', function () {
    const taskList = task.value;
    taskBody.innerHTML += `<li>
    <div
        class="mt-3 flex items-center justify-center px-4 text-5xl font-semibold text-center text-gray-400 bg-gray-300 rounded-lg ">
        <span class="taskNumber"></span>
    </div>
    <div class="taskItem bg-white border border-3 p-6 pt-2 rounded-lg shadow-lg mt-3">
        <div class="flex justify-end space-x-2">
            <div
                class="flex items-center justify-center px-4 text-xs font-semibold text-center text-white bg-pink-300 rounded-full hover:bg-pink-500">
                <span>${setTime.value}</span>
            </div>
            <div
                class="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-green-300 rounded-full hover:bg-green-500">
                <span>${setDate.value}</span>
            </div>
            <div
                class="flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-center text-white bg-purple-300 rounded-full hover:bg-purple-500">
                <span>${setPriority.options[setPriority.selectedIndex].value}</span >
            </div >
        </div >
        <h2 class="text-2xl font-light mb-2 p-2.5 text-gray-800">${taskList}</h2>
        <div
            class="flex justify-center items-center md:justify-between flex-col md:flex-row w-full pb-2.5 px-3.5">


            <button type="submit" id="edit" onclick=update(this)
                class="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Edit Task
            </button>
            <button type="submit" id="remove" onclick=rm(this)
    class="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" >
        Remove Task
            </button >
        <button type="submit" id="remove" onclick=completed(this)
    class="px-2.5 py-4 mt-2 md:mt-0 text-xs w-full md:w-1/4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" >
        Completed
            </button >

        </div >
    </div >
</li > `;
    task.value = "";

})

