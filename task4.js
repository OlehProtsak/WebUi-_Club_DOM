const commentsSection = document.getElementById('commentsSection');
const sendBtn = document.getElementsByClassName('send-btn')[0];
console.log(commentsSection);



function addComment() {
    // Create elements
    const div = document.createElement('div');
    const p = document.createElement('p');
    const textArea = document.getElementsByTagName('textarea')[0];
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    // Add classes for elements
    span1.classList.add('left');
    span2.classList.add('right');
    div.classList.add('content__text');

    // Work with date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // Add content for elements
    span1.innerHTML = `${day}.${month + 1}.${year},
    ${hour}:${minute}`;
    p.innerHTML = textArea.value;

    // Check length of textearea
    if (textArea.value.length < 1) {
        alert('Please, enter at least 1 symbol!');
    } else {
        span2.innerHTML = prompt("Please, Enter your nickname.");
        commentsSection.appendChild(div);
        div.appendChild(p);
        commentsSection.appendChild(span1);
        commentsSection.appendChild(span2);

    }
    textArea.value = '';

}

sendBtn.addEventListener('click', addComment);

