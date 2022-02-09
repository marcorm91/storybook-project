import { PredefinedSettings, PredefinedSettingsProps } from './predefined-settings';
import { Story } from '@storybook/react';

export default {
  title: 'Organisms/Predefined config',
  component: PredefinedSettings,
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
    href: {
      description: 'Parámetro que recibe para determinar el enlace del componente',
    },
    customizable: {
      description: 'Parámetro que recibe como booleano para determinar si el componente es custom'
    },
    image: {
      description: 'Parámetro que recibe para determinar la imagen del componente'
    },
    description: {
      description: 'Parámetro que recibe para determinar la descripción del componente'
    },
    price: {
      description: 'Parámetro que recibe para determinar el precio del componente'
    }
  }
};

const Template: Story<PredefinedSettingsProps> = (args) => <PredefinedSettings {...args} />;

export const PredefinedSettingsComponent = Template.bind({});
PredefinedSettingsComponent.args = {
  href: '#',
  customizable: true,
  image: 'https://picsum.photos/600',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  price: '10,95€'
}