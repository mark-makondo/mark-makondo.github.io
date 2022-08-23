import ChatApp from '../../../assets/img/img-projects/simple-chat-app.png';
import GithubAPIFetch from '../../../assets/img/img-projects/github-api-fetch.png';
import { projectType } from '../../../types/project.type';

export const project: projectType = {
    title: 'MY WORKS',
    description: 'I Build Anything, To Master My Craft.',
    data: [
        {
            id: 1,
            title: 'ChatApp',
            description: 'A project for practicing realtime data using NextJs.',
            SourceImage: ChatApp,
            link: 'https://mark-makondo.github.io/',
        },
        {
            id: 2,
            title: 'Github API Fetch',
            description: 'A project for learning github API.',
            SourceImage: GithubAPIFetch,
            link: 'https://mark-makondo.github.io/',
        },
    ],
};

export default project;
