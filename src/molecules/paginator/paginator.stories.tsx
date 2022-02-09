import { Story } from '@storybook/react';
import { Paginator, PaginatorProps } from './paginator';

export default {
  title: 'Molecules/Paginator',
  component: Paginator,
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
    
  }
};

const Template: Story<PaginatorProps> = (args) => <Paginator {...args} />;

export const PagComponent = Template.bind({});
PagComponent.args = {}