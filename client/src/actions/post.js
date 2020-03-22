import axios from "axios";

// get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("api/posts");

    dispatch({
      type: "  GET_POSTS",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
