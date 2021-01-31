import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function GestionNumerique({ values, handleChange }) {
    return (
        <div>

            <ListSubheader className='listSubheaderStyle'>
                <h3>VII.  Gestion numérique</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <TextFieldInput onChange={handleChange('q192')} defaultValue={values.q192} label={"192. Quelle est l'age moyen de votre parc informatique (ordinateurs, tablettes) ?"} />
            <InputRadio onChange={handleChange('q193')} defaultValue={values.q193} question="193. Avez-vous engagé le club dans une démarche de sobriété numérique ?" />
            <InputRadio onChange={handleChange('q194')} defaultValue={values.q194} question="194. Avez-vous le réflexe de faire réparer votre matériel informatique en cas de panne (durabilité / recyclage) ?" />
            <InputRadio onChange={handleChange('q195')} defaultValue={values.q195} question="195. Favorisez-vous le réemploi d'appareils informatiques en votre possession (plutôt que neuf) pour l'arrivée d'un nouveau collaborateur ?" />
            <InputRadio onChange={handleChange('q196')} defaultValue={values.q196} question="196. Limitez-vous l'équipement informatique aux besoins réels des salariés (Ex : smartphone dernière génération pour des salariés n'en ayant pas l'utilité) ?" />
            <InputRadio onChange={handleChange('q197')} defaultValue={values.q197} question="197. Avez-vous rédigé une procédure pour supprimer les données obsolètes (serveurs, cookies, etc.) ?" />
            <InputRadio onChange={handleChange('q198')} defaultValue={values.q198} question="198. Votre hébergeur de données (serveur) utilise-t-il de l'énergie verte ?" />
            <InputRadio onChange={handleChange('q199')} defaultValue={values.q199} question="199. Votre messagerie est-elle configurée pour limiter la taille  de  son  archive  ?  (Obligeant  les  salariés  à supprimer régulièrement les emails inutiles)" />
            <TextFieldInput onChange={handleChange('q200')} defaultValue={values.q200} label={"200.  Avez-vous pris d'autres mesures pour la suppression des emails inutiles ?"} />
            <InputRadio onChange={handleChange('q201')} defaultValue={values.q201} question="201. Votre matériel informatique est-il majoritairement sobre en énergie (Écolabel, EPEAT, Nordic Swan Écolabel, Blue Angel) ?" />
            <InputRadio onChange={handleChange('q202')} defaultValue={values.q202} question="202. Avez-vous mis en place un système de dématérialisation des tickets de matchs ?" />
            <InputRadioPercent onChange={handleChange('q203')} defaultValue={values.q203} question="203. Quel est le pourcentage d’utilisation par vos supporters ?" />
            <InputRadio onChange={handleChange('q204')} defaultValue={values.q204} question="204. Avez-vous dématérialisé le journal de match ou autre support de communication le jour de match ?" />
            <InputRadio onChange={handleChange('q205')} defaultValue={values.q205} question="205. Avez-vous dématérialisé  la carte d’abonnement  pour vos supporters et vos partenaires ?" />
            <InputRadio onChange={handleChange('q206')} defaultValue={values.q206} question="206. Avez-vous mis en place un système de dématérialisation de tous les paiements de l’enceinte de votre stade ?" />
            <InputRadioPercent onChange={handleChange('q207')} defaultValue={values.q207} question="207. Quel est le pourcentage d’utilisation par vos supporters ?" />
            <InputRadio onChange={handleChange('q208')} defaultValue={values.q208} question="208. Avez-vous dématérialisé la partie administrative (fiche de paie, communication interne) ?" />
            <InputRadioPercent onChange={handleChange('q209')} defaultValue={values.q209} question="209. Si Oui, quelle est la part de dématérialisation ?" />
            <TextFieldInput onChange={handleChange('q210')} defaultValue={values.q210} label={"210. Quelle est la stratégie pour dématérialiser cette partie administrative (Question ouverte) ?"} />
            
        </div>
    )
}
