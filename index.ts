import got from 'got';
import aws4 from 'aws4';
import AWS from 'aws-sdk';

export default got.extend({
  hooks: {
    beforeRequest: [
      (request): void => {
        const { host, pathname, search } = request.url;
        request.host = host;
        request.path = pathname + search;

        if (request.json) {
          request.body = JSON.stringify(request.json);
          delete request.json;
        }

        if (typeof request.body === 'object') {
          request.body = JSON.stringify(request.body);
          request.headers = request.headers || {};
          request.headers['Content-Type'] = 'application/json';
        }

        const { secretAccessKey, accessKeyId, sessionToken } = AWS.config.credentials || {};
        aws4.sign(
          {
            ...request,
            body: request.body,
          },
          {
            secretAccessKey,
            accessKeyId,
            sessionToken,
            body: request.body,
          },
        );
      },
    ],
  },
});
