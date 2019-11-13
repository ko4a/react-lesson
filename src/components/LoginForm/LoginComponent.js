import React from 'react'
import {Button} from "../common/Button";
import PropTypes from 'prop-types'
import styles from './LoginComponent.module.css'

export class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleFieldChange = ({target:{name,value}}) => {
        this.setState({[name]: value})
    };

    handleLogin = (event) => {
        event.preventDefault();
        const {password, name} = this.state;
        this.props.login(password, name);
    };

    render() {
        const {password,name } = this.state;
        return (
            <div className={styles.wrapper}>
                <form>
                    <label> Login</label>
                    <div>
                        <input id='name' value={name} type='text' name='name' onChange={this.handleFieldChange}/>
                    </div>
                    <div>
                        <label> Password </label>
                    </div>
                    <input value={password} type='password' name='password' onChange={this.handleFieldChange}/>
                    <div>
                        <Button styleName={styles.submitWrapper} name='submit' onClick={this.handleLogin}/>
                    </div>
                </form>
            </div>
        )
    }
}

LoginComponent.propTypes ={
  login: PropTypes.func
};
