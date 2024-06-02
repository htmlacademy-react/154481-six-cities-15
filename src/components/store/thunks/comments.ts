import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../../types/state';
import {
  loadComments,
  setCommentsDataLoadingStatus
} from '../data-reducer/data-reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { TComment, TCommentPost } from '../../types/comments';


export const fetchCommentsAction = createAsyncThunk <void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    dispatch(setCommentsDataLoadingStatus(true));
    const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setCommentsDataLoadingStatus(false));
    dispatch(loadComments(data));
  }
);

export const postCommentAction = createAsyncThunk <void, TCommentPost, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({id, comment, rating}, { extra: api }) => {
    await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
  }
);

