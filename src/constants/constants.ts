import { KeyValueType } from '../types/common.type';
import { AboutDataType } from '../types/about.type';
import { ProjectType } from '../types/project.type';

import { ReactComponent as FrontEndIcon } from '../assets/svg/frontend-icon.svg';
import { ReactComponent as BackEndIcon } from '../assets/svg/backend-icon.svg';
import { ReactComponent as FrameWorksIcon } from '../assets/svg/framework-icon.svg';
import { ReactComponent as VersionControlIcon } from '../assets/svg/version-control-icon.svg';

import Socialform from '../assets/img/img-projects/socialform.png';

export const navbarValues: KeyValueType[] = [
    { key: 'hero', value: 'home' },
    { key: 'about', value: 'about me' },
    { key: 'projects', value: 'projects' },
    { key: 'contact', value: 'contact' },
];

export const aboutData: AboutDataType = {
    title: 'Hello! I am Mark Albert Makondo',
    description: [
        'I like tech-related stuff and I enjoy building web apps.',
        'I create personal web apps every day to enhance my skills.',
        'I started web development in 2020 & I have a one year work experience.',
    ],
    skills: {
        frontEnd: {
            label: 'Front-End',
            data: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'AdobeXD'],
            description: 'Mastering basic web dev skills is key to advancement.',
            SVG: FrontEndIcon,
        },
        backEnd: {
            label: 'Back-End',
            data: ['NodeJs', 'MongoDB'],
            description: 'Hard but it is one of the things that I enjoy the most.',
            SVG: BackEndIcon,
        },
        frameWorks: {
            label: 'Frameworks',
            data: ['ReactJs', 'MeteorJs', 'NextJs', 'TypeScript'],
            description: 'It makes development enjoyable and easier.',
            SVG: FrameWorksIcon,
        },
        versionControl: {
            label: 'Version Control',
            data: ['Github'],
            description: 'More knowledge means easy code management.',
            SVG: VersionControlIcon,
        },
    },
};

export const projectData: ProjectType = {
    title: 'My Works',
    description: 'I Build Anything, To Master My Craft.',
    data: [
        {
            id: 1,
            title: 'Socialform',
            description:
                'A project for practicing realtime data using NextJs. Not yet finished you may see the work in progress vercel app.',
            SourceImage: Socialform,
            link: 'http://socialform.vercel.app/',
        },
        {
            id: 2,
            title: 'Soon',
            description: 'I am still converting my previous project to NextJs React.',
            // SourceImage: Socialform,
            link: 'https://mark-makondo.github.io/',
        },
    ],
};
