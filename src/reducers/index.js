import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
	  { title: 'Stereo Hearts', duration: '4:05'},
	  { title: 'Mystery Of Love', duration: '4:09'},
	  { title: 'Waalian', duration: '3:26'},
	  { title: 'Invisible', duration: '3:21'},
   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
   if (action.type === 'SONG_SELECTED') {
   	 return action.payload;
   }

   return selectedSong;
};


export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});