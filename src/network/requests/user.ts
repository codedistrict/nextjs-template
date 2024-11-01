import K from '../../constants';
import Request from '.';

export default class UserRequest extends Request {
  static userLogin(body: { username: string; password: string }): Request {
    return new Request(
      K.Network.URL.login,
      K.Network.Method.POST,
      body,
      K.Network.Header.Type.Json,
      {}
    );
  }
}
