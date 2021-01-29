import React, { Component } from 'react';
import { Container } from '@material-ui/core';


import RespectDesMlieux from './RespectDesMlieux';
import GestionDesSols from './GestionDesSols';
import ProduitsDentretien from './ProduitsDentretien';
import VieAuStade from './VieAuStade';

export default function EnvironnementPreserver( { values, handleChange } ) {

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






