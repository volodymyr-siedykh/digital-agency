const services = [
  {
    id: 1,
    slug: 'app-design',
    title: 'App Design',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-1.svg',
    color: '#E3F8FA',
    feature: true,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
  {
    id: 2,
    slug: 'web-design',
    title: 'Web Design',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-2.svg',
    color: '#F4ECE0',
    feature: true,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
  {
    id: 3,
    slug: 'web-development',
    title: 'Web Development',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-3.svg',
    color: '#F5E6FE',
    feature: true,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
  {
    id: 4,
    slug: 'interfase-design',
    title: 'Interface Design',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-4.svg',
    color: '#FFE6E2',
    feature: true,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
  {
    id: 5,
    slug: 'visual-design',
    title: 'Visual Design',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-5.svg',
    color: '#E0E6F4',
    feature: false,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
  {
    id: 6,
    slug: 'uxui-design',
    title: 'Ux Design',
    text: 'Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet',
    icon: '/images/services-6.svg',
    color: '#E2FAE3',
    feature: false,
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat ',
  },
];

export default services;