import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';


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
