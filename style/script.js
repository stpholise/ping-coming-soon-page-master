const btn = document.querySelector('.btn');
const email = document.getElementById('email');
let errMsg = document.querySelector('.err-msg');
const regX = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z])?$/

btn.addEventListener('click', submitEmail)

function submitEmail(e) {
    e.preventDefault()
    let msg = ''
    let currentEmail = email.value.trim()
    if (currentEmail.match(regX)) {
        msg = 'your email address has been received'
        errMsg.textContent = msg
        errMsg.style.color = 'green'
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.6rem';
        setTimeout(removeErrMsg, 3000)


    }
    else if (currentEmail === '' || currentEmail === null) {
        msg = 'Whoops! It looks like you forgot to add your email'
        errMsg.textContent = msg;
        errMsg.style.color = 'hsl(354, 100%, 66%)';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.6rem';
        setTimeout(removeErrMsg, 3000)

    }
    else {
        msg = 'Please provide a valid email address'
        errMsg.textContent = msg
        errMsg.style.color = 'hsl(354, 100%, 66%)';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontStyle = 'italic';
        errMsg.style.fontSize = '0.6rem';
        setTimeout(removeErrMsg, 3000)

    }
    function removeErrMsg() {
        errMsg.textContent = '';
    }
}