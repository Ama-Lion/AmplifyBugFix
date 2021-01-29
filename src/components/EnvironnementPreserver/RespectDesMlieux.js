import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function RespectDesMlieux( { values, handleChange } ) {

    return (
        <>
        <ListSubheader className='listSubheaderStyle'>
          <h3>I. Respect des milieux</h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>
  
        <TextField  fullWidth className="inputText TextField"  onChange={handleChange('q1')} defaultValue={values.q1} label={"1. Où sont situées vos installations sportives ? (Centre-Ville, Périphérie Aglomération, Campagne....)"} />
        <InputRadio onChange={handleChange('q2')} defaultValue={values.q2} question="2. Lors de l’organisation d’évènements (matchs, compétitions) des mesures sont-elles prises pour le respect des sites naturels (faune & flore) ?" />
        <TextField  fullWidth className="inputText TextField"t onChange={handleChange('q3')} defaultValue={values.q3} label={"3. Si oui, liste des mesures :"} />
        <InputRadio onChange={handleChange('q4')} defaultValue={values.q4} question="4. Avez-vous travaillé avec les collectivités ou des partenaires pour l’aménagement extérieur de votre enceinte sportive ?" />
        <InputRadio onChange={handleChange('q5')} defaultValue={values.q5} question="5. Existe-t-il  des espaces verts  aménagés au  sein  de votre structure ?" />
        <InputRadio onChange={handleChange('q6')} defaultValue={values.q6} question="6. Avez-vous pris des mesures pour limiter la pollution sonore et lumineuses lors de vos matchs et/ou évènements ?" />
        <TextField  fullWidth className="inputText TextField"t onChange={handleChange('q7')} defaultValue={values.q7} label={"7. Si oui, liste des mesures :"} />
        <InputRadio onChange={handleChange('q8')} defaultValue={values.q8} question="8. Soutenez-vous une association/fondation agissant pour protection environnement ?" />
        <TextField  fullWidth className="inputText TextField"t onChange={handleChange('q9')} defaultValue={values.q9} label={"9. Si oui, liste des mesures :"} />
        <InputRadio onChange={handleChange('q10')} defaultValue={values.q10} question="10. L’enherbement et les plantations sont-ils adaptés au climat et/ou plantation unique d’essence locale ?" />
        <InputRadio onChange={handleChange('q11')} defaultValue={values.q11} question="11. Avez-vous installé des ruches autour de vos installations ?" />
        <InputRadio onChange={handleChange('q12')} defaultValue={values.q12} question="12. Avez-vous envisagé être identifié comme un refuge LPO (Ligue Nationale des Oiseaux) en installant par exemple des nichoirs autour et/ou sur vos installations ?" />
      
        </>
    )
}
