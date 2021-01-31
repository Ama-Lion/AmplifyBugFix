import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput } from "../Inputs"

export default function GestionDesSols({ values, handleChange } ) {
    return (
        <>

            <ListSubheader className='listSubheaderStyle'>
            <h3>II.  Gestion des sols</h3>
            <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>
        
            <InputRadio onChange={handleChange('q13')} defaultValue={values.q13} question="13. Utilisez-vous des produis phytosanitaires dans le cadre de l'entretien extérieur ?" />
            <InputRadio className="sub-question" onChange={handleChange('q13_1')} defaultValue={values.q13_1} question="13 |. Stade" />
            <InputRadio onChange={handleChange('q13_2')} defaultValue={values.q13_2} question="13 ||.Centre d’entrainement" />
            <TextFieldInput onChange={handleChange('q14')} defaultValue={values.q14} label={"14. Si Oui, quel(s) type(s) de produit(s) utilisez-vous ?"} />
            <InputRadio onChange={handleChange('q15')} defaultValue={values.q15} question="15. Avez-vous mis en place des mesures pour préserver et améliorer sur le long terme les qualités de l’aire de jeu ?" />
            <InputRadio onChange={handleChange('q15_1')} defaultValue={values.q15_1} question="15 |. Stade" />
            <InputRadio onChange={handleChange('q15_2')} defaultValue={values.q15_2} question="15 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q15_3')} defaultValue={values.q15_3} question="15 |||.Parquet" />
            <TextFieldInput onChange={handleChange('q16')} defaultValue={values.q16} label={"16. Si Oui, quelle(s) mesures avez-vous mis en place ?"} />
            <InputRadio onChange={handleChange('q17')} defaultValue={values.q17} question="17. Effectuez- vous un enregistrement systématique de toutes les interventions sur les sols ?" />
            <TextFieldInput onChange={handleChange('q18')} defaultValue={values.q18} label={"18. Si Oui, à quelle fréquence enregistre-vous les interventions ?"} />
            <TextFieldInput onChange={handleChange('q19')} defaultValue={values.q19} label={"19. Quels indicateurs prenez-vous en compte ?"} />
            <InputRadio onChange={handleChange('q20')} defaultValue={values.q20} question="20. Avez-vous une pelouse synthétique ou hybride ?" />
            <TextFieldInput onChange={handleChange('q21')} defaultValue={values.q21} label={"21. Si Oui, quel(s) système(s) avez-vous installé ?"} />
            <TextFieldInput onChange={handleChange('q22')} defaultValue={values.q22} label={"22. Si vous avez fait le choix d’installer une pelouse synthétique à quelle fréquence avez-vous prévu de renouveler celle-ci ?"} />
            <InputRadio onChange={handleChange('q23')} defaultValue={values.q23} question="23. Si vous avez fait le choix d’installer une pelouse synthétique, avez-vous prévu un système de recyclage pour les billes caoutchouc et les fibres artificielles composant cette pelouse ?" />
            <InputRadio onChange={handleChange('q24')} defaultValue={values.q24} question="24. Connaissez-vous la quantité de déchets verts ramassés chaque année sur site ?" />
            <InputRadio onChange={handleChange('q25')} defaultValue={values.q25} question="25. Avez-vous mis en place des actions pour valoriser vos déchets verts ?" />
            <TextFieldInput onChange={handleChange('q26')} defaultValue={values.q26} label={"26. Si Oui, quelle(s) action(s) avez-vous mis en place ? (Compostage, Méthanisation...)"} />
            <InputRadio onChange={handleChange('q27')} defaultValue={values.q27} question="27. Utilisez-vous des peintures écoresponsables pour vos marquages pelouse ou parquet ?" />
            <InputRadio onChange={handleChange('q28')} defaultValue={values.q28} question="28. Utilisez-vous du matériel électrique et/ou automatisé pour l’entretien de vos pelouses ? (Ex : tondeuse électrique)" />
            <InputRadio onChange={handleChange('q29')} defaultValue={values.q29} question="29. Utilisez-vous des produits respectueux de l’environnement pour le traitement de vos parquets (salle de sport) ?" />
            <InputRadio onChange={handleChange('q30')} defaultValue={values.q30} question="30. Avez-vous réalisé des analyses des sols suite à l'activité de votre structure ?" />
            <TextFieldInput onChange={handleChange('q31')} defaultValue={values.q31} label={"32. Si Oui, pouvez-vous préciser si vous avez analysé l’aire de jeu et/ou les sols autour de votre enceinte ?"} />
  
        </>
    )
}
