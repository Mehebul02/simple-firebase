import React, { useState } from 'react';
import app from '../../firebase_init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth,  signInWithPopup, signOut } from "firebase/auth";
const Login = () => {
    const [user,setUser] =useState('')
    const auth =getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user =result.user
            setUser(user)
            console.log(user)
        })
        .catch(error =>
            console.error(error))
   
    }
    const handleSingOut =()=>{
        signOut(auth)
        .then(result =>{
           console.log(result)
            setUser(null)
           
        })
        .catch(error => console.error(error))
    }
    const handleGithub =()=>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedUser =result.user
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error =>
            console.error(error))
    }
    return (
        <div>
         
           
              
               { user ?
                  <button onClick={handleSingOut} className='btn'>SingOut</button>:
              <div>
                 <button onClick={handleGoogleLogin} className='btn'>Google Login</button>
               <button onClick={handleGithub} className='btn'>GitHub</button>
              </div>
                  }
               {user &&
                <div>
                     <h1>user:{user.displayName}</h1>
           <img src={user.photoURL} alt="" />
                </div>
               }
           
       
          
        </div>
    );
};

export default Login;<button>Google Login</button>