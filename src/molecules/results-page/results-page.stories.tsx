import { Story } from '@storybook/react';
import { ResultsPage, ResultsPageProps } from './results-page';

export default {
  title: 'Molecules/Results page',
  component: ResultsPage,
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
    totalResults: {
      description: 'Parámetro que recibe para determinar el total de elementos',
    },
    selectResults: {
      description: 'Parámetro que recibe para determinar un listado de filtro para el total de elementos'
    }
  }
};

const Template: Story<ResultsPageProps> = (args) => <ResultsPage {...args} />;

export const ResultsComponent = Template.bind({});
ResultsComponent.args = {
  totalResults: 22,
  selectResults: ['10 per page', '20 per page']
}