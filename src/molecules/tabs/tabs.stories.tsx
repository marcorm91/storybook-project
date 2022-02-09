import { Story } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
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
    listTabs: {
      description: 'Parámetro que recibe una lista de tabs (títulos y contenidos)',
    },
    defaultSelectIndex: {
      description: 'Parámetro que recibe para determinar el tab seleccionado por defecto'
    }
  } 
};

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const TabsComponent = Template.bind({});
TabsComponent.args = {
  listTabs: [
    { nameTab: 'Lorem ipsum 1', component: <div>Content Lorem ipsum 1</div>},
    { nameTab: 'Lorem ipsum 2', component: <div>Content Lorem ipsum 2</div>}
  ],
  defaultSelectIndex: 0
}