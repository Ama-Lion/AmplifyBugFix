import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        textAlign: 'center'
    },
}));


export default function Sommaire() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div>
            <div className="intro-title">
            <h1 style={{ textAlign: 'center' }}  >Sommaire du référentiel Fair Play For Planet</h1>
            <img src="img/logo-final-vert.png" alt="logo" height="20%" width="20%" />
            </div>
            <div className="sommaire-main-container" >
                <div className="sommaire-box">
                    <Typography variant="h6" className={classes.title}>
                        A. Environnement - Préserver
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary="|. Respect des milieux"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="||. Gestion des sols"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|||. Produits d’entretien"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|V. Vie au stade"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>

                        </List>
                    </div>
                </div>
                <div className="sommaire-box">
                    <Typography variant="h6" className={classes.title}>
                        B. Écoperformer
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary="|. Piloter"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="||. Transports"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|||. Gestion énergétique"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|V. Gestion des déchets"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V. Gestion de l’eau"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V|. Gestion architecturale et des bâtiments"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V||. Gestion numérique"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V|||. Bilan carbone"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>

                        </List>
                    </div>
                </div>
                <div className="sommaire-box">
                    <Typography variant="h6" className={classes.title}>
                    C. Consommer
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary="|. Alimentation"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="||. Gestion des achats"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|||. Communication responsable"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="|V. Accessibilité"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V. Exemplarité"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="V|. Impact territorial"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}
