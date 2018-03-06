let axios = require('axios');
let setting ={
    clientID: '46641076941ca494908d',
    clientSecret: '6a805d0abd33ed3f74cc9ff6ebdf0e924a52fab7'
};

function getRepos(playerName) {
    let url = '';
    return axios.get(url).then(response => {
        return response.data;
    });
}
function calculareScore(repos) {
    return 'score here: will be number';
}

function calculateScoreAndReturnDataOfUser (playerName) {

    return getRepos(playerName).then(repo => {
        let score = calculareScore(repo);

        return {
            score: score,
            info: repo
        }
    })
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
        ]).then(data => {
            return data;
        })
    }

};