function search() {
   let searchText = document.getElementById('searchText').value.toLocaleLowerCase();
   let townsElement = Array.from(document.querySelectorAll('#towns li'));

   let matches = 0;
   for (const town of townsElement) {
      if (town.textContent.toLocaleLowerCase().includes(searchText)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      } else {
         town.style.textDecoration = 'normal';
         town.style.fontWeight = 'none';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}