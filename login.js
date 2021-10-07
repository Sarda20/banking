document.getElementById('btn-click').addEventListener('click', function() {
    const emailfield = document.getElementById('user-email').value;
    // console.log(emailfield);
    const passfield = document.getElementById('user-pass').value;
    // console.log(passfield);

    if (emailfield == 'ggg@gmail.com' && passfield == 'ggg@gmail.com') {
        window.location.href = 'banking.html';
    } else {
        console.log('wrong info');
    }
});