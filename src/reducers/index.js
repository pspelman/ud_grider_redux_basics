import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'I Want it That Way', duration: '1:45'},
  ]
}



const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    console.log(`setting selected song to `, action.payload)

    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  // Note: keys of this object are going to be the keys that show up inside of our STATE object
  songs: songsReducer,
  selectedSong: selectedSongReducer
})