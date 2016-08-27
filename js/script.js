var test = {
	
	
	
	addContainer: function(){
		var element = document.createElement ('div');
			element.classList.add ('container');
			document.body.appendChild(element);
	},
	
	addHeader: function(){
		var element = document.createElement ('h2');
			element.classList.add('header');
			element.innerHTML = "Тест по программированию";
			var parent = document.querySelector('.container');
			parent.appendChild(element);
	},
	
	addForm: function(){
		var element = document.createElement('form');
			element.classList.add('q-form');
			element.setAttribute("action", "");
			element.setAttribute("method", "POST");
			var parent = document.querySelector('.container');
			parent.appendChild(element);
	},
	
	addQuestionDiv: function(){
		var element = document.createElement('div');
			element.classList.add('question' + this.iQuestion);
			var parent = document.querySelector('.q-form');
			parent.appendChild(element);
	},
	
	  addQuestion: function () {
        var element = document.createElement('h3');
        element.classList.add('topic-question' + this.iQuestion);
        element.innerHTML = this.i + '.' + ' Вопрос №' + this.iQuestion;
        var parent = document.querySelector('.question' + this.iQuestion);
        parent.appendChild(element);
    },
	
	addQuestionUl: function(){
		var element = document.createElement('ul');
        element.classList.add('ul-question' + this.i);
        var parent = document.querySelector('.question' + this.iQuestion);
        parent.appendChild(element);
	},
	
	addQuestionLi: function () {
        for (k = 1; k < this.limit_answer; k++) {
            var elementLi = document.createElement('li');
            elementLi.classList.add('li-question' + this.i);
            elementLi.id = 'li-id-' + this.i + k;
            var parent = document.querySelector('.ul-question' + this.iQuestion);
            parent.appendChild(elementLi);

        }
    },
	
	addQuestionInput: function () {
        for (d = 1; d < this.limit_answer; d++) {
            var elementInp = document.createElement('input');
            elementInp.setAttribute("type", "checkbox");
            elementInp.setAttribute("name", "variant");
            elementInp.id = 'input-id' + d;
            elementInp.classList.add('my-checkbox');
            var parent = document.getElementById('li-id-' + this.i + d);
            parent.appendChild(elementInp);
        }
    },
	
	addInputLabel: function () {
        for (y = 1; y < this.limit_answer; y++) {
            var elementLabel = document.createElement('label');
            elementLabel.setAttribute('for', 'li-id-' + y);
            elementLabel.classList.add('css-label');
            elementLabel.innerHTML = '&nbsp' + 'Вариант ответа №' + y;
            var parent = document.getElementById('li-id-' + this.i + y);
            parent.appendChild(elementLabel);
        }
    },
	
	createBefore: function () {
        this.addQuestionDiv(), this.addQuestion(), this.addQuestionUl();
    },

    answer: function () {
        this.addQuestionLi(), this.addQuestionInput(), this.addInputLabel();
    },

    result: function () {
        var elementLabel = document.createElement('button');
        elementLabel.classList.add('btn-lg');
        elementLabel.setAttribute('type', 'submit');
        elementLabel.innerHTML = 'Проверить мои результаты';
        var parent = document.querySelector('.q-form');
        parent.appendChild(elementLabel);
    },

    create: function () {
        this.addContainer(), this.addHeader(), this.addForm()
        for (var o = 1; o < this.questionMax; o++) {
            this.createBefore();
            this.answer();
            this.i++;
            this.iQuestion++;
        }
        this.result();
    },
	
	i: 1,
    iQuestion: 1,
    questionMax: 4,
    limit_answer: 4,
};

test.create();
	
