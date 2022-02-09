import { Story } from '@storybook/react';
import { FilterInputs, FilterInputsProps } from './filter-inputs';

export default {
  title: 'Organisms/Buttons filter',
  component: FilterInputs,
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
    searchInput: {
      description: 'Parámetro que recibe para determinar el placeholder del buscador',
    },
    orderSelect: {
      description: 'Selector para ordenar por el tipo que se elija según parámetros'
    },
    filterSelect: {
      description: 'Selector para filtrar por el tipo que se elija según parámetros'
    },
  }  
};

const Template: Story<FilterInputsProps> = (args) => <FilterInputs {...args} />;

export const FilterInputsComponent = Template.bind({});
FilterInputsComponent.args = {
    orderSelect: ['Option 1', 'Option 2', 'Option 3'],
    filterSelect: ['Option 1', 'Option 2', 'Option 3'],
    searchInput:'Search'
}