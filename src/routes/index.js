import Details from "@/pages/details/index";
import List from "@/pages/list/index";
import Gun from "@/pages/gun/index";
//可以用 path:"*" 写个 404页面，我暂时不需要
const routes = [
  { path: "/", component: <List /> },
  { path: "/list", component: <List /> },
  { path: "/details", component: <Details /> },
  { path: "/gun", component: <Gun /> },
];

export default routes;
