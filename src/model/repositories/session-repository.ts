import { CreateGuestSessionUsecaseResult } from "../usecases";

export interface ISessionRepository {
  createGuestSession(): Promise<CreateGuestSessionUsecaseResult>;
}
