function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = book.title;
      input.style.width = '60%';

      actionsTd.innerHTML = '';
      actionsTd.appendChild(input);

      const boutonsauvegarder = document.createElement('button');
      boutonsauvegarder.textContent = "Enregistrer";
      boutonsauvegarder.onclick = () => {
        const titre = input.value.trim();
        if (titre.length === 0) {
          window.alert('Le titre ne DOIT SURTOUT PAS être vide.');
          input.focus();
          return;
        }
        books[index].title = titre;
        renderBooks();
      };
      actionsTd.appendChild(boutonsauvegarder);

      input.focus();
      input.select();
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
