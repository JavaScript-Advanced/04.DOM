function solve() {
  let input = document.getElementById('input').value
                                              .split('.')
                                              .filter(s => s !== '');

  let result = '';

  while (input.length) {
    let currentParagraph = input.splice(0, 3);
    result += `<p>${currentParagraph.join('.')}.</p>`;
  }
  document.getElementById('output').innerHTML = result;
}