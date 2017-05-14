"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var clientList_component_1 = require("./clientList/clientList.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
// Route Configuration
exports.routes = [
    { path: 'clients', component: clientList_component_1.ClientListComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map