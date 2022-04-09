// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  var task = tasks.filter((task)=> task.id === taskid);
  task.done = checked;
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  // continue the code here
  // const task = {
  //   id: id,
  //   title: taskTitle,
  //   category: selectedCategory,
  //   done: false
  // };
  // tasks.push(task);
  tasks.push({
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  renderTasks(tasks, "tasks-list");
  alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  // filtered = tasks.filter((task)=>{
  //   return (done===true ? task.category===selectedCategory && task.done === done : task.category === selectedCategory);
  // });

  tasks == done
  filtered = tasks.filter(
    (task) => task.category === selectedCategory && task.done === done
  );
  renderTasks(filtered,"tasks-list");
  
  if(tasks.done){
    renderTasks(tasks,"tasks-list");
  }
  alert(`Category: ${selectedCategory} | done: ${done}`);
}