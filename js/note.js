let createBtn = document.getElementById('create');
let notesBox = document.querySelector('.notes');

function nextId() {
  let note = notesBox.children;
  if (!note.length) return 1;
  let ids = Array.from(note).map(el => el.getAttribute('id').split('-')[1]);
  return Math.max(...ids) + 1;
}

function deleteNote(id) {
  let curId = `note-${id}`;
  let node = document.getElementById(curId);
  notesBox.removeChild(node);
  localStorage.removeItem(curId);
}

function rndColor() {
  let colors = ['pink', 'green', 'yellow', 'blue', 'white'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function autoSave(e, id, type) {
  let noteContent = {
    type,
    text: e.target.innerText
  }
  localStorage.setItem(`note-${id}`, JSON.stringify(noteContent));
}

function createNote(id, type, text="") {
  let note = document.createElement('div');
  let content = document.createElement('div');
  note.setAttribute('id', `note-${id}`);
  note.classList.add('note');
  note.classList.add(type);

  let header = document.createElement('header');
  let headerChildren = `
  <h4>note-${id}</h4>
  <div class="trial flex-center">
    <i class="ri-close-line close" onclick="deleteNote(${id})"></i>
  </div>
  `;
  header.innerHTML = headerChildren;
  
  content.classList.add('content');
  content.innerHTML = `
    <div class="textarea" contenteditable="true" onblur="autoSave(event, ${id}, '${type}')">${text}</div>
  `

  note.appendChild(header);
  note.appendChild(content);

  return note;
}

function render() {
  let savedNotes = Object.entries(localStorage).map(([key, value]) => ({ key, value: JSON.parse(value)})).sort((a, b) => a.key.replace('note-', '') - b.key.replace('note-', ''));
  let fragment = document.createDocumentFragment();
  savedNotes.forEach(item => {
    let savedNote = createNote(item.key.replace('note-', ''), item.value.type, item.value.text);
    fragment.appendChild(savedNote);
  });
  notesBox.appendChild(fragment);
}

createBtn.addEventListener('click', ()=> {
  let newId = nextId();
  let type = rndColor();
  let note = createNote(newId, type);
  notesBox.appendChild(note);
  document.querySelector(`#note-${newId} .textarea`).focus();
  console.log(newId);
  console.log(type);
});

window.onload = render();