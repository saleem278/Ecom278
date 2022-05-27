const INITIAL_STATE = {
  sections: [
    {
      title: 'Electronics',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ecom78-129c2.appspot.com/o/Samsung%20Smart%20TV.webp?alt=media&token=22247f13-98b4-4dbe-9bc6-86a6569a44ac',
      id: 0,
      linkUrl: 'shop/electronics'
    },
    {
      title: 'Clothes',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 1,
      linkUrl: 'shop/clothes'
    },
    {
      title: 'Grocery',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ecom78-129c2.appspot.com/o/Grocery%20Banner.jpg?alt=media&token=e9638833-4d0a-4f43-a4d2-12af053e5d0f',
      id: 2,
      linkUrl: 'shop/grocery'
    },
    {
      title: 'Beauty and Personal Care',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 3,
      linkUrl: 'shop/beauty and personal care'
    },
    {
      title: 'Books',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ecom78-129c2.appspot.com/o/Book%20Banner.jpg?alt=media&token=3c47cdd0-6818-476f-a67c-92d32f124152',
      size: 'large',
      id: 4,
      linkUrl: 'shop/books'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
