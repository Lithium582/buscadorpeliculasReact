import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {BotonAtras} from '../componentes/botonAtras'

const API_KEY = '4287ad07';

export class Detalle extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { pelicula: {} }

    _obtenerPelicula({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ pelicula: movie });
            })
    }

    componentDidMount () {
        const { id } = this.props.match.params
        this._obtenerPelicula({ id })
    }

    _volverAtras () {
        window.history.back();
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot} = this.state.pelicula;

        return (
            <div>
                <BotonAtras />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}