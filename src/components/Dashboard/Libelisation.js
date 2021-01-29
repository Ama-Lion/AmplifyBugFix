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
import { RespectDesMlieux } from '../../models'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default class Libelisation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RespectDesMlieux: [],
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];

        const RespectDesMlieux = await DataStore.query(RespectDesMlieux, c => c.userID("eq", `${id}`));
        this.setState({ RespectDesMlieux: RespectDesMlieux });

    }
    render() {

        const { RespectDesMlieux } = this.state;
        return (

            <Container style={{ backgroundColor: "#ffff", width: '100%', borderRadius: "15px", }}>
                <h1 style={{ textAlign: "center", margin: "10px" }}>Sommaire du référentiel Fair Play For Planet</h1>
                <TableContainer style={{ overflowY: "scroll", backgroundColor: "#ffff", borderRadius: "15px", height: "80vh", width: '100%' }}>
                    <Table stickyHeader >
                        <TableHead>
                            <TableRow >
                                <h2 style={{ textAlign: "center", margin: "10px" }}>A. Environnement - Préserver</h2>
                                <TableCell align="center">COEFF</TableCell>
                                <TableCell align="center">PTS</TableCell>
                                <TableCell align="center">RESULTAT</TableCell>
                                <TableCell align="center">NBRE QUE</TableCell>
                                <TableCell align="center">QUE COEFFS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <p style={{ textAlign: "left", }}>| . Respect des milieux</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">12</TableCell>
                                <TableCell component="th" align="center">12</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", }}>| | . Gestion des sols</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">24</TableCell>
                                <TableCell component="th" align="center">24</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", }}>| | | . Produits d’entretien</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">21</TableCell>
                                <TableCell component="th" align="center">21</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", }}>| V . Vie au stade</p>
                                <TableCell component="th" align="center">2</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">47</TableCell>
                                <TableCell component="th" align="center">94</TableCell>
                            </TableRow>
                            <TableRow>
                                <h2 style={{ textAlign: "center", margin: "10px" }}>B. Écoperformer</h2>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| . Piloter</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| | . Transports</p>
                                <TableCell component="th" align="center">5</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">40</TableCell>
                                <TableCell component="th" align="center">200</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| | | . Gestion énergétique</p>
                                <TableCell component="th" align="center">3</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">15</TableCell>
                                <TableCell component="th" align="center">45</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| V . Gestion des déchets</p>
                                <TableCell component="th" align="center">3</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">45</TableCell>
                                <TableCell component="th" align="center">135</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V . Gestion de l’eau</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">17</TableCell>
                                <TableCell component="th" align="center">51</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V | . Gestion architecturale et des bâtiments</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V | | . Gestion numérique</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                                <TableCell component="th" align="center">19</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V | | | . Bilan carbone</p>
                                <TableCell component="th" align="center">3</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">9</TableCell>
                                <TableCell component="th" align="center">27</TableCell>
                            </TableRow>
                            <TableRow>
                                <h2 style={{ textAlign: "center", margin: "10px" }}>C. Consommer</h2>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| . Alimentation</p>
                                <TableCell component="th" align="center">3</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">40</TableCell>
                                <TableCell component="th" align="center">120</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| | . Gestion des achats</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">7</TableCell>
                                <TableCell component="th" align="center">7</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| | |. Communication responsable</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">21</TableCell>
                                <TableCell component="th" align="center">21</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>| V . Accessibilité</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">13</TableCell>
                                <TableCell component="th" align="center">13</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V . Exemplarité</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">224</TableCell>
                                <TableCell component="th" align="center">224</TableCell>
                            </TableRow>
                            <TableRow>
                                <p style={{ textAlign: "left", margin: "10px" }}>V | .Impact territorial</p>
                                <TableCell component="th" align="center">1</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">24</TableCell>
                                <TableCell component="th" align="center">24</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">0</TableCell>
                                <TableCell component="th" align="center">421</TableCell>
                                <TableCell component="th" align="center">880</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center"></TableCell>
                                <TableCell component="th" align="center" style={{ backgroundColor: "#e44b3d", }}>0.00%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        )
    }
}
