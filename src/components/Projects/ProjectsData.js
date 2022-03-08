/* IMAGE IMPORT */
import hedwigHome from './../../img/projects-screenshots/hedwig-home.png';
import mliebreHome from './../../img/projects-screenshots/mliebre-home.png';
import portfolioHome from './../../img/projects-screenshots/portfolio-home.png';

export const ProjectsData = [
    {
        title: 'Hedwig Bookshop',
        subtitle: 'This was a final project made in a team with other 4 developers for the Digital House bootcamp.',
        description: 'The project is a Full Stack full responsive book e-commerce made from scrap. It has a lot of functions such as creating a new user, adding and deleting items from a cart that is saved in the database and a lot of other features, feel free to test it!',
        pageLink: 'https://libreria-hedwig.herokuapp.com/',
        gitLink: 'https://github.com/AlexRacciatti/Hedwig-Ecommerce',
        techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node JS', 'Express JS', 'MySQL', 'Sequelize', 'Git', 'Heroku'],
        coverImage: hedwigHome
    },
    {
        title: 'Mercado Liebre',
        subtitle: 'This was my very first project, also made at Digital House bootcamp',
        description: 'Only made with HTML and CSS. This was my first approach to web development.',
        pageLink: 'https://mercado-liebre1969.herokuapp.com/',
        gitLink: 'https://github.com/AlexRacciatti/MercadoLiebre',
        techs: ['HTML', 'CSS', 'Git', 'Heroku'],
        coverImage: mliebreHome
    },
    {
        title: 'My portfolio',
        subtitle: 'This is the project you are currently at!',
        description: 'In order to improve my Frontend skills, i decided to make my portfolio in React JS with functional components using Hooks like useState, useEffect and useRef. Also i got into Material UI universe and got my attention so i used it on this project.',
        pageLink: 'https://alexracciatti.vercel.app',
        gitLink: 'https://github.com/AlexRacciatti/Portfolio',
        techs: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Material UI', 'Git', 'Vercel'],
        coverImage: portfolioHome
    }
]