import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Club( { values, handleChange } ) {

    return (
        <div>
        <ListSubheader  style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white" }}>
          <h3>Club amateur</h3>
        </ListSubheader>
        <TextField
          placeholder="Nombre de licenciés :"
          label="Nombre de licenciés :"
          onChange={handleChange('nb_de_licencies')}
          defaultValue={values.nb_de_licencies}
          margin="normal"
          fullWidth
          type="number"
        />
        <TextField
          placeholder="Part des dirigeants :"
          label="Part des dirigeants :"
          onChange={handleChange('part_des_dirigeants')}
          defaultValue={values.part_des_dirigeants}
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="Nombre de bénévoles/volontaires :"
          label="Nombre de bénévoles/volontaires :"
          onChange={handleChange('nb_de_benevoles_volontaires_club_amateur')}
          defaultValue={values.nb_de_benevoles_volontaires_club_amateur}
          margin="normal"
          fullWidth
          type="number"
        />
        </div>
    )
}
