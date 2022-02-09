import { Story } from '@storybook/react';
import { EmailValidation, EmailValidationProps } from './email-validation';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Register - Login/Validation email',
  component: EmailValidation,
  parameters: {
    paddings: {
        values: [
            { name: 'without-padding', value: '0' },
            { name: 'with-padding', value: '16px' },
        ],
        default: 'without-padding',
    },
  }, 
  argTypes: {
    header: {
      description: 'Header primario',
    },
    title: {
      description: 'Título email validación'
    },
    description: {
      description: 'Descripción email validación'
    },
    not_received_email: {
      description: 'Detalle de la descripción por si no se hubiera recibido el email de confirmación'
    }
  }  
};

const Template: Story<EmailValidationProps> = (args) => <EmailValidation {...args} />;

export const EmailValidationPage = Template.bind({});
EmailValidationPage.args = {
  header: {
      isLogged: false,
      rightPanel: false,
      titleButton: "",
      titleLogin: "",
      titleLogo: "Marco Romero"
  },
  title: "Lorem ipsum title",
  description: "Lorem ipsum dolor sit amet, consectetur",
  not_received_email: {
    title: "¿Lorem ipsum dolor sit amet, consectetur?",
    description: "Lorem ipsum dolor sit amet, consectetur:",
    options: ["Option 1", 
              "Option 2", 
              "Option 3",
              "Option 4" ],
    linkEmail: {
      href: "#",
      text: "Lorem ipsum dolor sit amet, consectetur"
    }
  }
}
