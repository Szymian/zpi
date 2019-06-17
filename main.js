(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
/* harmony import */ var _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/join-or-create-page/join-or-create-page.component */ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts");
/* harmony import */ var _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/join-room-page/join-room-page.component */ "./src/app/pages/join-room-page/join-room-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/player-games-page/player-games-page.component */ "./src/app/pages/player-games-page/player-games-page.component.ts");
/* harmony import */ var _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/lobby-page/lobby-page.component */ "./src/app/pages/lobby-page/lobby-page.component.ts");
/* harmony import */ var _services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/deactivate-guard.service */ "./src/app/services/deactivate-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'home', component: _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__["StartPageComponent"] },
    { path: 'menu', component: _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_3__["JoinOrCreatePageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'create', component: _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__["LobbyPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], canDeactivate: [_services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeactivateGuardService"]] },
    { path: 'join', component: _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_4__["JoinRoomPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: 'lobby/:name', component: _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__["LobbyPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], canDeactivate: [_services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeactivateGuardService"]] },
    { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"] },
    { path: 'play', component: _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__["GamePageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], canDeactivate: [_services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeactivateGuardService"]] },
    { path: 'player-games', component: _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_10__["PlayerGamesPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'test', component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header id=\"header\" *ngIf=\"router.url !== '/play' && router.url !== '/join' && router.url !== '/test'\"></app-header>\r\n<!--<app-side-menu id=\"side-menu\"  *ngIf=\"router.url !== '/play'\"></app-side-menu>-->\r\n<router-outlet></router-outlet>\r\n<app-footer id=\"footer\" *ngIf=\"router.url !== '/play' && router.url !== '/join' && router.url !== '/test'\"></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'scrabble';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/join-room-page/join-room-page.component */ "./src/app/pages/join-room-page/join-room-page.component.ts");
/* harmony import */ var _pages_create_room_page_create_room_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-room-page/create-room-page.component */ "./src/app/pages/create-room-page/create-room-page.component.ts");
/* harmony import */ var _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/join-or-create-page/join-or-create-page.component */ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _elements_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/loading-screen/loading-screen.component */ "./src/app/elements/loading-screen/loading-screen.component.ts");
/* harmony import */ var _elements_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/header/header.component */ "./src/app/elements/header/header.component.ts");
/* harmony import */ var _elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/footer/footer.component */ "./src/app/elements/footer/footer.component.ts");
/* harmony import */ var _elements_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/side-menu/side-menu.component */ "./src/app/elements/side-menu/side-menu.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _elements_scrabble_block_scrabble_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/scrabble-block/scrabble-block.component */ "./src/app/elements/scrabble-block/scrabble-block.component.ts");
/* harmony import */ var _elements_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/game-panel/game-panel.component */ "./src/app/elements/game-panel/game-panel.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/player-games-page/player-games-page.component */ "./src/app/pages/player-games-page/player-games-page.component.ts");
/* harmony import */ var _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/lobby-page/lobby-page.component */ "./src/app/pages/lobby-page/lobby-page.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_socket_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/socket-interceptor.service */ "./src/app/services/socket-interceptor.service.ts");
/* harmony import */ var _elements_loading_div_loading_div_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./elements/loading-div/loading-div.component */ "./src/app/elements/loading-div/loading-div.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"],
                _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_5__["JoinRoomPageComponent"],
                _pages_create_room_page_create_room_page_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoomPageComponent"],
                _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_7__["JoinOrCreatePageComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                _elements_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
                _elements_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _elements_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__["SideMenuComponent"],
                _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__["GamePageComponent"],
                _elements_scrabble_block_scrabble_block_component__WEBPACK_IMPORTED_MODULE_14__["ScrabbleBlockComponent"],
                _elements_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_15__["GamePanelComponent"],
                _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__["TestPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_18__["RegisterPageComponent"],
                _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_20__["PlayerGamesPageComponent"],
                _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_21__["LobbyPageComponent"],
                _elements_loading_div_loading_div_component__WEBPACK_IMPORTED_MODULE_24__["LoadingDivComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_22__["NgxPaginationModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_25__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].production }),
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _services_socket_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["SocketInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/elements/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/elements/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n  <hr width=\"304\" class=\"mb-4\">\r\n  <p class=\"mb-1\">&copy; 2019-2019 ZPI Enterprise</p>\r\n  <ul class=\"list-inline\">\r\n    <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n    <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n    <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n  </ul>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/elements/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/elements/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/elements/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td div{\r\n  /*width: 40px;*/\r\n  /*height: 40px;*/\r\n  /*min-width: 40px;*/\r\n  /*min-height: 40px;*/\r\n  /*max-width: 40px;*/\r\n  /*max-height: 40px;*/\r\n  width: 20px;\r\n  height: 16px ;\r\n  min-width: 20px ;\r\n  min-height: 16px ;\r\n  max-width: 20px ;\r\n  max-height: 16px ;\r\n}\r\n\r\n.visible {\r\n  visibility: visible;\r\n}\r\n\r\n.hidden{\r\n  visibility: hidden;\r\n}\r\n\r\n.player{\r\n  display: flex;\r\n  width: 300px;\r\n  height: 40px;\r\n  min-width: 230px;\r\n  min-height: 40px;\r\n  max-width: 230px;\r\n  max-height: 40px;\r\n  border: 3px solid #ccc;\r\n  border-radius: 16px;\r\n  padding: 5px;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.panel{\r\n  margin: 1px;\r\n}\r\n\r\n.name-box{\r\n  width: 150px;\r\n  border-right: 3px solid #ccc;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.point-box{\r\n  padding-left: 1px;\r\n}\r\n\r\n.button-panel{\r\n  display: flex;\r\n}\r\n\r\n.button-panel > div {\r\n  margin-right: 80px;\r\n  width: 50%;\r\n}\r\n\r\n.active-box{\r\n  border-color: #7bee6c;\r\n}\r\n\r\n.block{\r\n  width: 40px;\r\n  height: 40px;\r\n  min-width: 40px;\r\n  min-height: 40px;\r\n  max-width: 40px;\r\n  max-height: 40px;\r\n  padding-right: 2px;\r\n  /*to sa bloki z legendy*/\r\n  /*width: 20px;*/\r\n  /*height: 16px ;*/\r\n  /*min-width: 20px ;*/\r\n  /*min-height: 16px ;*/\r\n  /*max-width: 20px ;*/\r\n  /*max-height: 16px ;*/\r\n}\r\n\r\n.block-dl{\r\n  background-image: url(\"/assets/DL.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.block-tl{\r\n  background-image: url(\"/assets/TL.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.block-dw{\r\n  background-image: url(\"/assets/DW.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.block-tw{\r\n  background-image: url(\"/assets/TW.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.block-star{\r\n  background-image: url(\"/assets/STAR3.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.block-normal{\r\n  background-image: url(\"/assets/BG.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media (min-device-width: 300px) and (max-device-width: 409px) {\r\n  td div {\r\n    width: 22px;\r\n    height: 18px ;\r\n    min-width: 22px ;\r\n    min-height: 18px ;\r\n    max-width: 22px ;\r\n    max-height: 18px ;\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 410px) and (max-device-width: 439px) {\r\n  td div {\r\n    width: 24px;\r\n    height: 20px ;\r\n    min-width: 24px ;\r\n    min-height: 20px ;\r\n    max-width: 24px ;\r\n    max-height: 20px ;\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 440px) {\r\n  td div {\r\n    width: 26px;\r\n    height: 22px;\r\n    min-width: 26px;\r\n    min-height: 22px;\r\n    max-width: 26px;\r\n    max-height: 22px;\r\n  }\r\n}\r\n\r\n/*td div {*/\r\n\r\n/*width: 40px;*/\r\n\r\n/*height: 40px;*/\r\n\r\n/*min-width: 40px;*/\r\n\r\n/*min-height: 40px;*/\r\n\r\n/*max-width: 40px;*/\r\n\r\n/*max-height: 40px;*/\r\n\r\n/*}*/\r\n\r\n/*@media (min-device-width: 300px) and (max-device-width: 409px) {*/\r\n\r\n/*.block {*/\r\n\r\n/*width: 22px;*/\r\n\r\n/*height: 18px ;*/\r\n\r\n/*min-width: 22px ;*/\r\n\r\n/*min-height: 18px ;*/\r\n\r\n/*max-width: 22px ;*/\r\n\r\n/*max-height: 18px ;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\n/*@media (min-device-width: 410px) and (max-device-width: 439px) {*/\r\n\r\n/*.block {*/\r\n\r\n/*width: 24px;*/\r\n\r\n/*height: 20px ;*/\r\n\r\n/*min-width: 24px ;*/\r\n\r\n/*min-height: 20px ;*/\r\n\r\n/*max-width: 24px ;*/\r\n\r\n/*max-height: 20px ;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\n/*@media (min-device-width: 440px) {*/\r\n\r\n/*.block {*/\r\n\r\n/*width: 26px;*/\r\n\r\n/*height: 22px;*/\r\n\r\n/*min-width: 26px;*/\r\n\r\n/*min-height: 22px;*/\r\n\r\n/*max-width: 26px;*/\r\n\r\n/*max-height: 22px;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFJQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLFdBQVc7O0FBQ1QsZUFBZTs7QUFDZixnQkFBZ0I7O0FBQ2hCLG1CQUFtQjs7QUFDbkIsb0JBQW9COztBQUNwQixtQkFBbUI7O0FBQ25CLG9CQUFvQjs7QUFDdEIsSUFBSTs7QUFDSixtRUFBbUU7O0FBQ2pFLFdBQVc7O0FBQ1QsZUFBZTs7QUFDZixpQkFBaUI7O0FBQ2pCLG9CQUFvQjs7QUFDcEIscUJBQXFCOztBQUNyQixvQkFBb0I7O0FBQ3BCLHFCQUFxQjs7QUFDdkIsSUFBSTs7QUFFTixJQUFJOztBQUVKLG1FQUFtRTs7QUFDakUsV0FBVzs7QUFDVCxlQUFlOztBQUNmLGlCQUFpQjs7QUFDakIsb0JBQW9COztBQUNwQixxQkFBcUI7O0FBQ3JCLG9CQUFvQjs7QUFDcEIscUJBQXFCOztBQUN2QixJQUFJOztBQUVOLElBQUk7O0FBRUoscUNBQXFDOztBQUNuQyxXQUFXOztBQUNULGVBQWU7O0FBQ2YsZ0JBQWdCOztBQUNoQixtQkFBbUI7O0FBQ25CLG9CQUFvQjs7QUFDcEIsbUJBQW1COztBQUNuQixvQkFBb0I7O0FBQ3RCLElBQUk7O0FBQ04sSUFBSSIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2dhbWUtcGFuZWwvZ2FtZS1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQgZGl2e1xyXG4gIC8qd2lkdGg6IDQwcHg7Ki9cclxuICAvKmhlaWdodDogNDBweDsqL1xyXG4gIC8qbWluLXdpZHRoOiA0MHB4OyovXHJcbiAgLyptaW4taGVpZ2h0OiA0MHB4OyovXHJcbiAgLyptYXgtd2lkdGg6IDQwcHg7Ki9cclxuICAvKm1heC1oZWlnaHQ6IDQwcHg7Ki9cclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDE2cHggO1xyXG4gIG1pbi13aWR0aDogMjBweCA7XHJcbiAgbWluLWhlaWdodDogMTZweCA7XHJcbiAgbWF4LXdpZHRoOiAyMHB4IDtcclxuICBtYXgtaGVpZ2h0OiAxNnB4IDtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ucGxheWVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxuICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ucGFuZWx7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbi5uYW1lLWJveHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2NjYztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucG9pbnQtYm94e1xyXG4gIHBhZGRpbmctbGVmdDogMXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXBhbmVse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24tcGFuZWwgPiBkaXYge1xyXG4gIG1hcmdpbi1yaWdodDogODBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLmFjdGl2ZS1ib3h7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2JlZTZjO1xyXG59XHJcblxyXG4uYmxvY2t7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIG1heC13aWR0aDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAvKnRvIHNhIGJsb2tpIHogbGVnZW5keSovXHJcbiAgLyp3aWR0aDogMjBweDsqL1xyXG4gIC8qaGVpZ2h0OiAxNnB4IDsqL1xyXG4gIC8qbWluLXdpZHRoOiAyMHB4IDsqL1xyXG4gIC8qbWluLWhlaWdodDogMTZweCA7Ki9cclxuICAvKm1heC13aWR0aDogMjBweCA7Ki9cclxuICAvKm1heC1oZWlnaHQ6IDE2cHggOyovXHJcbn1cclxuXHJcbi5ibG9jay1kbHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0RMLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmxvY2stdGx7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9UTC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJsb2NrLWR3e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvRFcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5ibG9jay10d3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1RXLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmxvY2stc3RhcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1NUQVIzLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYmxvY2stbm9ybWFse1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvQkcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0MDlweCkge1xyXG4gIHRkIGRpdiB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMThweCA7XHJcbiAgICBtaW4td2lkdGg6IDIycHggO1xyXG4gICAgbWluLWhlaWdodDogMThweCA7XHJcbiAgICBtYXgtd2lkdGg6IDIycHggO1xyXG4gICAgbWF4LWhlaWdodDogMThweCA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA0MTBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0MzlweCkge1xyXG4gIHRkIGRpdiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjBweCA7XHJcbiAgICBtaW4td2lkdGg6IDI0cHggO1xyXG4gICAgbWluLWhlaWdodDogMjBweCA7XHJcbiAgICBtYXgtd2lkdGg6IDI0cHggO1xyXG4gICAgbWF4LWhlaWdodDogMjBweCA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA0NDBweCkge1xyXG4gIHRkIGRpdiB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1pbi13aWR0aDogMjZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXgtd2lkdGg6IDI2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyp0ZCBkaXYgeyovXHJcbiAgLyp3aWR0aDogNDBweDsqL1xyXG4gIC8qaGVpZ2h0OiA0MHB4OyovXHJcbiAgLyptaW4td2lkdGg6IDQwcHg7Ki9cclxuICAvKm1pbi1oZWlnaHQ6IDQwcHg7Ki9cclxuICAvKm1heC13aWR0aDogNDBweDsqL1xyXG4gIC8qbWF4LWhlaWdodDogNDBweDsqL1xyXG4vKn0qL1xyXG4vKkBtZWRpYSAobWluLWRldmljZS13aWR0aDogMzAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDA5cHgpIHsqL1xyXG4gIC8qLmJsb2NrIHsqL1xyXG4gICAgLyp3aWR0aDogMjJweDsqL1xyXG4gICAgLypoZWlnaHQ6IDE4cHggOyovXHJcbiAgICAvKm1pbi13aWR0aDogMjJweCA7Ki9cclxuICAgIC8qbWluLWhlaWdodDogMThweCA7Ki9cclxuICAgIC8qbWF4LXdpZHRoOiAyMnB4IDsqL1xyXG4gICAgLyptYXgtaGVpZ2h0OiAxOHB4IDsqL1xyXG4gIC8qfSovXHJcblxyXG4vKn0qL1xyXG5cclxuLypAbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDQxMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQzOXB4KSB7Ki9cclxuICAvKi5ibG9jayB7Ki9cclxuICAgIC8qd2lkdGg6IDI0cHg7Ki9cclxuICAgIC8qaGVpZ2h0OiAyMHB4IDsqL1xyXG4gICAgLyptaW4td2lkdGg6IDI0cHggOyovXHJcbiAgICAvKm1pbi1oZWlnaHQ6IDIwcHggOyovXHJcbiAgICAvKm1heC13aWR0aDogMjRweCA7Ki9cclxuICAgIC8qbWF4LWhlaWdodDogMjBweCA7Ki9cclxuICAvKn0qL1xyXG5cclxuLyp9Ki9cclxuXHJcbi8qQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA0NDBweCkgeyovXHJcbiAgLyouYmxvY2sgeyovXHJcbiAgICAvKndpZHRoOiAyNnB4OyovXHJcbiAgICAvKmhlaWdodDogMjJweDsqL1xyXG4gICAgLyptaW4td2lkdGg6IDI2cHg7Ki9cclxuICAgIC8qbWluLWhlaWdodDogMjJweDsqL1xyXG4gICAgLyptYXgtd2lkdGg6IDI2cHg7Ki9cclxuICAgIC8qbWF4LWhlaWdodDogMjJweDsqL1xyXG4gIC8qfSovXHJcbi8qfSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\">\r\n\r\n  <div style=\"display: inline-block; position: relative\">\r\n\r\n\r\n    <app-loading-div *ngIf=\"this.turnName!==this.authManager.userName\"></app-loading-div>\r\n\r\n    <div *ngIf=\"gameManager.letterPool.length>0\" style=\"margin-top: 5px\">\r\n      <table>\r\n        <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let item of gameManager.letterPool; let i = index\">\r\n            <div class=\"visible\" #block draggable=\"true\" (dragstart)=\"dragStart($event,block,item)\"\r\n                 (dragend)=\"dragEnd($event, block, i)\">\r\n              <app-scrabble-block *ngIf=\"item\" [letter]=\"item\"></app-scrabble-block>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"player\" *ngFor=\"let entry of points | keyvalue\">\r\n      <div class=\"name-box\">\r\n        {{entry.key === authManager.userName ? 'Ty' : entry.key}}\r\n      </div>\r\n      <div class=\"point-box\">\r\n        <b>{{entry.value}}</b>pkt\r\n      </div>\r\n    </div>\r\n    <div class=\"button-panel\">\r\n      <div>\r\n        <button class=\"btn btn-danger\" (click)=\"reset()\">Cofnij ruch</button>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary\" (click)=\"onMove()\">Wykonaj ruch</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"failInfo!==null\" style=\"margin-top: 2px\">\r\n      <h3 class=\"text-danger\">{{failInfo}}</h3>\r\n    </div>\r\n  </div>\r\n  <div style=\"margin-top: 30px; display: flex;\">\r\n    <!--<div style=\"padding-right: 10px\">-->\r\n      <!--<h3>Legenda: </h3>-->\r\n    <!--</div>-->\r\n    <div style=\"display: flex\">\r\n      <div class=\"block block-normal hint--bottom\" aria-label=\"Zwykłe pole\">\r\n\r\n      </div>\r\n      <div class=\"block block-star hint--bottom\" aria-label=\"Od tego bloku trzeba zacząć\">\r\n\r\n      </div>\r\n      <div class=\"block block-dl hint--bottom\" aria-label=\"Podwójna premia od litery\">\r\n\r\n      </div>\r\n      <div class=\"block block-tl hint--bottom\" aria-label=\"Potrójna premia od litery\">\r\n\r\n      </div>\r\n      <div class=\"block block-dw hint--bottom\" aria-label=\"Podwójna premia od słowa\">\r\n\r\n      </div>\r\n      <div class=\"block block-tw hint--bottom\" aria-label=\"Potrójna premia od słowa\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: GamePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePanelComponent", function() { return GamePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-manager.service */ "./src/app/services/game-manager.service.ts");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamePanelComponent = /** @class */ (function () {
    function GamePanelComponent(gameManager, authManager) {
        this.gameManager = gameManager;
        this.authManager = authManager;
    }
    GamePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameManager.emitter.subscribe(function (next) {
            _this.failInfo = next.failInfo;
        });
    };
    GamePanelComponent.prototype.dragStart = function (event, block, item) {
        this.gameManager.setCorrectDraggable(true);
        setTimeout(function () { return block.className = 'hidden'; }, 0);
        event.dataTransfer.setData('scrabbleBlock', JSON.stringify(item));
    };
    GamePanelComponent.prototype.dragEnd = function (event, block, i) {
        this.gameManager.setCorrectDraggable(false);
        if (event.dataTransfer.dropEffect === 'none') {
            block.className = 'visible';
        }
        else {
            this.gameManager.addUnconfirmedBlock(this.gameManager.letterPool[i]);
            this.gameManager.letterPool[i] = null;
        }
    };
    GamePanelComponent.prototype.reset = function () {
        this.failInfo = null;
        for (var i = 0; i < this.gameManager.letterPool.length; i++) {
            if (this.gameManager.letterPool[i] === null) {
                var block = this.gameManager.getUnconfirmedBlocks().pop();
                block ? this.gameManager.letterPool[i] = block : console.log('przypal z resetem');
            }
        }
        if (this.gameManager.getUnconfirmedBlocks().length !== 0) {
            console.log('przypal z resetem');
        }
        else {
            this.gameManager.resetUnconfirmed();
        }
    };
    GamePanelComponent.prototype.onMove = function () {
        this.failInfo = null;
        this.gameManager.move();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], GamePanelComponent.prototype, "points", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GamePanelComponent.prototype, "turnName", void 0);
    GamePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-panel',
            template: __webpack_require__(/*! ./game-panel.component.html */ "./src/app/elements/game-panel/game-panel.component.html"),
            styles: [__webpack_require__(/*! ./game-panel.component.css */ "./src/app/elements/game-panel/game-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"], _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"]])
    ], GamePanelComponent);
    return GamePanelComponent;
}());



/***/ }),

/***/ "./src/app/elements/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-row{\r\n  width: 504px;\r\n  height: 500px;\r\n}\r\n\r\n.h-cell{\r\n  width: 14%;\r\n  height: 50%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaC1yb3d7XHJcbiAgd2lkdGg6IDUwNHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5oLWNlbGx7XHJcbiAgd2lkdGg6IDE0JTtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 text-center justify-content-center\" id=\"header\">\r\n  <img src=\"assets/scaledlogo.png\" routerLink=\"/menu\" width=\"360\" height=\"200\" />\r\n  <hr width=\"304\" class=\"mb-4\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/elements/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.test = [
            [new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('S'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('C'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('R'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('A'),
                new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('B'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('B'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('L'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('E')],
            [new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('O'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('N'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('L'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('I'),
                new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('N'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('E')]
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/elements/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/elements/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/elements/loading-div/loading-div.component.css":
/*!****************************************************************!*\
  !*** ./src/app/elements/loading-div/loading-div.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-div{\r\n  top:0;\r\n  left:0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  background-color: rgba(0,0,0,0.5);\r\n  z-index: 1001;\r\n}\r\n\r\n.image{\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvbG9hZGluZy1kaXYvbG9hZGluZy1kaXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLEtBQUs7RUFDTCxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9sb2FkaW5nLWRpdi9sb2FkaW5nLWRpdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctZGl2e1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/elements/loading-div/loading-div.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/loading-div/loading-div.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-div text-center\">\r\n  <p style=\"color: #fff; text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\"><b>Oczekiwanie na ruch przeciwnika</b></p>\r\n  <img class=\"image\" width=\"50px\" height=\"50px\" src=\"assets/animations/loader-min.svg\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/elements/loading-div/loading-div.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/loading-div/loading-div.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDivComponent", function() { return LoadingDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingDivComponent = /** @class */ (function () {
    function LoadingDivComponent() {
    }
    LoadingDivComponent.prototype.ngOnInit = function () {
    };
    LoadingDivComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-div',
            template: __webpack_require__(/*! ./loading-div.component.html */ "./src/app/elements/loading-div/loading-div.component.html"),
            styles: [__webpack_require__(/*! ./loading-div.component.css */ "./src/app/elements/loading-div/loading-div.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingDivComponent);
    return LoadingDivComponent;
}());



/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-screen{\r\n  top:0;\r\n  left:0;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  background-color: rgba(0,0,0,0.5);\r\n  z-index: 1001;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLEtBQUs7RUFDTCxNQUFNO0VBQ04sZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNjcmVlbntcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-screen text-center\">\r\n  <img class=\"mtop-20\" src=\"assets/animations/loader-min.svg\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent() {
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
    };
    LoadingScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-screen',
            template: __webpack_require__(/*! ./loading-screen.component.html */ "./src/app/elements/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__(/*! ./loading-screen.component.css */ "./src/app/elements/loading-screen/loading-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scrabbleBlock{\r\n  z-index: 5;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  max-height: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #f6e1a6;\r\n  background:-webkit-gradient(linear, 100% 100%, 0% 5%, from(#d8bd72), to(#fae1a6));\r\n  border-radius: 7px;\r\n  box-shadow:0px 0px 5px #a000;\r\n  float: left;\r\n  text-align: center;\r\n  border-top-width: 1px;\r\n  border-right-width: 4px;\r\n  border-bottom-width: 4px;\r\n  border-left-width: 1px;\r\n  border-top-style: solid;\r\n  border-right-style: solid;\r\n  border-bottom-style: solid;\r\n  border-left-style: solid;\r\n  border-top-color: #f8e6b1;\r\n  border-right-color: #f8e6b1;\r\n  border-bottom-color: #cab06b;\r\n  border-left-color: #f8e6b1;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n\r\n}\r\n\r\n#points{\r\n  text-align: end;\r\n  text-align: right;\r\n  font-size: 1em;\r\n  min-height: 5%;\r\n  max-height: 5%;\r\n  height: 5%;\r\n  font-size: 0.6em;\r\n  font-weight: bold;\r\n  font-family: 'Asap', serif;\r\n  color: #272832;\r\n  text-shadow:1px 1px 0px #ddd3b7;\r\n  margin: 0px;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n}\r\n\r\n#letter{\r\n  text-align: center;\r\n  font-size: 1.8em;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  min-height: 5%;\r\n  max-height: 5%;\r\n  height: 5%;\r\n  font-family: 'Asap', serif;\r\n  color: #272832;\r\n  text-shadow:1px 1px 0px #fff5d7;\r\n  margin: 0px;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n}\r\n\r\n/*@media all {*/\r\n\r\n/*#scrabbleBlock{height: 70%}*/\r\n\r\n/*#scrabbleBlock{width: 70%}*/\r\n\r\n/*#points{font-size: 5em}*/\r\n\r\n/*#letter{font-size: 20em}*/\r\n\r\n/*}*/\r\n\r\n/*@media (max-device-width: 500px) {*/\r\n\r\n/*#scrabbleBlock{height: 50%}*/\r\n\r\n/*#scrabbleBlock{width: 50%}*/\r\n\r\n/*#points{font-size: 1em}*/\r\n\r\n/*#letter{font-size: 2em}*/\r\n\r\n/*}*/\r\n\r\n/*@media (device-width: 360px) {*/\r\n\r\n/*#scrabbleBlock{height: 10%}*/\r\n\r\n/*#scrabbleBlock{width: 10%}*/\r\n\r\n/*#points{font-size: 1.9em}*/\r\n\r\n/*#letter{font-size: 2.9em}*/\r\n\r\n/*}*/\r\n\r\n@media (max-device-width: 300px) {\r\n  /*#scrabbleBlock{height: 20%}*/\r\n  /*#scrabbleBlock{width: 20%}*/\r\n  #points{font-size: 0.4em}\r\n  #letter{font-size: 0.8em}\r\n}\r\n\r\n@media (min-device-width: 300px) and (max-device-width: 409px) {\r\n  #points{font-size: 0.55em}\r\n  #letter{font-size: 0.95em}\r\n\r\n}\r\n\r\n@media (min-device-width: 410px) and (max-device-width: 439px) {\r\n  #points{font-size: 0.65em}\r\n  #letter{font-size: 1.05em}\r\n\r\n}\r\n\r\n@media (min-device-width: 440px) {\r\n  #points{font-size: 0.75em}\r\n  #letter{font-size: 1.15em}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvc2NyYWJibGUtYmxvY2svc2NyYWJibGUtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUZBQWlGO0VBR2pGLGtCQUFrQjtFQUdsQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLHFCQUFpQjtNQUFqQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUEsZUFBZTs7QUFDYiw4QkFBOEI7O0FBQzlCLDZCQUE2Qjs7QUFDN0IsMEJBQTBCOztBQUMxQiwyQkFBMkI7O0FBRTdCLElBQUk7O0FBRUoscUNBQXFDOztBQUNuQyw4QkFBOEI7O0FBQzlCLDZCQUE2Qjs7QUFDN0IsMEJBQTBCOztBQUMxQiwwQkFBMEI7O0FBRTVCLElBQUk7O0FBQ0osaUNBQWlDOztBQUMvQiw4QkFBOEI7O0FBQzlCLDZCQUE2Qjs7QUFDN0IsNEJBQTRCOztBQUM1Qiw0QkFBNEI7O0FBRTlCLElBQUk7O0FBRUo7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLFFBQVEsZ0JBQWdCO0VBQ3hCLFFBQVEsZ0JBQWdCO0FBQzFCOztBQUNBO0VBQ0UsUUFBUSxpQkFBaUI7RUFDekIsUUFBUSxpQkFBaUI7O0FBRTNCOztBQUVBO0VBQ0UsUUFBUSxpQkFBaUI7RUFDekIsUUFBUSxpQkFBaUI7O0FBRTNCOztBQUVBO0VBQ0UsUUFBUSxpQkFBaUI7RUFDekIsUUFBUSxpQkFBaUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9zY3JhYmJsZS1ibG9jay9zY3JhYmJsZS1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjcmFiYmxlQmxvY2t7XHJcbiAgei1pbmRleDogNTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZTFhNjtcclxuICBiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAxMDAlIDEwMCUsIDAlIDUlLCBmcm9tKCNkOGJkNzIpLCB0bygjZmFlMWE2KSk7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC1tb3otYm94LXNoYWRvdzowcHggM3B4IDVweCAjMDAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzowcHggM3B4IDVweCAjMDAwO1xyXG4gIGJveC1zaGFkb3c6MHB4IDBweCA1cHggI2EwMDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjZjhlNmIxO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y4ZTZiMTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2FiMDZiO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjhlNmIxO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbn1cclxuXHJcbiNwb2ludHN7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1pbi1oZWlnaHQ6IDUlO1xyXG4gIG1heC1oZWlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ0FzYXAnLCBzZXJpZjtcclxuICBjb2xvcjogIzI3MjgzMjtcclxuICB0ZXh0LXNoYWRvdzoxcHggMXB4IDBweCAjZGRkM2I3O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI2xldHRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1pbi1oZWlnaHQ6IDUlO1xyXG4gIG1heC1oZWlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNSU7XHJcbiAgZm9udC1mYW1pbHk6ICdBc2FwJywgc2VyaWY7XHJcbiAgY29sb3I6ICMyNzI4MzI7XHJcbiAgdGV4dC1zaGFkb3c6MXB4IDFweCAwcHggI2ZmZjVkNztcclxuICBtYXJnaW46IDBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qQG1lZGlhIGFsbCB7Ki9cclxuICAvKiNzY3JhYmJsZUJsb2Nre2hlaWdodDogNzAlfSovXHJcbiAgLyojc2NyYWJibGVCbG9ja3t3aWR0aDogNzAlfSovXHJcbiAgLyojcG9pbnRze2ZvbnQtc2l6ZTogNWVtfSovXHJcbiAgLyojbGV0dGVye2ZvbnQtc2l6ZTogMjBlbX0qL1xyXG5cclxuLyp9Ki9cclxuXHJcbi8qQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA1MDBweCkgeyovXHJcbiAgLyojc2NyYWJibGVCbG9ja3toZWlnaHQ6IDUwJX0qL1xyXG4gIC8qI3NjcmFiYmxlQmxvY2t7d2lkdGg6IDUwJX0qL1xyXG4gIC8qI3BvaW50c3tmb250LXNpemU6IDFlbX0qL1xyXG4gIC8qI2xldHRlcntmb250LXNpemU6IDJlbX0qL1xyXG5cclxuLyp9Ki9cclxuLypAbWVkaWEgKGRldmljZS13aWR0aDogMzYwcHgpIHsqL1xyXG4gIC8qI3NjcmFiYmxlQmxvY2t7aGVpZ2h0OiAxMCV9Ki9cclxuICAvKiNzY3JhYmJsZUJsb2Nre3dpZHRoOiAxMCV9Ki9cclxuICAvKiNwb2ludHN7Zm9udC1zaXplOiAxLjllbX0qL1xyXG4gIC8qI2xldHRlcntmb250LXNpemU6IDIuOWVtfSovXHJcblxyXG4vKn0qL1xyXG5cclxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiAzMDBweCkge1xyXG4gIC8qI3NjcmFiYmxlQmxvY2t7aGVpZ2h0OiAyMCV9Ki9cclxuICAvKiNzY3JhYmJsZUJsb2Nre3dpZHRoOiAyMCV9Ki9cclxuICAjcG9pbnRze2ZvbnQtc2l6ZTogMC40ZW19XHJcbiAgI2xldHRlcntmb250LXNpemU6IDAuOGVtfVxyXG59XHJcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogMzAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDA5cHgpIHtcclxuICAjcG9pbnRze2ZvbnQtc2l6ZTogMC41NWVtfVxyXG4gICNsZXR0ZXJ7Zm9udC1zaXplOiAwLjk1ZW19XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi1kZXZpY2Utd2lkdGg6IDQxMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQzOXB4KSB7XHJcbiAgI3BvaW50c3tmb250LXNpemU6IDAuNjVlbX1cclxuICAjbGV0dGVye2ZvbnQtc2l6ZTogMS4wNWVtfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA0NDBweCkge1xyXG4gICNwb2ludHN7Zm9udC1zaXplOiAwLjc1ZW19XHJcbiAgI2xldHRlcntmb250LXNpemU6IDEuMTVlbX1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scrabbleBlock\">\r\n  <div id=\"letter\">\r\n    {{letter.character}}\r\n  </div>\r\n\r\n  <div id=\"points\" *ngIf=\"letter.points!=-1\">\r\n    {{letter.points}}\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: ScrabbleBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrabbleBlockComponent", function() { return ScrabbleBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrabbleBlockComponent = /** @class */ (function () {
    function ScrabbleBlockComponent() {
        this.letter = null;
    }
    ScrabbleBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"])
    ], ScrabbleBlockComponent.prototype, "letter", void 0);
    ScrabbleBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrabble-block',
            template: __webpack_require__(/*! ./scrabble-block.component.html */ "./src/app/elements/scrabble-block/scrabble-block.component.html"),
            styles: [__webpack_require__(/*! ./scrabble-block.component.css */ "./src/app/elements/scrabble-block/scrabble-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrabbleBlockComponent);
    return ScrabbleBlockComponent;
}());



/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\r\n@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa {\r\n  position: relative;\r\n  display: table-cell;\r\n  width: 60px;\r\n  height: 36px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 20px;\r\n}\r\n.main-menu:hover, nav.main-menu.expanded {\r\n  width: 250px;\r\n  overflow: visible;\r\n  z-index: 1000;\r\n}\r\n.main-menu {\r\n  background: #212121;\r\n  border-right: 1px solid #e5e5e5;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  left: 0;\r\n  width: 60px;\r\n  overflow: hidden;\r\n  transition: width .05s linear;\r\n  -webkit-transform: translateZ(0) scale(1, 1);\r\n}\r\n.main-menu > ul {\r\n  margin: 7px 0;\r\n}\r\n.main-menu li {\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.main-menu li > a {\r\n  position: relative;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  color: #999;\r\n  font-family: arial;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  -webkit-transform: translateZ(0) scale(1, 1);\r\n  transition: all .1s linear;\r\n\r\n}\r\n.main-menu .nav-icon {\r\n  position: relative;\r\n  display: table-cell;\r\n  width: 60px;\r\n  height: 36px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 18px;\r\n}\r\n.main-menu .nav-text {\r\n  position: relative;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 190px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.main-menu > ul.logout {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\na:hover, a:focus {\r\n  text-decoration: none;\r\n}\r\nnav {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\nnav ul, nav li {\r\n  outline: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSxzRUFBc0U7QUFDdEU7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsNkJBQTZCO0VBQzdCLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiw0Q0FBNEM7RUFFNUMsMEJBQTBCOztBQUU1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UaXRpbGxpdW0rV2ViOjMwMCk7XHJcbi5mYS0yeCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLm1haW4tbWVudTpob3ZlciwgbmF2Lm1haW4tbWVudS5leHBhbmRlZCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUge1xyXG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjA1cyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggLjA1cyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSwgMSk7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgPiB1bCB7XHJcbiAgbWFyZ2luOiA3cHggMDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSA+IGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEsIDEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XHJcblxyXG59XHJcblxyXG4ubWFpbi1tZW51IC5uYXYtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1haW4tbWVudSAubmF2LXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgPiB1bC5sb2dvdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuYTpob3ZlciwgYTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbm5hdiB1bCwgbmF2IGxpIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpOmhvdmVyID4gYSwgbmF2Lm1haW4tbWVudSBsaS5hY3RpdmUgPiBhLCAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMsIC5uby10b3VjaCAuZGFzaGJvYXJkLXBhZ2UgbmF2LmRhc2hib2FyZC1tZW51IHVsIGxpOmhvdmVyIGEsIC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"http://justinfarrow.com\">\r\n        <!--18.56x20-->\r\n        <i class=\"fa fa-home fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Strona startowa\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"has-subnav\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-laptop fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Stars Components\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"has-subnav\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-list fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Forms\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li class=\"has-subnav\">\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-folder-open fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Pages\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-bar-chart-o fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Graphs and Statistics\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-font fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Quotes\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-table fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Tables\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-map-marker fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Maps\r\n        </span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-info fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Documentation\r\n        </span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"logout\">\r\n    <li>\r\n      <a href=\"#\">\r\n        <i class=\"fa fa-power-off fa-2x\"></i>\r\n        <span class=\"nav-text\">\r\n          Logout\r\n        </span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/elements/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/elements/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/models/CanDeactivate.ts":
/*!*****************************************!*\
  !*** ./src/app/models/CanDeactivate.ts ***!
  \*****************************************/
/*! exports provided: CanDeactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivate", function() { return CanDeactivate; });
var CanDeactivate = /** @class */ (function () {
    function CanDeactivate() {
    }
    return CanDeactivate;
}());



/***/ }),

/***/ "./src/app/models/Letter.ts":
/*!**********************************!*\
  !*** ./src/app/models/Letter.ts ***!
  \**********************************/
/*! exports provided: Letter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Letter", function() { return Letter; });
var Letter = /** @class */ (function () {
    function Letter(_character, _points) {
        if (_points === void 0) { _points = -1; }
        this._character = _character;
        this._points = _points;
        if (this._points === -1) {
            this.assignPoints();
        }
    }
    Object.defineProperty(Letter.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Letter.prototype, "character", {
        get: function () {
            return this._character;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Letter.prototype, "points2", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Letter.prototype, "character2", {
        get: function () {
            return this._character;
        },
        enumerable: true,
        configurable: true
    });
    Letter.prototype.assignPoints = function () {
        if (this._character === 'A' || this._character === 'E' || this._character === 'I' || this._character === 'N'
            || this._character === 'O' || this._character === 'R' || this._character === 'S' || this._character === 'W'
            || this._character === 'Z') {
            this._points = 1;
        }
        else if (this._character === 'C' || this._character === 'D' || this._character === 'K'
            || this._character === 'L' || this._character === 'M' || this._character === 'P'
            || this._character === 'T'
            || this._character === 'Y') {
            this._points = 2;
        }
        else if (this._character === 'B' || this._character === 'G' || this._character === 'H'
            || this._character === 'J' || this._character === 'Ł' || this._character === 'U') {
            this._points = 3;
        }
        else if (this._character === 'Ą' || this._character === 'Ę' || this._character === 'F'
            || this._character === 'Ó' || this._character === 'Ś' || this._character === 'Ż') {
            this._points = 5;
        }
        else if (this._character === 'Ć') {
            this._points = 6;
        }
        else if (this._character === 'Ń') {
            this._points = 7;
        }
        else if (this._character === 'Ź') {
            this._points = 9;
        }
        else {
            this._points = -1;
        }
    };
    return Letter;
}());



/***/ }),

/***/ "./src/app/models/Result.ts":
/*!**********************************!*\
  !*** ./src/app/models/Result.ts ***!
  \**********************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
var Result = /** @class */ (function () {
    function Result(_hasFinished, _hasFailed) {
        this._hasFinished = _hasFinished;
        this._hasFailed = _hasFailed;
    }
    Object.defineProperty(Result.prototype, "hasFinished", {
        get: function () {
            return this._hasFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "hasFailed", {
        get: function () {
            return this._hasFailed;
        },
        enumerable: true,
        configurable: true
    });
    return Result;
}());



/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yb29tLXBhZ2UvY3JlYXRlLXJvb20tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-2 mb-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n          <span class=\"text-muted\">Your cart</span>\r\n          <span class=\"badge badge-secondary badge-pill\">3</span>\r\n        </h4>\r\n        <ul class=\"list-group mb-3\">\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Product name</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$12</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Second product</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$8</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Third item</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$5</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\r\n            <div class=\"text-success\">\r\n              <h6 class=\"my-0\">Promo code</h6>\r\n              <small>EXAMPLECODE</small>\r\n            </div>\r\n            <span class=\"text-success\">-$5</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between\">\r\n            <span>Total (USD)</span>\r\n            <strong>$20</strong>\r\n          </li>\r\n        </ul>\r\n\r\n        <form class=\"card p-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\r\n            <div class=\"input-group-append\">\r\n              <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-8 order-md-1\">\r\n        <h4 class=\"mb-3\">Billing address</h4>\r\n        <form class=\"needs-validation\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"firstName\">First name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid first name is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"lastName\">Last name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid last name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"username\">Username</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">@</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\r\n              <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                Your username is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\r\n            <div class=\"invalid-feedback\">\r\n              Please enter a valid email address for shipping updates.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address\">Address</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please enter your shipping address.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 mb-3\">\r\n              <label for=\"country\">Country</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"country\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>United States</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please select a valid country.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n              <label for=\"state\">State</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"state\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>California</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"zip\">Zip</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Zip code required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\r\n            <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing\r\n              address</label>\r\n          </div>\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\r\n            <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n\r\n          <h4 class=\"mb-3\">Payment</h4>\r\n\r\n          <div class=\"d-block my-3\">\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\r\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-name\">Name on card</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\r\n              <small class=\"text-muted\">Full name as displayed on card</small>\r\n              <div class=\"invalid-feedback\">\r\n                Name on card is required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-number\">Credit card number</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Credit card number is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">Expiration</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Expiration date required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">CVV</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Security code required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <button class=\"btn btn-danger btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateRoomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomPageComponent", function() { return CreateRoomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateRoomPageComponent = /** @class */ (function () {
    function CreateRoomPageComponent() {
    }
    CreateRoomPageComponent.prototype.ngOnInit = function () {
    };
    CreateRoomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-room-page',
            template: __webpack_require__(/*! ./create-room-page.component.html */ "./src/app/pages/create-room-page/create-room-page.component.html"),
            styles: [__webpack_require__(/*! ./create-room-page.component.css */ "./src/app/pages/create-room-page/create-room-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateRoomPageComponent);
    return CreateRoomPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n  border: 2px solid gray;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border: 3px solid black;\r\n  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);\r\n\r\n}\r\n\r\ntd div {\r\n  width: 20px;\r\n  height: 16px ;\r\n  min-width: 20px ;\r\n  min-height: 16px ;\r\n  max-width: 20px ;\r\n  max-height: 16px ;\r\n}\r\n\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-image: url(\"/assets/BG.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\ntr:nth-child(8) td:nth-child(8) {\r\n  background-image: url(\"/assets/STAR3.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*TRIPLE WORD SCORE*/\r\n\r\ntr:nth-child(1) td:nth-child(1), tr:nth-child(1) td:nth-child(8), tr:nth-child(1) td:nth-child(15),\r\ntr:nth-child(8) td:nth-child(1), tr:nth-child(8) td:nth-child(15),\r\ntr:nth-child(15) td:nth-child(1), tr:nth-child(15) td:nth-child(8), tr:nth-child(15) td:nth-child(15)\r\n{\r\n  background-image: url(\"/assets/TW.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*DOUBLE WORD SCORE*/\r\n\r\ntr:nth-child(2) td:nth-child(2), tr:nth-child(2) td:nth-child(14),\r\ntr:nth-child(3) td:nth-child(3), tr:nth-child(3) td:nth-child(13),\r\ntr:nth-child(4) td:nth-child(4), tr:nth-child(4) td:nth-child(12),\r\ntr:nth-child(5) td:nth-child(5), tr:nth-child(5) td:nth-child(11),\r\ntr:nth-last-child(2) td:nth-child(2), tr:nth-last-child(2) td:nth-child(14),\r\ntr:nth-last-child(3) td:nth-child(3), tr:nth-last-child(3) td:nth-child(13),\r\ntr:nth-last-child(4) td:nth-child(4), tr:nth-last-child(4) td:nth-child(12),\r\ntr:nth-last-child(5) td:nth-child(5), tr:nth-last-child(5) td:nth-child(11){\r\n  background-image: url(\"/assets/DW.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*TRIPLE LETTER SCORE*/\r\n\r\ntr:nth-child(2) td:nth-child(6), tr:nth-child(2) td:nth-child(10),\r\ntr:nth-child(6) td:nth-child(2), tr:nth-child(6) td:nth-child(6), tr:nth-child(6) td:nth-child(10), tr:nth-child(6) td:nth-child(14),\r\ntr:nth-child(10) td:nth-child(2), tr:nth-child(10) td:nth-child(6), tr:nth-child(10) td:nth-child(10), tr:nth-child(10) td:nth-child(14),\r\ntr:nth-last-child(2) td:nth-child(6), tr:nth-last-child(2) td:nth-child(10){\r\n  background-image: url(\"/assets/TL.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*DOUBLE LETTER SCORE*/\r\n\r\ntr:nth-child(1) td:nth-child(4),tr:nth-child(1) td:nth-last-child(4),\r\ntr:nth-child(3) td:nth-child(7),tr:nth-child(3) td:nth-child(9),\r\ntr:nth-child(4) td:nth-child(1),tr:nth-child(4) td:nth-child(8),tr:nth-child(4) td:nth-child(15),\r\ntr:nth-child(7) td:nth-child(3), tr:nth-child(7) td:nth-child(7),tr:nth-child(7) td:nth-child(9),tr:nth-child(7) td:nth-last-child(3),\r\ntr:nth-child(8) td:nth-child(4), tr:nth-child(8) td:nth-last-child(4),\r\ntr:nth-child(9) td:nth-child(3), tr:nth-child(9) td:nth-child(7),tr:nth-child(9) td:nth-child(9),tr:nth-child(9) td:nth-last-child(3),\r\ntr:nth-child(12) td:nth-child(1),tr:nth-child(12) td:nth-child(8),tr:nth-child(12) td:nth-child(15),\r\ntr:nth-child(13) td:nth-child(7),tr:nth-child(13) td:nth-child(9),\r\ntr:nth-child(15) td:nth-child(4),tr:nth-child(15) td:nth-last-child(4)\r\n{\r\n  background-image: url(\"/assets/DL.png\");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nh3 {\r\n  text-align: left;\r\n}\r\n\r\n#game-container {\r\n  margin-top: 0.1em;\r\n  margin-bottom: 0.2em;\r\n  margin-left: 0.1em;\r\n}\r\n\r\n.over {\r\n  border: dashed #7bee6c 2px;\r\n  background-color: rgba(46, 96, 40, 0.5);\r\n}\r\n\r\n.wrong {\r\n  border: solid red 2px;\r\n}\r\n\r\n@media (min-device-width: 380px) and (max-device-width: 409px) {\r\n  td div {\r\n    width: 22px;\r\n    height: 18px ;\r\n    min-width: 22px ;\r\n    min-height: 18px ;\r\n    max-width: 22px ;\r\n    max-height: 18px ;\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 410px) and (max-device-width: 439px) {\r\n  td div {\r\n    width: 24px;\r\n    height: 20px ;\r\n    min-width: 24px ;\r\n    min-height: 20px ;\r\n    max-width: 24px ;\r\n    max-height: 20px ;\r\n  }\r\n\r\n}\r\n\r\n@media (min-device-width: 440px) {\r\n  td div {\r\n    width: 26px;\r\n    height: 22px;\r\n    min-width: 26px;\r\n    min-height: 22px;\r\n    max-width: 26px;\r\n    max-height: 22px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS1wYWdlL2dhbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7O0FBRTdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsb0JBQW9COztBQUNwQjs7OztFQUlFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBLG9CQUFvQjs7QUFDcEI7Ozs7Ozs7O0VBUUUsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsc0JBQXNCOztBQUN0Qjs7OztFQUlFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBLHNCQUFzQjs7QUFDdEI7Ozs7Ozs7Ozs7RUFVRSx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS1wYWdlL2dhbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjUpO1xyXG5cclxufVxyXG5cclxudGQgZGl2IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDE2cHggO1xyXG4gIG1pbi13aWR0aDogMjBweCA7XHJcbiAgbWluLWhlaWdodDogMTZweCA7XHJcbiAgbWF4LXdpZHRoOiAyMHB4IDtcclxuICBtYXgtaGVpZ2h0OiAxNnB4IDtcclxufVxyXG5cclxudGQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvQkcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZCg4KSB0ZDpudGgtY2hpbGQoOCkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvU1RBUjMucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi8qVFJJUExFIFdPUkQgU0NPUkUqL1xyXG50cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDEpLCB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDgpLCB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDE1KSxcclxudHI6bnRoLWNoaWxkKDgpIHRkOm50aC1jaGlsZCgxKSwgdHI6bnRoLWNoaWxkKDgpIHRkOm50aC1jaGlsZCgxNSksXHJcbnRyOm50aC1jaGlsZCgxNSkgdGQ6bnRoLWNoaWxkKDEpLCB0cjpudGgtY2hpbGQoMTUpIHRkOm50aC1jaGlsZCg4KSwgdHI6bnRoLWNoaWxkKDE1KSB0ZDpudGgtY2hpbGQoMTUpXHJcbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1RXLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4vKkRPVUJMRSBXT1JEIFNDT1JFKi9cclxudHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCgxNCksXHJcbnRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoMyksIHRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoMTMpLFxyXG50cjpudGgtY2hpbGQoNCkgdGQ6bnRoLWNoaWxkKDQpLCB0cjpudGgtY2hpbGQoNCkgdGQ6bnRoLWNoaWxkKDEyKSxcclxudHI6bnRoLWNoaWxkKDUpIHRkOm50aC1jaGlsZCg1KSwgdHI6bnRoLWNoaWxkKDUpIHRkOm50aC1jaGlsZCgxMSksXHJcbnRyOm50aC1sYXN0LWNoaWxkKDIpIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWxhc3QtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDE0KSxcclxudHI6bnRoLWxhc3QtY2hpbGQoMykgdGQ6bnRoLWNoaWxkKDMpLCB0cjpudGgtbGFzdC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoMTMpLFxyXG50cjpudGgtbGFzdC1jaGlsZCg0KSB0ZDpudGgtY2hpbGQoNCksIHRyOm50aC1sYXN0LWNoaWxkKDQpIHRkOm50aC1jaGlsZCgxMiksXHJcbnRyOm50aC1sYXN0LWNoaWxkKDUpIHRkOm50aC1jaGlsZCg1KSwgdHI6bnRoLWxhc3QtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDExKXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0RXLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4vKlRSSVBMRSBMRVRURVIgU0NPUkUqL1xyXG50cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDYpLCB0cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDEwKSxcclxudHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KSwgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCgxMCksIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoMTQpLFxyXG50cjpudGgtY2hpbGQoMTApIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWNoaWxkKDEwKSB0ZDpudGgtY2hpbGQoNiksIHRyOm50aC1jaGlsZCgxMCkgdGQ6bnRoLWNoaWxkKDEwKSwgdHI6bnRoLWNoaWxkKDEwKSB0ZDpudGgtY2hpbGQoMTQpLFxyXG50cjpudGgtbGFzdC1jaGlsZCgyKSB0ZDpudGgtY2hpbGQoNiksIHRyOm50aC1sYXN0LWNoaWxkKDIpIHRkOm50aC1jaGlsZCgxMCl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9UTC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLypET1VCTEUgTEVUVEVSIFNDT1JFKi9cclxudHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg0KSx0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWxhc3QtY2hpbGQoNCksXHJcbnRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDMpIHRkOm50aC1jaGlsZCg5KSxcclxudHI6bnRoLWNoaWxkKDQpIHRkOm50aC1jaGlsZCgxKSx0cjpudGgtY2hpbGQoNCkgdGQ6bnRoLWNoaWxkKDgpLHRyOm50aC1jaGlsZCg0KSB0ZDpudGgtY2hpbGQoMTUpLFxyXG50cjpudGgtY2hpbGQoNykgdGQ6bnRoLWNoaWxkKDMpLCB0cjpudGgtY2hpbGQoNykgdGQ6bnRoLWNoaWxkKDcpLHRyOm50aC1jaGlsZCg3KSB0ZDpudGgtY2hpbGQoOSksdHI6bnRoLWNoaWxkKDcpIHRkOm50aC1sYXN0LWNoaWxkKDMpLFxyXG50cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWNoaWxkKDQpLCB0cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWxhc3QtY2hpbGQoNCksXHJcbnRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQoMyksIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZCg5KSx0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWxhc3QtY2hpbGQoMyksXHJcbnRyOm50aC1jaGlsZCgxMikgdGQ6bnRoLWNoaWxkKDEpLHRyOm50aC1jaGlsZCgxMikgdGQ6bnRoLWNoaWxkKDgpLHRyOm50aC1jaGlsZCgxMikgdGQ6bnRoLWNoaWxkKDE1KSxcclxudHI6bnRoLWNoaWxkKDEzKSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDEzKSB0ZDpudGgtY2hpbGQoOSksXHJcbnRyOm50aC1jaGlsZCgxNSkgdGQ6bnRoLWNoaWxkKDQpLHRyOm50aC1jaGlsZCgxNSkgdGQ6bnRoLWxhc3QtY2hpbGQoNClcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvREwucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jZ2FtZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDAuMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjFlbTtcclxufVxyXG5cclxuLm92ZXIge1xyXG4gIGJvcmRlcjogZGFzaGVkICM3YmVlNmMgMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDk2LCA0MCwgMC41KTtcclxufVxyXG5cclxuLndyb25nIHtcclxuICBib3JkZXI6IHNvbGlkIHJlZCAycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogMzgwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDA5cHgpIHtcclxuICB0ZCBkaXYge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDE4cHggO1xyXG4gICAgbWluLXdpZHRoOiAyMnB4IDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4cHggO1xyXG4gICAgbWF4LXdpZHRoOiAyMnB4IDtcclxuICAgIG1heC1oZWlnaHQ6IDE4cHggO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogNDEwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDM5cHgpIHtcclxuICB0ZCBkaXYge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHggO1xyXG4gICAgbWluLXdpZHRoOiAyNHB4IDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHggO1xyXG4gICAgbWF4LXdpZHRoOiAyNHB4IDtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHggO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWRldmljZS13aWR0aDogNDQwcHgpIHtcclxuICB0ZCBkaXYge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBtaW4td2lkdGg6IDI2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"game-container\" class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!--<div class=\"col-4\">-->\r\n        <!--<app-game-panel [points]=\"points\" [turnName]=\"turnName\"></app-game-panel>-->\r\n    <!--</div>-->\r\n    <div class=\"col-7\">\r\n      <table>\r\n        <tbody>\r\n        <tr *ngFor=\"let tableRow of gameManager.gameBoard; let i = index\">\r\n          <td  *ngFor=\"let cell of tableRow; let j = index\">\r\n            <div #dropSpot class=\"drop-spot\" (drop)=\"onDrop($event,dropSpot,i,j)\"\r\n                 (dragover)=\"onDragOver($event,dropSpot,i,j)\"\r\n                 (dragenter)=\"onDragEnter($event,dropSpot,i,j)\"\r\n                 (dragleave)=\"onDragLeave($event,dropSpot,i,j)\">\r\n              <app-scrabble-block *ngIf=\"cell\" id=\"letter\" [letter]=\"cell\"></app-scrabble-block>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <app-game-panel [points]=\"points\" [turnName]=\"turnName\"></app-game-panel>\r\n  </div>\r\n  <!--<div class=\"row\">-->\r\n    <!--&lt;!&ndash;<div class=\"col-4\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<button class=\"btn btn-danger\" (click)=\"onQuit()\">wróc do menu</button>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n    <!--<div class=\"col-7\">-->\r\n\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.ts ***!
  \********************************************************/
/*! exports provided: GamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
/* harmony import */ var _services_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-manager.service */ "./src/app/services/game-manager.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share-data.service */ "./src/app/services/share-data.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GamePageComponent = /** @class */ (function () {
    function GamePageComponent(gameManager, shareDataService, socketService, authManager, router) {
        this.gameManager = gameManager;
        this.shareDataService = shareDataService;
        this.socketService = socketService;
        this.authManager = authManager;
        this.router = router;
        this.game = null;
        this.init = -1;
        this.turnName = '';
        this.points = new Map();
    }
    GamePageComponent.prototype.ngOnInit = function () {
        this.game = this.shareDataService.game;
        this.gameManager.gameName = this.game.name;
        this.gameManager.initGame(this.game, this.points);
        this.turnName = this.gameManager.getTurnName(this.game);
        this.initSocketConnection();
    };
    GamePageComponent.prototype.initSocketConnection = function () {
        var _this = this;
        this.socketService.connectToGameSocket(this.game.name);
        this.subscription = this.socketService.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
    };
    GamePageComponent.prototype.handleSocketMessage = function (socketMessage) {
        if (socketMessage) {
            console.log('TO DOSTAJE PO WYKONANIU RUCHU: ', socketMessage);
            var socketMsg = JSON.parse(socketMessage);
            if (this.init !== -1) {
                this.gameManager.updateGame(socketMsg.body, this.points);
                this.turnName = this.gameManager.getTurnName(socketMsg.body);
            }
            else {
                this.init = 1;
            }
        }
    };
    GamePageComponent.prototype.onDrop = function (event, dropSpot, i, j) {
        var scrabbleBlock = JSON.parse(event.dataTransfer.getData('scrabbleBlock'));
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] === null) {
                this.gameManager.gameBoard[i][j] = new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"](scrabbleBlock._character);
                this.gameManager.addUnconfirmedCord({ first: i, second: j });
            }
            dropSpot.className = 'drop-spot';
        }
    };
    GamePageComponent.prototype.onDragOver = function (event, dropSpot, i, j) {
        event.preventDefault();
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] != null) {
                dropSpot.className = dropSpot.className + ' wrong';
                event.dataTransfer.dropEffect = 'none';
            }
            else {
                event.dataTransfer.dropEffect = 'move';
            }
        }
    };
    GamePageComponent.prototype.onDragEnter = function (event, dropSpot, i, j) {
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] == null) {
                dropSpot.className += ' over';
            }
            else {
                dropSpot.className += ' wrong';
            }
        }
    };
    GamePageComponent.prototype.onDragLeave = function (event, dropSpot, i, j) {
        if (this.gameManager.checkDraggable()) {
            dropSpot.className = 'drop-spot';
        }
    };
    GamePageComponent.prototype.onQuit = function () {
        this.subscription.unsubscribe();
        this.socketService.onDestroy();
        this.socketService = null;
        this.router.navigate(['menu']);
    };
    GamePageComponent.prototype.canDeactivate = function () {
        return false;
    };
    GamePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-page',
            template: __webpack_require__(/*! ./game-page.component.html */ "./src/app/pages/game-page/game-page.component.html"),
            styles: [__webpack_require__(/*! ./game-page.component.css */ "./src/app/pages/game-page/game-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_5__["AuthManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], GamePageComponent);
    return GamePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  padding: 10px;\r\n  font-size: 1.5em;\r\n  width: 300px;\r\n}\r\n\r\n.menu-row{\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1vci1jcmVhdGUtcGFnZS9qb2luLW9yLWNyZWF0ZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2luLW9yLWNyZWF0ZS1wYWdlL2pvaW4tb3ItY3JlYXRlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1lbnUtcm93e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" routerLink=\"/create\">Stwórz pokój</button>\r\n  </div>\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" routerLink=\"/join\">Dołącz do pokoju</button>\r\n  </div>\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" routerLink=\"/player-games\">Twoje gry</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: JoinOrCreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinOrCreatePageComponent", function() { return JoinOrCreatePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinOrCreatePageComponent = /** @class */ (function () {
    function JoinOrCreatePageComponent() {
    }
    JoinOrCreatePageComponent.prototype.ngOnInit = function () {
    };
    JoinOrCreatePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-or-create-page',
            template: __webpack_require__(/*! ./join-or-create-page.component.html */ "./src/app/pages/join-or-create-page/join-or-create-page.component.html"),
            styles: [__webpack_require__(/*! ./join-or-create-page.component.css */ "./src/app/pages/join-or-create-page/join-or-create-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinOrCreatePageComponent);
    return JoinOrCreatePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\r\n  max-width: 100%;\r\n  max-height: 80vh;\r\n  min-width: 100%;\r\n  min-height: 80vh;\r\n  width: 100%;\r\n  height: 80vh;\r\n  position: relative;\r\n}\r\n\r\n#panel{\r\n  position: absolute;\r\n  z-index: 300;\r\n  width: 100%;\r\n  height: 15%;\r\n  min-height: 15%;\r\n  max-height: 15%;\r\n  bottom: 0;\r\n  border-top: solid 1px rgba(0,0,0,0.5);\r\n  background-color: #ffff;\r\n}\r\n\r\n.inner-box{\r\n  width: 100%;\r\n  height: 85%;\r\n  min-width: 100%;\r\n  max-width: 100%;\r\n  min-height: 85%;\r\n  max-height: 85%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1yb29tLXBhZ2Uvam9pbi1yb29tLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tcm9vbS1wYWdlL2pvaW4tcm9vbS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNwYW5lbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMzAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIG1pbi1oZWlnaHQ6IDE1JTtcclxuICBtYXgtaGVpZ2h0OiAxNSU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbn1cclxuXHJcbi5pbm5lci1ib3h7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA4NSU7XHJcbiAgbWF4LWhlaWdodDogODUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>-->\r\n<!--<div id=\"main\" class=\"container\" style=\"margin-top: 20px\">-->\r\n  <!--<div class=\"row fill-width\">-->\r\n    <!--<div style=\"margin-bottom: 30px\" class=\"col-lg-6\"-->\r\n         <!--*ngFor=\"let row of data | paginate: { itemsPerPage: 4, currentPage: p }\">-->\r\n      <!--<div class=\"card bg-dark text-white\">-->\r\n        <!--<img style=\"opacity: 0.075\" class=\"card-img\" src=\"assets/scrabble-board-400x225.jpg\" alt=\"Card image\">-->\r\n        <!--<div class=\"card-img-overlay\">-->\r\n          <!--<div class=\"card-header text-uppercase\"><strong>{{row[0].name}}</strong></div>-->\r\n          <!--<div class=\"card-body\" style=\"max-width: 473px; max-height: 70%; overflow: auto\">-->\r\n            <!--<p class=\"card-title\">Gracze w pokoju: </p>-->\r\n            <!--<ul class=\"list-group list-group-flush\">-->\r\n              <!--<li class=\"list-group-item bg-dark\" *ngFor=\"let player of row[1]\"-->\r\n                  <!--style=\"opacity: 0.7\">{{player.nickname}}</li>-->\r\n            <!--</ul>-->\r\n          <!--</div>-->\r\n          <!--<button style=\"position: absolute; bottom: 15px; left: 15px\" class=\"btn btn-primary\"-->\r\n                  <!--(click)=\"onJoin(row[0].name)\">Dołącz do pokoju-->\r\n          <!--</button>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"row fill-width\">-->\r\n    <!--<pagination-controls (pageChange)=\"p = $event\"-->\r\n                         <!--previousLabel=\"Poprzednia\"-->\r\n                         <!--nextLabel=\"Następna\">-->\r\n    <!--</pagination-controls>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"row fill-width\">-->\r\n    <!--<button class=\"btn btn-danger\" routerLink=\"/menu\" style=\"margin-left: 15px;\">Wróć do menu</button>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\r\n<div id=\"main\" class=\"container\" style=\"margin-top: 10px\">\r\n  <div class=\"row fill-width\">\r\n    <div style=\"margin-bottom: 30px\" class=\"col-lg-8\" *ngFor=\"let row of data | paginate: { itemsPerPage: 4, currentPage: p }\">\r\n      <div class=\"card bg-dark text-white\">\r\n        <img style=\"opacity: 0.075\" class=\"card-img\" src=\"assets/scrabble-board-400x225.jpg\" alt=\"Card image\">\r\n        <div class=\"card-img-overlay\">\r\n          <div class=\"card-header text-uppercase\"> <strong>{{row[0].name}}</strong> </div>\r\n          <div class=\"card-body\" style=\"max-width: 473px; max-height: 70%; overflow: auto\">\r\n\r\n            <p class=\"card-title\">Gracze w pokoju: </p>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item bg-dark\" *ngFor=\"let player of row[1]\" style=\"opacity: 0.7\">{{player.nickname}}</li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <button style=\"position: absolute; bottom: 15px; left: 15px\" class=\"btn btn-primary\" (click)=\"onJoin(row[0].name)\">Dołącz do pokoju</button>\r\n    </div>\r\n\r\n    <pagination-controls (pageChange)=\"p = $event\"\r\n                         previousLabel=\"Poprzednia\"\r\n                         nextLabel=\"Następna\">\r\n    </pagination-controls>\r\n  </div>\r\n  <div class=\"row fill-width\">\r\n    <p align=\"center\">\r\n      <button class=\"btn btn-danger\" id=\"but1\" routerLink=\"/menu\" style=\"margin-left: 15px;\">Wróć do menu</button>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.ts ***!
  \******************************************************************/
/*! exports provided: JoinRoomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomPageComponent", function() { return JoinRoomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JoinRoomPageComponent = /** @class */ (function () {
    function JoinRoomPageComponent(fetchDataService, utils, router) {
        this.fetchDataService = fetchDataService;
        this.utils = utils;
        this.router = router;
        this.data = [];
        this.isLoading = false;
        this.p = 1;
    }
    JoinRoomPageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    JoinRoomPageComponent.prototype.clearEmptyLobbies = function () {
        this.data = this.data.filter(function (e) { return e[1].length > 0; });
    };
    JoinRoomPageComponent.prototype.fetchData = function () {
        var _this = this;
        this.fetchDataService.getLobbies().subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobbies(next);
            _this.clearEmptyLobbies();
        }, function (error) {
        }, function () {
        });
    };
    JoinRoomPageComponent.prototype.onJoin = function (lobbyName) {
        var _this = this;
        this.isLoading = true;
        this.fetchDataService.joinLobby(lobbyName).subscribe(function (next) {
            _this.isLoading = false;
            _this.router.navigate(['lobby/' + lobbyName]);
        }, function (error) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    JoinRoomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-room-page',
            template: __webpack_require__(/*! ./join-room-page.component.html */ "./src/app/pages/join-room-page/join-room-page.component.html"),
            styles: [__webpack_require__(/*! ./join-room-page.component.css */ "./src/app/pages/join-room-page/join-room-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JoinRoomPageComponent);
    return JoinRoomPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYmJ5LXBhZ2UvbG9iYnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\r\n<div id=\"main\" class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"card shadow-lg\">\r\n        <div class=\"card-header bg-danger text-center text-uppercase\">\r\n          <h3 class=\"card-title\">{{data[0]!=null?data[0].name:'Game lobby'}}</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" *ngFor=\"let player of data[1]\">{{player.nickname}}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"data[1].length<=1\" class=\"btn btn-outline-success fill-width\" (click)=\"onStartClicked()\">START</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button class=\"btn btn-outline-danger fill-width\" (click)=\"onQuitClicked(data[0].name)\">Wyjdź</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LobbyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyPageComponent", function() { return LobbyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/share-data.service */ "./src/app/services/share-data.service.ts");
/* harmony import */ var _models_CanDeactivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/CanDeactivate */ "./src/app/models/CanDeactivate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LobbyPageComponent = /** @class */ (function (_super) {
    __extends(LobbyPageComponent, _super);
    function LobbyPageComponent(fetchDataService, utils, webSocket, route, router, shareDataService) {
        var _this = _super.call(this) || this;
        _this.fetchDataService = fetchDataService;
        _this.utils = utils;
        _this.webSocket = webSocket;
        _this.route = route;
        _this.router = router;
        _this.shareDataService = shareDataService;
        _this.data = [null, []];
        _this._readyPlayers = [];
        _this.isStarted = false;
        _this.isLoading = false;
        return _this;
    }
    LobbyPageComponent.prototype.onStartClicked = function () {
        var _this = this;
        this.isLoading = true;
        console.log('start clicked');
        this.fetchDataService.startLobby(this.lobbyName).subscribe(function (next) {
            console.log(next);
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    LobbyPageComponent.prototype.onQuitClicked = function (lobbyName) {
        this.quit(lobbyName);
    };
    LobbyPageComponent.prototype.readyCount = function () {
        return this._readyPlayers.length;
    };
    LobbyPageComponent.prototype.ngOnInit = function () {
        this.init();
    };
    LobbyPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.webSocket.onDestroy();
        this.webSocket = null;
        if (!this.canDeactivate()) {
            this.cleanUp();
        }
    };
    LobbyPageComponent.prototype.quit = function (lobbyName) {
        this.router.navigate(['menu']);
    };
    LobbyPageComponent.prototype.init = function () {
        this.lobbyName = this.route.snapshot.paramMap.get('name');
        if (!this.lobbyName) {
            this.onCreateInit();
        }
        else {
            this.onJoinInit();
        }
    };
    LobbyPageComponent.prototype.onCreateInit = function () {
        var _this = this;
        this.fetchDataService.createLobby().subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobby(next);
            _this.lobbyName = next.name;
            _this.webSocket.connectToLobbyWebSocket(_this.lobbyName);
            _this.subscription = _this.webSocket.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    LobbyPageComponent.prototype.onJoinInit = function () {
        var _this = this;
        this.fetchDataService.getLobby(this.lobbyName).subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobby(next);
            _this.webSocket.connectToLobbyWebSocket(_this.lobbyName);
            _this.subscription = _this.webSocket.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
        }, function (error) {
        }, function () {
        });
    };
    LobbyPageComponent.prototype.handleSocketMessage = function (socketMessage) {
        try {
            if (socketMessage) {
                var socketMsg = JSON.parse(socketMessage);
                if (socketMsg.header === 'CHANGE') {
                    this.refreshLobby();
                }
                else if (socketMsg.header === 'START') {
                    if (socketMsg.body) {
                        console.log('to', socketMsg);
                        this.onStartLobby(socketMsg.body);
                    }
                }
                else {
                }
            }
        }
        catch (e) {
        }
    };
    LobbyPageComponent.prototype.refreshLobby = function () {
        var _this = this;
        this.fetchDataService.getLobby(this.lobbyName).subscribe(function (lobbyData) {
            _this.data = _this.utils.extractDataFromLobby(lobbyData);
        }, function (error) {
        }, function () {
        });
    };
    LobbyPageComponent.prototype.onStartLobby = function (gameDto) {
        if (this.webSocket.isSubscribed) {
            this.webSocket.isSubscribed = false;
            this.isStarted = true;
            this.shareDataService.game = gameDto;
            this.router.navigate(['play']);
        }
    };
    LobbyPageComponent.prototype.canDeactivate = function () {
        return this.isStarted;
    };
    LobbyPageComponent.prototype.cleanUp = function () {
        this.fetchDataService.quitLobby(this.lobbyName);
    };
    LobbyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lobby-page',
            template: __webpack_require__(/*! ./lobby-page.component.html */ "./src/app/pages/lobby-page/lobby-page.component.html"),
            styles: [__webpack_require__(/*! ./lobby-page.component.css */ "./src/app/pages/lobby-page/lobby-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__["ShareDataService"]])
    ], LobbyPageComponent);
    return LobbyPageComponent;
}(_models_CanDeactivate__WEBPACK_IMPORTED_MODULE_6__["CanDeactivate"]));



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link{\r\n  color:#007bff;\r\n}\r\n\r\n.link:hover{\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmt7XHJcbiAgY29sb3I6IzAwN2JmZjtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <aside class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <article class=\"card-body\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">Logowanie</h4>\r\n          <hr>\r\n          <p class=\"text-danger text-center\" *ngIf=\"hasFailed\">Błędne dane logowania</p>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <img width=\"16\" height=\"16.8\"\r\n                                                       src=\"assets/user.svg\"/> </span>\r\n                </div>\r\n                <input formControlName=\"login\" name=\"login\" class=\"form-control\" placeholder=\"Email or login\" type=\"email\" required>\r\n              </div> <!-- input-group.// -->\r\n            </div> <!-- form-group// -->\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"> <img width=\"14\" height=\"16.8\"\r\n                                                       src=\"assets/lock.svg\"/> </span>\r\n                </div>\r\n                <input formControlName=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" autocomplete=\"current-password\" required>\r\n              </div> <!-- input-group.// -->\r\n            </div> <!-- form-group// -->\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-danger btn-block\">Zaloguj</button>\r\n            </div> <!-- form-group// -->\r\n            <p class=\"text-center\">Zapomniałeś <a href=\"#\">hasła</a>?</p>\r\n            <p class=\"text-center\">Nie masz konta? <a routerLink=\"/register\">Zarejestruj się</a></p>\r\n            <p class=\"text-center\">Albo <span class=\"link\" (click)=\"onGuest()\">zagraj jako gość</span></p>\r\n          </form>\r\n        </article>\r\n      </div> <!-- card.// -->\r\n    </aside> <!-- col.// -->\r\n  </div> <!-- row.// -->\r\n</div>\r\n<!--container end.//-->\r\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-manager.service */ "./src/app/services/user-manager.service.ts");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(formBuilder, authManager, userManager, router) {
        this.formBuilder = formBuilder;
        this.authManager = authManager;
        this.userManager = userManager;
        this.router = router;
        this.isLoading = false;
        this.hasFailed = false;
        this.failInfo = '';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.authManager.loginEmitter.subscribe(function (result) {
            if (result.hasFinished) {
                _this.isLoading = false;
            }
            _this.hasFailed = result.hasFailed;
        });
    };
    LoginPageComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    LoginPageComponent.prototype.onLogin = function () {
        this.isLoading = true;
        this.authManager.login(this.loginForm.value['login'], this.loginForm.value['password'], this.userManager, this.router);
    };
    LoginPageComponent.prototype.onGuest = function () {
        var _this = this;
        this.isLoading = true;
        this.guestForm = this.formBuilder.group({
            email: [''],
            nickname: ['gosc' + Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])().substr(0, 7), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: [0]
        });
        this.userManager.registerPlayer(this.guestForm.value).subscribe(function (next) {
            _this.hasFailed = false;
            _this.authManager.login(_this.guestForm.value['nickname'], _this.guestForm.value['password'], _this.userManager, _this.router);
        }, function (err) {
            _this.isLoading = false;
            _this.hasFailed = true;
            _this.failInfo = err.error;
        }, function () { return _this.isLoading = false; });
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"],
            _services_user_manager_service__WEBPACK_IMPORTED_MODULE_1__["UserManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1nYW1lcy1wYWdlL3BsYXllci1nYW1lcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <p style=\"text-align:center\">brak historii gier dla gracza</p>\r\n</h3>\r\n"

/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.ts ***!
  \************************************************************************/
/*! exports provided: PlayerGamesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerGamesPageComponent", function() { return PlayerGamesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerGamesPageComponent = /** @class */ (function () {
    function PlayerGamesPageComponent(fetchDataService) {
        this.fetchDataService = fetchDataService;
        this.data = [];
    }
    PlayerGamesPageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    PlayerGamesPageComponent.prototype.fetchData = function () {
        var _this = this;
        this.fetchDataService.getLobbies().subscribe(function (next) {
            _this.extractData(next);
        }, function (error) {
        }, function () {
        });
    };
    PlayerGamesPageComponent.prototype.extractData = function (lobbies) {
        var tuple = [null, []];
        for (var _i = 0, lobbies_1 = lobbies; _i < lobbies_1.length; _i++) {
            var lobby = lobbies_1[_i];
            tuple[0] = lobby;
            for (var _a = 0, _b = lobby.players; _a < _b.length; _a++) {
                var lobbyPlayer = _b[_a];
                tuple[1].push(lobbyPlayer.player);
            }
            if (tuple[0] !== null) {
                this.data.push(tuple);
            }
            tuple = [null, []];
        }
    };
    PlayerGamesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-games-page',
            template: __webpack_require__(/*! ./player-games-page.component.html */ "./src/app/pages/player-games-page/player-games-page.component.html"),
            styles: [__webpack_require__(/*! ./player-games-page.component.css */ "./src/app/pages/player-games-page/player-games-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"]])
    ], PlayerGamesPageComponent);
    return PlayerGamesPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <aside class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <article class=\"card-body\">\r\n          <h4 class=\"card-title text-center mb-4 mt-1\">Rejestracja</h4>\r\n          <hr>\r\n          <p *ngIf=\"hasFailed\" class=\"text-danger text-center\">{{failInfo}}</p>\r\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <img width=\"17\" height=\"17.8\" src=\"assets/email.svg\"/>\r\n                  </span>\r\n                </div>\r\n                <input formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\" autocomplete=\"new-email\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <img width=\"16\" height=\"16.8\" src=\"assets/user.svg\"/>\r\n                  </span>\r\n                </div>\r\n                <input formControlName=\"nickname\" class=\"form-control\" placeholder=\"Nazwa użytkownika\" type=\"text\" autocomplete=\"new-username\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <img width=\"14\" height=\"16.8\" src=\"assets/lock.svg\"/>\r\n                  </span>\r\n                </div>\r\n                <input formControlName=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" name=\"password\" autocomplete=\"new-password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-danger btn-block\" [disabled]=\"!registerForm.valid\">Stwórz konto</button>\r\n            </div>\r\n            <p class=\"text-center\">Masz już konto? <a routerLink=\"/login\">Zaloguj się</a></p>\r\n          </form>\r\n        </article>\r\n      </div>\r\n    </aside>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-manager.service */ "./src/app/services/user-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, userManager, router, authManager) {
        this.formBuilder = formBuilder;
        this.userManager = userManager;
        this.router = router;
        this.authManager = authManager;
        this.isLoading = false;
        this.hasFailed = false;
        this.failInfo = '';
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterPageComponent.prototype.buildForm = function () {
        this.registerForm = this.formBuilder.group({
            email: [''],
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: [0]
        });
    };
    RegisterPageComponent.prototype.onRegister = function () {
        var _this = this;
        this.isLoading = true;
        this.userManager.registerPlayer(this.registerForm.value).subscribe(function (next) {
            _this.hasFailed = false;
            _this.authManager.login(_this.registerForm.value['nickname'], _this.registerForm.value['password'], _this.userManager, _this.router);
        }, function (err) {
            _this.isLoading = false;
            _this.hasFailed = true;
            _this.failInfo = err.error;
        }, function () { return _this.isLoading = false; });
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__["UserManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_4__["AuthManagerService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  padding: 10px;\r\n  font-size: 1.5em;\r\n  width: 300px;\r\n}\r\n\r\n.menu-row{\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm1lbnUtcm93e1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" (click)=\"onGuestClick()\">Zagraj jako gość</button>\r\n  </div>\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" routerLink=\"/login\">Zaloguj się</button>\r\n  </div>\r\n  <div class=\"row menu-row justify-content-center\">\r\n    <button class=\"btn btn-danger\" routerLink=\"/register\">Zarejestruj się</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.ts ***!
  \**********************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-manager.service */ "./src/app/services/user-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(formBuilder, userManager, router, authManager) {
        this.formBuilder = formBuilder;
        this.userManager = userManager;
        this.router = router;
        this.authManager = authManager;
        this.isLoading = false;
        this.hasFailed = false;
        this.failInfo = '';
    }
    StartPageComponent.prototype.ngOnInit = function () {
        if (this.authManager.isLoggedIn) {
            this.router.navigate(['jorcr']);
        }
    };
    StartPageComponent.prototype.onGuestClick = function () {
        var _this = this;
        this.isLoading = true;
        this.guestForm = this.formBuilder.group({
            email: [''],
            nickname: ['gosc' + Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])().substr(0, 7), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: [0]
        });
        this.userManager.registerPlayer(this.guestForm.value).subscribe(function (next) {
            _this.hasFailed = false;
            _this.authManager.login(_this.guestForm.value['nickname'], _this.guestForm.value['password'], _this.userManager, _this.router);
        }, function (err) {
            _this.isLoading = false;
            _this.hasFailed = true;
            _this.failInfo = err.error;
        }, function () { return _this.isLoading = false; });
    };
    StartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/pages/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/pages/start-page/start-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_user_manager_service__WEBPACK_IMPORTED_MODULE_5__["UserManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player{\r\n  display: flex;\r\n  width: 230px;\r\n  height: 40px;\r\n  min-width: 230px;\r\n  min-height: 40px;\r\n  max-width: 230px;\r\n  max-height: 40px;\r\n  border: 3px solid #ccc;\r\n  border-radius: 16px;\r\n  margin: 10px;\r\n  padding: 5px;\r\n}\r\n\r\n.name-box{\r\n  width: 100px;\r\n  border-right: 3px solid #ccc;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.point-box{\r\n  padding-left: 5px;\r\n}\r\n\r\n.active-box{\r\n  border-color: #7bee6c;\r\n}\r\n\r\n.page{\r\n  display: grid;\r\n  grid-template-columns: 15% auto 15%;\r\n  grid-template-rows: 10% auto 10%;\r\n  grid-template-areas:\r\n  \"header header header\"\r\n  \"aside-1 main aside-2\"\r\n  \"footer footer footer\";\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n}\r\n\r\n.footer,\r\n.header,\r\n.aside-1,\r\n.aside-2,\r\n.main{\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.footer{\r\n  background-color: #dc3545;\r\n  grid-area: footer;\r\n}\r\n\r\n.main{\r\n  background-color: #7bee6c;\r\n  grid-area: main;\r\n}\r\n\r\n.header{\r\n  background-color: navajowhite;\r\n  grid-area: header;\r\n}\r\n\r\n.aside-1{\r\n  background-color: coral;\r\n  grid-area: aside-1;\r\n}\r\n\r\n.aside-2{\r\n  background-color: dodgerblue;\r\n  grid-area: aside-2;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .page{\r\n    grid-template-columns:  auto;\r\n    grid-template-rows:  auto auto auto auto auto;\r\n    grid-template-areas:\r\n      \"header\"\r\n      \"main\"\r\n      \"aside-1\"\r\n      \"aside-2\"\r\n      \"footer\";\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFLQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDOzs7d0JBR3NCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7O0VBS0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLDZDQUE2QztJQUM3Qzs7Ozs7Y0FLVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXN0LXBhZ2UvdGVzdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxuICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubmFtZS1ib3h7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNjY2M7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnBvaW50LWJveHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFjdGl2ZS1ib3h7XHJcbiAgYm9yZGVyLWNvbG9yOiAjN2JlZTZjO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ucGFnZXtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIGF1dG8gMTUlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG8gMTAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiXHJcbiAgXCJhc2lkZS0xIG1haW4gYXNpZGUtMlwiXHJcbiAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5mb290ZXIsXHJcbi5oZWFkZXIsXHJcbi5hc2lkZS0xLFxyXG4uYXNpZGUtMixcclxuLm1haW57XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBncmlkLWFyZWE6IGZvb3RlcjtcclxufVxyXG5cclxuLm1haW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiZWU2YztcclxuICBncmlkLWFyZWE6IG1haW47XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2YWpvd2hpdGU7XHJcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbn1cclxuXHJcbi5hc2lkZS0xe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xyXG4gIGdyaWQtYXJlYTogYXNpZGUtMTtcclxufVxyXG5cclxuLmFzaWRlLTJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBncmlkLWFyZWE6IGFzaWRlLTI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAucGFnZXtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImhlYWRlclwiXHJcbiAgICAgIFwibWFpblwiXHJcbiAgICAgIFwiYXNpZGUtMVwiXHJcbiAgICAgIFwiYXNpZGUtMlwiXHJcbiAgICAgIFwiZm9vdGVyXCI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"page\">-->\r\n<!--  <header class=\"header\">-->\r\n\r\n<!--  </header>-->\r\n<!--  <main class=\"main\">-->\r\n\r\n<!--  </main>-->\r\n<!--  <aside class=\"aside-1\">-->\r\n\r\n<!--  </aside>-->\r\n<!--  <aside class=\"aside-2\">-->\r\n\r\n<!--  </aside>-->\r\n<!--  <footer class=\"footer\">-->\r\n\r\n<!--  </footer>-->\r\n<!--</div>-->\r\n<div style=\"display: inline-block; position: relative\">\r\n  <app-loading-div></app-loading-div>\r\n  <div class=\"player\">\r\n    <div class=\"name-box\">\r\n      Kaziudddddddddddddddddddddddddddddddddddddddd\r\n    </div>\r\n    <div class=\"point-box\">\r\n      50 punktów\r\n    </div>\r\n  </div>\r\n  <div class=\"player active-box\">\r\n    <div class=\"name-box\">\r\n      Kaziudddddddddddddddddddddddddddddddddddddddd\r\n    </div>\r\n    <div class=\"point-box\">\r\n      50 punktów\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\nHello Sir, <span class=\"hint--bottom\" aria-label=\"Thank you!\">hover me.</span>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.ts ***!
  \********************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestPageComponent = /** @class */ (function () {
    function TestPageComponent() {
    }
    TestPageComponent.prototype.ngOnInit = function () {
    };
    TestPageComponent.prototype.hard = function () {
    };
    TestPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__(/*! ./test-page.component.html */ "./src/app/pages/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.css */ "./src/app/pages/test-page/test-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/services/address-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/address-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: AddressStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressStorageService", function() { return AddressStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressStorageService = /** @class */ (function () {
    function AddressStorageService() {
        // private _apiAddress = 'http://localhost:8080/api';
        this._apiAddress = 'https://scrabbleapi.herokuapp.com/api';
        this._createUserEndpoint = '/players';
        this._getLobbiesEndpoint = '/games';
        this._loginEndpoint = '/players';
    }
    Object.defineProperty(AddressStorageService.prototype, "apiAddress", {
        get: function () {
            return this._apiAddress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "createUserEndpoint", {
        get: function () {
            return this._createUserEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "getLobbiesEndpoint", {
        get: function () {
            return this._getLobbiesEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "loginEndpoint", {
        get: function () {
            return this._loginEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    AddressStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AddressStorageService);
    return AddressStorageService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authManager, router) {
        this.authManager = authManager;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authManager.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-manager.service.ts ***!
  \**************************************************/
/*! exports provided: AuthManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManagerService", function() { return AuthManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Result */ "./src/app/models/Result.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthManagerService = /** @class */ (function () {
    function AuthManagerService() {
        this._isLoggedIn = false;
        this._loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthManagerService.prototype.isAuthenticated = function () {
        return this.isLoggedIn;
    };
    AuthManagerService.prototype.authenticate = function (userName, playerId, password) {
        this._isLoggedIn = true;
        this._userName = userName;
        this._playerId = playerId;
        this._basicToken = 'Basic ' + btoa(this._userName + ':' + password);
        this._password = password;
    };
    AuthManagerService.prototype.login = function (login, password, userManager, router) {
        var _this = this;
        userManager.login(btoa(login + ':' + password), login).subscribe(function (next) {
            _this.authenticate(next.nickname, next.id, password);
            router.navigate(['menu']);
        }, function (error) {
            _this._loginEmitter.emit(new _models_Result__WEBPACK_IMPORTED_MODULE_1__["Result"](true, true));
        }, function () {
            _this._loginEmitter.emit(new _models_Result__WEBPACK_IMPORTED_MODULE_1__["Result"](true, false));
        });
    };
    Object.defineProperty(AuthManagerService.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "basicToken", {
        get: function () {
            return this._basicToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "playerId", {
        get: function () {
            return this._playerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "loginEmitter", {
        get: function () {
            return this._loginEmitter;
        },
        enumerable: true,
        configurable: true
    });
    AuthManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthManagerService);
    return AuthManagerService;
}());



/***/ }),

/***/ "./src/app/services/deactivate-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/deactivate-guard.service.ts ***!
  \******************************************************/
/*! exports provided: DeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateGuardService", function() { return DeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/services/fetch-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeactivateGuardService = /** @class */ (function () {
    function DeactivateGuardService(fetchDataService) {
        this.fetchDataService = fetchDataService;
    }
    DeactivateGuardService.prototype.canDeactivate = function (component) {
        if (!component.canDeactivate()) {
            if (!confirm('Czy na pewno chcesz opuścić lobby?')) {
                return false;
            }
        }
        //    this.fetchDataService.quitLobby(component.lobbyName);  EventListener sprzata na disconnect
        return true;
    };
    DeactivateGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"]])
    ], DeactivateGuardService);
    return DeactivateGuardService;
}());



/***/ }),

/***/ "./src/app/services/fetch-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/fetch-data.service.ts ***!
  \************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FetchDataService = /** @class */ (function () {
    function FetchDataService(addressStorage, http, authManager) {
        this.addressStorage = addressStorage;
        this.http = http;
        this.authManager = authManager;
    }
    FetchDataService.prototype.makeMove = function (gameName, move) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        var dtoMap = {};
        move.forEach(function (value, key) {
            dtoMap[key] = value;
        });
        return this.http.patch(this.addressStorage.apiAddress + '/games/' + gameName + '/move?playerId=' + this.authManager.playerId, dtoMap, httpOptions);
    };
    FetchDataService.prototype.getLobbies = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.get(this.addressStorage.apiAddress + '/games', httpOptions);
    };
    FetchDataService.prototype.createLobby = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.post(this.addressStorage.apiAddress + '/games?playerId=' + this.authManager.playerId, null, httpOptions);
    };
    FetchDataService.prototype.getLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.get(this.addressStorage.apiAddress + '/games/' + lobbyName, httpOptions);
    };
    FetchDataService.prototype.joinLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.patch(this.addressStorage.apiAddress + '/games/' + lobbyName + '/addPlayer?playerId='
            + this.authManager.playerId, null, httpOptions);
    };
    FetchDataService.prototype.quitLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        this.http.patch(this.addressStorage.apiAddress + '/games/' + lobbyName + '/removePlayer?playerId='
            + this.authManager.playerId, null, httpOptions).subscribe(function (next) {
        }, function (error) {
        }, function () {
        });
    };
    FetchDataService.prototype.startLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.patch(this.addressStorage.apiAddress + /games/ + lobbyName + '/start', null, httpOptions);
    };
    FetchDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_2__["AddressStorageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__["AuthManagerService"]])
    ], FetchDataService);
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/services/game-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/game-manager.service.ts ***!
  \**************************************************/
/*! exports provided: GameManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameManagerService", function() { return GameManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Letter */ "./src/app/models/Letter.ts");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameManagerService = /** @class */ (function () {
    function GameManagerService(fetchDataService, authManager, utils) {
        this.fetchDataService = fetchDataService;
        this.authManager = authManager;
        this.utils = utils;
        this.gameBoard = [];
        this.letterPool = [];
        this.unconfirmedLetters = [];
        this.unconfirmedCords = [];
        this.isCorrectDraggable = false;
        this.gameName = '';
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GameManagerService.prototype.gameBoardToMap = function () {
        var map = new Map();
        for (var i = 0; i < this.gameBoard.length; i++) {
            for (var j = 0; j < this.gameBoard[i].length; j++) {
                if (this.gameBoard[i][j] !== null) {
                    map.set(String.fromCharCode(65 + i).concat((j + 1).toString()), this.gameBoard[i][j].character);
                }
            }
        }
        return map;
    };
    GameManagerService.prototype.initGame = function (game, points) {
        this.initBoard();
        this.initPool(this.utils.charactersToLetters(this.getThisPlayer(game).characters));
        this.initPoints(game, points);
    };
    GameManagerService.prototype.initPoints = function (game, points) {
        for (var _i = 0, _a = game.players; _i < _a.length; _i++) {
            var playerState = _a[_i];
            points.set(playerState.player.nickname, playerState.totalPoints);
        }
    };
    GameManagerService.prototype.updateGame = function (game, points) {
        this.updateBoardState(game.boardState);
        this.initPool(this.utils.charactersToLetters(this.getThisPlayer(game).characters));
        this.initPoints(game, points);
    };
    GameManagerService.prototype.updateBoardState = function (boardStateMap) {
        var _this = this;
        this.initBoard();
        Object.keys(boardStateMap).forEach(function (key) {
            _this.gameBoard[key.charCodeAt(0) - 65][+key.substr(1) - 1] = new _models_Letter__WEBPACK_IMPORTED_MODULE_2__["Letter"](boardStateMap[key]);
        });
    };
    GameManagerService.prototype.getThisPlayer = function (game) {
        var _this = this;
        return game.players.find(function (playerState) { return playerState.player.nickname === _this.authManager.userName; });
    };
    GameManagerService.prototype.initBoard = function () {
        this.gameBoard = [
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ];
    };
    GameManagerService.prototype.initPool = function (letters) {
        this.letterPool = letters;
    };
    GameManagerService.prototype.checkDraggable = function () {
        return this.isCorrectDraggable;
    };
    GameManagerService.prototype.setCorrectDraggable = function (isCorrect) {
        this.isCorrectDraggable = isCorrect;
    };
    GameManagerService.prototype.resetUnconfirmed = function () {
        this.unconfirmedLetters = [];
        for (var _i = 0, _a = this.unconfirmedCords; _i < _a.length; _i++) {
            var pair = _a[_i];
            this.gameBoard[pair.first][pair.second] = null;
        }
        this.unconfirmedCords = [];
    };
    GameManagerService.prototype.getUnconfirmedBlocks = function () {
        return this.unconfirmedLetters;
    };
    GameManagerService.prototype.addUnconfirmedBlock = function (letter) {
        this.unconfirmedLetters.push(letter);
    };
    GameManagerService.prototype.addUnconfirmedCord = function (pair) {
        this.unconfirmedCords.push(pair);
    };
    GameManagerService.prototype.move = function () {
        var _this = this;
        this.fetchDataService.makeMove(this.gameName, this.buildMove()).subscribe(function (next) {
            _this.unconfirmedLetters = [];
            _this.unconfirmedCords = [];
        }, function (error) {
            console.log('MAKE MOVE ERROR: ', error);
            _this.emitter.emit({ failInfo: 'Zły ruch' });
        }, function () {
        });
    };
    GameManagerService.prototype.buildMove = function () {
        var move = new Map();
        for (var i = 0; i < this.unconfirmedCords.length; i++) {
            move.set(String.fromCharCode(65 + this.unconfirmedCords[i].first).concat((this.unconfirmedCords[i].second + 1).toString()), this.unconfirmedLetters[i].character);
        }
        console.log('ZBUDOWANY MOVE: ', move);
        return move;
    };
    GameManagerService.prototype.isMyMove = function (game) {
        return game.nextPlayerName === this.authManager.userName;
    };
    GameManagerService.prototype.getTurnName = function (game) {
        return game.nextPlayerName;
    };
    GameManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"],
            _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__["AuthManagerService"],
            _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], GameManagerService);
    return GameManagerService;
}());



/***/ }),

/***/ "./src/app/services/share-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/share-data.service.ts ***!
  \************************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
        this._game = null;
    }
    Object.defineProperty(ShareDataService.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (value) {
            this._game = value;
        },
        enumerable: true,
        configurable: true
    });
    ShareDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShareDataService);
    return ShareDataService;
}());



/***/ }),

/***/ "./src/app/services/socket-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/socket-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: SocketInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketInterceptorService", function() { return SocketInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketInterceptorService = /** @class */ (function () {
    function SocketInterceptorService(authManager) {
        this.authManager = authManager;
    }
    SocketInterceptorService.prototype.intercept = function (req, next) {
        console.log('Wysylanie requesta na adres:', req.url, 'body: ', req.body);
        // req = req.clone({
        //   setHeaders: {
        //     Authorization: this.authManager.basicToken
        //   }
        // });
        return next.handle(req);
    };
    SocketInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"]])
    ], SocketInterceptorService);
    return SocketInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/user-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-manager.service.ts ***!
  \**************************************************/
/*! exports provided: UserManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerService", function() { return UserManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManagerService = /** @class */ (function () {
    function UserManagerService(addressStorage, http) {
        this.addressStorage = addressStorage;
        this.http = http;
        this.address = this.addressStorage.apiAddress;
    }
    UserManagerService.prototype.registerPlayer = function (player) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http.post(this.address + this.addressStorage.createUserEndpoint, player, httpOptions);
    };
    UserManagerService.prototype.login = function (basicAuthHeader, playerName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Basic ' + basicAuthHeader,
            })
        };
        return this.http.get(this.address + this.addressStorage.loginEndpoint + '/' + playerName, httpOptions);
    };
    UserManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_1__["AddressStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserManagerService);
    return UserManagerService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.extractDataFromLobbies = function (lobbies) {
        var data = [];
        var tuple = [null, []];
        for (var _i = 0, lobbies_1 = lobbies; _i < lobbies_1.length; _i++) {
            var lobby = lobbies_1[_i];
            tuple[0] = lobby;
            for (var _a = 0, _b = lobby.players; _a < _b.length; _a++) {
                var lobbyPlayer = _b[_a];
                tuple[1].push(lobbyPlayer.player);
            }
            if (tuple[0] !== null) {
                data.push(tuple); // <- nie wiem czemu pokazuje niezgodne typy, wczesniej nie pokazywal, kompiluje sie i dziala wiec nie ruszam
            }
            tuple = [null, []];
        }
        return data;
    };
    UtilsService.prototype.extractDataFromLobby = function (lobby) {
        var data = [null, []];
        data[0] = lobby;
        for (var _i = 0, _a = lobby.players; _i < _a.length; _i++) {
            var lobbyPlayer = _a[_i];
            data[1].push(lobbyPlayer.player);
        }
        return data;
    };
    UtilsService.prototype.charactersToLetters = function (characters) {
        var letters = [];
        for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
            var char = characters_1[_i];
            letters.push(new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"](char));
        }
        return letters;
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebSocketService = /** @class */ (function () {
    function WebSocketService(addressStorage, authManager) {
        this.addressStorage = addressStorage;
        this.authManager = authManager;
        this.socketMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.socketMessage$ = this.socketMessage.asObservable();
        this.isSubscribed = false;
    }
    WebSocketService.prototype.connectToLobbyWebSocket = function (lobbyName) {
        var that = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.addressStorage.apiAddress + '/socket', null, {
            sessionId: function () {
                return that.authManager.playerId + ':' + lobbyName + ':' + Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])();
            }
        });
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](this.ws);
        this.stompClient.debug = null;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/lobby/' + lobbyName, function (message) {
                that.isSubscribed = true;
                if (message.body) {
                    that.socketMessage.next(message.body);
                }
            });
        });
    };
    WebSocketService.prototype.connectToGameSocket = function (gameName) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.addressStorage.apiAddress + '/socket');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](this.ws);
        this.stompClient.debug = null;
        this.subLobby(gameName);
        console.log('@2222222222222222@@@ ', this.ws.readyState);
    };
    WebSocketService.prototype.subLobby = function (gameName) {
        // console.log('STATUS: ', this.ws.readyState);
        var that = this;
        this.stompClient.connect({}, function () {
            that.subscription = that.stompClient.subscribe('/game/' + gameName, function (message) {
                if (message.body) {
                    that.socketMessage.next(message.body);
                }
            });
        });
    };
    WebSocketService.prototype.onDestroy = function () {
        try {
            this.subscription.unsubscribe();
            this.stompClient.unsubscribe();
            this.stompClient.disconnect();
            this.ws.close();
            this.stompClient = null;
            this.ws = null;
        }
        catch (e) {
        }
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_1__["AddressStorageService"], _auth_manager_service__WEBPACK_IMPORTED_MODULE_4__["AuthManagerService"]])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Szymon\Desktop\scrabbleFRONT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map