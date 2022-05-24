import {AppProvider} from 'app/appProvider';
import axios from 'axios';

export const request = async (
  url,
  method,
  params,
  contentType = 'application/json',
) => {
  let header = {
    Accept: 'application/json',
    'Content-Type': contentType,
  };

  const auth = await AppProvider.getAuth();
  if (auth !== null) {
    header = {
      ...{Authorization: `Bearer ${auth}`},
      ...header,
    };
  }

  const config = {
    headers: header,
    method: method,
    url: url,
    params: undefined,
    data: undefined,
  };

  if (__DEV__) {
    console.log('config', config);
  }
  if (method.toLowerCase() === 'get') {
    config.params = params ?? undefined;
  } else {
    config.data = params ? params : undefined;
  }

  return new Promise(resolve => {
    axios(config)
      .then(res => {
        console.log('RESPONSE', {...config, response: res.data});
        resolve({data: res.data});
      })
      .catch(err => {
        if (__DEV__) {
          console.log('error', err.response);
        }
        resolve({error: err.response.data});
        return;
      });
  });
};
