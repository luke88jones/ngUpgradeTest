import * as app from "./app";

import * as module1 from "./modules/ng2-module1";

const adapter = module1.upgradeAdapter;

angular
    .module("ng1", [])
    .component("appComponent", new app.AppComponent())
    .directive("moduleOneComponent", <angular.IDirectiveFactory>adapter.downgradeNg2Component(module1.Module1Component))
    .factory("countryService", adapter.downgradeNg2Provider(module1.CountryService));  


adapter.bootstrap(document.body, ["ng1"]).ready(function() { 
    console.log("Bootstrapped!"); 
});