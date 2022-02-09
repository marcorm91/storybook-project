import { Story } from '@storybook/react';
import { Textarea, TextareaProps } from './textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
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
      description: 'Parámetro que recibe para determinar el label del textarea',
    },
    size: {
      description: 'Parámetro que recibe para determinar el tamaño del textarea',
      control:
      {
        type: 'select',
        options: ['small', 'normal'],
      }
    },
    type: {
      description: 'Parámetro que recibe para determinar el estado del textarea',
      control: {
        type: 'select',
        options: ['normal', 'error', 'success'],
      }
    },
    placeholder: {
      description: 'Parámetro que recibe para determinar el placeholder del textarea'
    },
    disabled: {
      description: 'Parámetro que recibe para determinar si el textarea está deshabilitado o no',
      defaultValue: false
    },
    visibleLabel: {
      description: 'Parámetro que recibe para determinar si el label será visible o no',
      defaultValue: true
    }
  }
};

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const TextareaComponent = Template.bind({});
TextareaComponent.args = {
    label: 'Textarea',
    type: 'normal',
    placeholder: 'Placeholder...'
}