import { AiOutlineHome, AiOutlineEdit} from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { BsClipboardPulse } from 'react-icons/bs';
import { SiSimpleanalytics } from 'react-icons/si';




export const Data = {
    navbarLinks : [
        {
            id: 1,
            name   : 'Home',
            path   : '/',
            icons  : '',
            active : false
        },
        {
            id: 2,
            name   : 'About',
            path   : '/about',
            icons  : '',
            active : false
        },
        {
            id: 3,
            name   : 'Contact',
            path   : '/contact',
            icons  : '',
            active : false
        },
        {
            id: 4,
            name   : 'Dashboard',
            path   : '/dashboard',
            icons  : '',
            active : false
        },
        {
            id: 5,
            name   : 'Edit Profile',
            path   : '/edit',
            icons  : '',
            active : false
        },
    ],

    headerData : {
        mainHeading: 'Secrets To PROGRAMMING – Even In This Down Economy',
        paraghraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard  dummy text ever since the 1500s,'
    },

    headerCards : [
        {
            id: 1,
            h1  : 'MongoDb',
            p   : 'DataBase',
            picture  : 'https://www.tutorialsteacher.com/Content/images/home/mongodb.svg',
        },
        {
            id: 2,
            h1  : 'Express',
            p   : 'Backend Framework',
            picture  : 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3498663/status-iucn-ex-icon-blank-icon-md.png',
        },
        {
            id: 3,
            h1  : 'ReactJs',
            p   : 'Frontend Framework',
            picture  : 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
        },
       
        {
            id: 4,
            h1  : 'NodeJs',
            p   : 'Enviroment',
            picture  : 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
        },
        
    ],

    sidebarLinks : [
        {
            id: 1,
            name   : 'Home',
            path   : '/edit',
            icons  : <AiOutlineHome/>,
            active : false
        },
        {
            id: 2,
            name   : 'Edit Profile',
            path   : '/edit',
            icons  : <AiOutlineEdit/>,
            active : false
        },
        {
            id: 3,
            name   : 'Dashboard',
            path   : '/edit',
            icons  : <BsClipboardPulse/>,
            active : false
        },
        {
            id: 4,
            name   : 'Statistics',
            path   : '/edit',
            icons  : <RxDashboard/>,
            active : false
        },
        {
            id: 5,
            name   : 'Analysis',
            path   : '/edit',
            icons  : <SiSimpleanalytics/>,
            active : false
        },
    ]
}

