import { Story } from '@storybook/react';
import { HeaderSecondary, HeaderSecondaryProps } from './header-secondary';

export default {
  title: 'Organisms/Headers/Secondary header',
  component: HeaderSecondary,
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
    title: {
      description: 'Parámetro que recibe para determinar el título del componente',
    },
    description: {
      description: 'Parámetro que recibe para determinar la descripción del componente',
    },
    fullDescriptionText: {
      description: 'Parámetro que recibe para determinar el titular del enlace para ver una descripción completa',
    },
    priceType: {
      description: 'Parámetro que recibe para determinar el tipo de precio'
    },
    price: {
      description: 'Parámetro que recibe para determinar el precio del componente'
    },
    priceIncludesText: {
      description: 'Parámetro que recibe para determinar el texto del enlace que se muestra bajo el precio'
    }
  }
};

const Template: Story<HeaderSecondaryProps> = (args) => <HeaderSecondary {...args} />;

export const SecondaryHeader = Template.bind({});
SecondaryHeader.args = {
  title: 'Lorem ipsum title',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  priceType:'PVP', 
  price:'10,95 €', 
  fullDescriptionText:'Lorem ipsum', 
  priceIncludesText:'Lorem ipsum'
}

