export const MAX_RATING = 5;

export const CardType = {
  Cities: 'cities',
  Favorites: 'favorites',
  PlacesNearby: 'places nearby'
};

export const Rating = [
  {
    value: 5,
    title: 'perfect'
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  },
];

export const MapIcon = {
  Default: {
    Url: './img/pin.svg',
    Size: [27, 39],
    Anchor: [13, 39]
  },
  Active: {
    Url: './img/pin-active.svg',
    Size: [27, 39],
    Anchor: [13, 39]
  }
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export enum PlacesSort {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum NameSpace {
  Interface = 'Interface',
  Data = 'Data',
  User = 'User',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
