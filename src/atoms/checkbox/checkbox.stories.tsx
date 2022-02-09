import { Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
      description: 'Parámetro que recibe para determinar el texto o contenido del checkbox',
    },
    disabled: {
      description: 'Parámetro que recibe para determinar el estado del checkbox',
      defaultValue: false
    },
    checked: {
      description: 'Parámetro que recibe para determinar el checked por defecto',
      defaultValue: false
    },
    clickCheckbox: {
      description: 'Acción del checked'
    }
  }
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  text: <span>Checkbox</span>,
  checked: true,
  disabled: false,
  clickCheckbox: ()=>{}
};