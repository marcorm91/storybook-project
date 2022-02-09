import HeaderPrimario  from '../../organisms/header/header';
import '../../assets/global/_reset.css';
import { StyledEmailValidation } from './email-validation.styles';

export interface IHeaderProps {
  isLogged: boolean;
  titleLogo: string;
  rightPanel: boolean;
  titleButton: string;
  titleLogin: string;
}

export interface INotReceivedEmailProps{
  title: string;
  description: string;
  options: string[];
  linkEmail: any;
}

export interface EmailValidationProps {
  header: IHeaderProps;
  title: string;
  description: string;
  not_received_email: INotReceivedEmailProps;
}

export function EmailValidation({header, title, description, not_received_email}: EmailValidationProps) {
  return (
    <StyledEmailValidation>
      <HeaderPrimario {...header} />
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="block-not-received-email">
          <h2>{not_received_email.title}</h2>
          <p>{not_received_email.description}</p>
          <ul>
            {not_received_email.options.map((option, i) => 
              <li key={i}>{option}</li>
            )}
          </ul>
          <a href={not_received_email.linkEmail.href}>{not_received_email.linkEmail.text}</a>
        </div>
      </main>
    </StyledEmailValidation>
  );
}

export default EmailValidation;
