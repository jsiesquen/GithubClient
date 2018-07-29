 class UI {
    constructor() {
        this.profile        = document.getElementById('profile');
        this.repositories   = document.getElementById('repositories');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top img-thumbnail">
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <span class="badge badge-success">
                    Followers: ${user.followers}
                </span>
                <span class="badge badge-primary">
                    Following: ${user.following}
                </span>
                <span class="badge badge-warning">
                    Company: ${user.company}
                </span>
                <span class="badge badge-info d-block">
                    Blog: ${user.blog}
                </span>
            </div>`;
        this.clearMessage();
    }

    showRepositories(repositories) {
        let repos = '';
        repositories.forEach(repo => {
            repos += this.repositories.innerHTML = `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Language: ${repo.language}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>    
            </div>`;
        });
        this.repositories.innerHTML = repos;
    }

    showMessage(message, cssClass) {
        this.clearMessage();
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));

        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
        setTimeout(() => this.clearMessage(), 3000);
    }

    clearMessage() {
        const alertFOund = document.querySelector('.alert');
        if (alertFOund) {
            alertFOund.remove();
        }
    }

    reset() {
        this.profile.innerHTML = `
          <div class="container mt5">
            <h3 class="display-2 text-center">Learn Something New Everydary</h3>
          </div>
        `
    }
 }

 module.exports = UI;