import { ConfigurationDetail, ConfigurationDetailProps } from './configuration-detail';
import Select from '../../molecules/select/select';
import Switcher from '../../molecules/switcher/switcher';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Config pages/Config detail',
  component: ConfigurationDetail,
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
    imagesCarousel: {
      description: 'Carrusel'
    },
    references: {
      description: 'Referencias'
    },
    listMenuConfig: {
      description: 'Listado panel derecho'
    },
  } 
};

const Template: Story<ConfigurationDetailProps> = (args) => <ConfigurationDetail {...args} />;

export const DetailConfigPage = Template.bind({});
DetailConfigPage.args = {
  header: {
    backText: "Back",
    titleTextSmall: "Link bar", 
    titleTextBig: "Lorem ipsum title",
    textNextButton: "Next", 
    disabledNextButton: false,
  },
  headerSecondary: {
      title: "Lorem ipsum title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      priceType: "PVP", 
      price: "10,95 €",
      fullDescriptionText: "Lorem ipsum", 
      priceIncludesText: "Lorem ipsum",
  },
  imagesCarousel: [{
      srcImage: 'https://picsum.photos/600'
    },
    {
      srcImage: 'https://picsum.photos/600'
    }
  ],
  references: {
    title: 'Lorem ipsum title',
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
  listMenuConfig: 
    [
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>
          <div className="inline-elements">
            <h5>Lorem ipsum</h5>
            <Select visibleLabel={false} label='' options={['1', '2']} />
          </div>
          <div className="inline-elements">
            <h5>Lorem ipsum</h5>
            <Switcher onClickOptionOne={()=>{}} onClickOptionTwo={()=>{}} textOne='Yes' textTwo='No' />
          </div>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component:           
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
      { textNav: "Lorem ipsum", border:true, blueType:false, backNavigationText: 'Back',
      component: 
        <>
          <h3>Lorem ipsum</h3>
        </>
      },
    ]
}
