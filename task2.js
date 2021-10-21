const h1 = document.querySelector('h1');
const firstParagraph = document.querySelectorAll('p')[0];
const secondParagraph = document.querySelectorAll('p')[1];
const thirdParagraph = document.querySelectorAll('p')[2];
const fourthParagraph = document.querySelectorAll('p')[3];
const ul = document.getElementById('myList');
const li = document.querySelectorAll('li')[1];
const span = document.querySelector('span');

h1.style.backgroundColor = 'lightgreen';
firstParagraph.style.fontWeight = 'bold';
secondParagraph.style.color = 'red';
thirdParagraph.style.textDecoration = 'underline';
fourthParagraph.style.fontStyle = "italic";
ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.alignItems = 'rows';
span.style.visibility = 'hidden';



