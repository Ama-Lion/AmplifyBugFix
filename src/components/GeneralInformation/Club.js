import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Club( { values, handleChange } ) {

    return (
        <div>
        <ListSubheader className='listSubheaderStyle'>
          <h3>Club ou Évènement </h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>
        <TextField
          placeholder="Nom de la structure :"
          label="Nom de la structure :"
          onChange={handleChange('nom')}
          defaultValue={values.nom}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Discipline :"
          label="Discipline :"
          onChange={handleChange('discipline')}
          defaultValue={values.discipline}
          margin="normal"
          fullWidth
        />
        <TextField
          id="date"
          label="Date de création :"
          type="date"
          onChange={handleChange('date_de_creation')}
          defaultValue={values.date_de_creation}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          placeholder="Statut juridique :"
          label="Statut juridique :"
          onChange={handleChange('Statut_juridique_du_club')}
          defaultValue={values.Statut_juridique_du_club}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Budget :"
          label="Budget :"
          onChange={handleChange('budget')}
          defaultValue={values.budget}
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
        />
        <TextField
          placeholder="Part allouée à la formation :"
          label="Part allouée à la formation :"
          onChange={handleChange('part_allouee_a_la_formation')}
          defaultValue={values.part_allouee_a_la_formation}
          margin="normal"
          fullWidth
        />

        <TextField
          placeholder="Nombre total de salariés :"
          label="Nombre total de salariés :"
          onChange={handleChange('nb_total_salarie')}
          defaultValue={values.nb_total_salarie}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de licencié(e)s :"
          label="Nombre de licencié(e)s :"
          onChange={handleChange('nb_de_licencie')}
          defaultValue={values.nb_de_licencie}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de jeunes joueurs (U18) :"
          label="Nombre de jeunes joueurs (U18) :"
          onChange={handleChange('nb_de_jeunes_jouers_u18')}
          defaultValue={values.nb_de_jeunes_jouers_u18}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de joueurs professionnels :"
          label="Nombre de joueurs professionnels :"
          onChange={handleChange('nb_de_jouers_professionnels')}
          defaultValue={values.nb_de_jouers_professionnels}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de joueurses professionnelles :"
          label="Nombre de joueurses professionnelles :"
          onChange={handleChange('nb_de_joueurses_professionnelles')}
          defaultValue={values.nb_de_joueurses_professionnelles}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de joueurs en centre de formation :"
          label="Nombre de joueurs en centre de formation :"
          onChange={handleChange('nb_de_jouers_en_centre_de_formation')}
          defaultValue={values.nb_de_jouers_en_centre_de_formation}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de personnel administratif :"
          label="Nombre de personnel administratif :"
          onChange={handleChange('nb_de_personnel_admistrative')}
          defaultValue={values.nb_de_personnel_admistrative}
          margin="normal"
          fullWidth
          type="number"
        />

        <TextField
          placeholder="Nombre de staff professionnel :"
          label="Nombre de staff professionnel :"
          onChange={handleChange('nb_de_staff_professionnels')}
          defaultValue={values.nb_de_staff_professionnels}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de dirigeants :"
          label="Nombre de dirigeants :"
          onChange={handleChange('nb_des_dirigeants')}
          defaultValue={values.nb_des_dirigeants}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Nombre de bénévoles/volontaires :"
          label="Nombre de bénévoles/volontaires :"
          onChange={handleChange('nb_de_benevoles_volontaires')}
          defaultValue={values.nb_de_benevoles_volontaires}
          margin="normal"
          fullWidth
          type="number"
        />
        </div>
    )
}
