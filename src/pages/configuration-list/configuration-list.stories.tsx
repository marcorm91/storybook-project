import { ConfigurationList, ConfigurationListProps } from './configuration-list';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Config pages/Config list',
  component: ConfigurationList,
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
    titleFilter: {
      description: 'Parámetro que recibe para determinar el título del filtro'
    },
    listFilter: {
      description: 'Parámetro que recibe para determinar el listado de elementos del filtro'
    },
    listPredefinedConfig: {
      description: 'Listado del filtrado'
    }
  }  
};

const Template: Story<ConfigurationListProps> = (args) => <ConfigurationList {...args} />;

export const ListPage = Template.bind({});
ListPage.args = {
  header: {
    backText: "Back",
    titleTextSmall: "Link bar", 
    titleTextBig: "Lorem ipsum dolor",
    textNextButton: "Next", 
    disabledNextButton: true,
  },
  titleFilter: "Lorem ipsum title",
  listFilter:
    [
      {
        label: "Lorem ipsum label",
        disabled: false,
        visibleLabel: true,
        options: ['Option 1', 'Option 2', 'Option 3']
      },
      {
        label: "Lorem ipsum label",
        disabled: false,
        visibleLabel: true,
        options: ['Option 1', 'Option 2', 'Option 3']
      },
      {
        label: "Lorem ipsum label",
        disabled: false,
        visibleLabel: true,
        options: ['Lorem ipsum']
      },
      {
        label: "Lorem ipsum label",
        disabled: false,
        visibleLabel: true,
        options: ['Lorem ipsum']
      },
    ],
    listPredefinedConfig:
      [
        {
          customizable: false,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
        {
          customizable: true,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
        {
          customizable: false,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
        {
          customizable: true,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
        {
          customizable: false,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
        {
          customizable: false,
          description: "Lorem ipsum dolor sit amet, consectetur",
          href: "#",
          image: 'https://picsum.photos/600',
          price: "10,95 €"
        },
      ]
}
