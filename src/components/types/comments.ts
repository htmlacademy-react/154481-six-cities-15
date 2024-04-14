export type TComment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type TCommentPost = {
  id: string;
  comment: string;
  rating: number;
}
