import { HttpClient, HttpMethod } from "@/infra/http/types";
import {
  CreateGuestSessionUsecase,
  CreateGuestSessionUsecaseResult,
} from "@/model";

export class RemoteCreateGuestSessionUsecase
  implements CreateGuestSessionUsecase
{
  constructor(
    private readonly httpClient: HttpClient<CreateGuestSessionUsecaseResult>
  ) {}

  async execute(): Promise<CreateGuestSessionUsecaseResult> {
    const response = await this.httpClient.request({
      url: "authentication/guest_session/new",
      method: HttpMethod.get,
    });

    if (response.body) {
      return response.body;
    }

    throw new Error("Unexpected error");
  }
}
