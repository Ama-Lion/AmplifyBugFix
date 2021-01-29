import { Container } from '@material-ui/core'
import ListSubheader from '@material-ui/core/ListSubheader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { User } from '../../models'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default class GeneralInformations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];

        const users = await DataStore.query(User, c => c.id("eq", `${id}`));
        this.setState({ users: users });

    }
    render() {

        const { users } = this.state;
        console.log(users)
        return (
  
                <Container style={{ backgroundColor: "#ffff", width: '70%', borderRadius: "15px", }}>
                    <h1 style={{ textAlign: "center", margin: "10px"}}>Informations générales</h1>
                        {users.map((user) => (
                            <ListSubheader style={{ top: "0px", zIndex: "2", color: "white", margin: 'auto', backgroundColor: "#ffff" }}>
                                <Link to={"/users"} style={{ textDecoration: 'none' }}>
                                    <Button size="small" style={{ backgroundColor: "#e0be40", color: "white", margin: "10px" }}>Tous les clubs</Button>
                                </Link>
                                <Link to={`/answers/${user.id}`} style={{ textDecoration: 'none' }}>
                                    <Button size="small" style={{ backgroundColor: "#61a86f", color: "white", margin: "10px" }}>Réponse de ce club</Button>
                                </Link>
                                <Link to={`/libelisation/${user.id}`} style={{ textDecoration: 'none' }}>
                                    <Button size="small" style={{ backgroundColor: "#908e07", color: "white", margin: "10px" }}>Labelisation</Button>
                                </Link>
                            </ListSubheader>))}
                      <TableContainer style={{ overflowY: "scroll", backgroundColor: "#ffff", borderRadius: "15px", height: "80vh", width: '100%' }}>    
                        <Table >
                            {users.map((user) => (
                                <TableBody>
                                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                                        <h3>Club ou Évènement :</h3>
                                    </ListSubheader>
                                    <TableRow>
                                        <TableCell component="th">Nom</TableCell>
                                        <TableCell component="th">{user.nom}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">Discipline :</TableCell>
                                        <TableCell component="th" scope="row">{user.discipline}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Date de création :</TableCell>
                                        <TableCell >{user.date_de_creation}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Statut juridique du club :</TableCell>
                                        <TableCell >{user.Statut_juridique_du_club}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Budget :</TableCell>
                                        <TableCell >{user.budget}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Part allouée à la formation :</TableCell>
                                        <TableCell >{user.part_allouee_a_la_formation}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Nombre total de salariés :</TableCell>
                                        <TableCell >{user.nb_total_salaries}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Nombre de personnel administratif :</TableCell>
                                        <TableCell >{user.nb_de_personnel_admistrative}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Nombre de staff professionnel :</TableCell>
                                        <TableCell >{user.nb_de_staff_professionnels}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Nombre de joueurs professionnels :</TableCell>
                                        <TableCell >{user.nb_de_jouers_professionnels}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Nombre de joueurs en centre de formation :</TableCell>
                                        <TableCell >{user.nb_de_jouers_en_centre_de_formation}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Nombre de jeunes joueurs (U18) :</TableCell>
                                        <TableCell >{user.nb_de_jeunes_jouers_u18}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Nombre de bénévoles/volontaires :</TableCell>
                                        <TableCell >{user.nb_de_benevoles_volontaires}</TableCell>
                                    </TableRow>

                                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                                        <h3>Club amateur :</h3>
                                    </ListSubheader>
                                    <TableRow>
                                        <TableCell >Nombre de licenciés :</TableCell>
                                        <TableCell >{user.nb_de_licencies}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Part des dirigeants :</TableCell>
                                        <TableCell >{user.part_des_dirigeants}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Nombre de bénévoles/volontaires :</TableCell>
                                        <TableCell >{user.nb_de_benevoles_volontaires_club_amateur}</TableCell>
                                    </TableRow>

                                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                                        <h3>Supporters :</h3>
                                    </ListSubheader>
                                    <TableRow>
                                        <TableCell >Nombre de supporters par évènement/match par match :</TableCell>
                                        <TableCell >{user.nb_de_supporteur_par_evenement_ou_match}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Nombres d’abonnés :</TableCell>
                                        <TableCell >{user.nb_de_abonnes}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell >Contacts des référents : (Nom - Prénom)</TableCell>
                                        <TableCell >{user.contacts_des_referents}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Entretien (intérieur & espaces externes) :</TableCell>
                                        <TableCell >{user.entretien}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Intendance (administration, consommables bureautique) :</TableCell>
                                        <TableCell >{user.intendance}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Mobilité – transport :</TableCell>
                                        <TableCell >{user.mobilitier}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Maintenance (eau, énergie, matériaux) :</TableCell>
                                        <TableCell >{user.maintenance}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >- Restauration :</TableCell>
                                        <TableCell >{user.restauration}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Évènements – Hospitalités :</TableCell>
                                        <TableCell >{user.evenement_hospiliters}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Responsable RSE et DD :</TableCell>
                                        <TableCell >{user.responsabel_rse_et_dd}</TableCell>
                                    </TableRow>

                                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                                        <h3>Référent audit :</h3>
                                    </ListSubheader>
                                    <TableRow>
                                        <TableCell >Nom :</TableCell>
                                        <TableCell >{user.nom_reference_audit}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Prénom : </TableCell>
                                        <TableCell >{user.prenom_reference_audit}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Poste :</TableCell>
                                        <TableCell >{user.poste_reference_audit}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Mail :</TableCell>
                                        <TableCell >{user.mail_reference_audit}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Téléphone :</TableCell>
                                        <TableCell >{user.telepone_reference_audit}</TableCell>
                                    </TableRow>
                                </TableBody>

                            ))}
                        </Table>
                    </TableContainer>
                </Container>
           
        )
    }
}
