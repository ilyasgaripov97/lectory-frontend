import './Button.css'


const Button = ({text, handleClick, isPrimary, isAccent, isUpper, height, hasMargin}) => {
  let className = "btn";

  className += isPrimary ? " btn-primary" : "";
  className += isAccent ? " btn-accent" : "";
  className += isUpper ? ' btn-upper' : "";
  className += hasMargin ? ' m-default' : "";

  return (
    <>
      <button onClick={handleClick}
        className={className} 
        style={{ height, }}
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