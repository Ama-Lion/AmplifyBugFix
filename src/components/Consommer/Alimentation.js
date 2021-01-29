import React from 'react'

import ListSubheader from '@material-ui/core/ListSubheader';
import { InputRadio, InputRadioPercent } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function Alimentation({ values, handleChange }) {
    return (
        <div>
          <ListSubheader className='listSubheaderStyle'>
        <h3>I.  Alimentation</h3>
        <img src="img/logo-final-blanc.png" alt="logo" />
        </ListSubheader>

        <InputRadio onChange={handleChange('q220')} defaultValue={values.q220} question="220.Avez-vous mis en place une communication de transparence vis-à-vis de la provenance et de la qualité des produits alimentaires ?" />
        <InputRadioPercent onChange={handleChange('q221')} defaultValue={values.q221} question="221. Quelle est la part des aliments sans OGM ?" />
        <InputRadioPercent onChange={handleChange('q222')} defaultValue={values.q222} question="222. Quelle est la part des achats alimentaires issus de l'agriculture biologique ?" />
        <InputRadioPercent onChange={handleChange('q223')} defaultValue={values.q223} question="223. Quelle est la part des achats alimentaires issus de l'agriculture biologique française ?" />
        <InputRadioPercent onChange={handleChange('q224')} defaultValue={values.q224} question="224. Quelle est la part des achats alimentaires issus de circuits courts et de saison ?" />
        <InputRadioPercent onChange={handleChange('q225')} defaultValue={values.q225} question="225. Quelle est la part des produits issus du commerce équitable (Labélisés FairTrade, SPP, WFTO, Biopartenaires...)" />
        <InputRadio onChange={handleChange('q226')} defaultValue={values.q226} question="226. Avez-vous instauré un étiquetage clairement apposé sur les aliments & boissons (sur l’origine, la composition, label...) ?" />
        <InputRadio onChange={handleChange('q227')} defaultValue={values.q227} question="227. Existe-t-il des mesures pour la limitation des produits carnés (aussi bien viande rouge que blanche) ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q228')} defaultValue={values.q228} label={"228. Si Oui, Quelle(s) mesure(s) avez-vous prises ?"} />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q229')} defaultValue={values.q229} label={"229. Connaissez-vous la quantité de nourriture gaspillée après chaque événement ? Pouvez-vous nous l'indiquer ?"} />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q230')} defaultValue={values.q230} label={"230. Connaissez-vous le nombre de repas par événement (grand public et partenaires) Pouvez-vous nous donner ces chiffres moyens ?"} />
        <InputRadio onChange={handleChange('q231')} defaultValue={values.q231} question="231. Existe-t-il des mesures prises pour lutter contre toutes formes de gaspillage alimentaire ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q232')} defaultValue={values.q232} label={"232. Si Oui, Quelle(s) mesure(s) avez-vous prises ?"} />
        <InputRadio onChange={handleChange('q233')} defaultValue={values.q233} question="233. Pratiquez-vous le compostage ou la méthanisation des surplus alimentaires au sein de votre struture ?" />
        <InputRadio onChange={handleChange('q234')} defaultValue={values.q234} question="234. Avez-vous des partenaires qui récupèrent et traitent (recyclent) les huiles de cuisson (fritures) ?" />
        <InputRadio onChange={handleChange('q235')} defaultValue={values.q235} question="235. Avez-vous mis en place des partenariats avec des associations pour donner les surplus alimentaires non abîmés ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q236')} defaultValue={values.q236} label={"236. Si Oui, avec quelle(s) association(s) travaillez-vous ?"} />
        <InputRadio onChange={handleChange('q237')} defaultValue={values.q237} question="237. Avez-vous mis en place des procédures afin de ne pas sortir les aliments du froid tant que ceux exposés ne sont pas consommés ?" />
        <InputRadio onChange={handleChange('q238')} defaultValue={values.q238} question="238. Pour vos événements, est-ce que le critère « écologique » (bio, de saison, locaux, emballage minimum) oriente vos choix de prestataires ?" />
        <InputRadio onChange={handleChange('q239')} defaultValue={values.q239} question="239. Avez-vous intégré ce critère écologique dans votre cahier des charges auprès de vos prestataires ?" />
        <InputRadio onChange={handleChange('q240')} defaultValue={values.q240} question="240. Avez-vous intégré dans le cahier des charges auprès de vos prestataires la suppression des plastiques à usage unique ?" />
        <InputRadio onChange={handleChange('q241')} defaultValue={values.q241} question="241. Avez-vous mis en place des actions de sensibilisation pour vos collaborateurs et le grand public à l’alimentation responsable ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q242')} defaultValue={values.q242} label={"242. Si Oui, avec quelle(s) méthode(s) de sensibilisation ?"} />
        <InputRadio onChange={handleChange('q243')} defaultValue={values.q243} question="243. Proposez-vous des menus équilibrés à vos collaboateurs, joueurs, supporters et partenaires (suivant  les recommandations de spécialistes)  limitant la consommation d'aliments gras, salés, sucrés ?" />
        <InputRadio onChange={handleChange('q244')} defaultValue={values.q244} question="244. Prévenez-vous des risques de consomation d’alcool dans vos espaces grand public et vos espaces partenaires ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q245')} defaultValue={values.q245} label={"245. Si Oui, Quel(s) moyen(s) de prévention ?"} />
        <InputRadio onChange={handleChange('q246')} defaultValue={values.q246} question="246. Proposez-vous des menus respectant les différents régimes alimentaires à vos collaboateurs, joueurs, supporters et partenaire ? (Végétarien, végan, végétalien...) ?" />
        <InputRadio onChange={handleChange('q247')} defaultValue={values.q247} question="247. Est-ce que votre offre de restauration participe à la valorisation de la gastronomie locale ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q248')} defaultValue={values.q248} label={"248. Si Oui, Sous quelle(s) forme(s) ou quel(s) engagement(s) ?"} />
        <InputRadio onChange={handleChange('q249')} defaultValue={values.q249} question="249. Est-ce que votre offre de restauration participe à la valorisation de la gastronomie saison ?" />
        <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q250')} defaultValue={values.q250} label={"250. Si Oui, Sous quelle(s) forme(s) ?"} />
        <InputRadio onChange={handleChange('q251')} defaultValue={values.q251} question="251. Avez-vous mis en place des partenariats avec des prestataires de votre territoire ?" />
        <InputRadio onChange={handleChange('q251_1')} defaultValue={values.q251_1} question="251 |. Pour l’offre grand public" />
        <InputRadio onChange={handleChange('q251_2')} defaultValue={values.q251_2} question="251 | |. Pour l’offre à vos partenaires" />
        <InputRadio onChange={handleChange('q251_3')} defaultValue={values.q251_3} question="251 | | |. Pour les collaborateurs et sportif(ve)s" />
        <InputRadio onChange={handleChange('q252')} defaultValue={values.q252} question="252. Existe-t-il sur les lieux de restauration un rappel des règles de tri-sélectif ?" />
        <InputRadio onChange={handleChange('q252_1')} defaultValue={values.q252_1} question="252 |. Espace grand public" />
        <InputRadio onChange={handleChange('q252_2')} defaultValue={values.q252_2} question="252 | |. Restauration joueurs/collaborateurs" />
        <InputRadio onChange={handleChange('q252_3')} defaultValue={values.q252_3} question="252 | | |. Espaces partenaires" />  
        </div>
    )
}
