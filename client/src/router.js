import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ],
  //removes '#' from the URL
  mode: "history"
});