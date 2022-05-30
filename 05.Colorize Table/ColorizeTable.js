function colorize() {
    // let items = Array.from(document.getElementsByTagName("tr"));

    // for (let i = 1; i < items.length; i+=2) {
    //    items[i].style.background = "Teal";
    // }

    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(t => t.style.backgroundColor = 'teal');
}