import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { BottomBarTwo, BottomBarTwoProps } from './bottom-bar-2';

export default {
  title: 'Organisms/Bottom bar 2',
  component: BottomBarTwo,
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
      description: 'Parámetro que recibe para determinar el titular de la barra',
    },
    textHref: {
      description: 'Parámetro que recibe para determinar el texto enlazado',
    },
    href: {
      description: 'Parámetro que recibe para determinar el enlace del texto enlazado',
    },
    buttons: {
      description: 'Array de botones donde se determinará dentro del mismo el tipo, iconos, opciones (si las tiene), ...'
    }
  }
};

const Template: Story<BottomBarTwoProps> = (args) => <BottomBarTwo {...args} />;

export const BottomBarTwoComponent = Template.bind({});
BottomBarTwoComponent.args = {
  title:"Lorem ipsum title",
  textHref:"Link bar",
  href:"#",
  buttons:[
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
    optionsPosition: "bottom",
    options: [{
      href: "#",
      textHref:"Images"
    },
    {
      href: "#",
      textHref: "Excel"
    },
    {
      href: "#",
      textHref: "PDF"
    }]
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
  ]
}