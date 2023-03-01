import AlertSnackbar from "@/components/elements/misc/AlertSnackbar";
import { Auth } from "aws-amplify";
import router from "next/router";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export const AuthAPI = {
  //sign up user with email and password only aws amplify
  signUp: async (username: string, password: string) => {
    await Auth.signUp({
      username,
      password,
    });
  },
  //sign in user
  signIn: async (username: string, password: string) => {
    const user = await Auth.signIn(username, password).then(() =>
      router.push("/dashboard")
    );
    return user;
  },
  GoogleAuth: async () => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  },
  //sign out user
  signOut: async () => {
    await Auth.signOut().then(() => router.push("/"));
  },
  //get user
  getUser: async () => {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  },
  //confirm sign up
  confirmSignUp: async (username: string, code: string) => {
    await Auth.confirmSignUp(username, code).then(() =>
      router.push("/dashboard")
    );
  },
  //forgot password
  forgotPassword: async (username: string) => {
    await Auth.forgotPassword(username);
  },
  //forgot password submit
  forgotPasswordSubmit: async (
    username: string,
    code: string,
    password: string
  ) => {
    await Auth.forgotPasswordSubmit(username, code, password);
  },
  //change password
  changePassword: async (
    user: any,
    oldPassword: string,
    newPassword: string
  ) => {
    await Auth.changePassword(user, oldPassword, newPassword);
  },
  //get user attributes
  getUserAttributes: async (user: any) => {
    const attributes = await Auth.userAttributes(user);
    return attributes;
  },
};
