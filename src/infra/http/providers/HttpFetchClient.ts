import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "../types";

export class HttpFetchClient implements HttpClient {
  private baseUrl: string;
  private token?: string;
  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    const headers = data.headers || {};
    const filters = data.filters || [];
    const filtersString = filters.length
      ? "?" +
        filters.map((filter) => `${filter.field}=${filter.value}`).join("&")
      : "";
    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }
    if (this.token) {
      headers["authorization"] = `Bearer ${this.token}`;
    }

    const response = await fetch(this.baseUrl + data.url + filtersString, {
      method: data.method,
      body: data.body && JSON.stringify(data.body),
      headers: headers,
    }).catch((error) => {
      throw new Error("HttpFetchClient error:" + error.message);
    });

    if (
      response.status === HttpStatusCode.ok ||
      response.status === HttpStatusCode.created
    ) {
      const responseBody = await response.json();
      return {
        statusCode: response.status,
        body: responseBody,
      };
    }

    return {
      statusCode: response.status,
      body: null,
    };
  }
}
