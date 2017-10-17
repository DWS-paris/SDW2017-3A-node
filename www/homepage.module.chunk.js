webpackJsonp(["homepage.module"],{

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nAttendre que le tableau dataArray soit rempli \net vérifier qu'il n'y à pas d'erreur\n-->\n<section *ngIf=\"dataArray && !errorCode\">\n\n  <!-- Faire une itération sur le tableau postsArray -->\n  <article *ngFor=\"let item of dataArray\">\n    <figure>\n      <img src=\"{{item.cover}}\">\n      <figcaption>{{item.title}}</figcaption>\n    </figure>\n    <p>{{item.content}}</p>\n\n    <!-- Ajouter un lien pour lire la suite --> \n    <a routerLink=\"post/{{item.id}}\">Lire la suite</a>\n  </article>\n  \n</section>\n\n<!-- Afficher un message d'erreur -->\n<p *ngIf=\"errorCode\">Problème de requête : {{errorCode}}</p>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_posts_service__ = __webpack_require__("../../../../../src/app/services/blog-posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Importer le service pour utiliser ses méthodes

var HomepageComponent = (function () {
    function HomepageComponent(
        // Injecter la classe du service
        myService) {
        this.myService = myService;
    }
    // Créer une fonction pour récupérer les données de l'API
    HomepageComponent.prototype.getData = function () {
        var _this = this;
        this.myService.getBlogPosts().then(function (data) { return _this.dataArray = data; }, function (error) { return _this.errorCode = error; });
    };
    HomepageComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_posts_service__["a" /* BlogPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_posts_service__["a" /* BlogPostsService */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_route__ = __webpack_require__("../../../../../src/app/homepage/homepage.route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Importer les composants


var HomepageModule = (function () {
    function HomepageModule() {
    }
    return HomepageModule;
}());
HomepageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__homepage_route__["a" /* Routing */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]]
    })
], HomepageModule);

//# sourceMappingURL=homepage.module.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");

// Importer les composants à utiliser dans les routes

// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__homepage_component__["a" /* HomepageComponent */]
    }
];
// Exporter une autre constante pour utiliser les routes
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes);
//# sourceMappingURL=homepage.route.js.map

/***/ })

});
//# sourceMappingURL=homepage.module.chunk.js.map