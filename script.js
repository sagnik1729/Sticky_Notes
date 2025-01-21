// Add functionality to create a new sticky note
document.getElementById("addNoteBtn").addEventListener("click", function () {
    const noteText = document.getElementById("noteText").value;
    const selectedColor = document.getElementById("colorPicker").value;

    if (noteText.trim() === "") {
        alert("Please write something in the note!");
        return;
    }

    // Create a sticky note div
    const note = document.createElement("div");
    note.className = "note";
    note.style.backgroundColor = selectedColor;

    // Add note text
    const noteContent = document.createElement("p");
    noteContent.textContent = noteText;
    note.appendChild(noteContent);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
        note.remove();
    });
    note.appendChild(deleteButton);

    // Append the note to the container
    document.getElementById("notesContainer").appendChild(note);

    // Clear the text area
    document.getElementById("noteText").value = "";
});
