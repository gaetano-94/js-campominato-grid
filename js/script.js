'use strict';

//funzione
function myCreateElement(tag, className, content) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.append(content);

  return element;
}

//variabili
const table = document.querySelector('.table');
console.log(table);

//ciclo
for (let i = 1; i <= 100; i++) {
  const myElement = myCreateElement('div', 'cell', i);
  table.append(myElement);
}
