import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pelicula } from './pelicula.js'

export class ListaPeliculas extends Component {
    static propTypes = {
        peliculas: PropTypes.array
    }

    render() {
        const {peliculas} = this.props
        return (
            <div className="MoviesList">
            {
                peliculas.map(peli => {
                return (
                    <div key={peli.imdbID} className="MoviesList-item">
                        <Pelicula
                            id={peli.imdbID}
                            titulo={peli.Title}
                            ano={peli.Year}
                            poster={peli.Poster}
                            />
                    </div>
                )}
            )}
            </div>
        )
    }
}
