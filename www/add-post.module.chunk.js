webpackJsonp(["add-post.module"],{

/***/ "../../../../../src/app/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Ajouter un article</h1>\n\n<!-- Capter la soumission du formulaire -->\n<form action=\"#\" (submit)=\"submitForm()\" [hidden]=\"postCreated\">\n\n  <label for=\"postTitle\">\n    Titre de l'article \n\n    <!-- Indication lors de la frappe -->\n    <span *ngIf=\"uniqPostObject.title.length < 5\" >Minimum 5 caractères</span>\n\n    <!-- Message d'erreur à la validation -->\n    <span [hidden]=\"!errorTitle\">Champs Obligatoire</span>\n\n  </label>\n\n  <!-- \n    Le ngModel permet de faire le binding dans les deux sens :\n    ctrl => vue => ctrl\n  -->\n  <input \n    [(ngModel)]=\"uniqPostObject.title\"\n    \n    type=\"text\" \n\n    name=\"postTitle\"\n\n    id=\"postTitle\" \n\n    placeholder=\"Définir le titre de l'article\"\n\n    required=\"required\"\n\n    (focus)=\"hideError($event.srcElement.name)\"\n  >\n\n\n  <label for=\"postDescription\">\n    Description courte\n    <span [hidden]=\"!errorDescription\">Champs Obligatoire</span>\n  </label>\n  <textarea [(ngModel)]=\"uniqPostObject.description\" name=\"postDescription\" id=\"postDescription\" placeholder=\"Ajouter une description courte\" required=\"required\" (focus)=\"hideError($event.srcElement.name)\"></textarea>\n\n  <label for=\"postContent\">\n    Contenu\n    <span [hidden]=\"!errorContent\">Champs Obligatoire</span>\n  </label>\n  <textarea [(ngModel)]=\"uniqPostObject.content\" name=\"postContent\" id=\"postContent\" placeholder=\"Ajouter le contenu de votre post\" required=\"required\" (focus)=\"hideError($event.srcElement.name)\"></textarea>\n\n  <label for=\"postCover\">\n    Ajouter une image\n    <span [hidden]=\"!errorCover\">Champs Obligatoire</span>\n  </label>\n  <input [(ngModel)]=\"uniqPostObject.cover\" type=\"text\" id=\"postCover\" name=\"postCover\" required=\"required\" (focus)=\"hideError($event.srcElement.name)\">\n  \n\n  <button type=\"submit\">Ajouter</button>\n\n</form>\n\n<section [hidden]=\"!postCreated\">\n  <p>Votre article est créé, cliquez <a routerLink=\"/post/{{newPostId}}\">ici pour l'afficher</a></p>\n</section>"

/***/ }),

/***/ "../../../../../src/app/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
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

// Importer le service

var AddPostComponent = (function () {
    function AddPostComponent(
        // Instancier le service
        myService) {
        this.myService = myService;
        // Créer des variables pour gérer les erreurs
        this.errorTitle = false;
        this.errorDescription = false;
        this.errorContent = false;
        this.errorCover = false;
        // Créer une variable pour la validation finale du formulaire
        this.formError = 0;
        this.postCreated = false;
        // Ajouter des valeurs vides dans l'objet du formulaire
        this.uniqPostObject = {
            title: '',
            description: '',
            content: '',
            cover: ''
        };
    }
    // Créer une fonction pour masquer les messages d'erreur
    AddPostComponent.prototype.hideError = function (tag) {
        switch (tag) {
            case 'postTitle':
                this.errorTitle = false;
                break;
            case 'postDescription':
                this.errorDescription = false;
                break;
            case 'postContent':
                this.errorContent = false;
                break;
            default:
                this.errorCover = false;
                break;
        }
    };
    // Création d'une fonction pour la soumission du formulaire
    AddPostComponent.prototype.submitForm = function () {
        var _this = this;
        // Initialiser la variable formError
        this.formError = 0;
        // Vider les message d'erreur à chaque validation
        this.errorContent = this.errorCover = this.errorDescription = this.errorTitle = false;
        // Vérifier que chacun des paramètres à bien une valeur
        for (var param in this.uniqPostObject) {
            // Si la valeur du paramètre est vide
            if (this.uniqPostObject[param].length == 0) {
                // Afficher le bon message d'erreur selon le paramètre
                switch (param) {
                    case 'title':
                        this.errorTitle = true;
                        // Incrémenter la variable formError
                        this.formError++;
                        break;
                    case 'description':
                        this.errorDescription = true;
                        // Incrémenter la variable formError
                        this.formError++;
                        break;
                    case 'content':
                        this.errorContent = true;
                        // Incrémenter la variable formError
                        this.formError++;
                        break;
                    default:
                        this.errorCover = true;
                        // Incrémenter la variable formError
                        this.formError++;
                        break;
                }
            }
        }
        // Validation finale du formulaire
        if (this.formError === 0) {
            /*
            Créer un nouveau post dans l'API
            Vider l'objet utilisé dans le formulaire
            Soit retourner sur la page d'accueil, soit afficher l'article
            */
            // Enregistrer le post
            this.myService.addNewPost(this.uniqPostObject).then(function (data) {
                console.log(data);
                // Réinitialiser l'objet uniqPostObject
                _this.uniqPostObject = {
                    title: '',
                    description: '',
                    content: '',
                    cover: ''
                };
                // Définir l'id du nouveau post
                _this.newPostId = data.id;
                // Changer la variable postCreated
                _this.postCreated = true;
            }, function (error) { return console.log(error); });
        }
    };
    AddPostComponent.prototype.ngOnInit = function () {
    };
    return AddPostComponent;
}());
AddPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-post',
        template: __webpack_require__("../../../../../src/app/add-post/add-post.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_posts_service__["a" /* BlogPostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_posts_service__["a" /* BlogPostsService */]) === "function" && _a || Object])
], AddPostComponent);

var _a;
//# sourceMappingURL=add-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-post/add-post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostModule", function() { return AddPostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_post_component__ = __webpack_require__("../../../../../src/app/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_post_route__ = __webpack_require__("../../../../../src/app/add-post/add-post.route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Importer les composants


var AddPostModule = (function () {
    function AddPostModule() {
    }
    return AddPostModule;
}());
AddPostModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__add_post_component__["a" /* AddPostComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_4__add_post_route__["a" /* Routing */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]]
    })
], AddPostModule);

//# sourceMappingURL=add-post.module.js.map

/***/ }),

/***/ "../../../../../src/app/add-post/add-post.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_post_component__ = __webpack_require__("../../../../../src/app/add-post/add-post.component.ts");

// Importer les composants à utiliser dans les routes

// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__add_post_component__["a" /* AddPostComponent */]
    }
];
// Exporter une autre constante pour utiliser les routes
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(appRoutes);
//# sourceMappingURL=add-post.route.js.map

/***/ })

});
//# sourceMappingURL=add-post.module.chunk.js.map