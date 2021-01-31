import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function Transports({ values, handleChange }) {
    return (
        <div>
                    <ListSubheader className='listSubheaderStyle'>
                        <h3>II.  Transports</h3>
                        <img src="img/logo-final-blanc.png" alt="logo" />
                    </ListSubheader>

                    <InputRadio onChange={handleChange('q87')} defaultValue={values.q87} question="87.Avez-vous mis en  place des mesures  pour optimiser les déplacements de vos collaborateurs et/joueurs et joueuses ?  (Ex :  limitation des déplacements inutiles, déplacement collectifs, organisation de téléréunions, ...)" />
                    <InputRadio onChange={handleChange('q88')} defaultValue={values.q88} question="88.  Avez-vous des règles strictes de priorisation des transports de vos équipes : transports en commun > train > voiture > avion ?" />
                    <TextFieldInput onChange={handleChange('q89')} defaultValue={values.q89} label={"89. Si Oui, quels sont les critères de priorisation (budget, distance, fatigue pour les joueurs...) ?"} />
                    <InputRadioPercent onChange={handleChange('q90')} defaultValue={values.q90} question="90. Quelle est la part des déplacements nationaux effectués en avion par vos équipes - joueurs/ses ?" />
                    <InputRadioPercent onChange={handleChange('q91')} defaultValue={values.q91} question="91. Quelle est la part des voyages effectués en bus par vos équipes - joueurs/ses ?" />
                    <InputRadioPercent onChange={handleChange('q92')} defaultValue={values.q92} question="92. Quelle est la part des voyages effectués en train par vos équipes - joueurs/ses ?" />
                    <InputRadio onChange={handleChange('q93')} defaultValue={values.q93} question="93. Existence d’un Plan de Déplacement d’Entreprise (PDE) et d’un Plan de Mobilité ? (Entreprise de plus de 50 salariés)" />
                    <InputRadio onChange={handleChange('q94')} defaultValue={values.q94} question="94. Existe-t-il des mesures prises pour favoriser les transports collectifs auprès des collaborateurs ?" />
                    <InputRadio onChange={handleChange('q95')} defaultValue={values.q95} question="95. Avez-vous  une  flotte  de  véhicules  (voitures,  scooters...) électrique ou hybride pour les joueurs et les collaborateurs ?" />
                    <InputRadioPercent onChange={handleChange('q96')} defaultValue={values.q96} question="96. Quelle est cette part de véhicules électrique ou hybride de cette flotte de véhicules ?" />
                    <InputRadio onChange={handleChange('q97')} defaultValue={values.q97} question="97. Avez-vous un système de co-voiturage au sein de votre club pour les collaborateurs ?" />
                    <TextFieldInput onChange={handleChange('q98')} defaultValue={values.q98} label={"98. Si oui, pouvez-vous nous le décrire ?"} />
                    <InputRadio onChange={handleChange('q99')} defaultValue={values.q99} question="99 Proposez-vous  à  vos  supporters  et  vos  partenaires d’accompagner le club lors de ses déplacements, matchs à l’extérieur, en train (dans la mesure du possible) ?" />
                    <InputRadio onChange={handleChange('q100')} defaultValue={values.q100} question="100. Proposez-vous  à  vos  supporters  et  vos  partenaires d’accompagner le club lors de ses déplacements, matchs à l’extérieur, en bus ?" />
                    <InputRadio onChange={handleChange('q101')} defaultValue={values.q101} question="101. Avez-vous fait des enquêtes (questionnaire en ligne ou autre) sur les moyens de déplacement de vos supporters lors des matchs ou évènements ?" />
                    <InputRadioPercent onChange={handleChange('q102')} defaultValue={values.q102} question={"102. Si Oui, Quelle est la part de vos supporters venant seuls en voiture ?"} />
                    <InputRadioPercent onChange={handleChange('q103')} defaultValue={values.q103} question="103. Quelle est la part de vos supporters venant en transport collectif ?" />
                    <InputRadio onChange={handleChange('q104')} defaultValue={values.q104} question="104. Avez-vous fait des enquêtes (questionnaire en ligne ou autre) sur les moyens de déplacement de vos partenaires lors des matchs ou évènements ?" />
                    <InputRadioPercent onChange={handleChange('q105')} defaultValue={values.q105} question={"105. Si Oui, Quelle est la part de vos partenaires venant seuls en voiture ?"} />
                    <InputRadioPercent onChange={handleChange('q106')} defaultValue={values.q106} question="106. Quelle est la part de vos partenaires venant en transport collectif ?" />
                    <InputRadio onChange={handleChange('q107')} defaultValue={values.q107} question="107. Avez-vous mis en place un système de mise en relation de vos supporters  (ex :  partenariat  avec  une  application  decovoiturage) ?" />
                    <InputRadio onChange={handleChange('q108')} defaultValue={values.q108} question="108. Existe-t-il des mesures prises pour favoriser et récompenser le co-voiturage auprès des supporters ?" />
                    <TextFieldInput onChange={handleChange('q109')} defaultValue={values.q109} label={"109. Si oui, quelles mesures avez-vous mis en place ? (Ex : places de parking prioritaires)"} />
                    <InputRadio onChange={handleChange('q110')} defaultValue={values.q110} question="110. Existe-t-il des mesures prises pour favoriser les transports collectifs auprès des supporters ?" />
                    <TextFieldInput onChange={handleChange('q111')} defaultValue={values.q111} label={"111. Si oui, quelles mesures avez-vous prises ?"} />
                    <InputRadio onChange={handleChange('q112')} defaultValue={values.q112} question="112. Mettez-vous en place des navettes (bus) gratuites ou à prix réduit pour vos supporters pour les matchs à domicile ?" />
                    <InputRadio onChange={handleChange('q113')} defaultValue={values.q113} question="113.Existe-t-il des mesures prises pour favoriser/récompenser le co-voiturage auprès de vos partenaires ?" />
                    <TextFieldInput onChange={handleChange('q114')} defaultValue={values.q114} label={"114. Si oui, quelles mesures avez-vous prises ?"} />
                    <InputRadio onChange={handleChange('q115')} defaultValue={values.q115} question="115. Avez-vous pris des mesures pour favoriser les mobilités douces, non carbonées (ex : parking sécurisés, bornes de recharges électriques, ...) ?" />
                    <TextFieldInput onChange={handleChange('q116')} defaultValue={values.q116} label={"116. Si oui, quelles mesures avez-vous prises ?"} />
                    <InputRadio onChange={handleChange('q117')} defaultValue={values.q117} question="117. Avez-vous mis à disposition des parkings à vélo ?" />
                    <InputRadio onChange={handleChange('q117_1')} defaultValue={values.q117_1} question="117 |. Joueurs" />
                    <InputRadio onChange={handleChange('q117_2')} defaultValue={values.q117_2} question="117 ||. Collaborateurs" />
                    <InputRadio onChange={handleChange('q117_3')} defaultValue={values.q117_3} question="117 |||. Supporters" />
                    <InputRadio onChange={handleChange('q117_4')} defaultValue={values.q117_4} question="117 |V. Partenaires" />
                    <InputRadio onChange={handleChange('q118')} defaultValue={values.q118} question="118. Avez-vous équipé vos parkings pour les voitures d’ombrières photovoltaïques ?" />
                    <InputRadio onChange={handleChange('q119')} defaultValue={values.q119} question="119. Avez-vous  équipé  vos  parkings  à  vélo  d’ombrières photovoltaïques ?" />
                    <InputRadio onChange={handleChange('q120')} defaultValue={values.q120} question="120. Prenez-vous part à des réflexions, études et recherches liées aux déplacements alternatifs ?" />
                    <TextFieldInput onChange={handleChange('q121')} defaultValue={values.q121} label={"121. Si Oui, pouvez-vous les décrire ?"} />
        </div>
    )
}
