System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AppPosts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppPosts = (function () {
                function AppPosts(http) {
                    this.http = http;
                    this.loadPosts();
                }
                AppPosts.prototype.loadPosts = function () {
                    var _this = this;
                    this.http.get('/wp-json/wp/v2/posts/')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.posts = res; });
                };
                AppPosts.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                AppPosts = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'wp-content/themes/angularwp/app/component/posts.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppPosts);
                return AppPosts;
            })();
            exports_1("AppPosts", AppPosts);
        }
    }
});
//# sourceMappingURL=posts.js.map