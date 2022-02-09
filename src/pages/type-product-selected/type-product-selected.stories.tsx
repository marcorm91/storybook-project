import { TypeProductSelected, TypeProductSelectedProps } from './type-product-selected';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Install + Product/Selected type product',
  component: TypeProductSelected,
  parameters: {
    paddings: {
        values: [
            { name: 'without-padding', value: '0' },
            { name: 'with-padding', value: '16px' },
        ],
        default: 'without-padding',
    },
  }, 
  argTypes: {
    header: {
      description: 'Header Configuración',
    },
    surfaceSelectors: {
      description: 'Listado de items de superficie'
    },
    modulesSelectors: {
      description: 'Listado de número de elementos'
    },
    finishSelectors: {
      description: 'Listado de Lorem ipsum label'
    }
  }  
};

const Template: Story<TypeProductSelectedProps> = (args) => <TypeProductSelected {...args} />;

export const TypeProductSelectedPage = Template.bind({});
TypeProductSelectedPage.args = {
  header: {
      backText: "Back",
      titleTextSmall: "Link bar", 
      titleTextBig: "Lorem ipsum dolor",
      textNextButton: "Next", 
      disabledNextButton: false,
  },
  surfaceSelectors: [
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum title",
      href: "#",
      disabled: false
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum title",
      href: "#",
      disabled: true
    },
  ],
  modulesSelectors: [
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: false
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
  ],
  finishSelectors: [
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: false
    },
    {
      image: 'https://picsum.photos/600',
      title: "Lorem ipsum",
      href: "#",
      disabled: true
    },
  ]
}
