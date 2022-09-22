const arr = [
  {
    text: "Уехать в турцию",
    done: false,
  },

  {
    text: "Поступить в Intocode",
    done: true,
  },

  {
    text: "Выполнить задачи на день",
    done: false,
  },

  {
    text: "Посмотреть сериал",
    done: true,
  },

  {
    text: "Пойти в 11:00 в столовку",
    done: true,
  },
];

const checkTodo = (i) => {
  const newAr = arr.map((elem, index) => {
    if (i == index) {
      elem.done = !elem.done;
      return elem;
    }
    return elem;
  });
  render(newAr);
};

const addTodo = () => {
  if (inp.value == "") {
    alert("Необходимо ввести текст");
  } else {
    arr.push({
      text: inp.value,
      done: false,
    });
    inp.value = "";
    render(arr);
  }
};

const inp = document.querySelector("#text_todo");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

const render = (array) => {
  list.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.checked = arr[i].done;

    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Удалить";

    const div_list = document.createElement("div");
    div_list.textContent = array[i].text;

    inputCheck.checked ? (div_list.classList = "check") : null;

    list.append(div_list);
    div_list.append(deleteTodo);
    div_list.prepend(inputCheck);

    div_list.style.width = "70%";
    div_list.style.height = "35px";
    div_list.style.border = "2px solid pink";
    div_list.style.margin = "auto";
    div_list.style.marginTop = "20px";
    div_list.style.fontSize = "20px";
    div_list.style.borderRadius = "5px";
    div_list.style.display = "flex";
    div_list.style.alignItems = "center";
    div_list.style.justifyContent = "space-around";

    deleteTodo.style.height = "23px";
    deleteTodo.style.borderRadius = "5px";
    deleteTodo.style.backgroundColor = "pink";

    inputCheck.style.width = "20px";
    inputCheck.style.height = "20px";

    deleteTodo.addEventListener("click", () => remove(i));

    inputCheck.addEventListener("click", () => checkTodo(i));
  }
};
render(arr);

const remove = (i) => {
  arr.splice(i, 1);
  render(arr);
};

btn.addEventListener("click", () => addTodo(inp));
