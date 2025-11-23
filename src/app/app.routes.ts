import type { Routes } from "@angular/router";
import { Home } from "./components/home";
import { Users } from "./components/users";

export const routes: Routes = [
	{
		path: "",
		title: "Home Page",
		component: Home,
	},
	{
		path: "users",
		title: "User Page",
		component: Users,
	},
];
