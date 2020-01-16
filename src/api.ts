import { of } from 'rxjs';

const CONFIG = {
    API_URL: 'https://api.github.com',
    AUTH_URL: 'https://github.com/login/oauth/authorize',
    CLIENT_ID: '80756f1935ea8314dc97',
    CLIENT_SECRET: 'ed370087dcfc87b2a08e59a3359e1e97a6e24b2a',
    PROXY_URL: 'https://cors-anywhere.herokuapp.com/',
    REDIRECT_URI: 'http://localhost:4200/auth',
    TOKEN_URL: 'https://github.com/login/oauth/access_token',
};

const PATHS = {
    repositories: '/repos'
};

export const LIST_COMMITS = (owner: string, repoName: string) => {
    const url = `${CONFIG.API_URL}${this.PATHS.repositories}/${owner}/${repoName}/commits`;
    return of({}); // TODO 
}