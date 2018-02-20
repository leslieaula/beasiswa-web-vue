import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// Function to create routes
// Is default lazy but can be changed
function route(name, path, component) {
  return {
    name,
    path,
    component: resolve => import(`../${component}.vue`).then(resolve),
  };
}

Vue.use(Router);
Vue.use(Meta);

export function createRouter() {
  const router = new Router({
    base: __dirname,
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      route('Dashboard', '/', 'pages/Dashboard/Index'),
      route('Beasiswa List', '/beasiswa', 'pages/Scholarship/Index'),
      route('Beasiswa Detail', '/beasiswa/detail', 'pages/Scholarship/Detail/Index'),
      // Global redirect for 404
      { path: '*', redirect: '/' },
    ],
  });

  return router;
}
