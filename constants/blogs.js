const blogs = [
  {
    id: 1,
    slug: 'best-design-tips',
    title: '5 Tips for Successful Website Design',
    feature: true,
    image: '/images/blog-1.png',
    tag: 'design',
    date: '01 Aptil 2022',
    text1:
      'Your website is often the first point of contact for potential customers, so making a good impression is essential. A well-designed website can help establish your brand, communicate your message, and convert visitors into customers. Here are five tips for creating a successful website designe.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
  {
    id: 2,
    slug: 'the-loss-is-surprising',
    title: 'The Importance of Search Engine Optimization',
    feature: true,
    image: '/images/blog-2.png',
    tag: 'travel',
    date: '19 May 2022',
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
  {
    id: 3,
    slug: 'shold-fixing-fashion',
    title: 'Why Your Business Needs Social Media Marketing',
    feature: true,
    image: '/images/blog-3.png',
    tag: 'fashion',
    date: '11 June 2022',
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
  {
    id: 4,
    slug: 'top-6-ways-buy',
    title: 'Email Marketing Strategy that Converts',
    feature: true,
    image: '/images/blog-4.png',
    tag: 'creative',
    date: '04 July 2022',
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
  {
    id: 5,
    slug: 'travel-and-love',
    title: 'The Benefits of a Well-Designed Brand Identity',
    feature: true,
    image: '/images/blog-5.png',
    tag: 'travel',
    date: '13 August 2022',
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
  {
    id: 6,
    slug: 'how-avoid-burn-aout',
    title: 'The Future of Digital Marketing',
    feature: true,
    image: '/images/blog-6.png',
    tag: 'design',
    date: '24 September 2022',
    text1:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    text2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam. ',
    text3:
      'Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum afinibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.',
  },
];

export default blogs;