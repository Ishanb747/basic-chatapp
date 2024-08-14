import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth'


const signinWithGoogle = async () => {
    await signInWithPopup(auth, provider);

}
  

const SignIn = () => {
  return (
    <div className='flex justify-center'>
        <GoogleButton onClick={signinWithGoogle}/>
      
    </div>
  )
}

export default SignIn
