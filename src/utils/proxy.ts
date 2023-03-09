import axios, { AxiosResponse } from "axios";

enum HttpStatusCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

const errorStatusCodes = [
  HttpStatusCode.UNAUTHORIZED,
  HttpStatusCode.FORBIDDEN,
  HttpStatusCode.UNPROCESSABLE_ENTITY,
  HttpStatusCode.NOT_FOUND,
  HttpStatusCode.INTERNAL_SERVER_ERROR,
];

class Proxy {
  handleErrorStatusCodes(response: AxiosResponse) {
    if (errorStatusCodes.includes(response.status)) {
      throw new Error(`Error with response status ${response.status}`);
    }

    if (!response || !response.data) {
      throw new Error(`Error with response ${response}`);
    }
  }

  async get(endpoint: string): Promise<AxiosResponse> {
    const input: RequestInfo = endpoint;

    const response = await axios.get(input);
    this.handleErrorStatusCodes(response);

    return response.data;
  }
}

export default Proxy;
