import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor() {
        super();
        this.state = {users: []};
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`).then((response) => {
            this.setState({ users: response.data.data.users });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <br/>
                <h1>All Users</h1>
                <hr/><br/>
                <UsersList users={ this.state.users } />
              </div>
            </div>
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
