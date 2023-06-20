
import tour1 from './assets/images/tour-1.jpeg';
import tour2 from './assets/images/tour-2.jpeg';
import tour3 from './assets/images/tour-3.jpeg';
import tour4 from './assets/images/tour-4.jpeg';
export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#about',
        text: 'About'
    },
    {
        id: 3,
        href: '#services',
        text: 'Services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours'
    }
];

export const socialMediaLinks = [
    {
        id: 1,
        href: 'https://www.facebook.com',
        icon: 'fa-facebook',
    },
    {
        id: 1,
        href: 'https://www.twitter.com',
        rel: 'noreferrer',
        icon: 'fa-twitter',
    },
    {
        id: 1,
        href: 'https://www.webcreate.com',
        rel: 'noreferrer',
        icon: 'fa-squarespace',
    },
];

export const services = [
    {
        id: 1,
        icon: 'fa-wallet',
        title: 'saving money',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {
        id: 2,
        icon: 'fa-tree',
        title: 'endless hiking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id: 3,
        icon: 'fa-socks',
        title: 'amazing comfort',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
]

export const tours = [
    {
        id: 1,
        img: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'china',
        duration: 6,
        startPrice: 2100,
    },
    {
        id: 2,
        img: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        duration: 11,
        startPrice: 1400,
    },
    {
        id: 3,
        img: tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'hong kong',
        duration: 8,
        startPrice: 5000,
    },
    {
        id: 4,
        img: tour4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'kenya',
        duration: 20,
        startPrice: 3300,
    },
]