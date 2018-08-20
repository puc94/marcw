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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parents_todo_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parents-todo.pipe */ "./src/app/parents-todo.pipe.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-create/task-create.component */ "./src/app/task-create/task-create.component.ts");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: _task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"] },
    { path: 'task-create', component: _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_11__["TaskCreateComponent"] },
    { path: 'task-edit/:id', component: _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_12__["TaskEditComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _parents_todo_pipe__WEBPACK_IMPORTED_MODULE_9__["ParentsTodoPipe"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"],
                _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_11__["TaskCreateComponent"],
                _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_12__["TaskEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng2_select2__WEBPACK_IMPORTED_MODULE_6__["Select2Module"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getAllTasks = function () {
        var _this = this;
        return this._http.get('/api/all_tasks')
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getTasks = function () {
        var _this = this;
        return this._http.get('/api/tasks')
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getTask = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get('/api/task/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.createTask = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/task', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.updateTask = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.put('/api/task/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService.prototype.deleteTask = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.delete('/api/task/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/parents-todo.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/parents-todo.pipe.ts ***!
  \**************************************/
/*! exports provided: ParentsTodoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsTodoPipe", function() { return ParentsTodoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParentsTodoPipe = /** @class */ (function () {
    function ParentsTodoPipe() {
    }
    ParentsTodoPipe.prototype.transform = function (value, args) {
        return value.map(function (parent) { return parent.todo; }).join(', ');
    };
    ParentsTodoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'parentsTodo'
        })
    ], ParentsTodoPipe);
    return ParentsTodoPipe;
}());



/***/ }),

/***/ "./src/app/task-create/task-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-create/task-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-create/task-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-create/task-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 offset-md-3 mt-3\">\n\t\t\t<form (ngSubmit)=\"createTask()\" #taskForm=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"todo\">Todo</label>\n\t\t\t\t\t<input class=\"form-control\" name=\"todo\" placeholder=\"Todo\" [(ngModel)]=\"task.todo\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Parents</label>\n\t\t\t\t\t<select2 [data]=\"taskOptions | async\" [options]=\"options\" [value]=\"task.parent_ids\" (valueChanged)=\"selectChanged($event)\" style=\"width: 100%; display: block\"></select2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/task-create/task-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-create/task-create.component.ts ***!
  \******************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(router, _dataService) {
        var _this = this;
        this.router = router;
        this._dataService = _dataService;
        var taskOptions = [];
        this.task = { todo: "", parent_ids: [] };
        this._dataService.getAllTasks()
            .subscribe(function (res) {
            _this.tasks = res;
            _this.tasks.forEach(function (task) {
                taskOptions.push({ id: task.id, text: task.todo });
            });
            _this.taskOptions = rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
                obs.next(taskOptions);
                obs.complete();
            });
        });
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
        this.options = {
            multiple: true,
            placeholder: 'Select parents'
        };
    };
    TaskCreateComponent.prototype.createTask = function () {
        var _this = this;
        this._dataService.createTask(this.task)
            .then(function (res) {
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    TaskCreateComponent.prototype.selectChanged = function (data) {
        this.task.parent_ids = data.value;
    };
    TaskCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/task-create/task-create.component.html"),
            styles: [__webpack_require__(/*! ./task-create.component.css */ "./src/app/task-create/task-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 offset-md-3 mt-3\">\n\t\t\t<form (ngSubmit)=\"updateTask(task.id)\" #taskForm=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"todo\">Todo</label>\n\t\t\t\t\t<input class=\"form-control\" name=\"todo\" placeholder=\"Todo\" [(ngModel)]=\"task.todo\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Parents</label>\n\t\t\t\t\t<select2 [data]=\"taskOptions | async\" [options]=\"options\" [value]=\"task.parent_ids\" (valueChanged)=\"selectChanged($event)\" style=\"width: 100%; display: block\"></select2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(route, router, _dataService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
        this.task = { id: "", todo: "" };
        this._dataService.getAllTasks()
            .subscribe(function (res) {
            _this.tasks = res;
        });
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.options = {
            multiple: true,
            placeholder: 'Select parents'
        };
        this.getTaskDetail(this.route.snapshot.params['id']);
    };
    TaskEditComponent.prototype.getTaskDetail = function (id) {
        var _this = this;
        var taskOptions = [];
        this._dataService.getTask(id).then(function (res) {
            _this.task = res;
            _this.tasks.forEach(function (task) {
                if (task.id != _this.task.id)
                    taskOptions.push({ id: task.id, text: task.todo });
            });
            _this.taskOptions = rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
                obs.next(taskOptions);
                obs.complete();
            });
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent.prototype.updateTask = function (id) {
        var _this = this;
        this._dataService.updateTask(id, this.task)
            .then(function (res) {
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent.prototype.selectChanged = function (data) {
        this.task.parent_ids = data.value;
    };
    TaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/task-edit/task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 mt-3\">\n\t\t\t<a [routerLink]=\"['/task-create']\" class=\"btn btn-default btn-lg\">\n\t\t\t\tCreate\n\t\t\t</a>\n\t\t\t<table class=\"table mt-3\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Todo</th>\n\t\t\t\t\t\t<th>Parent</th>\n\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let task of tasks\">\n\t\t\t\t\t\t<td>{{ task.todo }}</td>\n\t\t\t\t\t\t<td>{{ task.parents | parentsTodo }}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/task-edit', task.id]\" class=\"btn btn-success\">EDIT</a>\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteTask(task.id)\">DELETE</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskComponent = /** @class */ (function () {
    function TaskComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this._dataService.getTasks()
            .subscribe(function (res) { return _this.tasks = res; });
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this._dataService.deleteTask(id).then(function (result) {
            _this.tasks.forEach(function (task, index) {
                if (task.id == id) {
                    _this.tasks.splice(index, 1);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TaskComponent);
    return TaskComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
__webpack_require__(/*! popper.js/dist/popper.min.js */ "./node_modules/popper.js/dist/popper.min.js");
__webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");




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

module.exports = __webpack_require__(/*! D:\work\marcw1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map