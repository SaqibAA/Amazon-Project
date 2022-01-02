import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //it Successfull Login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                    //it Successfull Create A new User
                    // console.log(auth);
                    if(auth){
                        history.push("/")
                    }
                })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""/>
            </Link>

            <div className='login_container'>
                <h3>Sign In</h3>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <br/>

                    <button type='submit' onClick={signIn} className='sign_button'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <p className='new_user'>New to Amazon?</p>
                <button type='submit' onClick={register} className='register_button'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login


