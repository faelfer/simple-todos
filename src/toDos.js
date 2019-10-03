var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('listToDos')) || [
	'Local Storage está vazio',
	'Escrever primeira tarefa',
]

function deleteToDo(indexPosition) {
	toDos.splice(indexPosition, 1);
	renderToDos();
	saveToStorage();
}

function renderToDos() {
	listElement.innerHTML = '';
	toDos.map((toDo, indexPosition) => {
		var toDoElement = document.createElement('li');
		var toDoText = document.createTextNode(toDo);

		var iconElement = document.createElement('i');
		iconElement.setAttribute('class', 'fas fa-trash');
		iconElement.setAttribute('onclick', 'mostraIndex('+indexPosition+')');

		toDoElement.appendChild(toDoText);
		toDoElement.appendChild(iconElement);

		listElement.appendChild(toDoElement);
	});
}

renderToDos();

function mostraIndex(index) {
	console.log("Olha só o index => "+index);
}

function addToDo() {
	var toDoText = inputElement.value;

	if (toDoText.length) {
		toDos.push(toDoText);
		inputElement.value = '';
		renderToDos();
		saveToStorage();
	}

}

buttonElement.onclick = addToDo;

function saveToStorage() {
	localStorage.setItem('listToDos', JSON.stringify(toDos));
}