import { useState } from "react";
import InputField from "../inputField/inputField.component";
import Button from "../button/button.component";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./signUpForm.styles.scss";

const defaultFormField = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);

	const { name, email, password, confirmPassword } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormField);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};
	const handelFormSubmit = async (event) => {
		event.preventDefault();
		try {
			if (password === confirmPassword) {
				const user = await createAuthUserWithEmailAndPassword(email, password);

				console.log("response", user);
				if (user) {
					await createUserDocumentFromAuth(user.user, {
						displayName: name,
					});
					// console.log("user after creation", user);

					resetForm();
				}
			} else {
				alert("Password Mismatch");
				console.log("Password Mismatch");
			}
		} catch (e) {
			alert(e.code);
			console.log(e);
		}
	};
	return (
		<div className='sign-up-container'>
			<h2>Do not have an account?</h2>
			<h5>Sign Up with your Email and Password</h5>
			<form
				onSubmit={handelFormSubmit}
				className='sign-up-form'>
				<InputField
					label='Name'
					type='text'
					name='name'
					value={name}
					onChange={handleChange}
					required
				/>

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

				<InputField
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					required></InputField>

				<Button
					name='Sign Up'
					type='submit'
				/>
			</form>
		</div>
	);
};

export default SignUpForm;
