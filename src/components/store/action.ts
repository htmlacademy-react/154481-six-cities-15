import { createAction } from '@reduxjs/toolkit';
import { FakeOffers } from '../mocks/offers';

export const changeCity = createAction('changeCity', (value: string) => ({payload: value}));

export const getOffers = createAction('getOffers', () => ({payload: FakeOffers}));
