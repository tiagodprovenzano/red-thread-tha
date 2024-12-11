import { makeCreateGuestSessionUsecase } from "@/factories/usecases";
import {
  CreateGuestSessionUsecase,
  CreateGuestSessionUsecaseResult,
} from "@/model";

export class SessionRepository {
  private createSessionFactory: () => CreateGuestSessionUsecase;
  constructor(factories?: {
    createSessionFactory: () => CreateGuestSessionUsecase;
  }) {
    this.createSessionFactory =
      factories?.createSessionFactory ?? makeCreateGuestSessionUsecase;
  }
  async createGuestSession(): Promise<CreateGuestSessionUsecaseResult> {
    console.log("SessionRepository.createGuestSession");
    return this.createSessionFactory().execute();
  }
}
