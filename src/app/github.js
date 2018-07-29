class Github {
    constructor(clientId, clientSecret) {
        if(!clientId || !clientSecret) {
            return console.warn('Please use a client_id and a client_secret');
        }
        this.client_id          = clientId;
        this.client_secret      = clientSecret;
        this.repositories_count = 7;
        this.repositories_sort  = 'created: asc';
    }

    async fetchUser(user) {
        console.log(user);
        const userProfile = await 
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&${this.client_secret}`);

        const userRepositories = await 
            fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&${this.client_secret}&per_page=${this.repositories_count}&sort=${this.repositories_sort}`);

        const userData = await userProfile.json();
        const userRepo = await userRepositories.json();

        return { userData, userRepo };
    }
}

module.exports = Github;