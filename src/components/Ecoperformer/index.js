import React, { Component } from 'react';

import { Container } from '@material-ui/core';

import Piloter from './Piloter';
import Transports from './Transports';
import GestionEnergetique from './GestionEnergetique';
import GestionDesDechets from './GestionDesDechets';
import GestionDeEau from './GestionDeEau';
import GestionArchitecturaleEtDesBatiments from './GestionArchitecturaleEtDesBatiments';
import GestionNumerique from './GestionNumerique';
import BilanCarbone from './BilanCarbone';


export class Ecoperformer extends Component {

    render() {
        const { values, handleChange } = this.props;
        return (
                <Container>

                    <Piloter 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <Transports 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <GestionEnergetique 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <GestionDesDechets 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <GestionDeEau 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <GestionArchitecturaleEtDesBatiments 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <GestionNumerique 
                    values ={values}
                    handleChange ={handleChange}
                    />
                    <BilanCarbone 
                    values ={values}
                    handleChange ={handleChange}
                    /> 

        </Container>
        );
    }
}

export default Ecoperformer;
