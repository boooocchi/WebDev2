const button = document.querySelector("#add-btn");
button.addEventListener("click", function (e) {
  e.preventDefault();
  const noteTitle = document.getElementById("add-input").value;

  const newNote = document.createElement("li");
  newNote.innerHTML = `<p>${noteTitle}</p><p><i class="fa fa-pencil-square-o"></i> <i class="fa fa-times"></i></p><input type="text" class="edit-note">`;
  document.querySelector("#list").appendChild(newNote);
});
