import Card from '../Card/Card';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';


const RestorePassword = () => {
  return (
    <div>
      <Card>
        <Logo />
        <Header titleText={"Восстрановить пароль"} />
        <InputField label={"Электронная почта"} type={"email"} placeholder="yammy@gmail.com" />
        <Button text={"Восстановить"} isUpper={true} isPrimary={true} hasMargin={true} />
      </Card>      
    </div>
  )
}

export default RestorePassword
