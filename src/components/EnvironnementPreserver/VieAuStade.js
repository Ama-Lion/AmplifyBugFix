import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';

import { InputRadio,  } from "../Inputs"
import TextField from '@material-ui/core/TextField';

export default function VieAuStade({ values, handleChange } ) {
    return (
        <>

            <ListSubheader className='listSubheaderStyle'>
            <h3>IV.  Vie au stade</h3>
            <img src="img/logo-final-blanc.png" alt="logo" />
            </ListSubheader>

            <InputRadio onChange={handleChange('q42')} defaultValue={values.q42} question="42. Possédez-vous une machine à café qui n’utilise pas de capsules jetables ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q43')} defaultValue={values.q43} label={"43. Si Non, Connaissez-vous le nombre de capsules consommer par an ?"} />
            <InputRadio onChange={handleChange('q44')} defaultValue={values.q44} question="44. Si, vous utiliser du café moulu avez-vous mis en place un système pour récupérer du marc de café dans l’optique de l’utiliser (compost, jardin...) ?" />
            <InputRadio onChange={handleChange('q45')} defaultValue={values.q45} question="45. Si votre machine à café utilise des gobelets en plastique, avez-vous un système de récupération dans l’optique de recycler ces gobelets ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q46')} defaultValue={values.q46} label={"46. Pouvez-vous indiquer le nombre de ramettes de papier pour imprimante consommer par an ?"} />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q47')} defaultValue={values.q47} label={"47. Pouvez-vous indiquer le nombre d'impression par mois ?"} />
            <InputRadio onChange={handleChange('q48')} defaultValue={values.q48} question="48. Avez-vous  mis en  place  un  système  limitant  le  nombre d’impressions par collaborateurs ?" />
            <TextField   fullWidth className="inputText TextField"t onChange={handleChange('q49')} defaultValue={values.q49} label={"49. Si oui, qu’avez-vous mis en place ? (Ex : carte à crédit pour l’imprimante)"} />
            <InputRadio onChange={handleChange('q50')} defaultValue={values.q50} question="50. Choisissez-vous du papier labellisé (FSC, PEFC) et/ou recyclé ?" />
            <InputRadio onChange={handleChange('q51')} defaultValue={values.q51} question="51. La configuration par défaut des imprimantes est-elle recto-verso, noir et blanc, mode brouillon ?" />
            <InputRadio onChange={handleChange('q52')} defaultValue={values.q52} question="52. Avez-vous limité le  nombre d'imprimantes en excluant la possibilité d'en avoir une individuelle ?" />
            <InputRadio onChange={handleChange('q53')} defaultValue={values.q53} question="53. Utilisez-vous des cartouches d’encre écologiques et recyclables ?" />
            <InputRadio onChange={handleChange('q54')} defaultValue={values.q54} question="54. Mettez-vous à disposition des salariés des bacs de récupération des brouillons ?" />
            <InputRadio onChange={handleChange('q55')} defaultValue={values.q55} question="55. Avez-vous instauré une journée (repas zéro déchet) ?" />
            <InputRadio onChange={handleChange('q56')} defaultValue={values.q56} question="56. Vos collaborateurs bénéficient-ils d'un kit écologique aux couleurs de l'entreprise (mug, gourde,  sac en tissus, Tupperware) ?" />
            <InputRadio onChange={handleChange('q57')} defaultValue={values.q57} question="57. Votre espace de travail est-il décoré de plantes naturelles (pour le plaisir et pour la qualité de l'air !) ?" />
            <InputRadio onChange={handleChange('q58')} defaultValue={values.q58} question="58. Avez-vous installé un système de collecte de bouchons plastiques ?" />
            <InputRadio onChange={handleChange('q58_1')} defaultValue={values.q58_1} question="58 |. Bureau" />
            <InputRadio onChange={handleChange('q58_2')} defaultValue={values.q58_2} question="58 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q58_3')} defaultValue={values.q58_3} question="58 |||. Stade" />
            <InputRadio onChange={handleChange('q59')} defaultValue={values.q59} question="59. Avez-vous installé un « stop pub » sur votre boite aux lettres ?" />
            <InputRadio onChange={handleChange('q60')} defaultValue={values.q60} question="60. Avez-vous installé des fontaines à eau branchées au réseau de la ville ?" />
            <InputRadio onChange={handleChange('q60_1')} defaultValue={values.q60_1} question="60 |. Bureau" />
            <InputRadio onChange={handleChange('q60_2')} defaultValue={values.q60_2} question="60 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q60_3')} defaultValue={values.q60_3} question="60 |||. Stade" />
            <InputRadio onChange={handleChange('q61')} defaultValue={values.q61} question="61. Votre espace de travail est-il équipé de détecteurs de présence ?" />
            <InputRadio onChange={handleChange('q61_1')} defaultValue={values.q61_1} question="61 |. Bureau" />
            <InputRadio onChange={handleChange('q61_2')} defaultValue={values.q61_2} question="61 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q61_3')} defaultValue={values.q61_3} question="61 |||. Stade" />
            <InputRadio onChange={handleChange('q62')} defaultValue={values.q62} question="62. Avez-vous installé des distributeurs de savon éco labélisé dans vos sanitaires ?" />
            <InputRadio onChange={handleChange('q62_1')} defaultValue={values.q62_1} question="62 |. Bureau" />
            <InputRadio onChange={handleChange('q62_2')} defaultValue={values.q62_2} question="62 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q62_3')} defaultValue={values.q62_3} question="62 |||. Stade" />
            <InputRadio onChange={handleChange('q63')} defaultValue={values.q63} question="63. Avez-vous installé des distributeurs de gel douche éco labélisé dans les vestiaires ?" />
            <InputRadio onChange={handleChange('q63_1')} defaultValue={values.q63_1} question="63 |. Bureau" />
            <InputRadio onChange={handleChange('q63_2')} defaultValue={values.q63_2} question="63 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q63_3')} defaultValue={values.q63_3} question="63 |||. Stade" />
            <InputRadio onChange={handleChange('q64')} defaultValue={values.q64} question="64. Avez-vous privilégié le papier toilette écologique (ex : labélisé Écolabel) ?" />
            <InputRadio onChange={handleChange('q64_1')} defaultValue={values.q64_1} question="64 |. Bureau" />
            <InputRadio onChange={handleChange('q64_2')} defaultValue={values.q64_2} question="64 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q64_3')} defaultValue={values.q64_3} question="64 |||. Stade" />
            <InputRadio onChange={handleChange('q65')} defaultValue={values.q65} question="65. Vos sanitaires sont-ils équipés de sèche-mains en tissu ?" />
            <InputRadio onChange={handleChange('q65_1')} defaultValue={values.q65_1} question="65 |. Bureau" />
            <InputRadio onChange={handleChange('q65_2')} defaultValue={values.q65_2} question="65 ||. Centre d’entrainement" />
            <InputRadio onChange={handleChange('q65_3')} defaultValue={values.q65_3} question="65 |||. Stade" />
            <InputRadio onChange={handleChange('q66')} defaultValue={values.q66} question="66. Avez-vous remplacé les contenants à usage unique (gobelets, toilettes,  bouteilles  en  plastique,  etc.) par de la vaisselle réutilisable ?" />
            <InputRadio onChange={handleChange('q67')} defaultValue={values.q67} question="67. Vos collaborateurs bénéficient-ils d'un kit écologiqueaux couleurs de l'entreprise (mug, gourde,  sac en tissus, Tupperware) ?" />  
        </>
    )
}
