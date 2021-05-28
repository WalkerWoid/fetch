class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.access = false;
    }
    authenticateUser() {
        fetch('usersInfo.json')
            .then(result => result.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === this.username && data[i].password === +this.password) {
                        this.access = true
                        return this.access;
                    } else {
                        this.access = false
                    }
                }
            })
            .then(access => {
                if (access === true) {
                    document.location.href = '/home'
                }
            })
            .catch(error => console.log(error))
    }
}

const form = document.getElementById('form')
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const userName = form.querySelector('#username').value;
    const password = form.querySelector('#password').value;

    const user = new User(userName, password);
    const isAccess = user.authenticateUser();
})
