System.register(['rxjs/Rx', 'angular2/platform/browser', 'angular2/router', 'angular2/http', './component/app'], function(exports_1) {
    var browser_1, router_1, http_1, app_1;
    var universalInjectables;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            universalInjectables = [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                browser_1.Title
            ];
            browser_1.bootstrap(app_1.App, universalInjectables);
        }
    }
});
//# sourceMappingURL=main.js.map