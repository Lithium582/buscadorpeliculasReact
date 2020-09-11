import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Pelicula extends Component {
    static propTypes = {
        id: PropTypes.string,
        titulo: PropTypes.string,
        ano: PropTypes.string,
        poster: PropTypes.string
    }

    render() {
        const {id, poster, titulo, ano} = this.props;

        return (
            <Link to={`/detalle/${id}`} className="card">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img
                                alt={titulo}
                                src={poster !== "N/A" ? poster : "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/03/meme-changuito-sorprendido-1110x640.jpg" } />
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{titulo}</p>
                                <p className="subtitle is-6">{ano}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        )
    }
}