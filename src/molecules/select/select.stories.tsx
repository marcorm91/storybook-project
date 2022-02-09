import { Story } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  title: 'Molecules/Select',
  component: Select,
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
    label: {
      description: 'Parámetro que recibe para determinar el label del selector',
    },
    disabled: {
      description: 'Parámetro que recibe para poner como disabled o no el selector'
    },
    options: {
      description: 'Opciones que va a recibir el selector'
    },
    visibleLabel: {
      description: 'Recibirá un booleano para determinar si el label es visible o no',
      defaultvalue: true
    }
  } 
};

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const SelectComponent = Template.bind({});
SelectComponent.args = {
    label: 'Lorem ipsum',
    disabled: false,
    options: ['Option 1', 'Option 2'],
    visibleLabel: true
}