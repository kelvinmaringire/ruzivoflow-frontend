const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Auth/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Auth/RegisterPage.vue') },
    ],
  },

  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Dashboard/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
