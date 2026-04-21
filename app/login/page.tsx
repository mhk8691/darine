import Navigator from "./Navigator";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ورود به پلتفرم دارینه | دارینه",
  description: "",
};
export default function page() {
  return <Navigator />;
}
