import "./button.styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: "default" | "inverted" | "google";
  type: "button" | "submit" | "reset";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = "default",
  type,
  onClick, // Add this line to destructure the onClick prop
}) => {
  const buttonClass = `button-container ${buttonType}`;
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick} // Add this line to pass the onClick prop to the button element
    >
      {children}
    </button>
  );
};

export default Button;
