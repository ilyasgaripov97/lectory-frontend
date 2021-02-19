import './Card.css'

import Header from './Header'
import InputField from './InputField';
import Logo from './Logo';
import Button from './Button';


const Card = ({titleText, withLogo}) => {
  return (
    <div className="card">
      <div className="card__content">
        {withLogo && <Logo/>}
        <Header titleText={titleText}/>
        <InputField label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
        <InputField label={"Пароль"} type={"password"} />
        <Button text={"Войти"} isUpper={true} isPrimary={true} hasMargin={true}/>
        <Button text={"Создать аккаунт"} isUpper={true} isAccent={true} hasMargin={true}/>
      </div>

    </div>
  )
}

Card.defaultProps = {
  withLogo: false,
}

export default Card
