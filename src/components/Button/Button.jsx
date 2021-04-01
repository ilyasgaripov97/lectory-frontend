import './Button.css'


const Button = ({text, handleClick, type, isPrimary, isAccent, isUpper, weight, height, hasMargin}) => {
  let className = "btn";

  className += isPrimary ? " btn-primary" : "";
  className += isAccent ? " btn-accent" : "";
  className += isUpper ? ' btn-upper' : "";
  className += hasMargin ? ' m-default' : "";

  return (
    <>
      <button onClick={handleClick}
        className={className}
        type={type}
        style={{ weight, height, }}
      >
        {text}
      </button>
    </>
  )
}

Button.defaultProps = {
  height: "64px",
  type: "submit"
}

export default Button
