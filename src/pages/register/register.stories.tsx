import { Register, RegisterProps } from './register';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Register - Login/Register 1',
  component: Register,
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
      description: 'Header Primario',
    },
    title: {
      description: 'Título de la página'
    },
    bgImage: {
      description: 'Ruta de la imagen derecha de la página'
    },
    optionsList: {
      description: 'Listado opciones de registro'
    },
    form: {
      description: 'Formulario de registro'
    },
    formEula: {
      description: 'Consentimiento de registro'
    }
  }
};

const Template: Story<RegisterProps> = (args) => <Register {...args} />;

export const RegisterPage = Template.bind({});
RegisterPage.args = {
  title: "Lorem ipsum dolor title",
  bgImage: 'https://picsum.photos/1000',
  header: {
    isLogged: false,
    rightPanel: true,
    titleButton: "Log in as guest",
    titleLogin: "Log in",
    titleLogo: "Marco Romero"
  },
  optionsList: {
    title: "Lorem ipsum dolor ...",
    options: [
      {
        text: "Lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor 1"
      },
      {
        text: "Lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor 2"
      },
      {
        text: "Lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor 3"
      },
      {
        text: "Lorem ipsum dolor lorem ipsum dolor Lorem ipsum dolor lorem ipsum dolor 4"
      }
    ]
  },
  form:
  {
    name: {
      label: "Lorem ipsum label",
      placeholder: "Lorem ipsum..."
    },
    email: {
      label: "Lorem ipsum label",
      placeholder: "Lorem ipsum..."
    },
    password: {
      label: "Lorem ipsum label",
      placeholder: "Lorem ipsum..."
    },
    buttonRegisterText: "Lorem ipsum button"
  },
  formEula: {
    checkboxText: "Lorem ipsum",
    linkText: "Lorem ipsum link",
    link: '#'
  }
}
