import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function Exemplarite({ values, handleChange }) {
    return (
        <div>
            
            <ListSubheader className='listSubheaderStyle'>
                <h3>V.  Exemplarité</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q290')} defaultValue={values.q290} question="290. Avez-vous supprimé systématiquement les goodies ?" />
            <InputRadio onChange={handleChange('q291')} defaultValue={values.q291} question="291. Faites-vous le choix de goodies écoresponsables (éco-conçus et locaux) pour vos partenaires ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q292')} defaultValue={values.q292} label={"292. Si Oui, pouvez-vous donner quelques exemples de goodies écoresponsables :"} />
            <InputRadio onChange={handleChange('q293')} defaultValue={values.q293} question="293. Avez-vous défini des zones non-fumeurs et des zones fumeurs dans le stade ou gymnase ?" />
            <InputRadio onChange={handleChange('q294')} defaultValue={values.q294} question="294. Avez-vous le choix d'un équipementier engagé en termes de RSE / Développement Durable ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q295')} defaultValue={values.q295} label={"295. Quel est le nom de votre équipementier ?"} />
            <InputRadio onChange={handleChange('q296')} defaultValue={values.q296} question="296. Avez-vous développé des équipements écoresponsables en commun ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q297')} defaultValue={values.q297} label={"297. Quel(s) équipement(s) avez-vous développé en commun ?"} />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q298')} defaultValue={values.q298} label={"298. Quel matériau avez-vous choisi de travailler ?"} />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q299')} defaultValue={values.q299} label={"299. Quel procédé de fabrication avez-vous choisi ?"} />
            <InputRadio onChange={handleChange('q300')} defaultValue={values.q300} question="300. Avez-vous fait le choix d’un sponsor engagé en termes de RSE / développement Durable ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q301')} defaultValue={values.q301} label={"301. Quel est le nom de ce(s) sponsor (s) ?"} />
            <InputRadio onChange={handleChange('q302')} defaultValue={values.q302} question="302. Le club met-il en avant ses partenaires écoresponsables ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q303')} defaultValue={values.q303} label={"303. Si Oui, de quelle manière les met-il en avant ?"} />
            <InputRadioPercent onChange={handleChange('q304')} defaultValue={values.q304} question="304. Quelle est la part des partenaires publicitaires responsables ou respectant des clauses de RSE ou de DD ?" />
            <InputRadio onChange={handleChange('q305')} defaultValue={values.q305} question="305. Participez-vous à la promotion de l’égalité et lutte contre les discriminations (lutte contre l'homophobie / racisme...) ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q306')} defaultValue={values.q306} label={"306. Si Oui, de quelle manière participez-vous à cette promotion ?"} />
            <InputRadio onChange={handleChange('q307')} defaultValue={values.q307} question="307. Avez-vous une politique en faveur de l’égalité homme / femme ?" />
            <InputRadio onChange={handleChange('q308')} defaultValue={values.q308} question="308. Avez-vous mis en place un système d'alerte (par exemple une boîte aux lettres anonyme) qui permette à chacun de faire remonter une situation de harcèlement ?" />
            <InputRadio onChange={handleChange('q309')} defaultValue={values.q309} question="309. Atteignez-vous les 6% de salarié handicapé dans votre club ?" />
            <InputRadio onChange={handleChange('q310')} defaultValue={values.q310} question="310. Avez-vous des actions de valorisation de vos volontaires ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q311')} defaultValue={values.q311} label={"311. Si Oui, de quelle manière valorisez-vous vos  volontaires ?"} />
            <InputRadio onChange={handleChange('q312')} defaultValue={values.q312} question="312. Luttez-vous contre le dopage dans le sport par des programmes d’éducation ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q313')} defaultValue={values.q313} label={"313. Si Oui, quels sont ces programmes mis en place ?"} />
            <InputRadio onChange={handleChange('q314')} defaultValue={values.q314} question="314. Avez-vous identifié/nommé une équipe jeune  portant les valeurs d'écoresponsabilités de votre club ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q315')} defaultValue={values.q315} label={"315. Si Oui, quelle est la catégorie concernée ? Et sous quelle forme cet engagement se manifeste ?"} />
            <InputRadio onChange={handleChange('q316')} defaultValue={values.q316} question="316. Proposez-vous des formations professionnelles pour vos joueurs durant leur carrière sportive ?" />
            <InputRadio onChange={handleChange('q317')} defaultValue={values.q317} question="317. Avez-vous mis en place une cellule reconversion au sein de votre club pour vos joueurs en fin de carrière ?" />
            <InputRadio onChange={handleChange('q318')} defaultValue={values.q318} question="318. Participez-vous à des programmes d’inclusion de personnes en difficultés sur votre territoire ?" />

        </div>
    )
}
