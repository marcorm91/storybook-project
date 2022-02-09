import { Story } from '@storybook/react';
import { BottomBar, BottomBarProps } from './bottom-bar';

export default {
  title: 'Organisms/Bottom bar',
  component: BottomBar,
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
    col1: {
      description: 'Parámetro que recibe como booleano para determinar si la primera columna debe aparecer',
    },
    title: {
      description: 'Parámetro que recibe para determinar el titular de la barra',
    },
    descriptions: {
      description: 'Parámetro que recibe para determinar las opciones que se seleccionaron',
    },
    textPrevButton: {
      description: 'Parametro que recibe para determinar el texto del botón Siguiente'
    },
    textNextButton: {
      description: 'Parametro que recibe para determinar el texto del botón Anterior'
    }
  }  
};

const Template: Story<BottomBarProps> = (args) => <BottomBar {...args} />;

export const BottomBarComponent = Template.bind({});
BottomBarComponent.args = {
  col1: true,
  title:"Lorem ipsum title",
  descriptions:[
    {
     name: "Lorem ipsum 1"
    },
    {
      name: "Lorem ipsum 2"
    },
    {
      name: "Lorem ipsum 3"
    },
    {
      name: "Lorem ipsum 4"
    }
  ],
  textNextButton:"Next",
  textPrevButton:"Cancel"
}