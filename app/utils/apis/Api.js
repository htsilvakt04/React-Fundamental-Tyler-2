import Axios from 'Axios';

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

async function getProfile (playerName) {
    let url = 'https://api.github.com/users/' + `${playerName}?${params}` ;

    const profile =  await Axios.get(url);

    return profile.data;
}

async function getRepos(playerName) {
    let url = 'https://api.github.com/users/' + `${playerName}/repos?per_page=100&${params}`;
    const repos = await Axios.get(url);

    return repos.data;
}

function calculateScore({ followers }, repos) {
    return (followers * 3) + countReposStar(repos);
}

let handleError = (err) =>console.log(err) ||  [];

async function calculateScoreAndReturnDataOfUser (playerName) {

    const [profile, repos] =  await Promise.all([
        getProfile(playerName),
        getRepos(playerName)
    ]);

    let score = calculateScore(profile, repos);
    return {
        score,
        info: profile
    }
}

function sortPlayers(data) {
    return data.sort((a, b) => b.score - a.score);
}
export async function getHottestRepos (lang) {
    const url = window.encodeURI(
        'https://api.github.com/search/repositories?q=stars:>1+language:' + lang +
        '&sort=stars&order=desc&type=Repositories&' + params);

    const {data} = await Axios.get(url).catch(handleError); // array of repos);
    return data.items;
}

export async function getBattleResult (players) {
    const data = await Promise.all(players.map(calculateScoreAndReturnDataOfUser)).catch(handleError);

    return data === null ? [] : sortPlayers(data);
}
