// First way!
const firstLiContent = document.querySelectorAll('li')[0].textContent;
const secondLiContent = document.querySelectorAll('li')[1].textContent;
const thirdLiContent = document.querySelectorAll('li')[2].textContent;
const fourthLiContent = document.querySelectorAll('li')[3].textContent;
const fifthLiContent = document.querySelectorAll('li')[4].textContent;
console.log(`Output result: ${firstLiContent}, ${fifthLiContent}, ${secondLiContent}, ${fourthLiContent}, ${thirdLiContent}`);
// Second way!
const collectionOfLiItems = document.getElementsByTagName('li');
console.log(`Output result: ${collectionOfLiItems[0].innerHTML}, ${collectionOfLiItems[4].innerHTML}, ${collectionOfLiItems[1].innerHTML}, ${collectionOfLiItems[3].innerHTML}, ${collectionOfLiItems[2].innerHTML}`);
