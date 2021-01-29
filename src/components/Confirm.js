import React, { Component } from 'react';


// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemText } from '@material-ui/core/';
// import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';

export class Confirm extends Component {


  render() {
    const {
      values: { nom, q1, q2, q3, q4, q5 }
    } = this.props;
    return (
      <Container >
        {/* style={{ display: "flex", justifyContent: "center", alignItems: "center", }} */}
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            Informations Générales
          </AccordionSummary >
          <AccordionDetails style={{ overflowY: "scroll", height: "70vh", }}>
            <List>
            <ListSubheader style={{ background: "#39523D", top: "-8px", zIndex: "2", color: "white", margin: 'auto' }}>
              <h3>Club ou Évènement :</h3>
            </ListSubheader>
              <ListItem>
                <ListItemText primary="Nom" secondary={nom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>

              <ListItem>
                <ListItemText primary="nom" secondary={nom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>
              <ListItem>
                <ListItemText primary="nom" secondary={nom} />
              </ListItem>
              <ListSubheader style={{ background: "#39523D", top: "-8px", zIndex: "2", color: "white", margin: 'auto' }}>
              <h3>Club ou Évènement :</h3>
            </ListSubheader>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            Environnement preserver
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="Nom" secondary={nom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
            Ecoperformer
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="nom" secondary={nom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
            Consommer
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="nom" secondary={nom} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 1" secondary={q1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 2" secondary={q2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 3" secondary={q3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 4" secondary={q4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="question 5" secondary={q5} />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

      </Container>
    );
  }
}

export default Confirm;
