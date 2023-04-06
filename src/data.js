import project0 from './assets/images/code-playground.png';
import project1 from './assets/images/ohsung.png';
import project2 from './assets/images/github-search.png';

export const archiveData = [ 
  // 부수적인 프로젝트 more projects 
  {
    year: '2021',
    title: 'Todoey',
    built: ['Flutter'],
    github: 'https://github.com/ihanchoi',
  },
  {
    year: '2021',
    title: 'Flash Chat',
    built: ['Flutter', 'Firebase'],
    github: 'https://github.com/ihanchoi',
  },
  {
    year: '2021',
    title: 'vue-todo',
    built: ['Vue'],
    github: 'https://github.com/goleedev/vue-todo',
  },
  {
    year: '2021',
    title: 'goleedevlog',
    built: ['Next', 'Styled Components'],
    github: 'https://github.com/goleedev/goleedevlog',
    link: 'https://golee.tech',
  },
  {
    year: '2021',
    title: 'TypeChain',
    built: ['TypeScript'],
    github: 'https://github.com/goleedev/typechain',
  },
  {
    year: '2020',
    title: 'Twitter Clone',
    built: ['Firebase', 'React', 'JavaScript', 'Github'],
    github: 'https://github.com/goleedev/nwitter',
    link: 'https://goleedev.github.io/nwitter/#/',
  },
  {
    year: '2020',
    title: 'Portfolio v2',
    built: ['React', 'JavaScript', 'Github'],
    github: 'https://github.com/goleedev/golee',
  },
  {
    year: '2020',
    title: 'Portfolio v1',
    built: ['HTML', 'CSS', 'JavaScript', 'Github'],
    github: 'https://github.com/goleedev/old8',
  },
  {
    year: '2020',
    title: "Watchin'",
    built: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/goleedev/movie-app',
    link: 'https://watchin-app.herokuapp.com/',
  },
  {
    year: '2020',
    title: "Just Browsin'",
    built: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/goleedev/justbrowsin',
  },
  {
    year: '2020',
    title: 'Covid-19 Tracker Clone',
    built: ['React', 'ChartJS', 'HTML', 'CSS'],
    github: 'https://github.com/goleedev/coronaTracker',
    link: 'https://coronatrackergoleedev.netlify.app/',
  },
];

export const workData = [ 
  // main project 3개  Recent work
  {
    project: 'Code Playground',
    stack: ['TypeScript', 'React.js', 'Redux'],
    description:
      'An interactive development environment for writing and documenting code. User can execute their code in a preview window.',
    website: 'https://goleedev.github.io/code-playground/',
    github: 'https://github.com/goleedev/code-playground',
    type: 'Personal',
    image: project0,
  },
  {
    project: 'Ohsung Real Estate Agency',
    stack: ['Firebase', 'React.js', 'Bootstrap'],
    description:
      'A paid project for Ohsung Real Estate Agency based in Cheonan. Users can search products inside the website and admin can upload and manage products.',
    website: 'https://5sungbds.com',
    github: 'https://github.com/goleedev/ohsung-realestate',
    type: 'Paid',
    image: project1,
  },
  {
    project: 'Ur Repo: Github Search App',
    stack: ['React.js', 'Fusioncharts', 'Github API'],
    description:
      'A Github search app. It shows user profile and repository stats with data visualizations of the most used and the most starred languages.',
    website: 'https://ur-repo.herokuapp.com/',
    github: 'https://github.com/goleedev/ur-repo',
    type: 'Personal',
    image: project2,
  },
];
