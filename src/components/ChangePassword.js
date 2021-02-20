import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import InputField from './InputField';
import Button from './Button';


const ChangePassword = () => {
  return (
    <div>
      <Card>
        <Logo/>
        <Header titleText={"Новый пароль"}/>
        <InputField label={"Пароль"} type={"password"} placeholder="password" />
        <InputField label={"Пароль ещё раз"} type={"password"} placeholder="repeat password" />
        <Button text={"Изменить"} isUpper={true} isPrimary={true} hasMargin={true}/>
      </Card>

    </div>
  )
}

export default ChangePassword
