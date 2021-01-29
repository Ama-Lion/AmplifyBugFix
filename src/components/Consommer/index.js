import React, { Component } from 'react';

import { Container } from '@material-ui/core';

import Alimentation from './Alimentation';
import GestionDesAchats from './GestionDesAchats';
import CommunicationResponsable from './CommunicationResponsable';
import Accessibilite from './Accessibilite';
import Exemplarite from './Exemplarite';
import ImpactTerridtorial from './ImpactTerritorial';



export class Consommer extends Component {


  render() {
    const { values, handleChange} = this.props;
    return (
      <Container>

        <Alimentation 
        values = {values}
        handleChange ={handleChange}
        />
       <GestionDesAchats 
        values = {values}
        handleChange ={handleChange}
        />
        <CommunicationResponsable 
        values = {values}
        handleChange ={handleChange}
        /> 
        <Accessibilite 
        values = {values}
        handleChange ={handleChange}
        />
        <Exemplarite 
        values = {values}
        handleChange ={handleChange}
        />
        <ImpactTerridtorial 
        values = {values}
        handleChange ={handleChange}
        /> 


      </Container>
    );
  }
}

export default Consommer;
