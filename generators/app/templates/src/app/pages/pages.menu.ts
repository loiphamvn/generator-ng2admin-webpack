export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'categories',
        data: {
          menu: {
            title: 'Categories',
            icon: 'ion-navicon-round',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'countries',
        data: {
          menu: {
            title: 'Countries',
            icon: 'fa fa-internet-explorer',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'activities',
        data: {
          menu: {
            title: 'Activities',
            icon: 'fa fa-bookmark',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'posts',
        data: {
          menu: {
            title: 'Posts',
            icon: 'fa fa-upload',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'contacts',
        data: {
          menu: {
            title: 'Contacts',
            icon: 'ion-email',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
    ]
  }
];
