import { CourseInterface } from "@/types/common";
import { atom } from "recoil";

export const courseState = atom<{
  isLoading: boolean;
  course: null | CourseInterface;
}>({
  key: "courseState",
  default: {
    isLoading: true,
    course: null,
  },
});
