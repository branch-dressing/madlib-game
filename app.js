function onClick() {
    const catInput = document.getElementById('cat-input');
    const cat = catInput.value;
    const catBox = document.getElementById('cat');
    catBox.textContent = cat;

    const titleInput = document.getElementById('title-input');
    const title = titleInput.value;
    const titleBox = document.getElementById('title');
    titleBox.textContent = title;

    const person1Input = document.getElementById('person1-input');
    const person1 = person1Input.value;
    const person1Box = document.getElementById('person1');
    person1Box.textContent = person1;

    const ptActionInput = document.getElementById('ptAction-input');
    const ptAction = ptActionInput.value;
    const ptActionBox = document.getElementById('ptAction');
    ptActionBox.textContent = ptAction;

    const eventInput = document.getElementById('event-input');
    const event = eventInput.value;
    const eventBox = document.getElementById('event');
    eventBox.textContent = event;

    const releaseInput = document.getElementById('release-input');
    const release = releaseInput.value;
    const releaseBox = document.getElementById('release');
    releaseBox.textContent = release;

    const groupInput = document.getElementById('group-input');
    const group = groupInput.value;
    const groupBox = document.getElementById('group');
    groupBox.textContent = group;

    const problemInput = document.getElementById('problem-input');
    const problem = problemInput.value;
    const problemBox = document.getElementById('problem');
    problemBox.textContent = problem;

    const famousInput = document.getElementById('famous-input');
    const famous = famousInput.value;
    const famousBox = document.getElementById('famous');
    famousBox.textContent = famous;

    const debateInput = document.getElementById('debate-input');
    const debate = debateInput.value;
    const debateBox = document.getElementById('debate');
    debateBox.textContent = debate;

    madLib.style.display = "block"

};