import { Story } from '@storybook/react';
import { Label, LabelProps } from './label';

export default {
  title: 'Atoms/Label',
  component: Label,
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
      description: 'Parámetro que recibe para determinar el texto del label',
    },
    size: {
      description: 'Parámetro que recibe para determinar el tamaño del label',
      control:
      {
        type: 'select',
        options: ['small', 'big'],
      }
    }
  }
};

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const LabelComponent = Template.bind({});
LabelComponent.args = {
  size: 'big',
  text: 'Big label'
}