const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'homepage', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Auth/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Auth/RegisterPage.vue') },
      { path: 'password-reset', name: 'password_reset', component: () => import('pages/Auth/ForgotPasswordPage.vue') },
    ],
  },

  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Dashboard/IndexPage.vue') },
      { path: 'editor', name: 'editor', component: () => import('pages/Dashboard/Editor/IndexPage.vue') },
      { path: 'thedatabet', name: 'thedatabet', component: () => import('pages/Dashboard/thedatabet/IndexPage.vue') },
      {
        path: 'betting',
        name: 'betting',
        component: () => import('layouts/BettingLayout.vue'),
        children: [
          { path: '', name: 'predictions', component: () => import('pages/Dashboard/Betting/PredictionsPage1.vue') },
          { path: 'stats', name: 'stats', component: () => import('pages/Dashboard/Betting/StatsPage.vue') },
          { path: 'home_win', name: 'home_win', component: () => import('pages/Dashboard/Betting/HomeWinPage.vue') },
          { path: 'away_win', name: 'away_win', component: () => import('pages/Dashboard/Betting/AwayWinPage.vue') },
          { path: 'away_draw', name: 'away_draw', component: () => import('pages/Dashboard/Betting/DrawAwayPage.vue') },
          { path: 'home_draw', name: 'home_draw', component: () => import('pages/Dashboard/Betting/DrawHomePage.vue') },
          { path: 'homeOver05', name: 'homeOver05', component: () => import('pages/Dashboard/Betting/HomeOver05Page.vue') },
          { path: 'awayOver05', name: 'awayOver05', component: () => import('pages/Dashboard/Betting/AwayOver05Page.vue') },
          { path: 'over15', name: 'over15', component: () => import('pages/Dashboard/Betting/Over15Page.vue') },
          { path: 'under35', name: 'under35', component: () => import('pages/Dashboard/Betting/Under35Page.vue') },
          { path: 'btts', name: 'btts', component: () => import('pages/Dashboard/Betting/BTTSPage.vue') },
        ],
      },
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
