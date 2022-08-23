import { dataType } from '../../../types/about.type';
import { ReactComponent as FrontEndIcon } from '../../../assets/svg/frontend-icon.svg';
import { ReactComponent as BackEndIcon } from '../../../assets/svg/backend-icon.svg';
import { ReactComponent as FrameWorksIcon } from '../../../assets/svg/framework-icon.svg';
import { ReactComponent as VersionControlIcon } from '../../../assets/svg/version-control-icon.svg';

export const data: dataType = {
    title: `Hello! I am Mark Albert Makondo`,
    description: [
        'I like tech-related stuff and I enjoy building web apps.',
        'I create personal web apps every day to enhance my skills.',
        'I started web development in 2020 & I have a one year work experience.',
    ],
    skills: {
        frontEnd: {
            label: 'Front-End',
            data: ['HTML', 'JS', 'CSS', 'SCSS', 'AdobeXD'],
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

export default data;
