import SignInForm from "../../Components/SignInForm/signInForm.component";
import SignUpForm from "../../Components/signUpForm/signUpForm.component";
import "./authentication.styles.scss";

const Authentication = () => {
	return (
		<div className='auth-container'>
			<SignInForm></SignInForm>
			<SignUpForm></SignUpForm>
		</div>
	);
};
export default Authentication;
