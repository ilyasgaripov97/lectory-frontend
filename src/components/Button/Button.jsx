import './Button.css'


const Button = ({text, handleClick, isPrimary, isAccent, isUpper, weight, height, hasMargin}) => {
  let className = "btn";

  className += isPrimary ? " btn-primary" : "";
  className += isAccent ? " btn-accent" : "";
  className += isUpper ? ' btn-upper' : "";
  className += hasMargin ? ' m-default' : "";

  return (
    <>
      <button onClick={handleClick}
        className={className} 
        style={{ weight, height, }}
      >
        {text}
      </button>
    </>
  )
}

Button.defaultProps = {
  height: "64px"
}

export default Button
