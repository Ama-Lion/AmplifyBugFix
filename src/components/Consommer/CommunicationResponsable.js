import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function CommunicationResponsable({ values, handleChange }) {
    return (
        <div>
            
            <ListSubheader className='listSubheaderStyle'>
                <h3>III.  Communication responsable</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q260')} defaultValue={values.q260} question="260. Communiquez-vous sur votre politique environnementale, RSE / Développement Durable (site, réseaux sociaux...) ?" />
            <InputRadio onChange={handleChange('q261')} defaultValue={values.q261} question="261. Avez-vous une gestion écoresponsable de la communication extérieure (numérique et papier) ?" />
            <InputRadio onChange={handleChange('q262')} defaultValue={values.q262} question="262. Existe t-il des mesures pour une gestion écoresponsable de la consommation papier comme support de communication ?" />
            <InputRadio onChange={handleChange('q263')} defaultValue={values.q263} question="263. Faites-vous le choix d'imprimeurs labellisés Imprim’vert qui utilisent du papier recyclé, des encres végétales...pour vos affiches ?" />
            <InputRadio onChange={handleChange('q264')} defaultValue={values.q264} question="264. Avez-vous  supprimé tous supports de communication papier (flyers) et plastique (tap-tap) auprès de vos supporters et partenaires ?" />
            <InputRadio onChange={handleChange('q265')} defaultValue={values.q265} question="265. Avez-vous engagé le club pour une cause solidaire ?" />
            <TextFieldInput onChange={handleChange('q266')} defaultValue={values.q266} label={"266. Si Oui, laquelle ou lesquelles ?"} />
            <InputRadio onChange={handleChange('q267')} defaultValue={values.q267} question="267. Avez-vous mis en place un programme de promotion de la santé par le sport au sein du club ?" />
            <InputRadio onChange={handleChange('q268')} defaultValue={values.q268} question="268. Participez-vous à des programmes de sensibilisation à l’environnement par le sport ?" />
            <InputRadio onChange={handleChange('q269')} defaultValue={values.q269} question="269. Proposez-vous des programmes de formation adaptées aux missions demandées (condition de travail, santé, sécurité) ?" />
            <TextFieldInput onChange={handleChange('q270')} defaultValue={values.q270} label={"270. Si Oui, quel(s) type(s) de programme ?"} />
            <InputRadio onChange={handleChange('q271')} defaultValue={values.q271} question="271. Le club propose/développe-t-il des programmes de formation, d’éducation, d’information à l’environnement à destination des dirigeants, joueurs et collaborateurs ?" />
            <TextFieldInput onChange={handleChange('q272')} defaultValue={values.q272} label={"272. Si Oui, quel type de programme ?"} />
            <InputRadio onChange={handleChange('q273')} defaultValue={values.q273} question="273. Avez-vous une communication au sein de votre infrastructure afin de sensibiliser le grand public et les partenaires sur les différents gestes écoresponsables (ex : temps de dégratation des mégots dans la nature)\" />
            <InputRadio onChange={handleChange('q274')} defaultValue={values.q274} question="274. Communiquez-vous vos engagements et  résultats  aux partenaires  institutionnels  (communes  ou  groupement  de communes, conseil régional ou conseil général) ?" />
            <TextFieldInput onChange={handleChange('q275')} defaultValue={values.q275} label={"275. Si Oui, avec quels outils (Ex : rapport annuel d’activité) ?"} />
            <InputRadio onChange={handleChange('q276')} defaultValue={values.q276} question="276. Avez-vous mis en place un parcours client écoresponsable pour vos supporters et vos partenaires ? (Par ex : message de sensibilisation à la protection de l’environnement) ?" />
            <InputRadio onChange={handleChange('q277')} defaultValue={values.q277} question="277. Avez-vous  demandé  à  vos  partenaires  de  communiquer uniquement sur leurs engagements écoresponsables dans leurs espaces privatifs (loges, stands...) lors de vos évènements ?" />
            <InputRadio onChange={handleChange('q278')} defaultValue={values.q278} question="278. Collaborez-vous gracieusement avec les associations locales dans le secteur de l’ESS (Économie Sociale et Solidaire) ?" />
            <InputRadio onChange={handleChange('q279')} defaultValue={values.q279} question="279. Avez-vous  mis  en  place  des  actions  de  sensibilisation  à l’écoresponsabilité, au développement durable et/ou aux 17 Objectifs du DD de l’ONU (Collaborateurs, Supporters, Joueurs, Prestataires...) ?" />
            <TextFieldInput onChange={handleChange('q280')} defaultValue={values.q280} label={"280. Si Oui, Quelle(s) type(s) d’action avec quel(s) acteur(s) ?"} />

        </div>
    )
}
