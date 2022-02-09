import HeaderPrimario from '../../organisms/header/header';
import Field from '../../atoms/field/field';
import Checkbox from '../../atoms/checkbox/checkbox';
import Button from '../../atoms/button/button';
import '../../assets/global/_reset.css';
import { StyledRegister } from './register.styles';

interface InputsOptions { label: string; placeholder: string }

interface IRegisterForm {
  name: InputsOptions;
  email:InputsOptions;
  password: InputsOptions;
  buttonRegisterText: string;
}

export interface IHeaderProps {
  isLogged: boolean;
  titleLogo: string;
  rightPanel: boolean;
  titleButton: string;
  titleLogin: string;
}

interface IFormEula {
  checkboxText: string;
  linkText: string;
  link: string;
}

export interface RegisterProps {
  title: string;
  bgImage: string;
  header: IHeaderProps;
  optionsList: {
    title: string;
    options: {
      text: string;
    }[]
  }
  form: IRegisterForm;
  formEula: IFormEula;
}

export const renderChild = (childNumber: number) => {
  let childs: string = '';
  Array.from({ length: childNumber }).forEach((child, index) => {
    childs += `&:nth-child(${childNumber}n+${index + 1}){
      -webkit-animation-delay: ${1 + index}s;
      animation-delay: ${1 + index}s;
    }`
  });
  return childs;
}

export function Register({ title, header, bgImage, optionsList }: RegisterProps) {
  return (
    <StyledRegister itemsHelp={optionsList.options.length} renderChild={renderChild}>
      <HeaderPrimario {...header} />
      <main>
        <div className="column-1">
          <h1>{title}</h1>
          <form>
            <Field label="Lorem ipsum label" placeholder="Lorem ipsum..." />
            <Field label="Lorem ipsum label" placeholder="Lorem ipsum..." />
            <Field typeInput="password" label="Lorem ipsum label" placeholder="Lorem ipsum..." />
            <Checkbox checked={false} clickCheckbox={() => { console.log('CHECKBOX EXECUTED') }} disabled={false} text={<div>Lorem ipsum <a href="#">Lorem ipsum link</a>*</div>} />
            <Button disabled={false} size="big" text="Lorem ipsum button" type="btn-primary"></Button>
          </form>
        </div>
        <div className="column-2">
          <div>
            <div className="image-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="options-list-wrapper">
              <h4>{optionsList.title}</h4>
              <ul>
                {optionsList.options.map((item, index) =>
                  <li key={index}><span>{item.text}</span></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </StyledRegister>
  );
}

export default Register;
