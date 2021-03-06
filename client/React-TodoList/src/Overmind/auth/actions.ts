import { AsyncAction } from "overmind";

// actions are logic that handlke the data returned from effects and puts it into state

export const login: AsyncAction<object, void> = async (
  { state, effects },
  cred
) => {
  state.auth = await effects.auth.api.login(cred);

  if (state.auth.error) state.auth.error = (await clearError()) as null;
};

export const getMe: AsyncAction = async ({ state, effects }) => {
  state.auth = await effects.auth.api.getMe();

  if (state.auth.error) state.auth.error = (await clearError()) as null;
};

export const createUser: AsyncAction<object> = async (
  { state, effects },
  user
) => {
  state.auth = await effects.auth.api.createUser(user);

  if (state.auth.error) state.auth.error = (await clearError()) as null;
};

export const logout: AsyncAction = async ({ state, effects }) => {
  const data = await effects.auth.api.logout();

  if (data.error != null) {
    state.auth.error = data.error;
    state.auth.error = (await clearError()) as null;
  } else {
    state.auth = data;
  }
};

const clearError = () => {
  return new Promise<null>((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });
};
