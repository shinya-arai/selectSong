import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'first song', duration: '3:00'},
    {title: 'second song', duration: '6:40'},
    {title: 'third song', duration: '2:49'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});