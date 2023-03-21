import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <h1>This is the Sign In page!</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
