import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function GestionArchitecturaleEtDesBatiments({ values, handleChange }) {
    return (
        <div>
            <ListSubheader className='listSubheaderStyle'>
                <h3>VI.  Gestion architecturale et des bâtiments</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>
            <TextFieldInput onChange={handleChange('q178')} defaultValue={values.q178} label={"178. En quelle année a été construites et/ou rénovées vos insfractures (merci de préciser si construction neuve ou rénovation) ?"} />
            <InputRadio onChange={handleChange('q179')} defaultValue={values.q179} question="179. Avez-vous déjà fait un bilan énergétique de vos batiments ?" />
            <InputRadio onChange={handleChange('q180')} defaultValue={values.q180} question="180. Votre bâtiment est-il certifié HQE (Haute Qualité Environnementale) / BREEAM In-Use / ou toute autre certification environnementale ?" />
            <InputRadioPercent onChange={handleChange('q181')} defaultValue={values.q181} question="181. Quelle est la part des matériaux éco performants et écologiques dans les constructions ?" />
            <InputRadioPercent onChange={handleChange('q182')} defaultValue={values.q182} question="182. Quelle est la part des constructions végétalisées de vos infrastructures ?" />
            <InputRadioPercent onChange={handleChange('q183')} defaultValue={values.q183} question="183. Quelle est la part des cheminements piétons non bitumés ?" />
            <InputRadioPercent onChange={handleChange('q184')} defaultValue={values.q184} question="184. Quelle est la part des bâtiments bénéficiant d'une isolation performante et écoresponsable ?" />
            <InputRadioPercent onChange={handleChange('q185')} defaultValue={values.q185} question="185. Quelle est la part des matériaux recyclés et/ou valorisés lors de construction ou démolition ?" />
            <InputRadioPercent onChange={handleChange('q186')} defaultValue={values.q186} question="186. Quelle est la part des matériaux réutilisés et/ou réparés ?" />
            <InputRadio onChange={handleChange('q187')} defaultValue={values.q187} question="187. Avez-vous analysé la qualité de l'air intérieur (CO2, Radon, Particules fines) ?" />
            <InputRadio onChange={handleChange('q187_1')} defaultValue={values.q187_1} question="187 |. Bureau" />
            <InputRadio onChange={handleChange('q187_2')} defaultValue={values.q187_2} question="187 ||. Vestiaires" />
            <InputRadio onChange={handleChange('q187_3')} defaultValue={values.q187_3} question="187 |||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q187_4')} defaultValue={values.q187_4} question="187 |V. Stade" />
            <InputRadio onChange={handleChange('q187_5')} defaultValue={values.q187_5} question="187 V. Gymnase (terrain basket, hand, volley)" />
            <InputRadio onChange={handleChange('q188')} defaultValue={values.q188} question="188. Avez-vous pris des mesures pour améliorer la qualité de l’air intérieur de vos installations ?" />
            <TextFieldInput onChange={handleChange('q189')} defaultValue={values.q189} label={"189. Si Oui, merci de préciser quelles mesures vous avez prises et dans quel(s) bâtiment(s) :"} />
            <InputRadio onChange={handleChange('q190')} defaultValue={values.q190} question="190. Avez-vous des projets de rénovation / construction ?" />
            <TextFieldInput onChange={handleChange('q191')} defaultValue={values.q191} label={"191. Si Oui, À quelle échéance ? Allez-vous intégré des normes environnementales dans ces constructions ?"} />
        </div>
    )
}
