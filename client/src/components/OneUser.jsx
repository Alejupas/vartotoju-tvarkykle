import React, { Component } from 'react';
import {editUser} from '../service/frontEndFetch'
import { validate } from '../service/validation';

class OneUser extends Component {

    constructor(props){
        super(props);
        this.state = { 
            editStatus: false,
            editedUser: {
                _id: this.props.oneUser._id,
                userName: this.props.oneUser.userName,
                age: this.props.oneUser.age,
                email: this.props.oneUser.email,
                upadtedAt: this.props.oneUser.updatedAt,
            },
        };
    }

    handleEdit = async(id, newBody) => {
        if (this.state.validateError !== '') return;
    await editUser(id, newBody);
    this.setState({ editStatus: false, errorMsg: '' });
        console.log('user has been edited')
    }

    handleChange = ({element}) => {
        const validateError = validate(element.name, element.value);
        const copyOfEditedUser = {...this.state.editedUser}
        copyOfEditedUser[element.name] = element.value;
        this.setState({editedUser: copyOfEditedUser, validateError})
    }

    toggleEdit = () => {
        this.setState({editStatus: !this.state.editStatus})
    }

    render() { 
        const {onDelete} = this.props;
        const {userName, age, email, _id, updatedAt} = this.state.editedUser;
        return ( 
            <div className="one-user-div">
                {!this.setState.editStatus ? (
                    <div className="one-user-card">
                        <div className="card-title">{userName}</div>
                        <div className="card-body">{age}</div>
                        <div className="card-text">{email}</div>
                        <div className="card-text">{updatedAt}</div>
                        <div className="buttons-div">
                            <button className="btn btn-secondary ml-2 mr-2 mt-2" onClick={()=>this.toggleEdit(_id)}>Redaguoti</button>
                            <button className="btn btn-danger ml-2 mr-2 mt-2" onClick={()=>this.props.onDelete(_id)}>Trinti</button>
                        </div>
                    </div>
                ) : (
                    <div className="one-user-card">
                        <div>
                            <input type="text" className="edit-input" value={userName} name="userName" />
                        </div>
                        <div>
                            <input type="number" className="edit-input" value={age} onChange={this.handleChange} name="age"  />
                        </div>
                        <div>
                            <input type="text" className="edit-input" value={email} onChange={this.handleChange} name="email" />
                        </div>
                        <div className="buttons-div">
                            <button className="btn btn-success ml-2 mr-2 mt-2" onClick={()=>this.handleEdit(_id, {userName, age, email})}>Saugoti</button>
                            <button className="btn btn-danger ml-2 mr-2 mt-2" onClick={()=> onDelete(_id)}>Trinti</button>
                        </div>
                    </div>
                )
            }
            </div>
         );
    }
}
 
export default OneUser;