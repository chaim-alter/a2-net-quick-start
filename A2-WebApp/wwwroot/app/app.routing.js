"use strict";
var router_1 = require('@angular/router');
var dashboard_routing_1 = require('./dashboard/dashboard.routing');
var contacts_routing_1 = require('./contacts/contacts.routing');
var appRoutes = dashboard_routing_1.DashboardRouting.concat(contacts_routing_1.ContactsRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map