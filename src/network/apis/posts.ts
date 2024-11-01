import NetworkCall from '../networkCall';
import PostRequest from '../requests/posts';

export const getPostsApi = async () => {
  try {
    const posts = await NetworkCall.makeApiCall(PostRequest.getAllPosts());
    return posts;
  } catch (error) {
    return error;
  }
};
