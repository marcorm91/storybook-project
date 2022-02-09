import { Story } from '@storybook/react';
import { FilterInputs2, FilterInputs2Props } from './filter-2-inputs';

export default {
  title: 'Organisms/Buttons filter 2',
  component: FilterInputs2,
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
    listSelect: {
        description:  'Lista que recibirá las distintas opciones del filtrado: \n\n' +
                      '· label: Título label \n\n' +
                      '· disabled: Parámetro para marcar como disabled el selector \n\n' +
                      '· options: Opciones del selector \n\n' +
                      '· visibleLabel: Visualizar label del selector'
    }
  } 
};

const Template: Story<FilterInputs2Props> = (args) => <FilterInputs2 {...args} />;

export const FilterInputsTwoComponent = Template.bind({});
FilterInputsTwoComponent.args = {
  title: 'Lorem ipsum title',
  listSelect: [
    {
      label: "Lorem ipsum label",
      disabled: false,
      options: ['Lorem ipsum', 'Lorem ipsum'],
      visibleLabel: true
    },
    {
      label: "Lorem ipsum label",
      disabled: false,
      options: ['Lorem ipsum', 'Lorem ipsum'],
      visibleLabel: true
    }
  ]
};