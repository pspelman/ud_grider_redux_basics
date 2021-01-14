import React from 'react'
import {useSelector} from "react-redux";
import SongList from "./SongList";
import SongDetail from "./SongDetail";


const App = () => {

  // const selectedSong = useSelector(({selectedSong}) => selectedSong)

  return (
    <div className={"ui container grid"}>
      <div className={"ui row"}>
        <div className="column eight wide">
          <h1>Songs App</h1>
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  )
}

export default App
