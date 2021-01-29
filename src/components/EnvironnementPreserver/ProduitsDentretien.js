import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function ProduitsDentretien({ values, handleChange } ) {
    return (
        <>
            <ListSubheader className='listSubheaderStyle'>
          <h3>III.  h3roduits d’entretien</h3>
          <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>

        <InputRadio onChange={handleChange('q32')} defaultValue={values.q32} question="32. Utilisez-vous des produits d’entretien Ecolabel Européen et/ou Français votre entreprise  (ou  votre prestataire)  (ex : NF-Environnement, EU écolabel, Ecocert, Nature & progès...) ?" />
        <InputRadio onChange={handleChange('q32_1')} defaultValue={values.q32_1} question="32 |. Bureaux administratif" />
        <InputRadio onChange={handleChange('q32_2')} defaultValue={values.q32_2} question="32 ||. Centre d’entrainement" />
        <InputRadio onChange={handleChange('q32_3')} defaultValue={values.q32_3} question="32 |||. Stade" />
        <InputRadio onChange={handleChange('q32_4')} defaultValue={values.q32_4} question="32 |V. Gymnase (terrain basket, hand, volley)" />
        <InputRadioPercent onChange={handleChange('q33')} defaultValue={values.q33} question="33. Quel pourcentage ces produits représentent-ils au sein de votre club ?" />
        <InputRadio onChange={handleChange('q34')} defaultValue={values.q34} question="34. Utilisez-vous (ou votre  prestataire)  des  produits sanitaires écoresponsables (ex : NF Environnement, EU écolabel...) ?" />
        <InputRadio onChange={handleChange('q34_1')} defaultValue={values.q34_1} question="34 |. Bureaux administratif" />
        <InputRadio onChange={handleChange('q34_2')} defaultValue={values.q34_2} question="34 ||. Centre d’entrainement" />
        <InputRadio onChange={handleChange('q34_3')} defaultValue={values.q34_3} question="34 |||. Stade" />
        <InputRadio onChange={handleChange('q34_4')} defaultValue={values.q34_4} question="34 |V. Gymnase (terrain basket, hand, volley)" />
        <InputRadioPercent onChange={handleChange('q35')} defaultValue={values.q35} question="35. Quel pourcentage ces produits représentent-ils au sein de votre club ?" />
        <InputRadio onChange={handleChange('q36')} defaultValue={values.q36} question="36. Utilisez-vous (ou votre prestataire) des matériaux d’entretienécoresponsables (ex :  NF-Environnement, EU écolabel...) ou d’origine naturelle (ex : éponges, sac poubelle...) ?" />
        <InputRadioPercent onChange={handleChange('q37')} defaultValue={values.q37} question="37. Quel pourcentage ces produits représentent-ils au sein de votre club ?" />
        <InputRadio onChange={handleChange('q38')} defaultValue={values.q38} question="38. Est-ce  que vous  lavez  les affaires des joueurs de votre club/événement  (affaires  de  matchs/compétition,  affaires d’entrainement, serviettes ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q39')} defaultValue={values.q39} label={"39. Si  Oui, Utilisez-vous  des  produits respectueux  de l’environnement et labélisé (ex : NF-Environnement,  EU écolabel...) ?"} />
        <InputRadio onChange={handleChange('q40')} defaultValue={values.q40} question="40. Utilisez-vous (ou votre prestataire) des produits d’entretien naturels (vinaigre, bicarbonate, savon, etc.) ?" />
        <InputRadio onChange={handleChange('q40_1')} defaultValue={values.q40_1} question="40 |. Bureaux administratif" />
        <InputRadio onChange={handleChange('q40_2')} defaultValue={values.q40_2} question="40 ||. Centre d’entrainement" />
        <InputRadio onChange={handleChange('q40_3')} defaultValue={values.q40_3} question="40 |||. Stade" />
        <InputRadio onChange={handleChange('q40_4')} defaultValue={values.q40_4} question="40 |V. Gymnase (terrain basket, hand, volley)" />
        <InputRadioPercent onChange={handleChange('q41')} defaultValue={values.q41} question="41. Quel pourcentage ces produits représentent-ils au sein de votre club ?" />
      
        </>
    )
}
