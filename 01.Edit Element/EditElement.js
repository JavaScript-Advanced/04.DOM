function editElement() {
    reference.textContent = reference.textContent.replace(new RegExp(match, 'g'), replacer);
}