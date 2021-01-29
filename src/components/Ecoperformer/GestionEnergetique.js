import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function GestionEnergetique({ values, handleChange }) {
    return (
        <div>
            <ListSubheader className='listSubheaderStyle'>
                <h3>III.  Gestion énergétique</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>
            <InputRadio onChange={handleChange('q122')} defaultValue={values.q122} question="122. Connaissez la consommation électrique annuelle de vos installations ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q123')} defaultValue={values.q123} label={"123. Si Oui, Pouvez-vous nous l'indiquer (stade, gymnase , centre d'entrainement...) ?"} />
            <InputRadio onChange={handleChange('q124')} defaultValue={values.q124} question="124. Avez-vous  mis  en  place  des  mesures  pour  réduire  vos consommations énergétiques ?" />
            <InputRadio onChange={handleChange('q125')} defaultValue={values.q125} question="125. Avez-vous un affichage de consignes (extinction des lumières/ordinateurs, climatisation...) ?" />
            <InputRadio onChange={handleChange('q126')} defaultValue={values.q126} question="126. Avez-vous  un  affichage  d’indicateurs  de consommation visible de tous ?" />
            <InputRadio onChange={handleChange('q127')} defaultValue={values.q127} question="127. Utilisez-vous  majoritairement  des  lampes basse consommation type LED ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q128')} defaultValue={values.q128} label={"128. Autres ? merci de de préciser :"} />
            <InputRadio onChange={handleChange('q129')} defaultValue={values.q129} question="129. Votre club est-il abonné à un fournisseur d'électricité et/ou gaz utilisant des énergies vertes (Enercoop, Ilek, etc.) ?" />
            <InputRadio onChange={handleChange('q130')} defaultValue={values.q130} question="130. Votre club investit-il en faveur des énergies renouvelables lors de la rénovation de ses équipements ? (Énergie solaire, énergie éolienne, énergie hydraulique, biomasse et géothermie)" />
            <InputRadio onChange={handleChange('q131')} defaultValue={values.q131} question="131. Savez-vous quelle est la part des équipements éco-performants (Appareils  économes  en  énergie  de  type  Classe  AA+  au minimum) ?" />
            <InputRadioPercent onChange={handleChange('q132')} defaultValue={values.q132} question="132. Si oui, quelle est la part des équipements éco-performants ?" />
            <InputRadio onChange={handleChange('q133')} defaultValue={values.q133} question="133. Savez-vous quelle est la part des éclairages éco-performants (Ex : Ampoules basses consommations de Classe A, LED, halogène basse tension, fluo compact...)" />
            <InputRadioPercent onChange={handleChange('q134')} defaultValue={values.q134} question="134. Si oui, quelle est la part des éclairages éco-performants ?" />
            <InputRadio onChange={handleChange('q135')} defaultValue={values.q135} question="135. Avez-vous affiché des consignes d’utilisation du chauffage et de la climatisation sont-elles affichées auprès des salariés ?" />
            <InputRadio onChange={handleChange('q136')} defaultValue={values.q136} question="136. Avez-vous mis en place un système d’utilisation raisonné du chauffage ? (ex Programmateur de chauffage, thermostat d'ambiance programmable...) ?" />
            <InputRadio onChange={handleChange('q137')} defaultValue={values.q137} question="137. Avez-vous mis en place un système d’utilisation raisonné de la climatisation (ex : abaissement de la température de 5°C) ?" />
            <InputRadio onChange={handleChange('q138')} defaultValue={values.q138} question="138. Avez-vous mis en place une climatisation réversible, économe en énergie ?" />


        </div>
    )
}
