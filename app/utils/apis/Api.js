const axios = require('axios');
const setting = {
    clientID: '46641076941ca494908d',
    clientSecret: '6a805d0abd33ed3f74cc9ff6ebdf0e924a52fab7'
};
const params = `client_id=${setting.clientID}&client_secret=${setting.clientSecret}`;


function countReposStar (repos) { // return a number which symbolize the count of star for all repos
    return repos.reduce((init, { stargazers_count }) => {
        return init + stargazers_count;
    }, 0);
}

function getProfile (playerName) {
    let url = 'https://api.github.com/users/' + `${playerName}?${params}` ;

    return axios.get(url).then( ({ data }) => data);
}

function getRepos(playerName) {
    let url = 'https://api.github.com/users/' + `${playerName}/repos?per_page=100&${params}`;

    return axios.get(url).then( ({ data }) => data);
}

function calculateScore({ followers }, repos) {
    return (followers * 3) + countReposStar(repos);
}

let handleError = err =>console.log(err) ||  null;

function calculateScoreAndReturnDataOfUser (playerName) {

    return Promise.all([
        getProfile(playerName),
        getRepos(playerName)
    ]).then( ([profile, repos]) => {
        let score = calculateScore(profile, repos);
        return {
            score,
            info: profile
        }
    });
}

module.exports = {
    getHottestRepos (lang) {
        const url = window.encodeURI(
            'https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
            '&sort=stars&order=desc&type=Repositories&client_id=' + params);

        return axios.get(url).then( ({data}) => data.items); // array of repos);
    },
    getBattleResult (players) {
        return Promise.all(players.map(calculateScoreAndReturnDataOfUser)).then(data => { // return array of player which first element is a winner and second is for the loser
            return data.sort(({score: aScore, b: bScore}) => bScore - aScore);
        }).catch(handleError);
    }

};