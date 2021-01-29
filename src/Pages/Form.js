// import react and aws stuffs
import React, { Component } from 'react';

import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import config from '../aws-exports';

import {   
  ImpactTerritorial,
  Exemplarite,
  Acccessibilite,
  CommunicationResponsable,
  GestionDesAchats,
  Alimentation,
  BilanCarbone,
  GestionNumerique,
  GestionArchitecturaleEtDesBatiments,
  GestionDeEau,
  GestionDesDechets,
  GestionEnergetique,
  Transports,
  Piloter,
  VieAuStade,
  ProduitsDentretien,
  GestionDesSols,
  User,
  RespectDesMlieux } from '../models';


// import components
import Intro from '../components/Intro';
import GeneralInformation from '../components/GeneralInformation';
import EnvironnementPreserver from '../components/EnvironnementPreserver/';
import Ecoperformer from '../components/Ecoperformer/';
import Consommer from '../components/Consommer/';
// import Confirm from '../components/Confirm';
import Spinner from '../components/Spinner';
import Sommaire from '../components/Sommaire';
// import Success from '../components/Success';

// import material ui styles
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#39523D",
    },
  },
  border: 40,
});

Amplify.configure(config); 
DataStore.configure(config);

export class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      loading: "",
      success: "",
      activeStep: 0,
      nom: '',
      discipline: '',
      date_de_creation: '',
      Statut_juridique_du_club: '',
      budget: '',
      part_allouee_a_la_formation: '',
      nb_total_salarie: '',
      nb_de_personnel_admistrative: '',
      nb_de_staff_professionnels: '',
      nb_de_jouers_professionnels: '',
      nb_de_jouers_en_centre_de_formation: '',
      nb_de_jeunes_jouers_u18: '',
      nd_de_dirigeants: '',
      nb_de_joueurses_professionnelles: '',
      nb_de_licencie: '',
      nb_des_dirigeants: '',
      nb_de_benevoles_volontaires: '',
      nb_de_supporteur_par_evenement_ou_match: '',
      nb_de_abonnes: '',
      contacts_des_referents: '',
      entretien: '',
      intendance: '',
      mobilitier: '',
      maintenance: '',
      restauration: '',
      evenement_hospiliters: '',
      responsabel_rse_et_dd: '',
      nom_reference_audit: '',
      prenom_reference_audit: '',
      poste_reference_audit: '',
      mail_reference_audit: '',
      telepone_reference_audit: '',
      q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '',
      q11: '', q12: '', q13: '', q13_1: '', q13_2: '', q14: '', q15: '', q15_1: '', q15_2: '', q15_3: '', q16: '', q17: '', q18: '', q19: '', q20: '',
      q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '',
      q31: '', q32: '', q32_1: '', q32_2: '', q32_3: '', q32_4: '', q33: '', q34: '', q34_1: '', q34_2: '', q34_3: '', q34_4: '', q35: '', q36: '', q37: '', q38: '', q39: '', q40: '', q40_1: '', q40_2: '', q40_3: '', q40_4: '',
      q41: '', q42: '', q43: '', q44: '', q45: '', q46: '', q47: '', q48: '', q49: '', q50: '',
      q51: '', q52: '', q53: '', q54: '', q55: '', q56: '', q57: '', q58: '', q58_1: '', q58_2: '', q58_3: '', q59: '', q60: '', q60_2: '', q60_3: '',  q60_1: '', 
      q61: '', q61_1: '', q61_2: '', q61_3: '', q62: '', q62_1: '', q62_2: '', q62_3: '', q63: '', q63_1: '', q63_2: '', q63_3: '', q64: '', q64_1: '', q64_2: '', q64_3: '', q65: '', q65_1: '', q65_2: '', q65_3: '', q66: '', q67: '', q68: '', q69: '', q70: '',
      q71: '', q72: '', q73: '', q74: '', q75: '', q76: '', q77: '', q78: '', q79: '', q80: '',
      q81: '', q82: '', q83: '', q84: '', q85: '', q86: '', q87: '', q88: '', q89: '', q90: '',
      q91: '', q92: '', q93: '', q94: '', q95: '', q96: '', q97: '', q98: '', q99: '', q100: '',
      q101: '', q102: '', q103: '', q104: '', q105: '', q106: '', q107: '', q108: '', q109: '', q110: '',
      q111: '', q112: '', q113: '', q114: '', q115: '', q116: '', q117: '', q117_1: '', q117_2: '', q117_3: '', q117_4: '', q118: '', q119: '', q120: '',
      q121: '', q122: '', q123: '', q124: '', q125: '', q126: '', q127: '', q128: '', q129: '', q130: '',
      q131: '', q132: '', q133: '', q134: '', q135: '', q136: '', q137: '', q138: '', q139: '', q140: '',
      q141: '', q141_1: '', q141_2: '', q141_3: '', q142: '',  q142_1: '', q142_2: '', q142_3: '', q142_4: '', q142_5: '', q143: '', q144: '', q145: '', q146: '', q147: '', q148: '', q149: '', q150: '', q150_1: '', q150_2: '', q150_3: '', q150_4: '',
      q151: '', q151_1: '', q151_2: '', q151_3: '', q151_4: '', q152: '', q153: '', q154: '', q155: '', q155_1: '', q155_2: '', q155_3: '', q155_4: '', q156: '', q157: '', q158: '', q159: '', q160: '',
      q161: '', q162: '', q163: '', q164: '', q165: '', q166: '', q167: '', q167_1: '', q167_2: '', q167_3: '', q167_4: '', q168: '', q169: '', q170: '',
      q171: '', q172: '', q173: '', q174: '', q175: '', q176: '', q177: '', q178: '', q179: '', q180: '',
      q181: '', q182: '', q183: '', q184: '', q185: '', q186: '', q187: '', q187_1: '', q187_2: '', q187_3: '', q187_4: '', q187_5: '', q188: '', q189: '', q190: '',
      q191: '', q192: '', q193: '', q194: '', q195: '', q196: '', q197: '', q198: '', q199: '', q200: '',
      q201: '', q202: '', q203: '', q204: '', q205: '', q206: '', q207: '', q208: '', q209: '', q210: '',
      q211: '', q212: '', q213: '', q214: '', q215: '', q216: '', q217: '', q218: '', q219: '', q220: '',
      q221: '', q222: '', q223: '', q224: '', q225: '', q226: '', q227: '', q228: '', q229: '', q230: '',
      q231: '', q232: '', q233: '', q234: '', q235: '', q236: '', q237: '', q238: '', q239: '', q240: '',
      q241: '', q242: '', q243: '', q244: '', q245: '', q246: '', q247: '', q248: '', q249: '', q250: '',
      q251: '', q251_1: '', q251_2: '', q251_3: '', q252: '', q252_1: '', q252_2: '', q252_3: '', q253: '', q254: '', q255: '', q256: '', q257: '', q258: '', q259: '', q260: '',
      q261: '', q262: '', q263: '', q264: '', q265: '', q266: '', q267: '', q268: '', q269: '', q270: '',
      q271: '', q272: '', q273: '', q274: '', q275: '', q276: '', q277: '', q278: '', q279: '', q280: '',
      q281: '', q281_1: '', q281_2: '', q281_3: '', q281_4: '', q282: '', q283: '', q284: '', q285: '', q286: '', q287: '', q288: '', q289: '', q290: '',
      q291: '', q292: '', q293: '', q294: '', q295: '', q296: '', q297: '', q298: '', q299: '', q300: '',
      q301: '', q302: '', q303: '', q304: '', q305: '', q306: '', q307: '', q308: '', q309: '', q310: '',
      q311: '', q312: '', q313: '', q314: '', q355: '', q316: '', q317: '', q318: '', q319: '', q320: '',
      q321: '', q322: '', q323: '', q324: '', q325: '', q326: '', q327: '', q328: '', q329: '', q330: '',
      q331: '', q332: '', q332_1: '', q332_2: '', q332_3: '', q332_4: '', q332_5: '', q332_6: '', q332_7: '', q332_8: '', q332_9: '', q333: '',
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  handleSubmit = async () => {
    const user = await DataStore.save(
      new User({
        nom: this.state.nom,
        discipline: this.state.discipline,
        date_de_creation: this.state.date_de_creation,
        Statut_juridique_du_club: this.state.Statut_juridique_du_club,
        budget: this.state.budget,
        part_allouee_a_la_formation: this.state.part_allouee_a_la_formation,
        nb_total_salarie: this.state.nb_total_salarie,
        nb_de_personnel_admistrative: this.state.nb_de_personnel_admistrative,
        nb_de_staff_professionnels: this.state.nb_de_staff_professionnels,
        nb_de_jouers_professionnels: this.state.nb_de_jouers_professionnels,
        nb_de_jouers_en_centre_de_formation: this.state.nb_de_jouers_en_centre_de_formation,
        nb_de_jeunes_jouers_u18: this.state.nb_de_jeunes_jouers_u18,
        nd_de_dirigeants: this.state.nd_de_dirigeants,
        nb_de_joueurses_professionnelles: this.state.nb_de_joueurses_professionnelles,
        nb_de_licencie: this.state.nb_de_licencie,
        nb_des_dirigeants: this.state.nb_des_dirigeants,
        nb_de_benevoles_volontaires: this.state.nb_de_benevoles_volontaires,
        nb_de_supporteur_par_evenement_ou_match: this.state.nb_de_supporteur_par_evenement_ou_match,
        nb_de_abonnes: this.state.nb_de_abonnes,
        contacts_des_referents: this.state.contacts_des_referents,
        entretien: this.state.entretien,
        intendance: this.state.intendance,
        mobilitier: this.state.mobilitier,
        maintenance: this.state.maintenance,
        restauration: this.state.restauration,
        evenement_hospiliters: this.state.evenement_hospiliters,
        responsabel_rse_et_dd: this.state.responsabel_rse_et_dd,
        nom_reference_audit: this.state.responsabel_rse_et_dd,
        prenom_reference_audit: this.state.prenom_reference_audit,
        poste_reference_audit: this.state.poste_reference_audit,
        mail_reference_audit: this.state.mail_reference_audit,
        telepone_reference_audit: this.state.telepone_reference_audit
      })
    );
    const respectDesMlieux = await DataStore.save(
      new RespectDesMlieux({
        userID: user.id,
        q1: this.state.q1,
        q2: this.state.q2,
        q3: this.state.q3,
        q4: this.state.q4,
        q5: this.state.q5,
        q6: this.state.q6,
        q7: this.state.q7,
        q8: this.state.q8,
        q9: this.state.q9,
        q10: this.state.q10,
        q11: this.state.q11,
        q12: this.state.q12
      })
    );
    const gestionDesSols = await DataStore.save(
      new GestionDesSols({
        userID: user.id,
        q13: this.state.q13,
        q13_1: this.state.q13_1,
        q13_2: this.state.q13_2,
        q14: this.state.q14,
        q15: this.state.q15,
        q15_1: this.state.q15_1,
        q15_2: this.state.q15_2,
        q15_3: this.state.q15_3,
        q16: this.state.q16,
        q17: this.state.q17,
        q18: this.state.q18,
        q19: this.state.q19,
        q20: this.state.q20,
        q21: this.state.q21,
        q22: this.state.q22,
        q23: this.state.q23,
        q24: this.state.q24,
        q25: this.state.q25,
        q26: this.state.q26,
        q27: this.state.q27,
        q28: this.state.q28,
        q29: this.state.q29,
        q30: this.state.q30,
        q31: this.state.q31,
      })
    );
    const produitsDentretien = await DataStore.save(
      new ProduitsDentretien({
        userID: user.id,
        q32: this.state.q32,
        q32_1: this.state.q32_1,
        q32_2: this.state.q32_2,
        q32_3: this.state.q32_3,
        q32_4: this.state.q32_4,
        q33: this.state.q33,
        q34: this.state.q34,
        q34_1: this.state.q34_1,
        q34_2: this.state.q34_2,
        q34_3: this.state.q34_3,
        q34_4: this.state.q34_4,
        q35: this.state.q35,
        q36: this.state.q36,
        q37: this.state.q37,
        q38: this.state.q38,
        q39: this.state.q39,
        q40: this.state.q40,
        q40_1: this.state.q40_1,
        q40_2: this.state.q40_2,
        q40_3: this.state.q40_3,
        q40_4: this.state.q40_4,
        q41: this.state.q41,
      })
    );
    const vieAuStade = await DataStore.save(
      new VieAuStade({
        userID: user.id,
        q42: this.state.q42,
        q43: this.state.q43,
        q44: this.state.q44,
        q45: this.state.q45,
        q46: this.state.q46,
        q47: this.state.q47,
        q48: this.state.q48,
        q49: this.state.q49,
        q50: this.state.q50,
        q51: this.state.q51,
        q52: this.state.q52,
        q53: this.state.q53,
        q54: this.state.q54,
        q55: this.state.q55,
        q56: this.state.q56,
        q57: this.state.q57,
        q58: this.state.q58,
        q58_1: this.state.q58_1,
        q58_2: this.state.q58_2,
        q58_3: this.state.q58_3,
        q59: this.state.q59,
        q60: this.state.q60,
        q60_1: this.state.q60_1,
        q60_2: this.state.q60_2,
        q60_3: this.state.q60_3,
        q61: this.state.q61,
        q61_1: this.state.q61_1,
        q61_2: this.state.q61_2,
        q61_3: this.state.q61_3,
        q62: this.state.q62,
        q62_1: this.state.q62_1,
        q62_2: this.state.q62_2,
        q62_3: this.state.q62_3,
        q63: this.state.q63,
        q63_1: this.state.q63_1,
        q63_2: this.state.q63_2,
        q63_3: this.state.q63_3,
        q64: this.state.q64,
        q64_1: this.state.q64_1,
        q64_2: this.state.q64_2,
        q64_3: this.state.q64_3,
        q65: this.state.q65,
        q65_1: this.state.q65_1,
        q65_2: this.state.q65_2,
        q65_3: this.state.q65_3,
        q66: this.state.q66,
        q67: this.state.q67,
      })
    );
    const piloter = await DataStore.save(
      new Piloter({
        userID: user.id,
        q68: this.state.q68,
        q69: this.state.q69,
        q70: this.state.q70,
        q71: this.state.q71,
        q72: this.state.q72,
        q73: this.state.q73,
        q74: this.state.q74,
        q75: this.state.q75,
        q76: this.state.q76,
        q77: this.state.q77,
        q78: this.state.q78,
        q79: this.state.q79,
        q80: this.state.q80,
        q81: this.state.q81,
        q82: this.state.q82,
        q83: this.state.q83,
        q84: this.state.q84,
        q85: this.state.q85,
        q86: this.state.q86,
      })
    );
    const transports = await DataStore.save(
      new Transports({
        userID: user.id,
        q87: this.state.q87,
        q88: this.state.q88,
        q89: this.state.q89,
        q90: this.state.q90,
        q91: this.state.q91,
        q92: this.state.q92,
        q93: this.state.q93,
        q94: this.state.q94,
        q95: this.state.q95,
        q96: this.state.q96,
        q97: this.state.q97,
        q98: this.state.q98,
        q99: this.state.q99,
        q100: this.state.q100,
        q101: this.state.q101,
        q102: this.state.q102,
        q103: this.state.q103,
        q104: this.state.q104,
        q105: this.state.q105,
        q106: this.state.q106,
        q107: this.state.q107,
        q108: this.state.q108,
        q109: this.state.q109,
        q110: this.state.q110,
        q111: this.state.q111,
        q112: this.state.q112,
        q113: this.state.q113,
        q114: this.state.q114,
        q115: this.state.q115,
        q116: this.state.q116,
        q117: this.state.q117,
        q117_1: this.state.q117_1,
        q117_2: this.state.q117_2,
        q117_3: this.state.q117_3,
        q117_4: this.state.q117_4,
        q118: this.state.q118,
        q119: this.state.q119,
        q120: this.state.q120,
        q121: this.state.q121,
      })
    );
    const gestionEnergetique = await DataStore.save(
      new GestionEnergetique({
        userID: user.id,
        q122: this.state.q122,
        q123: this.state.q123,
        q124: this.state.q124,
        q125: this.state.q125,
        q126: this.state.q126,
        q127: this.state.q127,
        q128: this.state.q128,
        q129: this.state.q129,
        q130: this.state.q130,
        q131: this.state.q131,
        q132: this.state.q132,
        q133: this.state.q133,
        q134: this.state.q134,
        q135: this.state.q135,
        q136: this.state.q136,
        q137: this.state.q137,
        q138: this.state.q138,
       
      })
    );
    const gestionDesDechets = await DataStore.save(
      new GestionDesDechets({
        userID: user.id,
        q138: this.state.q138,
        q139: this.state.q139,
        q140: this.state.q140,
        q141: this.state.q141,
        q141_1: this.state.q141_1,
        q141_2: this.state.q141_2,
        q141_3: this.state.q141_3,
        q142: this.state.q142,
        q142_1: this.state.q142_1,
        q142_2: this.state.q142_2,
        q142_3: this.state.q142_3,
        q142_4: this.state.q142_4,
        q142_5: this.state.q142_5,
        q143: this.state.q143,
        q144: this.state.q144,
        q145: this.state.q145,
        q146: this.state.q146,
        q147: this.state.q147,
        q148: this.state.q148,
        q149: this.state.q149,
        q150: this.state.q150,
        q150_1: this.state.q150_1,
        q150_2: this.state.q150_2,
        q150_3: this.state.q150_3,
        q150_4: this.state.q150_4,
        q151: this.state.q151,
        q151_1: this.state.q151_1,
        q151_2: this.state.q151_2,
        q151_3: this.state.q151_3,
        q151_4: this.state.q151_4,
        q152: this.state.q152,
        q153: this.state.q153,
        q154: this.state.q154,
        q155: this.state.q155,
        q155_1: this.state.q155_1,
        q155_2: this.state.q155_2,
        q155_3: this.state.q155_3,
        q155_4: this.state.q155_4,
        q156: this.state.q156,
        q157: this.state.q157,
        q158: this.state.q158,
        q159: this.state.q159,
        q160: this.state.q160,
        q161: this.state.q161,
        q162: this.state.q162,
        q163: this.state.q163,
        q164: this.state.q164,
      })
    );
    const gestionDeEau = await DataStore.save(
      new GestionDeEau({
        userID: user.id,
        q165: this.state.q165,       
        q166: this.state.q166,       
        q167: this.state.q167,       
        q167_1: this.state.q167_1,       
        q167_2: this.state.q167_2,       
        q167_3: this.state.q167_3,       
        q167_4: this.state.q167_4,       
        q168: this.state.q168,       
        q169: this.state.q169,       
        q170: this.state.q170,       
        q171: this.state.q171,       
        q172: this.state.q172,      
        q173: this.state.q173,       
        q174: this.state.q174,       
        q175: this.state.q175,       
        q176: this.state.q176,       
        q177: this.state.q177,       
      })
    );
    const gestionArchitecturaleEtDesBatiments = await DataStore.save(
      new GestionArchitecturaleEtDesBatiments({
        userID: user.id,     
        q178: this.state.q178,       
        q179: this.state.q179,       
        q180: this.state.q180,       
        q181: this.state.q181,       
        q182: this.state.q182,       
        q183: this.state.q183,       
        q184: this.state.q184,       
        q185: this.state.q185,       
        q186: this.state.q186,       
        q187: this.state.q187,       
        q187_1: this.state.q187_1,       
        q187_2: this.state.q187_2,       
        q187_3: this.state.q187_3,       
        q187_4: this.state.q187_4,       
        q187_5: this.state.q187_5,       
        q188: this.state.q188,       
        q189: this.state.q189,       
        q190: this.state.q190,       
        q191: this.state.q191,       
      })
    );
    const gestionNumerique = await DataStore.save(
      new GestionNumerique({
        userID: user.id,        
        q192: this.state.q192,       
        q193: this.state.q193,       
        q194: this.state.q194,       
        q195: this.state.q195,       
        q196: this.state.q196,       
        q197: this.state.q197,       
        q198: this.state.q198,       
        q199: this.state.q199,       
        q200: this.state.q200,       
        q201: this.state.q201,       
        q202: this.state.q202,       
        q203: this.state.q203,       
        q204: this.state.q204,       
        q205: this.state.q205,       
        q206: this.state.q206,       
        q207: this.state.q207,       
        q208: this.state.q208,       
        q209: this.state.q209,       
        q210: this.state.q210,       
      })
    );
    const bilanCarbone = await DataStore.save(
      new BilanCarbone({
        userID: user.id,              
        q211: this.state.q211,       
        q212: this.state.q212,       
        q213: this.state.q213,       
        q214: this.state.q214,       
        q215: this.state.q215,       
        q216: this.state.q216,       
        q217: this.state.q167,       
        q218: this.state.q268,       
        q219: this.state.q219,       
      })
    );
    const alimentation = await DataStore.save(
      new Alimentation({
        userID: user.id,                    
        q220: this.state.q220,       
        q221: this.state.q221,       
        q222: this.state.q222,       
        q223: this.state.q223,       
        q224: this.state.q224,       
        q225: this.state.q225,       
        q226: this.state.q226,       
        q227: this.state.q227,       
        q228: this.state.q228,       
        q229: this.state.q229,       
        q230: this.state.q230,       
        q231: this.state.q231,       
        q232: this.state.q232,       
        q233: this.state.q233,       
        q234: this.state.q234,       
        q235: this.state.q235,       
        q236: this.state.q236,       
        q237: this.state.q237,       
        q238: this.state.q238,       
        q239: this.state.q239,       
        q240: this.state.q240,       
        q241: this.state.q241,       
        q242: this.state.q242,       
        q243: this.state.q243,       
        q244: this.state.q244,       
        q245: this.state.q245,       
        q246: this.state.q246,       
        q247: this.state.q247,       
        q248: this.state.q248,       
        q249: this.state.q249,       
        q250: this.state.q250,       
        q251: this.state.q251,       
        q251_1: this.state.q251_1,       
        q251_2: this.state.q251_2,       
        q251_3: this.state.q251_3,       
        q252: this.state.q252,       
        q252_1: this.state.q252_1,       
        q252_2: this.state.q252_2,       
        q252_3: this.state.q252_3,       
      })
    );
    const gestionDesAchats = await DataStore.save(
      new GestionDesAchats({
        userID: user.id,                       
        q253: this.state.q253,       
        q254: this.state.q254,       
        q255: this.state.q255,       
        q256: this.state.q256,       
        q257: this.state.q257,       
        q258: this.state.q258,       
        q259: this.state.q259,       
      })
    );
    const communicationResponsable = await DataStore.save(
      new CommunicationResponsable({
        userID: user.id,                        
        q260: this.state.q260,       
        q261: this.state.q261,       
        q262: this.state.q262,       
        q263: this.state.q263,       
        q264: this.state.q264,       
        q265: this.state.q265,       
        q266: this.state.q266,       
        q267: this.state.q267,       
        q268: this.state.q268,       
        q269: this.state.q269,       
        q270: this.state.q270,       
        q271: this.state.q271,       
        q272: this.state.q272,       
        q273: this.state.q273,       
        q274: this.state.q274,       
        q275: this.state.q275,       
        q276: this.state.q276,       
        q277: this.state.q277,       
        q278: this.state.q278,       
        q279: this.state.q279,       
        q280: this.state.q280,       
      })
    );
    const accessibilite = await DataStore.save(
      new Acccessibilite({
        userID: user.id,                            
        q281: this.state.q281,       
        q281_1: this.state.q281_1,       
        q281_2: this.state.q281_2,       
        q281_3: this.state.q281_3,       
        q281_4: this.state.q281_4,       
        q282: this.state.q282,       
        q283: this.state.q283,       
        q284: this.state.q284,       
        q285: this.state.q285,       
        q286: this.state.q286,       
        q287: this.state.q287,       
        q288: this.state.q288,       
        q289: this.state.q289,       
      })
    );
    const exemplarite = await DataStore.save(
      new Exemplarite({
        userID: user.id,                                  
        q290: this.state.q290,       
        q291: this.state.q291,       
        q292: this.state.q292,       
        q293: this.state.q293,       
        q294: this.state.q294,       
        q295: this.state.q295,       
        q296: this.state.q296,       
        q297: this.state.q297,       
        q298: this.state.q298,       
        q299: this.state.q299,       
        q300: this.state.q300,       
        q301: this.state.q301,       
        q302: this.state.q302,       
        q303: this.state.q303,       
        q304: this.state.q304,       
        q305: this.state.q305,       
        q306: this.state.q306,       
        q307: this.state.q307,       
        q308: this.state.q308,       
        q309: this.state.q309,       
        q310: this.state.q310,       
        q311: this.state.q311,       
        q312: this.state.q312,       
        q313: this.state.q313,       
        q314: this.state.q314,       
        q315: this.state.q315,       
        q316: this.state.q316,       
        q317: this.state.q317,       
        q318: this.state.q318,       
      })
    );
    const impactTerritorial = await DataStore.save(
      new ImpactTerritorial({
        userID: user.id,                                       
        q319: this.state.q319,       
        q320: this.state.q320,       
        q321: this.state.q321,       
        q322: this.state.q322,       
        q323: this.state.q323,       
        q324: this.state.q324,       
        q325: this.state.q325,       
        q326: this.state.q326,       
        q327: this.state.q327,       
        q328: this.state.q328,       
        q329: this.state.q329,       
        q330: this.state.q330,       
        q331: this.state.q331,       
        q332: this.state.q332,       
        q332_1: this.state.q332_1,       
        q332_2: this.state.q332_2,       
        q332_3: this.state.q332_3,       
        q332_4: this.state.q332_4,       
        q332_5: this.state.q332_5,       
        q332_6: this.state.q332_6,       
        q332_7: this.state.q332_7,       
        q332_8: this.state.q332_8,       
        q332_9: this.state.q332_9,       
        q333: this.state.q333,       
      })
    );
  }

  render() {

    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const { activeStep } = this.state;
    const { nom, discipline, date_de_creation, nd_de_dirigeants, Statut_juridique_du_club, budget, nb_de_joueurses_professionnelles, part_allouee_a_la_formation, nb_total_salarie, nb_de_personnel_admistrative, nb_de_staff_professionnels, nb_de_licencie, nb_de_jouers_professionnels, nb_de_jouers_en_centre_de_formation, nb_de_jeunes_jouers_u18, nb_des_dirigeants, nb_de_benevoles_volontaires, nb_de_supporteur_par_evenement_ou_match, nb_de_abonnes, contacts_des_referents, entretien, intendance, maintenance, restauration, evenement_hospiliters, nom_reference_audit, prenom_reference_audit, poste_reference_audit, mail_reference_audit, telepone_reference_audit,
      q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
      q11, q12, q13, q13_1, q13_2, q14, q15, q15_1, q15_2, q15_3, q16, q17, q18, q19, q20,
      q21, q22, q23, q24, q25, q26, q27, q28, q29, q30,
      q31, q32, q32_1, q32_2, q32_3, q32_4, q33, q34, q34_1, q34_2, q34_3, q34_4, q35, q36, q37, q38, q39, q40, q40_1, q40_2, q40_3, q40_4,
      q41, q42, q43, q44, q45, q46, q47, q48, q49, q50,
      q51, q52, q53, q54, q55, q56, q57, q58, q58_1, q58_2, q58_3, q59, q60, q60_2, q60_3,  q60_1, 
      q61, q61_1, q61_2, q61_3, q62, q62_1, q62_2, q62_3, q63, q63_1, q63_2, q63_3, q64, q64_1, q64_2, q64_3, q65, q65_1, q65_2, q65_3, q66, q67, q68, q69, q70,
      q71, q72, q73, q74, q75, q76, q77, q78, q79, q80,
      q81, q82, q83, q84, q85, q86, q87, q88, q89, q90,
      q91, q92, q93, q94, q95, q96, q97, q98, q99, q100,
      q101, q102, q103, q104, q105, q106, q107, q108, q109, q110,
      q111, q112, q113, q114, q115, q116, q117, q117_1, q117_2, q117_3, q117_4, q118, q119, q120,
      q121, q122, q123, q124, q125, q126, q127, q128, q129, q130,
      q131, q132, q133, q134, q135, q136, q137, q138, q139, q140,
      q141, q141_1, q141_2, q141_3, q142,  q142_1, q142_2, q142_3, q142_4, q142_5, q143, q144, q145, q146, q147, q148, q149, q150, q150_1, q150_2, q150_3, q150_4,
      q151, q151_1, q151_2, q151_3, q151_4, q152, q153, q154, q155, q155_1, q155_2, q155_3, q155_4, q156, q157, q158, q159, q160,
      q161, q162, q163, q164, q165, q166, q167, q167_1, q167_2, q167_3, q167_4, q168, q169, q170,
      q171, q172, q173, q174, q175, q176, q177, q178, q179, q180,
      q181, q182, q183, q184, q185, q186, q187, q187_1, q187_2, q187_3, q187_4, q187_5, q188, q189, q190,
      q191, q192, q193, q194, q195, q196, q197, q198, q199, q200,
      q201, q202, q203, q204, q205, q206, q207, q208, q209, q210,
      q211, q212, q213, q214, q215, q216, q217, q218, q219, q220,
      q221, q222, q223, q224, q225, q226, q227, q228, q229, q230,
      q231, q232, q233, q234, q235, q236, q237, q238, q239, q240,
      q241, q242, q243, q244, q245, q246, q247, q248, q249, q250,
      q251, q251_1, q251_2, q251_3, q252, q252_1, q252_2, q252_3, q253, q254, q255, q256, q257, q258, q259, q260,
      q261, q262, q263, q264, q265, q266, q267, q268, q269, q270,
      q271, q272, q273, q274, q275, q276, q277, q278, q279, q280,
      q281, q281_1, q281_2, q281_3, q281_4, q282, q283, q284, q285, q286, q287, q288, q289, q290,
      q291, q292, q293, q294, q295, q296, q297, q298, q299, q300,
      q301, q302, q303, q304, q305, q306, q307, q308, q309, q310,
      q311, q312, q313, q314, q315, q316, q317, q318, q319, q320,
      q321, q322, q323, q324, q325, q326, q327, q328, q329, q330,
      q331, q332, q332_1, q332_2, q332_3, q332_4, q332_5, q332_6, q332_7, q332_8, q332_9, q333,

    } = this.state;
    const values = {
      nom, discipline, date_de_creation, Statut_juridique_du_club, nd_de_dirigeants, nb_de_joueurses_professionnelles, budget, nb_de_licencie, part_allouee_a_la_formation, nb_total_salarie, nb_de_personnel_admistrative, nb_de_staff_professionnels, nb_de_jouers_professionnels,  nb_de_jouers_en_centre_de_formation, nb_de_jeunes_jouers_u18, nb_des_dirigeants, nb_de_benevoles_volontaires, nb_de_supporteur_par_evenement_ou_match, nb_de_abonnes, contacts_des_referents, entretien, intendance, maintenance, restauration, evenement_hospiliters, nom_reference_audit, prenom_reference_audit, poste_reference_audit, mail_reference_audit, telepone_reference_audit,
      q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
      q11, q12, q13, q13_1, q13_2, q14, q15, q15_1, q15_2, q15_3, q16, q17, q18, q19, q20,
      q21, q22, q23, q24, q25, q26, q27, q28, q29, q30,
      q31, q32, q32_1, q32_2, q32_3, q32_4, q33, q34, q34_1, q34_2, q34_3, q34_4, q35, q36, q37, q38, q39, q40, q40_1, q40_2, q40_3, q40_4,
      q41, q42, q43, q44, q45, q46, q47, q48, q49, q50,
      q51, q52, q53, q54, q55, q56, q57, q58, q58_1, q58_2, q58_3, q59, q60, q60_2, q60_3,  q60_1, 
      q61, q61_1, q61_2, q61_3, q62, q62_1, q62_2, q62_3, q63, q63_1, q63_2, q63_3, q64, q64_1, q64_2, q64_3, q65, q65_1, q65_2, q65_3, q66, q67, q68, q69, q70,
      q71, q72, q73, q74, q75, q76, q77, q78, q79, q80,
      q81, q82, q83, q84, q85, q86, q87, q88, q89, q90,
      q91, q92, q93, q94, q95, q96, q97, q98, q99, q100,
      q101, q102, q103, q104, q105, q106, q107, q108, q109, q110,
      q111, q112, q113, q114, q115, q116, q117, q117_1, q117_2, q117_3, q117_4, q118, q119, q120,
      q121, q122, q123, q124, q125, q126, q127, q128, q129, q130,
      q131, q132, q133, q134, q135, q136, q137, q138, q139, q140,
      q141, q141_1, q141_2, q141_3, q142,  q142_1, q142_2, q142_3, q142_4, q142_5, q143, q144, q145, q146, q147, q148, q149, q150, q150_1, q150_2, q150_3, q150_4,
      q151, q151_1, q151_2, q151_3, q151_4, q152, q153, q154, q155, q155_1, q155_2, q155_3, q155_4, q156, q157, q158, q159, q160,
      q161, q162, q163, q164, q165, q166, q167, q167_1, q167_2, q167_3, q167_4, q168, q169, q170,
      q171, q172, q173, q174, q175, q176, q177, q178, q179, q180,
      q181, q182, q183, q184, q185, q186, q187, q187_1, q187_2, q187_3, q187_4, q187_5, q188, q189, q190,
      q191, q192, q193, q194, q195, q196, q197, q198, q199, q200,
      q201, q202, q203, q204, q205, q206, q207, q208, q209, q210,
      q211, q212, q213, q214, q215, q216, q217, q218, q219, q220,
      q221, q222, q223, q224, q225, q226, q227, q228, q229, q230,
      q231, q232, q233, q234, q235, q236, q237, q238, q239, q240,
      q241, q242, q243, q244, q245, q246, q247, q248, q249, q250,
      q251, q251_1, q251_2, q251_3, q252, q252_1, q252_2, q252_3, q253, q254, q255, q256, q257, q258, q259, q260,
      q261, q262, q263, q264, q265, q266, q267, q268, q269, q270,
      q271, q272, q273, q274, q275, q276, q277, q278, q279, q280,
      q281, q281_1, q281_2, q281_3, q281_4, q282, q283, q284, q285, q286, q287, q288, q289, q290,
      q291, q292, q293, q294, q295, q296, q297, q298, q299, q300,
      q301, q302, q303, q304, q305, q306, q307, q308, q309, q310,
      q311, q312, q313, q314, q315, q316, q317, q318, q319, q320,
      q321, q322, q323, q324, q325, q326, q327, q328, q329, q330,
      q331, q332, q332_1, q332_2, q332_3, q332_4, q332_5, q332_6, q332_7, q332_8, q332_9, q333,

    };

    console.log(values)

    function getSteps() {
      return ['Intro', 'Sommaire', 'Informations Générales', 'Environnement preserver', 'Ecoperformer', 'Consommer',];
    }
    function getStepContent(stepIndex) {

      switch (stepIndex) {
        case 0:
          return <Intro
            handleChange={handleChange}
            values={values}
          />;
        case 1:
          return <Sommaire />;
        case 2:
          return <GeneralInformation
            handleChange={handleChange}
            values={values}
          />;
        case 3:
          return <EnvironnementPreserver
            handleChange={handleChange}
            values={values}
          />;
        case 4:
          return <Ecoperformer
            handleChange={handleChange}
            values={values}
          />;
        case 5:
          return <Consommer
            handleChange={handleChange}
            values={values}
          />;
        // case 6:
        //   return <Confirm
        //     handleChange={handleChange}
        //     values={values}
        //   />;
        default:
          return 'Wrong page';
      }
    }
    const steps = getSteps();

    const handleNext = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep + 1
      });
    };

    const handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep - 1
      });
    };

    return (
      <ThemeProvider theme={theme}>
      <div style={{ justifyContent: "center", alignItems: "center", margin:"0" }}>
          <div>
          <Stepper color="primary" 	activeStep={activeStep} className='stepper'>
            {steps.map((label) => (
              <Step key={label} color="primary">
                <StepLabel color="primary">{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </div>
          <Container >
            {activeStep === steps.length ? (
              <Container className="spinner-container" >
                <Spinner click={handleSubmit}/>
                <Button  onClick={handleBack} className="back-next-btn" variant="contained">
                      Retour
                </Button>
              </Container>
            ) : (
                <div className="questions-div">
                  <Container className="questions-container">
                    {getStepContent(activeStep)}
                  </Container>
                  <Container className="back-next-container">
                    <Button disabled={activeStep === 0} onClick={handleBack} className="back-next-btn" variant="contained">
                       Retour
                    </Button>
                    <Button color="primary" onClick={handleNext} className="back-next-btn" variant="contained">
                      {this.activeStep === steps.length - 1 ? 'Finis' : 'Suivant'}
                    </Button>
                  </Container>
                </div>

              )}
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default Form;



