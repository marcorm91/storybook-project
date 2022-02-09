import { Story } from '@storybook/react';
import { Register2, Register2Props } from './register-2';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Register - Login/Register 2',
  component: Register2,
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
    description: {
      description: 'Descripción de la sección de página'
    },
    listStep: {
      description: 'Listado de steps para proceder con el registro'
    },
    titleButton: {
      description: 'Texto del botón de avanzar'
    }
  } 
};

const Template: Story<Register2Props> = (args) => <Register2 {...args} />;

export const Register2Page = Template.bind({});
Register2Page.args = {
  header: {
      isLogged: false,
      rightPanel: false,
      titleButton: "",
      titleLogin: "",
      titleLogo: "Marco Romero"
  },
  title: "Lorem ipsum title",
  description: "Lorem ipsum dolor amet",
  listStep: [
    {
      titleQuestion: "Lorem ipsum title",
      titleLabel: "Lorem ipsum",
      titlePlaceholder: "Lorem ipsum...",
    },
    {
      titleQuestion: "Lorem ipsum title",
      titleLabel: "Lorem ipsum",
      titlePlaceholder: "Lorem ipsum...",
    },
    {
      titleQuestion: "Lorem ipsum title",
      titleLabel: "Lorem ipsum",
      titlePlaceholder: "Lorem ipsum...",
    },
    {
      titleQuestion: "Lorem ipsum title",
      titleLabel: "Lorem ipsum",
      titlePlaceholder: "Lorem ipsum...",
    },
  ],
  titleButton: "Next"
}
