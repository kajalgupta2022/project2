function addNote() {
    const noteText = document.getElementById('noteText').value;
    
    if (noteText.trim() === "") {
        alert("Please write something before adding a note.");
        return;
    }
    
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    
    noteElement.innerHTML = `
        ${noteText}
        <button onclick="deleteNote(this)">Delete</button>
    `;
    
    document.getElementById('notesContainer').appendChild(noteElement);
    
    document.getElementById('noteText').value = '';
}

function deleteNote(buttonElement) {
    const noteElement = buttonElement.parentElement;
    noteElement.remove();
}
