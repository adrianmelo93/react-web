function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Price: $60',
      description: 'Samsung Galaxy 3',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'http://www.tecnologiabit.com/wp-content/uploads/2015/03/Samsung-Galaxy-S5-Plus-2015.png',
    },
    {
      id: 2,
      title: 'Price: $550',
      description: 'Iphone 6',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'https://www.imore.com/sites/imore.com/files/styles/large/public/topic_images/2015/iphone-6s-plus-topic.png?itok=i09Usmut',
    },
    {
      id: 3,
      title: 'Price: $200',
      description: 'Iphone 5s',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'http://www.sodimac.com.pe/static/categorias/PLP/plp-categorias/images/vtn-celulares.png',
    },
    {
      id: 4,
      title: 'Price: $860',
      description: 'Iphone 7 Plus',
      url: '#',
      votes: generateVoteCount(),
      productImageUrl: 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/BP3/6a-compare-desktop-iphone-7-plus.png',
    },
  ];

export {products, generateVoteCount};
