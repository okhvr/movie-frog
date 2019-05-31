import MoviesScene from '../scenes/moviesScene/MoviesScene';
import MovieScene from '../scenes/movieScene/MovieScene';
import NotFound from '../components/notFound/NotFound';

export default [
    {
        component: MovieScene,
        path: '/movie/:id',
    },
    {
        component: MoviesScene,
        path: '/',
        exact: true,
    },
    {
        component: MoviesScene,
        path: '/search/:query',
    },
    {
        component: NotFound,
        path: '*',
        exact: true,
    }
];
