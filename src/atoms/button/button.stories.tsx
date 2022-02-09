import { Button, ButtonProps } from './button';
import {Story} from "@storybook/react";

export default {
  title: 'Atoms/Button',
  component: Button,
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
    disabled: {
      description: 'Parámetro que recibe para determinar el estado del botón',
      defaultValue: false
    },
    action: {
      description: 'Acción del botón'
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary button',
  type: 'btn-primary',
  size: 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary button',
  type: 'btn-secondary',
  size: 'medium'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Tertiary button',
  type: 'btn-tertiary',
  size: 'medium'
}

export const Quaternary = Template.bind({});
Quaternary.args = {
  text: 'Quaternary button',
  type: 'btn-quaternary',
  size: 'medium'
}