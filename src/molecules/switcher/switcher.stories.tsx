import { Story } from '@storybook/react';
import { Switcher, SwitchProps } from './switcher';

export default {
  title: 'Molecules/Switcher',
  component: Switcher,
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
    textOne: {
      description: 'Parámetro que recibe para determinar el primer valor del switch',
    },
    textTwo: {
      description: 'Parámetro que recibe para determinar el segundo valor del switch',
    },
    onClickOptionOne: {
      description: 'Acción que realizará tras seleccionar el primer valor del switch'
    },
    onClickOptionTwo: {
      description: 'Acción que realizará tras seleccionar el segundo valor del switch'
    },
  } 
};

const Template: Story<SwitchProps> = (args) => <Switcher {...args} />;

export const SwitcherComponent = Template.bind({});
SwitcherComponent.args = {
    textOne: 'No',
    onClickOptionOne: ()=>{},
    textTwo: 'Yes',
    onClickOptionTwo: ()=>{}
}