import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// import Amplify from "@aws-amplify/core";
// import config from './aws-exports';
// import { Logger } from 'aws-amplify';

import { Form } from './Pages/Form';

import { BrowserRouter as Router, Route } from "react-router-dom";
import GeneralInformations from './components/Dashboard/GeneralInformations';
import AnswerComponenet from './components/Dashboard/Answers';
import Users from './components/Dashboard/users';

import { Container } from '@material-ui/core'
import Libelisation from './components/Dashboard/Libelisation';

// Amplify.configure(config)


// Logger.LOG_LEVEL = 'DEBUG'

const App = function () {


  return (
    <div>

      <Router>
        <Route path="/" exact>
          <Container>
            <Form />
          </Container>
        </Route>

        <Route path="/users/" exact>
          <Users />
        </Route>
        <Route path="/general-information/:id" exact>
          <GeneralInformations />
        </Route>
        <Route path="/answers/:id" exact>
          <AnswerComponenet />
        </Route>
        <Route path="/libelisation/:id" exact>
          <Libelisation />
        </Route>
      </Router>
      <AmplifySignOut />
    </div>
  )
}



export default withAuthenticator(App);
