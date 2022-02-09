import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { Menu, MenuProps } from './menu';

export default {
  title: 'Organisms/Menu',
  component: Menu,
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
    listMenu: {
      description: 'Parámetro que recibe para determinar la lista de items del menú',
    },
    firstTextFooter: {
      description: 'Parámetro que recibe para determinar el texto inferior de la primera fila',
    },
    secondTextFooter: {
      description: 'Parámetro que recibe para determinar el texto inferior de la segunda fila',
    }
  }
};

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const MenuComponent = Template.bind({});
MenuComponent.args = {
  listMenu: [
    {
      icon: Icon['W_list_white-icon'],
      href: '#',
      isNotification: true,
      notificationNumber: 1,
      selected: true,
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
      selected: false,
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
  ],
  firstTextFooter: "Marco Romero" ,
  secondTextFooter: "All rights reserved."
}