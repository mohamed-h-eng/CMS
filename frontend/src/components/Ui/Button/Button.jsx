import { Link } from "react-router-dom";
import Style from "./Button.module.css";

const Button = ({
  children,
  to,
  href,
  type = "button",
  onClick,
  className = "",
  target,
}) => {
  const buttonClassName = `${Style.button} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClassName} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
