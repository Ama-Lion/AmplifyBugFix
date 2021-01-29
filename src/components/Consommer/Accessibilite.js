import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio,  } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function Accessibilite({ values, handleChange }) {

    return (
        <div>

            <ListSubheader className='listSubheaderStyle'>
                <h3>IV.  Accessibilité</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q281')} defaultValue={values.q281} question="281. Les locaux sont-ils accessibles aux personnes en situation de handicap ?" />
            <InputRadio onChange={handleChange('q281_1')} defaultValue={values.q281_1} question="281 |. Bureaux" />
            <InputRadio onChange={handleChange('q281_2')} defaultValue={values.q281_2} question="281 | |. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q281_3')} defaultValue={values.q281_3} question="281 | | |. Stade" />
            <InputRadio onChange={handleChange('q281_4')} defaultValue={values.q281_4} question="281 | | | |. Gymnase (terrain basket, hand, volley)" />
            <InputRadio onChange={handleChange('q282')} defaultValue={values.q282} question="282. Avez-vous mis en place des systèmes audio et/ou virtuel pour les personnes ayant des problèmes de visions ou de surdités pour pouvoir suivre les matchs ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q283')} defaultValue={values.q283} label={"283. Si oui, pouvez-vous donner quelques exemples ?"} />
            <InputRadio onChange={handleChange('q284')} defaultValue={values.q284} question="284. Avez-vous  mis  en  place  et  respectez-vous  un  protocole sanitaire (COVID) ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q285')} defaultValue={values.q285} label={"285. Si oui, pouvez-vous donner quelques exemples ?"} />
            <InputRadio onChange={handleChange('q286')} defaultValue={values.q286} question="286. Avez-vous mis en place un programme favorisant l’accès à des publics défavorisés (politique tarifaire, journée découverte...) ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q287')} defaultValue={values.q287} label={"287.  Si Oui, quel(s) type(s) de programme ?"} />
            <InputRadio onChange={handleChange('q288')} defaultValue={values.q288} question="288. Lors de vos évènements expérimentez-vous des innovations écoresponsables ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q289')} defaultValue={values.q289} label={"289. Si Oui, Liste des innovations mises en avant durant l’année N-1 :"} />

        </div>
    )
}
