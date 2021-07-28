import React, { Component } from 'react';
import { getAllUsers, deleteUser} from '../service/frontEndFetch'
import OneUser from './OneUser'

class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            allUsersData: []
        }
    }

    componentDidMount = async() => {
        await this.getUsers()
    }

    getUsers = async() => {
        const userData = await getAllUsers();
        this.setState({allUsersData: userData})
    }

    handleDelete = async(id)=> {
        await deleteUser(id);
        this.getUsers();
    }

    render() { 
        return ( 
            <div className="all-users">
                <h2>Visi vartotojai</h2>
               <div className="card-body"> 
                    <div className="card_text">Vardas:</div>
                    <div className="card_text">Amžius:</div>
                    <div className="card_text">El. paštas:</div>
                    <div className="card_text">Slaptažodis:</div>

                    {this.state.allUsersData.map((oneUser) =>
                    <OneUser key={oneUser._id} oneUser={oneUser} onDelete={this.handleDelete}  />)}
               </div>
            </div>
         );
    }
}
 
export default UsersList;