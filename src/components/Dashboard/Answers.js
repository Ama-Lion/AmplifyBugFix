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
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {   
    ImpactTerritorial,
    Exemplarite,
    Accessibilite,
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
    RespectDesMlieux } from '../../models'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#39523D",
      },
    },
    border: 40
  });
export default class AnswerComponenet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            respectDesMlieux: [],
            activeStep: 0,
        }
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[2];
        //  console.log(pathArray)
        const respectDesMlieux = await DataStore.query(RespectDesMlieux, c => c.userID("eq", `${id}`));
        //  console.log(respectDesMlieux)
        this.setState({ respectDesMlieux: respectDesMlieux });
    }
    render() {
        const { respectDesMlieux } = this.state;
      
        function getSteps() {
            return ['Environnement preserver', 'Ecoperformer', 'Consommer', ];
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

        const handleReset = () => {
            this.setState({
                activeStep: 0
            });
        };
        const envirmoenPreserver = () => {
            // console.log(respectDesMlieux)

            return <Table > {respectDesMlieux.map((answer) => (
                <TableBody>
                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                        <Link to={"/users"} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#e0be40", color: "white", margin: "10px" }}>Tous les clubs</Button>
                        </Link>
                        <Link to={`/general-information/${answer.userID}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#61a868", color: "white", margin: "10px" }}>Informations générales de ce club</Button>
                        </Link>
                        <Link to={`/libelisation/${answer.userID}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#908e07", color: "white", margin: "10px" }}>Labelisation</Button>
                        </Link>
                    </ListSubheader>

                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                        <h3>Club ou Évènement :</h3>
                    </ListSubheader>
                    <TableRow>
                        <TableCell component="th">Q 1</TableCell>
                        <TableCell component="th">{answer.q1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 2</TableCell>
                        <TableCell component="th" scope="row">{answer.q2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 3</TableCell>
                        <TableCell component="th" scope="row">{answer.q3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 4</TableCell>
                        <TableCell component="th" scope="row">{answer.q4}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 5</TableCell>
                        <TableCell component="th" scope="row">{answer.q5}</TableCell>
                    </TableRow>
                </TableBody>
            ))}
            </Table>
        };
        const ecoperformer = () => {

            return <Table > {respectDesMlieux.map((answer) => (
                <TableBody>
                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                        <Link to={"/users"} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#e04e40", color: "white", margin: "10px" }}>Tous les clubs</Button>
                        </Link>
                        <Link to={`/general-information/${answer.userID}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#61a868", color: "white", margin: "10px" }}>Informations générales de ce club</Button>
                        </Link>
                        <Link to={`/libelisation/${answer.userID}`} style={{ textDecoration: 'none' }}>
                            <Button size="small" style={{ backgroundColor: "#908e07", color: "white", margin: "10px" }}>Labelisation</Button>
                        </Link>
                    </ListSubheader>

                    <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                        <h3>Club ou Évènement :</h3>
                    </ListSubheader>
                    <TableRow>
                        <TableCell component="th">Q 1</TableCell>
                        <TableCell component="th">{answer.q1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 2</TableCell>
                        <TableCell component="th" scope="row">{answer.q2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 3</TableCell>
                        <TableCell component="th" scope="row">{answer.q3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 4</TableCell>
                        <TableCell component="th" scope="row">{answer.q4}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th">Q 5</TableCell>
                        <TableCell component="th" scope="row">{answer.q5}</TableCell>
                    </TableRow>
                </TableBody>
            ))}
            </Table>
        };
         const consomer = () => {

             return <Table > {respectDesMlieux.map((answer) => (
                 <TableBody>
                     <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                         <Link to={"/users"} style={{ textDecoration: 'none' }}>
                             <Button size="small" style={{ backgroundColor: "#e04e40", color: "white", margin: "10px" }}>Tous les clubs</Button>
                         </Link>
                         <Link to={`/general-information/${answer.userID}`} style={{ textDecoration: 'none' }}>
                             <Button size="small" style={{ backgroundColor: "#61a868", color: "white", margin: "10px" }}>Informations générales de ce club</Button>
                         </Link>
                         <Link to={`/libelisation/${answer.userID}`} style={{ textDecoration: 'none' }}>
                             <Button size="small" style={{ backgroundColor: "#908e07", color: "white", margin: "10px" }}>Labelisation</Button>
                         </Link>
                     </ListSubheader>

                     <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
                         <h3>Club ou Évènement :</h3>
                     </ListSubheader>
                     <TableRow>
                         <TableCell component="th">Q 1</TableCell>
                         <TableCell component="th">{answer.q1}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell component="th">Q 2</TableCell>
                         <TableCell component="th" scope="row">{answer.q2}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell component="th">Q 3</TableCell>
                         <TableCell component="th" scope="row">{answer.q3}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell component="th">Q 4</TableCell>
                         <TableCell component="th" scope="row">{answer.q4}</TableCell>
                     </TableRow>
                     <TableRow>
                         <TableCell component="th">Q 5</TableCell>
                         <TableCell component="th" scope="row">{answer.q5}</TableCell>
                     </TableRow>
                 </TableBody>
             ))}
             </Table>
         };


        function getStepContent(stepIndex) {

            switch (stepIndex) {
                case 0:
                    return envirmoenPreserver();
                 case 1:
                     return ecoperformer();
                 case 2:
                     return consomer();
                default:
                    return 'Unknown stepIndex';
            }
        }

        const { RespectDesMlieux, activeStep } = this.state;
        //  console.log(RespectDesMlieux)
        return (
            <ThemeProvider theme={theme}>
            <Container style={{ overflowY: "scroll", backgroundColor: "#ffff", borderRadius: "15px", height: "95vh", width: '100%', marginTop: "20px" }}>
                <h1 style={{ textAlign: "center", }}>Réponses</h1>

                <Stepper color="primary" activeStep={activeStep} style={{ borderRadius: "15px", }}>
                    {steps.map((label) => (
                        <Step key={label} color="primary">
                            <StepLabel color="primary">{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activeStep === steps.length ? (
                    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
                        <Button onClick={handleReset}   color="primary" variant="contained">
                            Reset
                        </Button>
                    </Container>
                ) : (
                        <TableContainer >
                            {getStepContent(activeStep)}
                            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                <Button
                                    disabled={activeStep === 0}
                                    style={{ margin: "10px" }}
                                    variant="contained"
                                    onClick={handleBack}
                                >
                                    Back</Button>
                                <Button color="primary" onClick={handleNext} style={{ margin: "10px" }} variant="contained">
                                    {this.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Container>
                        </TableContainer>
                    )}

            </Container>
            </ThemeProvider>
        )
    }
}


//  <TableContainer style={{ overflowY: "scroll", backgroundColor: "#ffff", borderRadius: "15px", height: "85vh", width: '100%' }}> 
//  <Table >
//     {respectDesMlieux.map((answer) => (
//         <TableBody>

//             <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
//                 <Link to={"/users"} style={{ textDecoration: 'none' }}>
//                     <Button size="small" style={{ backgroundColor: "#e04e40", color: "white", margin: "10px" }}>Tous les clubs</Button>
//                 </Link>
//                 <Link to={`/general-information/${answer.userID}`} style={{ textDecoration: 'none' }}>
//                     <Button size="small" style={{ backgroundColor: "#61a868", color: "white", margin: "10px" }}>Informations générales de ce club</Button>
//                 </Link>
//                 <Link to={`/libelisation/${answer.userID}`} style={{ textDecoration: 'none' }}>
//                     <Button size="small" style={{ backgroundColor: "#908e07", color: "white", margin: "10px" }}>Labelisation</Button>
//                 </Link>
//             </ListSubheader>

//             <ListSubheader style={{ background: "#39523D", top: "0px", zIndex: "2", color: "white", margin: 'auto' }}>
//                 <h3>Club ou Évènement :</h3>
//             </ListSubheader>
//             <TableRow>
//                 <TableCell component="th">Q 1</TableCell>
//                 <TableCell component="th">{answer.q1}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell component="th">Q 2</TableCell>
//                 <TableCell component="th" scope="row">{answer.q2}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell component="th">Q 3</TableCell>
//                 <TableCell component="th" scope="row">{answer.q3}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell component="th">Q 4</TableCell>
//                 <TableCell component="th" scope="row">{answer.q4}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell component="th">Q 5</TableCell>
//                 <TableCell component="th" scope="row">{answer.q5}</TableCell>
//             </TableRow>
//         </TableBody>
//     ))}
// </Table> 
//  </TableContainer> 