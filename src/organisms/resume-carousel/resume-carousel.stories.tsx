import { ResumeCarousel, ResumeCarouselProps } from './resume-carousel';
import { Story } from '@storybook/react';

export default {
  title: 'Organisms/Carousel resume',
  component: ResumeCarousel,
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
      description: 'Parámetro que recibe para determinar el título del carrusel',
    },
    carousel: {
      description: 'Parámetro que recibe para determinar la lista de imágenes que recibirá el carrusel'
    }
  }
};

const Template: Story<ResumeCarouselProps> = (args) => <ResumeCarousel {...args} />;

export const ResumeCarouselComponent = Template.bind({});
ResumeCarouselComponent.args = {
  title: 'Lorem ipsum',
  carousel: [
    {
      srcImage: 'https://picsum.photos/600'
    },
    {
      srcImage: 'https://picsum.photos/600'
    }
  ]
}