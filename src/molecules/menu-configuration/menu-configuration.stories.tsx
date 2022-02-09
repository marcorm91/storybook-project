import { Story } from '@storybook/react';
import { MenuConfiguration, MenuConfigurationProps } from './menu-configuration';

export default {
  title: 'Molecules/Config menu',
  component: MenuConfiguration,
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
    border: {
      description: 'Parámetro que recibe como booleano para determinar si la barra de navegación tiene borde o no',
    },
    blueType: {
      description: 'Parámetro que recibe como booleano para determinar el estilo de la barra de navegación (azul o gris)',
    },
    backNavigation: {
      description: 'Parámetro que recibe como booleano para determinar si la barra de navegación tiene botón de Volver',
    },
    textNav: {
      description: 'Parámetro que recibe para determinar el título de la barra de navegación'
    }
  }
};

const Template: Story<MenuConfigurationProps> = (args) => <MenuConfiguration {...args} />;

export const ConfigMenuComponent = Template.bind({});
ConfigMenuComponent.args = {
  backNavigation: true,
  textNav: 'Back',
  border: true,
  blueType: false
}