var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'L9U9JFXnSbmZA3EhzL32wEKkYFqQ5myZAOBEyIjh', 'X-Parse-REST-API-Key': '7Rsuu1eYz5gcS0tuI7ipOhl97CAZ7ldcO98kNJ1s'}
      return config;
    }
  };
});