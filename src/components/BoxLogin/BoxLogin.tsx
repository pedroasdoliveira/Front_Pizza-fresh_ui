import * as Style from './BoxLogin-style'
import Logo from 'assets/logo_patterns/logo.png'
import ButtonLarge from 'components/ButtonLarge'

const BoxLogin = () => {
  return (
    <Style.BoxLogin>
        <Style.BoxLoginLogo>
            <Style.BoxLoginLogoText>
                <span>Pizza</span>
                <span>Fresh</span>
            </Style.BoxLoginLogoText>
            <Style.BoxLoginLogoImg src={Logo} alt='Logo de pizza' />
        </Style.BoxLoginLogo>

        <Style.BoxLoginForm>
            <input type="text" placeholder='Digite o seu nome' />

            <input type="password" placeholder='Digite sua senha'/>

            <ButtonLarge value="Entrar" type='button' />
        </Style.BoxLoginForm>
    </Style.BoxLogin>
  )
}

export default BoxLogin