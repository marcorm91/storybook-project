import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { ButtonIcon, ButtonIconProps } from './button-icon';

export default {
  title: 'Molecules/Button with icon',
  component: ButtonIcon,
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
    text: {
      description: 'Parámetro que recibe para determinar el texto del botón',
    },
    size: {
      description: 'Parámetro que recibe para determinar el tamaño del botón',
      control:
      {
        type: 'select',
        options: ['big', 'medium', 'small', 'mobile'],
      }
    },
    type: {
      description: 'Parámetro que recibe para determinar el tipo de botón',
      control:
      {
        type: 'select',
        options: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-quaternary']
      }
    },
    position: {
      description: 'Parámetro que recibe para determinar la posición del icono',
      control: {
        type: 'select',
        options: ['left-icon', 'right-icon']
      }
    },
    disabled: {
      description: 'Parámetro que recibe para determinar el estado del botón',
      defaultValue: false
    },
    icon: {
      description: 'Parámetro que recibe un listado de iconos ya predefinidos en la app \n\n Los que empiezan por W_ son de color blanco \n\n Los que empiezan por B_ son de color azul \n\n Los que empiezan por O_ son de otro color',
      control: {
        type: 'select',
        options: Icon
      }
    },
    action: {
      description: 'Acción del botón'
    }
  }
};

const Template: Story<ButtonIconProps> = (args) => <ButtonIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: Icon['W_edit_white-icon'],
  text: 'Primary button with icon',
  type: 'btn-primary',
  size: 'medium',
  position: 'left-icon'
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: Icon['B_email_blue-icon'],
  text: 'Secondary button with icon',
  type: 'btn-secondary',
  size: 'medium',
  position: 'right-icon'
};