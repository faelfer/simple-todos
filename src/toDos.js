class toDos {
	constructor() {
		this.toDos = JSON.parse(localStorage.getItem('listToDos')) || [
			'Local Storage está vazio',
			'Escrever primeira tarefa',
		]

		this.listElement = document.querySelector('#app ul');
		this.inputElement = document.querySelector('#app input');
		this.buttonElement = document.querySelector('#app button');

		this.renderToDos();
		this.onClick();
	}

	onClick() {
		this.buttonElement.onclick = event => this.addToDo(event);
	}


	renderToDos() {
		this.listElement.innerHTML = '';
		this.toDos.map((toDo, indexPosition) => {
			let toDoElement = document.createElement('li');
			let toDoText = document.createTextNode(toDo);
	
			let iconElement = document.createElement('i');
			iconElement.setAttribute('class', 'fas fa-trash');
			iconElement.addEventListener('click', ()=>{
				this.deleteToDo(indexPosition);
		});
	
			toDoElement.appendChild(toDoText);
			toDoElement.appendChild(iconElement);
	
			this.listElement.appendChild(toDoElement);
		});
	}
	
	addToDo() {
		let toDoText = this.inputElement.value;
	
		if (toDoText.length) {
			this.toDos.push(toDoText);
			this.inputElement.value = '';
			this.renderToDos();
			this.saveToStorage();
		}
	
	}
	
	deleteToDo(indexPosition) {
		this.toDos.splice(indexPosition, 1);
		this.renderToDos();
		this.saveToStorage();
	}
	
	saveToStorage() {
		localStorage.setItem('listToDos', JSON.stringify(this.toDos));
	}
}

new toDos();