import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputAdornment from '@material-ui/core/InputAdornment';
import Club from './GeneralInformation/Club';


export class FormPersonalDetails extends Component {


  render() {
    const { values, handleChange } = this.props;
    return (
      <Container>
        <Club  
        values = {values}
        handleChange = {handleChange }
        />

     <ListSubheader className='listSubheaderStyle'>
          <h3>Supporters </h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>
        <TextField
          placeholder="Nombre de supporters par évènement/match par match :"
          label="Nombre de supporters par évènement/match par match :"
          onChange={handleChange('nb_de_supporteur_par_evenement_ou_match')}
          defaultValue={values.nb_de_supporteur_par_evenement_ou_match}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombres d’abonnés :"
          label="Nombres d’abonnés :"
          onChange={handleChange('nb_de_abonnes')}
          defaultValue={values.nb_de_abonnes}
          margin="normal"
          fullWidth
          type="number"
        />
        <ListSubheader className='listSubheaderStyle'>
          <h3>Référent audit : </h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>
        <TextField
          placeholder="Nom :"
          label="Nom :"
          onChange={handleChange('nom_reference_audit')}
          defaultValue={values.nom_reference_audit}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Prénom :"
          label="Prénom :"
          onChange={handleChange('prenom_reference_audit')}
          defaultValue={values.prenom_reference_audit}
          margin="normal"
          fullWidth
        />
         <TextField
          placeholder="Poste :"
          label="Poste :"
          onChange={handleChange('poste_reference_audit')}
          defaultValue={values.poste_reference_audit}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Mail :"
          label="Mail :"
          onChange={handleChange('mail_reference_audit')}
          defaultValue={values.mail_reference_audit}
          margin="normal"
          fullWidth
          type="email"
        />
        <TextField
          name="Téléphone :"
          label="Téléphone :"
          onChange={handleChange('telepone_reference_audit')}
          value={values.telepone_reference_audit}
          margin="normal"
          fullWidth
          type="phone"
        />
       <ListSubheader className='listSubheaderStyle'>
          <h3>Contacts des différents référents :</h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>
        <TextField
          placeholder="Contacts des référents : (Nom - Prénom)"
          label="Contacts des référents : (Nom - Prénom)"
          onChange={handleChange('contacts_des_referents')}
          defaultValue={values.contacts_des_referents}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Entretien (intérieur & espaces externes) :"
          label="Entretien (intérieur & espaces externes) :"
          onChange={handleChange('entretien')}
          defaultValue={values.entretien}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Intendance (administration, consommables bureautique) :"
          label="Intendance (administration, consommables bureautique) :"
          onChange={handleChange('intendance')}
          defaultValue={values.intendance}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Mobilité – transport :"
          label="Mobilité – transport :"
          onChange={handleChange('mobilitier')}
          defaultValue={values.mobilitier}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Maintenance (eau, énergie, matériaux) :"
          label="Maintenance (eau, énergie, matériaux) :"
          onChange={handleChange('maintenance')}
          defaultValue={values.maintenance}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Restauration :"
          label="Restauration :"
          onChange={handleChange('restauration')}
          defaultValue={values.restauration}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Évènements – Hospitalités :"
          label="Évènements – Hospitalités :"
          onChange={handleChange('evenement_hospiliters')}
          defaultValue={values.evenement_hospiliters}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Responsable RSE et DD :"
          label="Responsable RSE et DD :"
          onChange={handleChange('responsabel_rse_et_dd')}
          defaultValue={values.responsabel_rse_et_dd}
          margin="normal"
          fullWidth
        />



        {/* <MuiPhoneNumber
          name="Téléphone :"
          label="Téléphone :"
          defaultCountry={"fr"}
          regions={'europe'}
          onChange={handleChange('telepone_reference_audit')}
          value={values.telepone_reference_audit}
          margin="normal"
          fullWidth
        /> */}
      </Container>
    );
  }
}

export default FormPersonalDetails;
