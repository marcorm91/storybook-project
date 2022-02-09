import { Story } from '@storybook/react';
import { HeaderConfiguration, HeaderConfigurationProps } from './header-configuration';

export default {
  title: 'Organisms/Headers/Config header',
  component: HeaderConfiguration,
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
    backText: {
      description: 'Parámetro que recibe para determinar el texto del botón Atrás (Botón izquierdo en panel)',
    },
    titleTextSmall: {
      description: 'Parámetro que recibe para determinar el enlace junto al botón Siguiente (Botón derecho en panel)',
    },
    titleTextBig: {
      description: 'Parámetro que recibe para determinar el título de la cabecera',
    },
    textNextButton: {
      description: 'Parámetro que recibe para determinar el texto del botón Siguiente (Botón derecho en panel)'
    },
    disabledNextButton: {
      description: 'Parámetro que recibe como booleano para determinar si el botón Siguiente (Botón derecho en panel) está disabled o enabled'
    }
  }
};

const Template: Story<HeaderConfigurationProps> = (args) => <HeaderConfiguration {...args} />;

export const ConfigHeader = Template.bind({});
ConfigHeader.args = {
  backText: 'Back',
  titleTextSmall: 'Link bar',
  titleTextBig: 'Lorem ipsum title',
  textNextButton: 'Next',
  disabledNextButton: false
}

