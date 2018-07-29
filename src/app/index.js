const UI = require('./ui.js');
const Github = require('./github.js');

const {client_id, client_secret} = require('./config.json');

const github = new Github(client_id, client_secret);
const ui = new UI();

//console.log(github.fetchUser('SafetyPay'));
//console.log(github.fetchUser('forceits'));
//console.log(github.fetchUser('jsiesquen'));

const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (e) => {
    const searchText = document.getElementById('searchText').value;
    if (searchText !== '') {
        github.fetchUser(searchText)
            .then(data => {
            if (data.userData.message === 'Not Found') {
                ui.showMessage('El usuario no existe', 'alert alert-danger mt-2 col-md-12');
            } else {
                ui.showProfile(data.userData);
                ui.showRepositories(data.userRepo);
            }
        });
    } else {
        ui.reset();
    }
    e.preventDefault(); 
})