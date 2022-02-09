import { Selectors, SelectorsProps } from './selectors';
import { Story } from '@storybook/react';

export default {
  title: 'Molecules/Selector',
  component: Selectors,
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
    image: {
      description: 'Parámetro que recibe para determinar la url de la imagen',
    },
    title: {
      description: 'Parámetro que recibe para determinar el título del selector'
    },
    href: {
      description: 'Parámetro que recibe para determinar la url del selector'
    },
    disabled: {
      description: 'Parámetro que recibe como booleano para determinar el estado del selector (enabled o disabled)'
    }
  } 
};

const Template: Story<SelectorsProps> = (args) => <Selectors {...args} />;

export const SelectorComponent = Template.bind({});
SelectorComponent.args = {
  image: 'https://picsum.photos/600',
  title: 'Lorem ipsum',
  href: '#',
  disabled: false
}