import { AiOutlineHome, AiOutlineEdit} from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { BsClipboardPulse } from 'react-icons/bs';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoCreateOutline } from 'react-icons/io5';

import airfoce from '../assests/images/airfoce.png'
import yeezy500 from '../assests/images/yeezy500.png'
import yeezy700 from '../assests/images/yeezy700.png'
import newbalance from '../assests/images/new-balance.png'


export const Data =  {
    navbarLinks : [
        {
            id: 1,
            name   : 'Catalog',
            path   : '/catalog',
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
    ],
    navbarLinksLogged : [
        {
            id: 1,
            name   : 'Catalog',
            path   : '/catalog',
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
    ],

    headerData : {
        mainHeading: 'Biggest Hype Shoe or Clothes exchange/resell website out here!',
        paraghraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard  dummy text ever since the 1500s,'
    },

    headerCards : [
        {
            id: 1,
            h1  : 'Yeezy Boost 500',
            p   : 'Adidas',
            picture  : yeezy500,
        },
        {
            id: 2,
            h1  : 'Yeezy Boost 700 v3',
            p   : 'Adidas',
            picture  : yeezy700 ,
        },
        {
            id: 3,
            h1  : 'Air Force 1',
            p   : 'Nike',
            picture  : airfoce,
        },
       
        {
            id: 4,
            h1  : 'NB 2002rd salt',
            p   : 'New Balance',
            picture  : newbalance,
        },
        
    ],

    sidebarLinks : [
        {
            id: 1,
            name   : 'Catalog',
            path   : '/catalog',
            icons  : <AiOutlineHome/>,
            active : false
        },
        {
            id: 2,
            name   : 'Post an Ad',
            path   : '/post',
            icons  : <IoCreateOutline/>,
            active : false
        },        
    ],
    sidebarLinksAdmin : [
        {
            id: 1,
            name   : 'Home',
            path   : '/catalog',
            icons  : <AiOutlineHome/>,
            active : false
        },
        {
            id: 3,
            name   : 'Dashboard',
            path   : '/dashboard',
            icons  : <BsClipboardPulse/>,
            active : false
        },
        {
            id: 4,
            name   : 'Statistics',
            path   : '/statistics',
            icons  : <RxDashboard/>,
            active : false
        },
        {
            id: 5,
            name   : 'Post an Ad',
            path   : '/dashboard/catalog-item',
            icons  : <IoCreateOutline/>,
            active : false
        },
    ],

    shoppingCartText : {
        cartH1: "Shopping cart.",
        items: "items in the bag.",
        promo: "Have a Promo code?"
    }
}

