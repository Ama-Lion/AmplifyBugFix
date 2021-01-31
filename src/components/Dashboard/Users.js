import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";


import React, { Component } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { User, RespectDesMlieux } from '../../models'


export default class GeneralInformations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {

        const users = await DataStore.query(User);
        this.setState({ users: users });


    }
    render() {
        const { users } = this.state;

        return (
            <Container style={{ display: "flex", flexWrap: "wrap", }}>
                {users.map((user) => (
                    <Card style={{ borderRadius: "15px", margin: "10px", width: "30%" }} variant="outlined">
                        <CardActionArea >
                            <CardContent>
                                <Typography component="h5" >Nom de la structure : {user.nom}</Typography>
                                <Typography component="h5">Discipline : {user.discipline}</Typography>
                                <Typography component="h5">Date de création : {user.date_de_creation}</Typography> 
                            </CardContent>
                        </CardActionArea >
                        <CardActions>
                            <Link to={`/general-information/${user.id}`}  style={{ textDecoration: 'none' }}>
                                <Button size="small" style={{ backgroundColor: "#39523D", color: "white" }}>Informations</Button>
                            </Link>
                            <Link to={`/answers/${user.id}`} style={{ textDecoration: 'none' }}>

                                <Button size="small" style={{ backgroundColor: "#61a86f", color: "white" }}>Réponses</Button>
                            </Link>
                        </CardActions>

                    </Card>
                ))}
            </Container>
        )
    }
}
