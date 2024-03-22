export const Setting = {
  PlaceCardsCount: 5,
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

export enum Cities {
  Paris = 'PARIS',
  Cologne = 'COLOGNE',
  Brussels = 'BRUSSELS',
  Amsterdam = 'AMSTERDAM',
  Hamburg = 'HAMBURG',
  Dusseldorf = 'DUSSELDORF',
}

// export const Cities = {
//   Paris: 'PARIS',
//   Cologne: 'COLOGNE',
//   Brussels: 'BRUSSELS',
//   Amsterdam: 'AMSTERDAM',
//   Hamburg: 'HAMBURG',
//   Dusseldorf: 'DUSSELDORF',
// } as const;
