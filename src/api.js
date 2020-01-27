import axios from 'axios';
import { from } from 'rxjs';

const CONFIG = {
    API_URL: 'https://api.github.com',
    AUTH_URL: 'https://github.com/login/oauth/authorize',
    PROXY_URL: 'https://cors-anywhere.herokuapp.com/',
    REDIRECT_URI: 'http://localhost:4200/auth',
    TOKEN_URL: 'https://github.com/login/oauth/access_token',
};

const PATHS = {
    repositories: '/repos'
};

export const listCommits = (owner, repoName) => {
    const url = `${CONFIG.API_URL}${PATHS.repositories}/${owner}/${repoName}/commits`;
    return from(axios
        .get(url, {
          completed: false
        }));
}

export const getCommit = (owner, repoName, id) => {
    const url = `${CONFIG.API_URL}${PATHS.repositories}/${owner}/${repoName}/commits/${id}`;
    return from(axios
        .get(url, {
          }));
}