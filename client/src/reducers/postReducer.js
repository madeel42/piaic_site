const initialState = {
  articles: [],
  article: {},
  loading: true,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        articles: payload,
        loading: false
      };
    case "POSTS_ERR":
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
