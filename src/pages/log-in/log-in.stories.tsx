import { LogIn, LogInProps } from './log-in';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Register - Login/Log In',
  component: LogIn,
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
    title: {
      description: 'Título de Login',
    },
    imgSrc: {
      description: 'Imagen lateral derecha de Login'
    },
    forget_pwd: {
      description: 'Componente Olvido contraseña'
    },
    loginForm: {
      description: 'Formulario de Login'
    },
    buttonsText: {
      description: 'Texto de botones de Login'
    },
    header: {
      description: 'Header Primario'
    } 
  } 
};

const Template: Story<LogInProps> = (args) => <LogIn {...args} />;

export const LoginPage = Template.bind({});
LoginPage.args = {
    title: "Lorem ipsum title",
    forget_pwd: {
        link: "#",
        text: "Lorem ipsum link"
    },
    buttonsText: {
        login: "Lorem ipsum button",
        loginGoogle: "Lorem ipsum Google",
        loginAsGuest: "Log in as guest"
    },
    loginForm: {
      email: {
        label: "Lorem ipsum label",
        placeholder: "Lorem ipsum..."
      },
      password: {
        label: "Lorem ipsum label",
        placeholder: "Lorem ipsum..."
      }
    },
    imgSrc: 'https://picsum.photos/1000',
    header:{
        isLogged: false,
        rightPanel: true,
        titleButton: "Log in as guest",
        titleLogin: "Log in",
        titleLogo: "Marco Romero"
    }
}
