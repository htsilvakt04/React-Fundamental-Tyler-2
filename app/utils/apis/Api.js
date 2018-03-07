let axios = require('axios');
let setting ={
    clientID: '46641076941ca494908d',
    clientSecret: '6a805d0abd33ed3f74cc9ff6ebdf0e924a52fab7'
};
function countReposStar (repos) { // return a number which symbolize the count of star for all repos
    return repos.reduce((init, item) => {
        return init + item.stargazers_count;
    }, 0);
}

function getProfile (playerName) {
    let url = 'https://api.github.com/users/' + playerName + '?' + 'client_id=' + setting.clientID + '&client_secret=' + setting.clientSecret;

    return axios.get(url).then(response => response.data);
}

function getRepos(playerName) {
    let url = 'https://api.github.com/users/' + playerName + '/repos' + '?' + 'per_page=100' + '&client_id=' + setting.clientID + '&client_secret=' + setting.clientSecret;

    return axios.get(url).then(response => {
        return response.data;
    });
}
function calculateScore(profile, repos) {
    let followers = profile.followers;
    let startCount = countReposStar(repos);

    return (followers * 3) + startCount;

}

function calculateScoreAndReturnDataOfUser (playerName) {

    return Promise.all([
        getProfile(playerName),
        getRepos(playerName)
    ]).then(data => {
        let profile = data[0];
        let repos = data[1];

        let score = calculateScore(profile, repos);
        return {
            score: score,
            info: profile
        }
    });
}

module.exports = {
    getHottestRepos: function  (lang) {
        let url = window.encodeURI(
            'https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
            '&sort=stars&order=desc&type=Repositories&client_id=' + setting.clientID +
            '&client_secret=' + setting.clientSecret);

        return axios.get(url).then(response => {
            return response.data.items; // array of repos
        });
    },
    getBattleResult: function (playerOne, playerTwo) {
        return Promise.all([
            calculateScoreAndReturnDataOfUser(playerOne),
            calculateScoreAndReturnDataOfUser(playerTwo),
        ]).then(data => { // return array of player which first element is a winner and second is for the loser
            return data.sort((a, b) => b.score - a.score);
        })
    }

};