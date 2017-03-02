import request from 'superagent';
import Env from '../common/env';

export default {};

export function callApi(options) {
  if (options.method === 'POST') {
    return _post(options);
  }

  return _get(options);
}

function _get(options) {
  return new Promise((resolve, reject) => {
    request
      .get(Env.url + options.url)
      .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        }
      );
  });
}

function _post(options) {
  return new Promise((resolve, reject) => {
    request
      .post(Env.url + options.url)
      .send(options.payload)
      .end(
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        }
      );
  });
}
