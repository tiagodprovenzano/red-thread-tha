export interface HttpRequestFilter {
  field: string;
  value: string;
}

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  filters?: HttpRequestFilter[];
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpMethod {
  post = "POST",
  get = "GET",
  put = "PUT",
  delete = "DELETE",
  patch = "PATCH",
}

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
