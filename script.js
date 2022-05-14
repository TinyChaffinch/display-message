var btn = document.querySelector('button');
btn.onclick = function () {
    if (document.getElementById("chat").checked) {
        displayMessage('Богдан: Я здесь','chat');
    } else {
        displayMessage('Вы горбитесь. Выпрямите спину', 'warning');
    }
};

function displayMessage(msgText, msgType) {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    closeBtn.style.color = 'black';
    panel.appendChild(closeBtn);

    btn.setAttribute('disabled', true);

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel);
        btn.removeAttribute('disabled');
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
        panel.style.fontWeight = 'bold';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}