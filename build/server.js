"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
// import routers
var PostRouter_1 = require("./router/PostRouter");
var UserRouter_1 = require("./router/UserRouter");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // set up mongoose
        var MONGO_URI = 'mongodb://localhost/LabRESTapis';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // config
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        // this.app.use((req) => {
        //     // cors options
        // })
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/posts', PostRouter_1.default);
        this.app.use('/api/v1/users', UserRouter_1.default);
    };
    return Server;
}());
// export
exports.default = new Server().app;
