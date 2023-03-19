import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log({ user });
    createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-in-container">
      <h1>This is the Sign In page!</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup!</button>
    </div>
  );
};

export default SignIn;
