import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { MenuItem, MenuItemProps } from './menu-item';

export default {
  title: 'Molecules/Item menu',
  component: MenuItem,
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
    href: {
      description: 'Parámetro que recibe para determinar el enlace de navegación del componente',
    },
    title: {
      description: 'Parámetro que recibe para determinar el título del componente',
    },
    selected: {
      description: 'Parámetro que recibe como booleano para determinar si el componente está seleccionado o no',
    },
    icon: {
      description: 'Parámetro que recibe un listado de iconos ya predefinidos en la app \n\n Los que empiezan por W_ son de color blanco \n\n Los que empiezan por B_ son de color azul \n\n Los que empiezan por O_ son de otro color',
      control: {
        type: 'select',
        options: Icon
      }
    },
    isNotification: {
      description: 'Parámetro que recibe como booleano para determinar si el item tiene notificaciones o no'
    },
    notificationNumber: {
      description: 'Parámetro que recibe para determinar el número de notificaciones'
    }
  } 
};

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const ItemMenuComponent = Template.bind({});
ItemMenuComponent.args = {
  href: '#',
  title: 'Lorem ipsum title',
  icon: Icon['W_list_white-icon'],
  selected: true,
  isNotification: true,
  notificationNumber: 8
}