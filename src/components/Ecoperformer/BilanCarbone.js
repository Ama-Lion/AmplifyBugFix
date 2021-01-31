import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput} from "../Inputs"

export default function BilanCarbone({ values, handleChange }) {
    return (
        <div>

            <ListSubheader className='listSubheaderStyle'>
                <h3>VIII.  Bilan carbone</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q211')} defaultValue={values.q211} question="211. Existe-t-il un bilan carbone / bilan des émissions des gaz à effet de serre lié aux activités du club ?" />
            <TextFieldInput onChange={handleChange('q212')} defaultValue={values.q212} label={"212. Si Oui, pouvez-vous le partager ?"} />
            <TextFieldInput onChange={handleChange('q213')} defaultValue={values.q213} label={"213. Quelle méthode avez-vous utilisé ?"} />
            <InputRadio onChange={handleChange('q214')} defaultValue={values.q214} question="214. Existe-il  une  politique  de compensation  carbone  liée aux déplacements ?" />
            <TextFieldInput onChange={handleChange('q215')} defaultValue={values.q215} label={"215. Si Oui, qu’avez-vous mis en place ?"} />
            <InputRadio onChange={handleChange('q216')} defaultValue={values.q216} question="216. Avez-vous défini une stratégie pour atteindre la neutralité carbone ?" />
            <TextFieldInput onChange={handleChange('q217')} defaultValue={values.q217} label={"217. Si Oui, quelle est votre stratégie pour atteindre la neutralité carbone ? (Choix multiples : Compensation / Financement reforestation...)"} />
            <TextFieldInput onChange={handleChange('q218')} defaultValue={values.q218} label={"218. À quelle échéance pensez-vous pouvoir atteindre la neutralité carbone ?"} />
            <TextFieldInput onChange={handleChange('q219')} defaultValue={values.q219} label={"219. Indiquez, selon vous, les 3 principales sources d'émissions de GES  de  votre  entreprise  (Choix  multiples :  Déplacement, Alimentation, Énergie...)."} />

        </div>
    )
}
