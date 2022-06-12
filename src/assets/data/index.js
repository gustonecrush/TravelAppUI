const PLACES = [
  {
    id: '1',
    name: 'Lago di Braies, Braies',
    location: 'Italy',
    price: 80.0,
    image: require('../images/location1.jpg'),
    rating: 5.0,
    recommended: true,
    details:
      'Lago di Braies, also referred to as “Pragser Wildsee” and “Lake Braies“, is an awe-inspiring mystical lake located in the Dolomites of South Tyrol, Italy. Not only is it one of the biggest lakes in the area, it’s arguably one of the most stunning lakes in the world.',
  },
  {
    id: '2',
    name: 'Siargao island',
    location: 'Philippines',
    price: 90.0,
    image: require('../images/location2.jpg'),
    rating: 4.5,
    recommended: false,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
  },
  {
    id: '3',
    name: 'Manarola',
    location: 'Italy',
    price: 120.0,
    image: require('../images/location3.jpg'),
    rating: 4.5,
    recommended: true,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
  },
  {
    id: '4',
    name: 'Perhentian Islands',
    price: 100.0,
    location: 'Malaysia',
    image: require('../images/location4.jpg'),
    rating: 3.0,
    recommended: false,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
  },
];

const CATEGORIES = [
  {
    id: 1,
    name: 'Flight',
  },
  {
    id: 2,
    name: 'Recreation',
  },
  {
    id: 3,
    name: 'Destination',
  },
  {
    id: 4,
    name: 'Place',
  },
];

const RECOMMENDED = PLACES.filter(place => {
  return place.recommended === true;
});

export {PLACES, CATEGORIES, RECOMMENDED};
