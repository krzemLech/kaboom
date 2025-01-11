export type IconListItem = {
  icon: string;
  color: string;
  name: string;
};
export type FormStatuses = "idle" | "loading" | "success" | "error";
export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type FormErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};
