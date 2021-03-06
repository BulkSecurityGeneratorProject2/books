import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
const Home = () => import('../core/home/home.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const Category = () => import('../entities/category/category.vue');
// prettier-ignore
const CategoryUpdate = () => import('../entities/category/category-update.vue');
// prettier-ignore
const CategoryDetails = () => import('../entities/category/category-details.vue');
// prettier-ignore
const Label = () => import('../entities/label/label.vue');
// prettier-ignore
const LabelUpdate = () => import('../entities/label/label-update.vue');
// prettier-ignore
const LabelDetails = () => import('../entities/label/label-details.vue');
// prettier-ignore
const Author = () => import('../entities/author/author.vue');
// prettier-ignore
const AuthorUpdate = () => import('../entities/author/author-update.vue');
// prettier-ignore
const AuthorDetails = () => import('../entities/author/author-details.vue');
// prettier-ignore
const Book = () => import('../entities/book/book.vue');
// prettier-ignore
const BookUpdate = () => import('../entities/book/book-update.vue');
// prettier-ignore
const BookDetails = () => import('../entities/book/book-details.vue');
const MyBooks = () => import('../mybooks/my-book.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myBooks',
      name: 'MyBooks',
      component: MyBooks
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    }
    ,
    {
      path: '/entity/category',
      name: 'Category',
      component: Category,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/new',
      name: 'CategoryCreate',
      component: CategoryUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/:categoryId/edit',
      name: 'CategoryEdit',
      component: CategoryUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/category/:categoryId/view',
      name: 'CategoryView',
      component: CategoryDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/label',
      name: 'Label',
      component: Label,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/new',
      name: 'LabelCreate',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/edit',
      name: 'LabelEdit',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/view',
      name: 'LabelView',
      component: LabelDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/author',
      name: 'Author',
      component: Author,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/author/new',
      name: 'AuthorCreate',
      component: AuthorUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/author/:authorId/edit',
      name: 'AuthorEdit',
      component: AuthorUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/author/:authorId/view',
      name: 'AuthorView',
      component: AuthorDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/book',
      name: 'Book',
      component: Book,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/book/new',
      name: 'BookCreate',
      component: BookUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/book/:bookId/edit',
      name: 'BookEdit',
      component: BookUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/book/:bookId/view',
      name: 'BookView',
      component: BookDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
