import React, { Component } from 'react';
import {createUser} from '../service/frontEndFetch'
import { validate } from '../service/validation';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputFields: ['userName', 'age', 'email', 'password'],
          formData: {
            userName: '',
            age: '',
            email: '',
            password: '',
          },
        };
      }

      handleChange = ({ obj }) => {
        const validationError = validate(obj.name, obj.value)
        const dataCopy = { ...this.state.formData };
        dataCopy[obj.name] = obj.value;
        this.setState({ formData: dataCopy });
      };
    
      addNewUser = (p) => {
        p.preventDefault();
        createUser(this.state.formData);
        this.props.history.push('/');
      };
    

    render() { 
        return ( 
            <div className="add-new-user">
                <h2>Pridėkite naują vartotoją</h2>
                <form onSubmit={this.addNewUser} onChange={this.handleChange} className='create-form' >
                    {this.state.inputFields.map((inputField) => {
                        <div className="input" key={inputField}>
                           <div className="input-container">
                               <input type="form-input" type={
                                   inputField === 'age' ? 'number' : inputField === 'password' ? 'password' : 'text'
                                   } />
                           </div>
                        </div>
                    })}
                    <button className='btn success-btn' type="submit">
                        Pridėti vartotoją
                    </button>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;