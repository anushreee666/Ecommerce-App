import { useState } from "react";
import InputField from "../inputField/inputField.component";
import Button from "../button/button.component";
import {
	signInWithGooglePopup,
	signInWithEmailPass,
} from "../../utils/firebase/firebase.utils";
import "./signInForm.styles.scss";
const defaultFormField = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);

	const { email, password } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormField);
	};

	const OnClickWithGoogle = async () => {
		const output = await signInWithGooglePopup();
		console.log("output", output);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	const handelFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const { user } = await signInWithEmailPass(email, password);
			console.log("Sign In user", user);

			resetForm();
		} catch (e) {
			alert(e.code);
			console.log(e);
		}
	};
	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<h5>Sign In with your Email and Password</h5>
			<form
				onSubmit={handelFormSubmit}
				className='sign-up-form'>
				<InputField
					label='Email'
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					required></InputField>

				<InputField
					label='Password'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					required></InputField>

				<div className='button-container'>
					<Button
						name='Sign In'
						type='submit'
					/>
					<Button
						name='Google Sign In'
						onClick={OnClickWithGoogle}
						buttontype='google'
						type='button'
					/>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
