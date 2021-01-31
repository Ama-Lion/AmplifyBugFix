import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, TextFieldInput, InputRadioPercent } from "../Inputs"

export default function GestionDesDechets({ values, handleChange }) {
    return (
        <div>
            <ListSubheader className='listSubheaderStyle'>
                <h3>IV.  Gestion des déchets</h3>
                <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q139')} defaultValue={values.q139} question="139. Connaissez-vous la quantité de déchets produits produite pour un match ou pour votre événement ?" />
            <TextFieldInput onChange={handleChange('q140')} defaultValue={values.q140} label={"140. Si Oui, Comment cela représente il ?"} />
            <InputRadio onChange={handleChange('q141')} defaultValue={values.q141} question="141. Avez-vous mis en place un système de tri-sélectif ? " />
            <InputRadio onChange={handleChange('q141_1')} defaultValue={values.q141_1} question="141 |. Pour vos collaborateurs (bureau) ?" />
            <InputRadio onChange={handleChange('q141_2')} defaultValue={values.q141_2} question="141 ||. Pour vos joueurs (centre d’entrainement) ?" />
            <InputRadio onChange={handleChange('q141_3')} defaultValue={values.q141_3} question="141 |||. Pour vos supporters (stade ou gymnase) ?" />
            <InputRadio onChange={handleChange('q142')} defaultValue={values.q142} question="142. Pouvez-vous préciser quel tri vous avez mis en place ?" />
            <InputRadio onChange={handleChange('q142_1')} defaultValue={values.q142_1} question="142 |. Tri verres" />
            <InputRadio onChange={handleChange('q142_2')} defaultValue={values.q142_2} question="142 ||. Tri papier, carton, plastique recyclable (poubelles jaunes)" />
            <InputRadio onChange={handleChange('q142_3')} defaultValue={values.q142_3} question="142 |||. Tri déchets organiques" />
            <InputRadio onChange={handleChange('q142_4')} defaultValue={values.q142_4} question="142 |V. Tri ampoules, piles" />
            <InputRadio onChange={handleChange('q142_5')} defaultValue={values.q142_5} question="142 |V|. Autres" />
            <InputRadio onChange={handleChange('q143')} defaultValue={values.q143} question="143. Pensez-vous que votre système de tri est perfectible ?" />
            <TextFieldInput onChange={handleChange('q144')} defaultValue={values.q144} label={"144. Si Oui, Comment pourrait-il être perfectible ?"} />
            <InputRadio onChange={handleChange('q145')} defaultValue={values.q145} question="145. Avez-vous pris des mesures contre l’obsolescence et pour la seconde vie des équipements (recycling, upcycling) ?" />
            <InputRadio onChange={handleChange('q146')} defaultValue={values.q146} question="146. Avez-vous pris des mesures pour la valorisation des déchets organiques (ex : compost, huile de cuisson) ?" />
            <InputRadio onChange={handleChange('q147')} defaultValue={values.q147} question="147. Avez-vous pris des mesures pour lutter contre les mégots jetés au sol ?" />
            <InputRadio onChange={handleChange('q148')} defaultValue={values.q148} question="148. Avez-vous installé des cendriers supplémentaires ?" />
            <InputRadio onChange={handleChange('q149')} defaultValue={values.q149} question="149. Avez-vous mis en place une collecte spécifique des mégots par un organisme spécialisé ?" />
            <InputRadio onChange={handleChange('q150')} defaultValue={values.q150} question="150. Avez-vous supprimé toutes les bouteilles en plastique (PET) au sein de votre structure ?" />
            <InputRadio onChange={handleChange('q150_1')} defaultValue={values.q150_1} question="150 |. Collaborateurs" />
            <InputRadio onChange={handleChange('q150_2')} defaultValue={values.q150_2} question="150 ||. Joueurs" />
            <InputRadio onChange={handleChange('q150_3')} defaultValue={values.q150_3} question="150 |||. Buvettes et/ou restauration grand public" />
            <InputRadio onChange={handleChange('q150_4')} defaultValue={values.q150_4} question="150 |V. Loges ou stands partenaires" />
            <InputRadio onChange={handleChange('q151')} defaultValue={values.q151} question="151. Avez-vous supprimé les gobelets en plastique à usage unique au sein de votre structure ?" />
            <InputRadio onChange={handleChange('q151_1')} defaultValue={values.q151_1} question="151 |. Collaborateurs" />
            <InputRadio onChange={handleChange('q151_2')} defaultValue={values.q151_2} question="151 ||. Joueurs" />
            <InputRadio onChange={handleChange('q151_3')} defaultValue={values.q151_3} question="151 |||. Buvettes et/ou restauration grand public" />
            <InputRadio onChange={handleChange('q151_4')} defaultValue={values.q151_4} question="151 |V. Loges ou stands partenaires" />
            <InputRadio onChange={handleChange('q152')} defaultValue={values.q152} question="152. Proposez-vous des Écocups dans vos différents points de ventes ?" />
            <InputRadio onChange={handleChange('q153')} defaultValue={values.q153} question="153. Avez-vous mis en place un système de consigne ou autre pour ces Écocups ?" />
            <TextFieldInput onChange={handleChange('q154')} defaultValue={values.q154} label={"154. À quelle fréquence renouvelez-vous ces Écocups ?"} />
            <InputRadio onChange={handleChange('q155')} defaultValue={values.q155} question="155. Avez-vous supprimé les pailles, les touillettes et les couverts en plastique au sein de votre structure ?" />
            <InputRadio onChange={handleChange('q155_1')} defaultValue={values.q155_1} question="155 |. Collaborateurs" />
            <InputRadio onChange={handleChange('q155_2')} defaultValue={values.q155_2} question="155 ||. Joueurs" />
            <InputRadio onChange={handleChange('q155_3')} defaultValue={values.q155_3} question="155 |||. Buvettes et/ou restauration grand public" />
            <InputRadio onChange={handleChange('q155_4')} defaultValue={values.q155_4} question="155 |V. Loges ou stands partenaires" />
            <InputRadio onChange={handleChange('q156')} defaultValue={values.q156} question="156. Avez-vous remplacé les pailles, les touillettes et les couverts en plastique par des matériaux éco-conçus ?" />
            <TextFieldInput onChange={handleChange('q157')} defaultValue={values.q157} label={"157. Si Oui, merci de préciser quels matériaux vous avez choisis ? Pourquoi ?"} />
            <InputRadio onChange={handleChange('q158')} defaultValue={values.q158} question="158. Avez-vous mis en place des contenants éco-conçu pour la restauration des espaces supporters ? (Emballages compostables, biodégradable...) ?" />
            <InputRadio onChange={handleChange('q159')} defaultValue={values.q159} question="159. Avez-vous pris des mesures pour supprimer les emballages à usage unique (boutique, traiteur, restauration grand public...) ?" />
            <InputRadio onChange={handleChange('q160')} defaultValue={values.q160} question="160. Avez-vous mis en place dans l’enceinte du stade ou du gymnase des bacs de récupération pour les drapeaux supporters ?" />
            <InputRadio onChange={handleChange('q161')} defaultValue={values.q161} question="161. Une fois vos événements terminés, faites-vous appel à un prestataire de récupération de vos produits (hors alimentation, par ex : moquette) non consommés, ou une autre solution ?" />
            <InputRadio onChange={handleChange('q162')} defaultValue={values.q162} question="162. Les équipements d’usage quotidien (informatiques, meubles, etc.) sont-ils proposés à des associations avant d’être apportés à la déchetterie ?" />
            <InputRadio onChange={handleChange('q163')} defaultValue={values.q163} question="163. Le club traite-t-il le matériel sportif en fin de vie ? (Ex : recyclage, destruction contrôlée, dons...)" />
            <TextFieldInput onChange={handleChange('q164')} defaultValue={values.q164} label={"164. Si Oui, Qu'est-ce que vous traité ? De quelle manière est-il traité ? Et Pour qui ?"} />

        </div>
    )
}
