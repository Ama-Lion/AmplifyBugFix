import React, { Component } from 'react';
import { Container } from '@material-ui/core';


import RespectDesMlieux from './RespectDesMlieux';
import GestionDesSols from './GestionDesSols';
import ProduitsDentretien from './ProduitsDentretien';
import VieAuStade from './VieAuStade';

export class EnvironnementPreserver extends Component {

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container>
         
       <RespectDesMlieux 
       values = {values}
       handleChange = {handleChange}
       />
       <GestionDesSols 
       values = {values}
       handleChange = {handleChange}
       /> 
      <ProduitsDentretien 
       values = {values}
       handleChange = {handleChange}
       />
       <VieAuStade 
       values = {values}
       handleChange = {handleChange}
       />

      </Container> 
    );

  }
}

export default EnvironnementPreserver;





