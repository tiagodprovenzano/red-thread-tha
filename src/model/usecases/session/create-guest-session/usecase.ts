import { CreateGuestSessionUsecaseResult } from "./result";

export interface CreateGuestSessionUsecase {
  execute(): Promise<CreateGuestSessionUsecaseResult>;
}
