import { redirect } from "react-router";

export const loader = async () => {
  // Just redirect to default language route
  return redirect("/ru");
};
