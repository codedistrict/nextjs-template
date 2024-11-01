import K from '../../constants';
import Request from '.';

export default class PostRequest extends Request {
  static getAllPosts(): Request {
    return new Request(
      K.Network.URL.posts,
      K.Network.Method.GET,
      null,
      K.Network.Header.Type.Json,
      {}
    );
  }
}
