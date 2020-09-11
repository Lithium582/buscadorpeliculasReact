import React, { Component } from 'react';
import { Titulo } from '../componentes/titulo.js'
import { Buscador } from '../componentes/Busqueda.js'
import { ListaPeliculas } from '../componentes/listaPeliculas.js'

export class Home extends Component {
    state = {results: [], buscado:false}

  _handleResults = (results) => {
    this.setState({ results, buscado: true });
  }

  _renderResults = () => {
    return this.state.results.length === 0
      ? <div><p>Tú búsqueda fue infructuosa</p><img src="https://www.buscabiografias.com/img/people/Jose_Fructuoso_Rivera.jpg" alt="Es Rivera" /></div>
      : <ListaPeliculas
        peliculas={this.state.results} />
  }

    render () {
        return(
            <div>
                <Titulo>Buscador de múbis onláin!</Titulo>
                <h2>Si no sabés qué ver en Nénfli, acá ta la solushon!</h2>
                <div className="Busqueda-wrapper">
                <Buscador onResults={this._handleResults} />
                </div>
                {this.state.buscado
                ? this._renderResults()
                : <small>Buscate algo améo</small>
                }
            </div>
        )
    }
}