import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect
} from "../../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <>
      <h1>Sigin in Comp</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={logGoogleRedirectUser}>Sign in with google Redirect</button>
    </>
  );
};

export default SignIn;
