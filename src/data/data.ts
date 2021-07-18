import {Category, ISustenance} from '../models/ISustenance';

export const Categorys: Category[] = ['Foods', 'Drinks', 'Snacks', 'Sauces'];
export const data: ISustenance[] = [
  {
    name: 'chicken salad',
    imageURL:
      'http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg',
    category: 'Foods',
    price: '14.90',
  },
  {
    name: 'Roasted Asparagus',
    category: 'Foods',
    price: '12.00',
    imageURL:
      'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
  },
  {
    name: 'Lentils and Rice',
    category: 'Foods',
    price: '15.70',
    imageURL:
      'https://www.acouplecooks.com/wp-content/uploads/2014/02/Mesir-Wat-001.jpg',
  },
  {
    name: 'Big Night Pizza',
    category: 'Foods',
    price: '30.70',
    imageURL:
      'http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg',
  },
  {
    name: 'Cranberry and Apple ',
    category: 'Snacks',
    price: '25.20',

    imageURL:
      'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg',
  },
  {
    name: "Mic's Yorkshire ",
    category: 'Snacks',
    price: '15.66',

    imageURL:
      'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg',
  },
  {
    name: 'Oatmeal Cookies',
    category: 'Snacks',
    price: '10.50',
    imageURL:
      'http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg',
  },
  {
    name: 'Blueberry Squares',
    category: 'Snacks',
    price: '9.50',
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BeOc21dDQAR065pKQe8eWziMet9wKe62Og&usqp=CAU',
  },
  {
    name: 'Crock Pot Roast',
    category: 'Foods',
    price: '8.20',
    imageURL:
      'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
  },
  {
    name: 'Beer',
    category: 'Drinks',
    price: '2.20',
    imageURL:
      'https://www.wweek.com/resizer/i_ufgYB9Ad7TuVPvMrh71a7x7h4=/1200x0/filters:quality(100)/cloudfront-us-east-1.images.arcpublishing.com/wweek/E426QSRY4FGIHIGPRWB64QBM54.jpg',
  },
  {
    name: 'Coffe',
    category: 'Drinks',
    price: '3.20',
    imageURL:
      'https://www.betterwalls.com/pim/pr/WP/20000187/photo-wallpaper-coffe-break_big01.jpg',
  },
];
