import React from 'react'
import {connect} from "react-redux";

const SongDetail = (props) => {
  console.log(`props: `, props)
  const {song} = props
  const songDiv = () => {
    if (song) {
      return (
        <div>
          <h1>Selected Song</h1>
          <h2>{song.title}</h2>
          <br/>
          duration: {song.duration}
        </div>
      )
    }
    return <div>
      <h1>Select a Song</h1>
    </div>
  }
  return (
    <React.Fragment>
      <div className="content">
        {songDiv()}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)