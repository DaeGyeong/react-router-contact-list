import React from 'react';
import { Route, Link } from 'react-router-dom'


const App = () => (
    <div>
        <Header />
    </div>
)

const Header = () => (
    <header>
        <h1> My Contacts </h1>

        <nav>
            <ul>
                <li>
                    <Link to ='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/contacts'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/contacts" component={ Contacts } />
    </header>
)

const Welcome = () => (
    <h1> Welcome to the best contacts app! </h1>
)

const Contacts = ({ match }) => (
    <div>
        <ul>
            <li><Link to= "/contacts/admin ">admin</Link></li>
            <li><Link to= "/contacts/user ">user</Link></li>
            <li><Link to= "/contacts/geust ">guest</Link></li>
        </ul>

        <Route exact path={`${match.path}`} render={() => <h3>Please select a contact</h3>} />

        <Route path={`${match.path}/:contactName`} component={ Contact } />
    </div>
    
)

const Contact = ({ match }) => `Your friends name is ${match.params.contactName}`

export default App;
