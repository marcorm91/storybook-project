import Field  from '../../atoms/field/field';
import Button  from '../../atoms/button/button';
import '../../assets/global/_reset.css';
import { Icon } from '../../utils/enums/Icons';
import { StyledRegister2 } from './register-2.styles';
import HeaderPrimario from '../../organisms/header/header';

export interface IStepProps{
  titleQuestion: string;
  titleLabel: string;
  titlePlaceholder: string;
}

export interface IHeaderProps {
  isLogged: boolean;
  titleLogo: string;
  rightPanel: boolean;
  titleButton: string;
  titleLogin: string;
}

export interface Register2Props {
  listStep: IStepProps[];
  title: string;
  description: string;
  titleButton: string;
  header: IHeaderProps;
}

export function Register2({header, title, description, listStep, titleButton}: Register2Props) {
  return (
    <StyledRegister2>
      <HeaderPrimario {...header} />
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {listStep.map((step, i) =>
            <li key={i} data-step={i}>
              <span>
                {i > 0
                ? <button data-icon={Icon['O_arrow-left-icon']} className="callback-btn"></button>
                : null }
                Paso {i+1} de {listStep.length}
              </span>
              <div className="questions-block">
                <span>{step.titleQuestion}</span>
                <Field label={step.titleLabel} placeholder={step.titlePlaceholder} ></Field>
                <Button size="medium" text={titleButton} type="btn-primary" disabled={true}></Button>
              </div>
            </li>
          )}
        </ul>
      </main>
    </StyledRegister2>
  );
}

export default Register2;
