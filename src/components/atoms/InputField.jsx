import { Field, useField } from 'formik';

const InputField = ({
	label = '',
	lebelStyle = '',
	as = '',
	type = '',
	name = '',
	placeholder = '',
	className = '',
	...props
}) => {
	
	const [field, meta, helpers] = useField({ name });

	return (
		<>
			<label className={`mb-2  ${lebelStyle}`} htmlFor={name}>
				{label}
				<Field
					as={as}
					type={type}
					className={`w-full outline-none inline  ${className}`}
					name={name}
					placeholder={placeholder}
					{...props}
				/>
			</label>

			{meta.touched && meta.error ? (
				<div className='pt-2 text-red-600'>{meta.error}</div>
			) : null}
		</>
	);
};

export default InputField;