import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function Piloter({ values, handleChange }) {
    return (
        <div>
                <ListSubheader className='listSubheaderStyle'>
                <h3>I.  Piloter</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
                </ListSubheader>

                <InputRadio onChange={handleChange('q68')} defaultValue={values.q68} question="68. Votre club prend-il part à des Objectifs de Développement Durable (ODD) des Nations Unies ?" />
                <TextFieldInput onChange={handleChange('q69')} defaultValue={values.q69} label={`69. Si Oui, Quel(s) objectif(s) avez-vous pris part ? Et sous quelles formes d’engagement ? `} />
                <InputRadio onChange={handleChange('q70')} defaultValue={values.q70} question="70. Avez-vous inscrit dans la vision du club les objectifs et/ou les valeurs de développement durable (DD) ?" />
                <InputRadio onChange={handleChange('q71')} defaultValue={values.q71} question="71. Avez-vous créé une fondation ou un fonds de dotation pour piloter/ encadrer vos actions sociétales et environnementales ?" />
                <TextFieldInput onChange={handleChange('q72')} defaultValue={values.q72} label={"72. Si Oui, Quel est le nom de cette structure ? Et en quelle année a-t-elle été créé ?"} />
                <TextFieldInput onChange={handleChange('q73')} defaultValue={values.q73} label={"73. Quel est l’objet social de cette structure ?"} />
                <InputRadio onChange={handleChange('q74')} defaultValue={values.q74} question="74. Avez-vous un tableau de bord de suivi de vos actions de DD ?" />
                <InputRadio onChange={handleChange('q75')} defaultValue={values.q75} question="75. Avez-vous un plan d’actions de management responsable de l’équipement ?" />
                <TextFieldInput onChange={handleChange('q76')} defaultValue={values.q76} label={"76. Si Oui, est-il possible de nous partager ce plan d’actions ?"} />
                <InputRadio onChange={handleChange('q77')} defaultValue={values.q77} question="77. Existe-t-il un référent et une commission DD au sein de votre organisation ?" />
                <TextFieldInput onChange={handleChange('q78')} defaultValue={values.q78} label={"78. Quel est le contact référent DD (Nom – Prénom – Poste) ?"} />
                <TextFieldInput onChange={handleChange('q79')} defaultValue={values.q79} label={"79. Quels sont les membres de la commission DD (Nom – Prénom – Poste) ?"} />
                <InputRadio onChange={handleChange('q80')} defaultValue={values.q80} question="80. Avez-vous désigné  un(e) joueur(se)  ambassadeur(rice) des actions écoresponsables de votre club ?" />
                <TextFieldInput onChange={handleChange('q81')} defaultValue={values.q81} label={"81. Si Oui, merci d’indiquer les Nom & Prénom :"} />
                <InputRadio onChange={handleChange('q82')} defaultValue={values.q82} question="82. Existe-t-il  des  chartes  internes  écoresponsables pour les collaborateurs et/ou les joueurs ?" />
                <TextFieldInput onChange={handleChange('q83')} defaultValue={values.q83} label={"83. Si Oui, pouvez-vous les partager ?"} />
                <InputRadio onChange={handleChange('q84')} defaultValue={values.q84} question="84. Cette charte est-elle diffusée à l’ensemble des collaborateurs et salariés du club ?" />
                <InputRadio onChange={handleChange('q85')} defaultValue={values.q85} question="85. Votre  club  participe-t-il  à  la  promotion  des  valeurs olympiques (l’amitié, le respect, l’excellence) ?" />
                <TextFieldInput onChange={handleChange('q86')} defaultValue={values.q86} label={"86. Si Oui, par quel(s) moyen(s) de promotion ?"} />
        </div>
    )
}
