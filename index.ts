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

        let body = request.body;
        if (body) {
          if (typeof body === 'object') {
            body = JSON.stringify(body);
            request.body = body;
            request.headers = request.headers || {};
            request.headers['Content-Type'] = 'application/json';
          }
        }
        const { secretAccessKey, accessKeyId, sessionToken } = AWS.config.credentials || {};
        aws4.sign(
          {
            ...request,
            body,
          },
          {
            secretAccessKey,
            accessKeyId,
            sessionToken,
            body,
          },
        );
      },
    ],
  },
});
