import { ResumePage, ResumePageProps } from './resume-page';
import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Resume/Resume config',
  component: ResumePage,
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
    headerSecondary: {
      description: 'Header Secundario'
    },
    bottomBarTwo: {
      description: 'Barra inferior de la página'
    },
    imagesCarousel: {
      description: 'Carrusel de la previsualización'
    },
    references: {
      description: 'Listado de referencias'
    }
  }   
};

const Template: Story<ResumePageProps> = (args) => <ResumePage {...args} />;

export const ResumeConfigPage = Template.bind({});
ResumeConfigPage.args = {
  header: {
      backText: "Back",
      titleTextSmall: "Link bar", 
      titleTextBig: "Lorem ipsum title",
      textNextButton: "Next", 
      disabledNextButton: false,
  },
  headerSecondary: {
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
      title: 'Lorem ipsum title',
      price: '10,95 €',
      priceType: 'PVP',
      priceIncludesText: 'Lorem ipsum',
      fullDescriptionText: 'Lorem ipsum'
  },
  imagesCarousel:
    [{
      srcImage: 'https://picsum.photos/600'
    },
    {
      srcImage: 'https://picsum.photos/600'
    }
  ],
  references: {
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
  },
  bottomBarTwo:
    {
      title: "Lorem ipsum title",
      textHref: "Lorem ipsum link",
      href: "#",
      buttons: [
        {
          icon: Icon["B_email_blue-icon"],
          type: "btn-secondary",
          disabled: false,
          name: "Send email",
          positionIcon: "left-icon",
          size: "small",
          optionsPosition: "",
          options: []
        },
        {
          icon: Icon["B_download_blue-icon"],
          type: "btn-secondary",
          disabled: false,
          name: "Download",
          positionIcon: "left-icon",
          size: "small",
          optionsPosition: "top",
          options: [{
            href: "#",
            textHref:"Images"
          },
          {
            href: "#",
            textHref: "Excel"
          },
          ]
        },
        {
          icon: Icon["W_edit_white-icon"],
          type: "btn-primary",
          disabled: false,
          name: "Edit",
          positionIcon: "left-icon",
          size: "small",
          optionsPosition: "",
          options: []
        }
      ]}
}
