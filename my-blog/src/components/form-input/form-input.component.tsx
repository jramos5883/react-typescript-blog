import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }: any) => {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
