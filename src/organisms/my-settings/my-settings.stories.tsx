import { MySettings, MySettingsProps } from './my-settings';
import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';

export default {
  title: 'Organisms/My configs',
  component: MySettings,
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
      description: 'Parámetro que recibe para determinar la ruta de la imagen del componente',
    },
    date: {
      description: 'Parámetro que recibe para determinar la fecha del componente',
    },
    title: {
      description: 'Parámetro que recibe para determinar el título del componente',
    },
    description: {
      description: 'Parámetro que recibe para determinar la descripción del componente'
    },
    priceType: {
      description: 'Parámetro que recibe para determinar el tipo de precio'
    },
    price: {
      description: 'Parámetro que recibe para determinar el precio'
    },
    favoriteMarked: {
      description: 'Parámetro que recibe como booleano para determinar si el componente está marcado como favorito o no'
    },
    listHover1: {
      description: 'Parámetro que recibe una lista de acciones que recibirá el componente (Favorito, Copiar, Eliminar)'
    },
    listHover2: {
      description: 'Parámetro que recibe una lista de acciones que recibirá el componente (Lista dropdown)',
    }
  }
};

const Template: Story<MySettingsProps> = (args) => <MySettings {...args} />;

export const MyConfigsComponent = Template.bind({});
MyConfigsComponent.args = {
    image: 'https://picsum.photos/600',
    date: "10th Febrary 1991",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    priceType: "PVP", 
    price: "10,00 €",
    favoriteMarked: false,
    listHover1: [
      {
        iconButton: Icon['B_copy_blue-icon'], name: 'Option 1'
      },
      {
        iconButton: Icon['B_favorite_blue-icon'], name: 'Option 2'
      },
      {
        iconButton: Icon['B_remove_blue-icon'], name: 'Option 3'
      }
    ], 
    listHover2:[
      {
        href: '#', name: 'Lorem ipsum 1', action: () => console.log('EXECUTED')
      },
      {
        href: '#', name: 'Lorem ipsum 2', action: () => console.log('EXECUTED')
      },
      {
        href: '#', name: 'Lorem ipsum 3', action: () => console.log('EXECUTED')
      },
      {
        href: '#', name: 'Lorem ipsum 4', action: () => console.log('EXECUTED')
      },
    ]
}