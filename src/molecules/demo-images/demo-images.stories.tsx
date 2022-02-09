import { DemoImages, DemoImagesProps } from './demo-images';
import { Story } from '@storybook/react';

export default {
  title: 'Molecules/Demo images',
  component: DemoImages,
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
    imageSrc: {
      description: 'Parámetro que recibe para determinar la ruta de la imagen',
    },
    selected: {
      description: 'Parámetro que recibe para determinar el estado de la imagen (disabled o enabled)',
      defaultValue: false
    }
  }
};


const Template: Story<DemoImagesProps> = (args) => <DemoImages {...args} />;

export const Image = Template.bind({});
Image.args = {
  imageSrc: 'https://picsum.photos/600',
  selected: false
};