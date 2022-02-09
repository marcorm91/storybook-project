import { MySettingsPage, MySettingsPageProps } from './my-settings-page';
import { Icon } from '../../utils/enums/Icons';
import { Story } from '@storybook/react';

export default {
  title: 'Templates/Register - Onboarding - Welcome/Onboarding/My configs',
  component: MySettingsPage,
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
      description: 'Header Primario',
    },
    titlePage: {
      description: 'Título de la página'
    },
    listMenu: {
      description: 'Menú de configuración panel izquierdo'
    },
    tabs: {
      description: 'Listado de tabs con su contenido'
    },
    favSettings: {
      description: 'Listado de Mis configuraciones (Favoritas)'
    },
    allSettings: {
      description: 'Listado de Mis configuraciones (Todas)'
    }
  } 
};

const Template: Story<MySettingsPageProps> = (args) => <MySettingsPage {...args} />;

export const MySettingPage = Template.bind({});
MySettingPage.args = {
  titlePage: "Lorem ipsum title",
  header: 
    {
      isLogged: true,
      rightPanel: true,
      titleButton: "Log in as guest",
      titleLogin: "Log in",
      titleLogo: "Marco Romero",
      profileAbbr: "MR",
      profileDescription: "Profile Description",
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
      selected: true,
      title: 'Item 1'
    },
    {
      icon: Icon['W_settings_white-icon'],
      href: '#',
      isNotification: false,
      notificationNumber: 0,
      selected: false,
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
  tabs:
    {
      all: {
        title: "Lorem ipsum 1",
        notResultText: "No results",
        selectResults: ["10 per page", "20 per page"],
        filterOptions: {
          options: {
            alphabeticalOrder: "Option 1",
            createdAt: "Option 2",
            updatedLast: "Option 3"
          },
          searchInputText: "Lorem ipsum",
          titleFilter: "Option 1",
          titleOrder: "Option 2"
        }
      },
      favorites: {
        title: "Lorem ipsum 2",
        notResultText: "No results",
        selectResults: ["10 per page", "20 per page"],
        filterOptions: {
          options: {
            alphabeticalOrder: "Option 1",
            createdAt: "Option 2",
            updatedLast: "Option 3"
          },
          searchInputText: "Lorem ipsum",
          titleFilter: "Option 1",
          titleOrder: "Option 2"
        }
      }
  },
  allSettings: [
    {
      image: 'https://picsum.photos/600',
      date: "20 de Julio 2019",
      title: "Lorem ipsum 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "80,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Septiembre 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: true,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Julio 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Julio 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Julio 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Julio 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Julio 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
  ],
  favSettings: [
    {
      image: 'https://picsum.photos/600',
      date: "20 de Julio 2021",
      title: "Lorem ipsum 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "80,00 €",
      favoriteMarked: false,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
    {
      image: 'https://picsum.photos/600',
      date: "25 de Septiembre 2021",
      title: "Lorem ipsum 4",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      priceType: "PVP",
      price: "160,00 €",
      favoriteMarked: true,
      listHover1: [
        {
          iconButton: 'copy_blue-icon', name: 'Tooltip',
        },
        {
          iconButton: 'favorite_blue-icon', name: 'Tooltip'
        },
        {
          iconButton: 'remove_blue-icon', name: 'Tooltip'
        }
      ],
      listHover2: [
        {
          href: '#', name: 'Send email'
        },
        {
          href: '#', name: 'Download'
        },
        {
          href: '#', name: 'Copy'
        },
      ]
    },
  ]
}
