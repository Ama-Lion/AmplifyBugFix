import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function GestionDeEau({ values, handleChange }) {
    return (
        <div>
            <ListSubheader className='listSubheaderStyle'>
                <h3>V.  Gestion de l’eau</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q165')} defaultValue={values.q165} question="165. Connaissez-vous votre consommation d'eau annuelle au sein de votre structure ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('166')} defaultValue={values.q166} label={"166. Si, Oui pouvez-vous nous communiquer cette consommation ? Eau chaude ? Eau froide ? (stade, gymnase , centre d'entrainement...)"} />
            <InputRadio onChange={handleChange('q167')} defaultValue={values.q167} question="167. Est-ce qu'il y a un système pré-installé d'économiseur d’eau : mousseurs - capteurs automatiques à vos sorties d'eau (robinets, douches, etc.) ?" />
            <InputRadio onChange={handleChange('q167_1')} defaultValue={values.q167_1} question="167 |. Bureau" />
            <InputRadio onChange={handleChange('q167_2')} defaultValue={values.q167_2} question="167 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q167_3')} defaultValue={values.q167_3} question="167 |||. Stade" />
            <InputRadio onChange={handleChange('q167_4')} defaultValue={values.q167_4} question="167 |V. Gymnase (terrain basket, hand, volley)" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q168')} defaultValue={values.q168} label={"168. Si Oui, quel système avez-vous privilégié ?"} />
            <InputRadio onChange={handleChange('q169')} defaultValue={values.q169} question="169. Avez-vous mis en place des détecteurs automatiques de fuites dans vos réseaux ?" />
            <InputRadio onChange={handleChange('q170')} defaultValue={values.q170} question="170. Avez-vous des équipements de régulateurs de débit, réducteurs de pression... sur les infrastructures du bâtiment ?" />
            <InputRadio onChange={handleChange('q171')} defaultValue={values.q171} question="171. Avez-vous un système d’arrosage des pelouses et des espaces extérieurs économes en eau ?" />
            <InputRadio onChange={handleChange('q172')} defaultValue={values.q172} question="172. Vos infrastructures sont-ils équipés d'un système de récupération des eaux de pluie ?" />
            <InputRadio onChange={handleChange('q173')} defaultValue={values.q173} question="173. Avez-vous un système d’arrosage des pelouses relié au système de récupération d’eau ?" />
            <InputRadio onChange={handleChange('q174')} defaultValue={values.q174} question="174. Avez-vous un système de drainage qui récupère l’eau sous les pelouses pour le réinjecter dans le système d’arrosage ?" />
            <InputRadio onChange={handleChange('q175')} defaultValue={values.q175} question="175. Avez-vous pris des mesures pour le bon traitement des eaux usées ?" />
            <InputRadio onChange={handleChange('q176')} defaultValue={values.q176} question="176. Avez-vous un système d’épuration écologique alternatif ? (Ex : phytoépuration, toilettes sèches...)" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q177')} defaultValue={values.q177} label={"177. Si Oui, pouvez-vous décrire le système ?"} />

        </div>
    )
}
