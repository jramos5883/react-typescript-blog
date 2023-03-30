// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container container-fluid">
      <SignInForm />
      {/* <SignUpForm /> */}
    </div>
  );
};

export default Authentication;
