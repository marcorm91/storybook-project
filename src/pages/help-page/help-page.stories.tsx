import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { HelpPage, HelpPageProps } from './help-page';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Onboarding/Help page',
  component:  HelpPage,
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
    listMenu: {
      description: 'Menú izquierdo del panel de configuración'
    }
  }  
};

const Template: Story<HelpPageProps> = (args) => <HelpPage {...args} />;

export const HelpsPage = Template.bind({});
HelpsPage.args = {
  header: 
    {
      titleLogo: "Marco Romero",
      titleLogin: "Create account",
      titleButton: "Log in as guest",
      rightPanel: true,
      isLogged: true,
      profileAbbr: "MR",
      profileDescription: "Profile description",
      profileName: "Marco Romero",
      listMenuItems: [
        {
          title: "Item 1",
          href: "#",
          selected: true,
          isNotification: true,
          icon: Icon['O_list-gray-icon'],
          notificationNumber: 8
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
      ]
  },
  listMenu: [
    {
      icon: Icon['W_list_white-icon'],
      href: '#',
      isNotification: true,
      notificationNumber: 8,
      selected: false,
      title: 'Item 1'
    },
    {
      icon: Icon['W_settings_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: false,
      title: 'Item 2'
    },
    {
      icon: Icon['W_message_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: true,
      title: 'Item 3'
    },
    {
      icon: Icon['W_log-out_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: false,
      title: 'Item 4'
    },
  ]
}
