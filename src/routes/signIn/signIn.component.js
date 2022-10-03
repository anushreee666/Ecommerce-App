import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
	const OnClickWithGoogle = async () => {
		const output = await signInWithGooglePopup();
		const document = createUserDocumentFromAuth(output.user);
	};
	return (
		<div>
			<div>Sign in component</div>
			<button onClick={OnClickWithGoogle}>Sign in with google</button>
		</div>
	);
};
export default SignIn;
