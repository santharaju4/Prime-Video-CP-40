import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    console.log(moviesList)

    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )

    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="image"
        />
        <div className="movies-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div className="movies-container">
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
