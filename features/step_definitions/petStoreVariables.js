const url = 'https://petstore.swagger.io'
const endpoint = '/v2/pet'
let payload = {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }

  module.exports = {
    url,
    endpoint,
    payload,
  };
