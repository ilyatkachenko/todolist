webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navigation></app-navigation>\n  <app-tasks></app-tasks>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Material_material_module__ = __webpack_require__("../../../../../src/app/Material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["b" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["a" /* DialogDataExampleDialog */],
                __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["a" /* DialogDataExampleDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__Material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Task Manager</span>\n\n    <span class=\"example-spacer\"></span>\n\n    <button mat-button>About</button>\n    <button mat-button>Services</button>\n    <button mat-button>Contacts</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task Service Initialized...');
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get('/api/tasks');
    };
    TaskService.prototype.addTask = function (newTask) {
        return this.http.post('/api/task', newTask);
    };
    TaskService.prototype.deleteTask = function (task) {
        return this.http.delete('/api/task/' + task._id);
    };
    TaskService.prototype.updateStatus = function (task) {
        return this.http.put('/api/task/' + task._id, task);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/dialog-data-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Task deleted</h1>\r\n<div mat-dialog-content>\r\n    Task \"{{data.task}}\" was deleted successfully!\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"example-container\">\n        <form novalidate [formGroup]=\"myform\" (submit)=\"addTask($event)\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput formControlName=\"title\" placeholder=\"Add Task...\">\n            </mat-form-field>\n            <mat-form-field class=\"example-half-width\">\n                <textarea matInput formControlName=\"description\" placeholder=\"Description...\" matTextareaAutosize matAutosizeMinRows=\"1\"\n                          matAutosizeMaxRows=\"3\"></textarea>\n            </mat-form-field>\n            <mat-form-field class=\"example-half-width\">\n                <input matInput formControlName=\"deadline\" [matDatepicker]=\"picker\" placeholder=\"Choose a deadline\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field class=\"example-half-width\">\n                <mat-select placeholder=\"Task status\" disableRipple formControlName=\"status\">\n                    <mat-option class=\"to-do\" value=\"To Do\">To Do</mat-option>\n                    <mat-option class=\"in-progress\" value=\"In Progress\">In Progress</mat-option>\n                    <mat-option class=\"completed\" value=\"Completed\">Completed</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <button class=\"float-right submit-btn\" type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n        </form>\n    </div>\n    <mat-card-content class=\"task-list\">\n        <div *ngFor=\"let task of tasks\">\n            <mat-card>\n                <div class=\"row\">\n                    <div class=\"col-md-1\">\n                        <mat-checkbox [checked]=\"task.isDone\" (click)=\"updateStatus(task)\"\n                                      color=\"primary\"></mat-checkbox>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <h3 [class.to-do-title]=\"task.status == 'To Do'\" [class.in-progress-title]=\"task.status == 'In Progress'\" [class.completed-title]=\"task.status == 'Completed'\">{{task.title}}</h3>\n                        <h5>{{task.description}}</h5>\n                        <span class=\"font-italic\">Created at : {{task.createdDate}}</span>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <span>Deadline : {{task.deadline}}</span>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <span>Status : <span class=\"font-weight-bold\" [class.to-do-title]=\"task.status == 'To Do'\" [class.in-progress-title]=\"task.status == 'In Progress'\" [class.completed-title]=\"task.status == 'Completed'\">{{task.status}}</span></span>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <button class=\"float-right\" (click)=\"deleteTask(task)\" mat-raised-button color=\"primary\">\n                            Delete\n                        </button>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <mat-card *ngIf=\"showSpinner\">\n            <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n        </mat-card>\n    </mat-card-content>\n</mat-card>\n\n\n<mat-card *ngIf=\"answerDisplay\">\n    <h1>{{ answerDisplay }}, you're damn right.</h1>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-half-width {\n  width: 50%; }\n\n.task-list {\n  margin-top: 20px; }\n\n.submit-btn {\n  min-width: 300px; }\n\n.to-do {\n  background-color: #fffe82 !important;\n  font-weight: bold;\n  color: #000 !important; }\n  .to-do:hover {\n    background-color: rgba(255, 254, 130, 0.45) !important; }\n\n.in-progress {\n  background-color: #44afff !important;\n  font-weight: bold;\n  color: #000 !important; }\n  .in-progress:hover {\n    background-color: rgba(68, 175, 255, 0.51) !important; }\n\n.completed {\n  background-color: #44ff78 !important;\n  font-weight: bold;\n  color: #000 !important; }\n  .completed:hover {\n    background-color: rgba(68, 255, 120, 0.48) !important; }\n\n.to-do-title {\n  color: #ffc900; }\n\n.in-progress-title {\n  color: #44afff; }\n\n.completed-title {\n  color: #00d32b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TasksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataExampleDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TasksComponent = (function () {
    function TasksComponent(taskService, dialog) {
        var _this = this;
        this.taskService = taskService;
        this.dialog = dialog;
        this.answer = '';
        this.answerDisplay = '';
        this.showSpinner = false;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year = d.getFullYear();
        var currDate = curr_month + "/" + curr_date + "/" + curr_year;
        var dl = this.myform.value.deadline;
        var dl_date = dl.getDate();
        var dl_month = dl.getMonth() + 1;
        var dl_year = dl.getFullYear();
        var dlDate = dl_month + "/" + dl_date + "/" + dl_year;
        var newTask = {
            _id: '',
            title: this.myform.value.title,
            description: this.myform.value.description,
            isDone: false,
            createdDate: currDate,
            deadline: dlDate,
            status: this.myform.value.status
        };
        this.showSpinner = true;
        setTimeout(function () {
            _this.showSpinner = false;
            _this.taskService.addTask(newTask)
                .subscribe(function (task) {
                _this.tasks.push(task);
                _this.myform.value.title = '';
                _this.myform.value.description = '';
                _this.myform.value.deadline = '';
                _this.myform.value.status = '';
            });
        }, 1000);
    };
    TasksComponent.prototype.deleteTask = function (task) {
        var _this = this;
        var tasks = this.tasks;
        this.taskService.deleteTask(task).subscribe(function (data) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i]._id == task._id) {
                    tasks.splice(i, 1);
                    _this.dialog.open(DialogDataExampleDialog, {
                        data: {
                            task: task.title
                        }
                    });
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone,
            description: task.description,
            createdDate: task.createdDate,
            deadline: task.deadline,
            status: task.status
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            deadline: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
        }, { updateOn: 'submit' });
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]])
    ], TasksComponent);
    return TasksComponent;
}());

var DialogDataExampleDialog = (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__("../../../../../src/app/tasks/dialog-data-example-dialog.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map