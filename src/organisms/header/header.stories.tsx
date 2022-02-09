import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  title: 'Organisms/Headers/Primary header',
  component: Header,
  parameters: {
    paddings: {
        values: [
            { name: 'without-padding', value: '0' },
            { name: 'with-padding', value: '16px' },
        ],
        default: 'with-padding',
    },
  },
  argTypes: {
    titleLogo: {
      description: 'Parámetro que recibe para determinar el subtítulo del logo principal',
    },
    titleLogin: {
      description: 'Parámetro que recibe para determinar el texto del botón izquierdo del panel derecho',
    },
    titleButton: {
      description: 'Parámetro que recibe para determinar el texto del botón derecho del panel derecho',
    },
    rightPanel: {
      description: 'Parámetro que recibe como booleano para determinar si el panel derecho aparece o no'
    },
    isLogged: {
      description: 'Parámetro que recibe como booleano para determinar si esta logado o no'
    },
    profileAbbr: {
      description: 'Parámetro que recibe para determinar las iniciales de la persona logada'
    },
    profileName: {
      description: 'Parámetro que recibe para determinar el nombre de la persona logada'
    },
    profileDescription: {
      description: 'Parámetro que recibe para determinar la función de la persona logada'
    },
    listMenuItems: {
      description: 'Parámetro que recibe como componente para recibir la lista de items del menú.  Este será utilizado para <i>mobile</i> y aparecerá cuando el usuario esté logado en la parte del Onboarding (Panel izquierdo)',
    }
  }
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const PrimaryHeader = Template.bind({});
PrimaryHeader.args = {
  titleLogo: "Marco Romero",
  titleLogin: "Create account",
  titleButton: "Log in as guest",
  rightPanel: true,
  isLogged: true,
  profileAbbr: "MR",
  profileDescription: "Profile description",
  listMenuItems:[
    {
      title: "Item 1",
      href: "#",
      selected: true,
      isNotification: true,
      icon: Icon['O_list-gray-icon'],
      notificationNumber: 4
    },
    {
      title: "Item 2",
      href: "#",
      selected: false,
      isNotification: false,
      icon: Icon['O_settings-gray-icon'],
      notificationNumber: 0
    },
    {
      title: "Item 3",
      href: "#",
      selected: false,
      isNotification: false,
      icon: Icon['O_help-gray-icon'],
      notificationNumber: 0
    },
  ],
  profileName: "Marco Romero"
}


