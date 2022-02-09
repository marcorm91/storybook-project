import HeaderPrimario  from '../../organisms/header/header';
import Field  from '../../atoms/field/field';
import Button  from '../../atoms/button/button';
import ButtonIcon  from '../../molecules/button-icon/button-icon';
import TabletBreakpoint from '../../utils/responsive-utilities/tablet_breakpoint';
import '../../assets/global/_reset.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledLogIn } from './log-in.styles';

interface ILoginForm {
  email: {
    label: string,
    placeholder: string
  },
  password: {
    label: string,
    placeholder: string
  }
}

export interface IHeaderProps {
  isLogged: boolean;
  titleLogo: string;
  rightPanel: boolean;
  titleButton: string;
  titleLogin: string;
}

interface ILoginButtonsTexts {
  login: string;
  loginGoogle: string;
  loginAsGuest: string;
}
export interface LogInProps {
  title: string;
  imgSrc: string;
  forget_pwd: any;
  loginForm: ILoginForm;
  buttonsText: ILoginButtonsTexts;
  header: IHeaderProps;
}

export function LogIn({header, title, forget_pwd, imgSrc, loginForm, buttonsText}: LogInProps) {
  return (
    <StyledLogIn>
      <HeaderPrimario {...header} />
      <main>
        <div className="column-1">
          <h1>{title}</h1>
          <form>
            <Field label={loginForm.email.label} placeholder={loginForm.email.placeholder}></Field>
            <Field label={loginForm.password.label} placeholder={loginForm.password.placeholder} typeInput="password"></Field>
            <a href={forget_pwd.link}>{forget_pwd.text}</a>
            <div className="btns-wrapper">
              <Button disabled={false} size="big" text={buttonsText.login} type="btn-primary"></Button>
              <div className="separator">o</div>
              <ButtonIcon type="btn-secondary" size="big" text={buttonsText.loginGoogle} icon={Icon['O_google-icon']} position="left-icon" disabled={false}/>
              <TabletBreakpoint>
                <Button disabled={false} size="big" text={buttonsText.loginAsGuest} type="btn-secondary"></Button>
              </TabletBreakpoint>
            </div>
          </form>
        </div>
        <div className="column-2">
          <div style={{backgroundImage: `url(${imgSrc})`}}></div>
        </div>
      </main>
    </StyledLogIn>
  );
}

export default LogIn;
