import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';
import { MyData, MyDataProps } from './my-data';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Onboarding/My data',
  component:  MyData,
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
    nameTitle: {
      description: 'Nombre persona logada',
    },
    header: {
      description: 'Header Primario'
    },
    listMenu: {
      description: 'Menú de configuración panel izquierdo'
    },
    fieldsPersonalData: {
      description: 'Formulario de datos personales'
    },
    fieldsPwdData: {
      description: 'Formulario de datos personales (contraseña)'
    },
    conditionsData: {
      description: 'Condiciones y privacidad de términos'
    }
  } 
};

const Template: Story<MyDataProps> = (args) => <MyData {...args} />;

export const MyDataPage = Template.bind({});
MyDataPage.args = {
  nameTitle: "Marco Romero",
  header: {
      isLogged: true,
      rightPanel: true,
      titleButton: "Log in as guest",
      titleLogin: "Login",
      titleLogo: "Marco Romero",
      profileAbbr: "MR",
      profileDescription: "Profile description",
      profileName: "Marco Romero",
      listMenuItems: [
        {
          title: "Item 1",
          href: "#",
          selected: true,
          isNotification: true,
          icon: Icon['O_list-gray-icon'],
          notificationNumber: 8
        },
        {
          title: "Item 2",
          href: "#",
          selected: false,
          isNotification: false,
          icon: Icon['O_settings-gray-icon'],
          notificationNumber: 0
        },
        {
          title: "Item 3",
          href: "#",
          selected: false,
          isNotification: false,
          icon: Icon['O_help-gray-icon'],
          notificationNumber: 0
        },
      ]
  },
  listMenu: [
    {
      icon: Icon['W_list_white-icon'],
      href: '#',
      isNotification: true,
      notificationNumber: 8,
      selected: false,
      title: 'Item 1'
    },
    {
      icon: Icon['W_settings_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: true,
      title: 'Item 2'
    },
    {
      icon: Icon['W_message_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: false,
      title: 'Item 3'
    },
    {
      icon: Icon['W_log-out_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: false,
      title: 'Item 4'
    },
  ],
  fieldsPersonalData: [
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum..." ,
      typeInput: "string",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "string",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "string",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "string",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "string",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "string",
    },
  ],
  fieldsPwdData: [
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum..." ,
      typeInput: "password",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "password",
    },
    {
      title: "Lorem ipsum label",
      placeholder: "Lorem ipsum...",
      typeInput: "password",
    },
  ],
  conditionsData: 
    <ol>
      <li>
        <h2>Lorem ipsum title</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <h3>Lorem ipsum title 2</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </li>
      <li>
        <h2>Lorem ipsum title</h2>
        <ol>
          <li>
            <h3>Lorem ipsum title 2</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </li>
        </ol>
      </li>
    </ol>
}
