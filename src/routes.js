import Edit from "./compo/Edit/Edit";
import List from "./compo/List/List";
import Notfound from "./compo/NotFund/Notfound";
import View from "./compo/view/View";

export const routes = [
  { path: "/", element: <List />, exact: true },
  { path: "/view/:id", element: <View />, exact: true },
  { path: "/Edit/:id", element: <Edit />, exact: true },
];
