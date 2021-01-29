import React, { Component } from 'react';
import { Container } from "@material-ui/core";

export class Intro extends Component {

  render() {
    return (
      <Container>
        <div className="intro-title">        
          <h1 className='text-center'>Référentiel Fair Play For Planet</h1>
          <img src="img/logo-final-vert.png" alt="logo" height="20%" width="20%" />
          </div>
        <div>
          <h3>Questionnaire préliminaire d’audit</h3>
          <p>Vous entrez dans le processus de labélisation de Fair Play For Planet. La première étape sera pour vous de remplir notre référentiel de la manière la plus exhaustive possible. Il est composé de plus de 300 questions regroupées dans 18 thèmes.</p>
          <p>L’objectif est d’identifier avec vous les points forts et les points faibles de votre politique environnementale. Il n’y a pas de mauvais élève, nous avons comme objectif de vous amener vers une démarche de progrès continu en matière de lutte contre le réchauffement climatique.</p>
          <p>Une fois ce référentiel rempli, nos experts certifiés COFRAC viendront visiter vos infrastructures afin d’appréhender votre écosystème et vérifier avec vous vos réponses.</p>
          <p>Ceci nous permettra de rédiger un rapport d’audit lequel comprendra une évaluation de vos actions, une attribution du label FPFP (Note de 40 à 59,9 / 100 : FPFP * Certifié Player - 60 à 79,9 / 100 : FPFP ** Certifié Engaged - Plus de 80 / 100 : FPFP *** Certifié Confirmed)1 selon votre degré de performance environnementale. Notre rapport comprendra également des propositions d'axes d’améliorations et de solutions élaborées avec nos experts. </p>
          <p>L’identification des caractéristiques environnementales de ce référentiel a été réalisée en coopération avec l’ADEME, l’Agence de la transition écologique. Il s’appuie notamment sur les 17 objectifs de développement durable (ODD) qui ont été adoptés par l’Organisation des Nations unies et sur la charte des 15 Engagements des organisateurs d’évènements et des gestionnaires d’équipements lancée par le Ministères des Sports et l’ONG WWF.</p>
          <p className="red-text"><sup>1</sup> Si vous n’obtenez pas la note suffisante pour le label FPFP * Certifié Player, un délai de 6 mois vous sera octroyé afin que vous puissiez mettre en place les actions nécessaires à l’obtention de ce label.</p>
          <p>
            Nous restons à votre entière disposition pour toutes questions :
            <br />
            <b>Jean-Paul LALANNE :</b> jean-paul.lalanne@fairplayforplanet.org
            <br />
            <b> Julien PIERRE :</b> julien.pierre@fairplayforplanet.org
          </p>
        </div>
      </Container>
    );
  }
}

export default Intro;
