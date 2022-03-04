import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const NavItems = [
    {
        name: 'About Me',
        url: '/aboutme',
        cName: 'navbar-items',
        spanCName:'span-aboutMe',
        icon: <PersonIcon />
    },
    {
        name: 'Projects',
        url: '/projects',
        cName: 'navbar-items',
        spanCName:'span-project',
        icon: <WorkIcon />
    },
    {
        name: 'Skills',
        url: '/skills',
        cName: 'navbar-items',
        spanCName:'span-skills',
        icon: <PsychologyIcon />
    },
    {
        name: 'Contact',
        url: '/contact',
        cName: 'navbar-items',
        spanCName:'span-contact',
        icon: <ContactPageIcon />
    },
];