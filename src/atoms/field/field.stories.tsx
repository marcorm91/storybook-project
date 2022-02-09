import { Story } from '@storybook/react';
import { Field, FieldProps } from './field';

export default {
  title: 'Atoms/Fieldset',
  component: Field,
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
      description: 'Parámetro que recibe para determinar el label del campo de texto',
    },
    size: {
      description: 'Parámetro que recibe para determinar el tamaño del campo de texto',
      control:
      {
        type: 'select',
        options: ['small', 'normal'],
      }
    },
    type: {
      description: 'Parámetro que recibe para determinar el estado del campo de texto',
      control: {
        type: 'select',
        options: ['none', 'error', 'success'],
      }
    },
    placeholder: {
      description: 'Parámetro que recibe para determinar el placeholder del campo de texto'
    },
    disabled: {
      description: 'Parámetro que recibe para determinar si el campo de texto está deshabilitado o no',
      defaultValue: false
    },
    typeInput: {
      description: 'Parámetro que recibe para determinar el tipo de campo de texto',
      control: {
        type: 'select',
        options: ['text', 'password'],
      }
    },
    visibleLabel: {
      description: 'Parámetro que recibe para determinar si el label será visible o no',
      defaultValue: true
    }
  }
};

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const FieldText = Template.bind({});
FieldText.args = {
  label: 'Field',
  type: 'none',
  disabled: false,
  placeholder: 'Placeholder...',
  size: 'normal',
  typeInput: 'text',
  visibleLabel: true
};

export const FieldTextError = Template.bind({});
FieldTextError.args = {
  label: 'Field error',
  type: 'error',
  disabled: false,
  placeholder: 'Placeholder...',
  size: 'normal',
  typeInput: 'text',
  visibleLabel: true
};

export const FieldTextSuccess = Template.bind({});
FieldTextSuccess.args = {
  label: 'Field success',
  type: 'success',
  disabled: false,
  placeholder: 'Placeholder...',
  size: 'normal',
  typeInput: 'text',
  visibleLabel: true
};