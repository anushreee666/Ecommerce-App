import "./inputField.styles.scss";
const InputField = ({ label, ...otherProps }) => {
	return (
		<div className='group'>
			{label && <label className={` 'form-input-label' `}>{label}</label>}
			<input
				{...otherProps}
				className='form-input'></input>
		</div>
	);
};

export default InputField;
