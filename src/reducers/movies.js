import {
  SEARCH_MOVIES_COMPLETED,
  SEARCH_OPTION_SELECTED,
  SORT_OPTION_SELECTED,
  SEARCH_QUERY_CHANGED,
  SEARCH_MOVIE_COMPLETED
} from '../actions/movies';

const initialState = {
  data: [],
  searchOptions: [
    {
      name:'title',
      selected: true
    },
    {
      name: 'genres',
      selected: false
    }
  ],
  sortOptions: [
    {
      value: 'release_date',
      label: 'release date',
      selected: true,
    },
    {
      value: 'vote_average',
      label: 'raiting',
      selected: false
    }
  ],
  query: '',
  movie: null
}

export default function movies(state = initialState, action) {
    switch (action.type) {
      case SEARCH_MOVIES_COMPLETED:
        return {
          ...state,
          data: action.payload
        };
      case SEARCH_MOVIE_COMPLETED:
        return {
          ...state,
          movie: action.payload
        };
      case SEARCH_QUERY_CHANGED:
        return {
          ...state,
          query: action.payload
        };
      case SEARCH_OPTION_SELECTED:
        return {
          ...state,
          searchOptions: state.searchOptions.map(o => {
            o.selected = o.name === action.payload.name;
            return o;
          })
        };
      case SORT_OPTION_SELECTED:
        return {
          ...state,
          sortOptions: state.sortOptions.map(o => {
            o.selected = o.value === action.payload.value;
            return o;
          })
        };
      default:
        return state
    }
  }
