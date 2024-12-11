import { SessionRepository } from "@/domain/repositories/session-repository";
import { Session } from "@/model";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { SessionContext } from "./context";

export const SessionContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [session, setSession] = useState<Session>();

  const createSession = useCallback(async () => {
    new SessionRepository().createGuestSession().then((result) => {
      if (result.success) {
        setSession({
          session_id: result.guest_session_id,
          expires_at: result.expires_at,
        });
      }
      localStorage.setItem("session", JSON.stringify(result));
    });
  }, []);

  const getSession = useCallback(async () => {
    const sessionStr = localStorage.getItem("session");
    if (sessionStr) {
      const currentSession = JSON.parse(sessionStr);
      if (new Date(currentSession.expires_at) > new Date()) {
        setSession(JSON.parse(sessionStr));
      } else {
        createSession();
      }
    } else {
      createSession();
    }
  }, [createSession]);

  useEffect(() => {
    getSession();
  }, [getSession]);

  return (
    <>
      {session ? (
        <SessionContext.Provider value={{ session }}>
          {children}
        </SessionContext.Provider>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
