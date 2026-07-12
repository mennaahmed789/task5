document.querySelector('.pass').addEventListener('input', function() {
    let a = document.querySelector('.pass').value
    let symbols = /[+=*%_]/
    
    if(a.length < 10) {
        document.querySelector('.error-logs').classList.remove('hidden');
        document.querySelector('.error-logs').classList.add('visible');
        document.querySelector('.error-logs').innerHTML = 'password must be at least 10 characters';
 
    }else if (!document.querySelector('.pass').value.match(symbols)){
        document.querySelector('.error-logs').classList.remove('hidden');
        document.querySelector('.error-logs').classList.add('visible');
        document.querySelector('.error-logs').innerHTML = 'password must be including special characters';
    }
    
    else {
        document.querySelector('.error-logs').classList.remove('visible');
        document.querySelector('.error-logs').classList.add('hidden');
    }
})

setTimeout(function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}, 10000);