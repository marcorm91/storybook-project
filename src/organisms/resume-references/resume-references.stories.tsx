import { ResumeReferences, ResumeReferencesProps } from './resume-references';
import { Story } from '@storybook/react';

export default {
  title: 'Organisms/References resume',
  component: ResumeReferences,
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
      description: 'Parámetro que recibe para determinar el título',
    },
    list: {
      description: 'Parámetro que recibe para determinar el listado de referencias'
    }
  } 
};

const Template: Story<ResumeReferencesProps> = (args) => <ResumeReferences  {...args} />;

export const ResumeReferencesComponent = Template.bind({});
ResumeReferencesComponent.args = {
  title: 'Lorem ipsum',
  list: {
      header: {
        data: [null, "Header 1", "Header 2", "Header 3", "Header 4"]
      },
      body: {
        tr: [
          {data: ['https://picsum.photos/600', "001", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 2, "10,00€"]},
          {data: ['https://picsum.photos/600', "002", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "40,00€"]},
          {data: ['https://picsum.photos/600', "003", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "17,00€"]},
          {data: ['https://picsum.photos/600', "004", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "20,00€"]},
          {data: ['https://picsum.photos/600', "005", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "10,00€"]},
          {data: ['https://picsum.photos/600', "006", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "10,00€"]},
          {data: ['https://picsum.photos/600', "007", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", 1, "17,00€"]},
        ]
      }
  }
}