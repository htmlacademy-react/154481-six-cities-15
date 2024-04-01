export type TGeneralOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TDetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export type TCity = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
