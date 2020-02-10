import React, {Component} from 'react';
import Noticias from '../containers/Noticias';

class Search extends Component{
    render(){
        let busqueda = this.props.match.params.search;

        return(
            <div className="container-search">
                <Noticias search={busqueda}
                />
            </div>
        )
    }

}