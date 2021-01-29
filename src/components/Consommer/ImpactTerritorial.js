import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio,  } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function ImpactTerritorial({ values, handleChange }) {
    return (
        <div>
        
            <ListSubheader className='listSubheaderStyle'>
                <h3>V I.  Exemplarité</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q319')} defaultValue={values.q319} question="319. Connaissez-vous la personne en charge des enjeux DD dans votre collectivité  ? Travaillez-vous avec elle ?" />
            <InputRadio onChange={handleChange('q320')} defaultValue={values.q320} question="320. Avez-vous des engagements et des actions écoresponsables avec  les  collectivités  territoriales ?  (Ville, Agglomération, Département, Région)" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q321')} defaultValue={values.q321} label={"321. Si Oui, quel(s) type(s) d’engagements ?"} />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q322')} defaultValue={values.q322} label={"322. Quelle(s) action(s) mettez-vous en place ?"} />
            <InputRadio onChange={handleChange('q323')} defaultValue={values.q323} question="323. Avez-vous des engagements et des actions écoresponsables avec les écoles / collèges / universités de votre territoire ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q324')} defaultValue={values.q324} label={"324. Si Oui, quel(s) type(s) d’engagements ?"} />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q325')} defaultValue={values.q325} label={"325. Quelle(s) action(s) mettez-vous en place ?"} />
            <InputRadio onChange={handleChange('q326')} defaultValue={values.q326} question="326. Existe-t-il des études sur l’impact du club sur son territoire ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q327')} defaultValue={values.q327} label={"327. Si oui, merci de préciser quelle(s) étude(s) et quel(s) impact(s) économique ? Social ? Écoresponsable ?"} />
            <InputRadio onChange={handleChange('q328')} defaultValue={values.q328} question="328.Participez-vous à des actions de mise en valeur et de durabilité de son territoire ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q329')} defaultValue={values.q329} label={"329. Si Oui, pouvez-vous préciser quelques actions ?"} />
            <InputRadio onChange={handleChange('q330')} defaultValue={values.q330} question="330. Avez-vous mis en place des programmes de parrainage vers les clubs amateurs du territoire ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q331')} defaultValue={values.q331} label={"331. Si Oui, quelles sont les thématiques principales de ce parrainage ?"} />
            <InputRadio onChange={handleChange('q332')} defaultValue={values.q332} question="332. Avez-vous  mis  en  place  des  questionnaires  de satisfaction auprès des différentes parties prenantes ?" />
            <InputRadio onChange={handleChange('q332_1')} defaultValue={values.q332_1} question="332 |. Partenaires" />
            <InputRadio onChange={handleChange('q332_2')} defaultValue={values.q332_2} question="332 | |. Collectivités" />
            <InputRadio onChange={handleChange('q332_3')} defaultValue={values.q332_3} question="332 | | |. InstitutionsInstitutions" />
            <InputRadio onChange={handleChange('q332_4')} defaultValue={values.q332_4} question="332 | | | |. Associations / ONG" />
            <InputRadio onChange={handleChange('q332_5')} defaultValue={values.q332_5} question="332 V. Supporters" />
            <InputRadio onChange={handleChange('q332_6')} defaultValue={values.q332_6} question="332 V  |. Prestataires (traiteurs, financiers, tour opérateur...)" />
            <InputRadio onChange={handleChange('q332_7')} defaultValue={values.q332_7} question="332 V | |. Adversaires" />
            <InputRadio onChange={handleChange('q332_8')} defaultValue={values.q332_8} question="332 V | | |. Arbitres" />
            <InputRadio onChange={handleChange('q332_9')} defaultValue={values.q332_9} question="332 | X. Autres, merci de préciser :" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q333')} defaultValue={values.q333} label={"333. Avez-vous réfléchi à l’héritage que vous souhaitez laisser sur le territoire ? (Question ouverte)"} />

        </div>
    )
}
