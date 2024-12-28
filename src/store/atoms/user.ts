import { atom } from "recoil";

export const userState = atom<{
  isLoading: boolean;
  userEmail: string | null;
}>({
  key: "userDetailState",
  default: {
    isLoading: true,
    userEmail: null,
  },
});
