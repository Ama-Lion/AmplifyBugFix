import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"

export default function GestionDesAchats({ values, handleChange }) {
    return (
        <div>

            <ListSubheader className='listSubheaderStyle'>
                <h3>II.  Gestion des achats</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q253')} defaultValue={values.q253} question="253. Est-ce que la notion d'achat responsable (ISO 20400) fait partie de vos critères d'achats de biens et services à moindre impact environnemental : circuits courts, produits écoconçus, biens et services consommant moins d’énergie, d’eau, de transport… ?" />
            <InputRadio onChange={handleChange('q254')} defaultValue={values.q254} question="254. Priorisez-vous  l’achat  d’objets , d'appareils  d’occasions  ou reconditionnés avant l’achat de neuf ?" />
            <InputRadio onChange={handleChange('q255')} defaultValue={values.q255} question="255. Avez-vous intégré des notions d’écoresponsabilité dans vos différents cahiers des charges pour vos prestataires (hors alimentation) ?" />
            <InputRadio onChange={handleChange('q256')} defaultValue={values.q256} question="256. Favorisez-vous  les  fournisseurs  intégrant  une  démarche d’écoconception ?" />
            <InputRadio onChange={handleChange('q257')} defaultValue={values.q257} question="257. Lors de  l’organisation de vos évènements  privilégiez-vous l’achat et l’utilisation de mobilier organique ?" />
            <InputRadioPercent onChange={handleChange('q258')} defaultValue={values.q258} question="258. Quelle est la part des fournisseurs & sous-traitants responsables ou respectant des clauses RSE ou développement durable ?" />
            <InputRadioPercent onChange={handleChange('q259')} defaultValue={values.q259} question="259. Quelle est la part des achats (hors alimentaire) intégrant des critères de sélection RSE ou développement durable ?" />

        </div>
    )
}
