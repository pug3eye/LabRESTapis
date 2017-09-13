"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_1 = require("../models/Post");
var PostRouter = /** @class */ (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    PostRouter.prototype.GetPosts = function (req, res) {
        Post_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.GetPost = function (req, res) {
    };
    PostRouter.prototype.CreatePost = function (req, res) {
    };
    PostRouter.prototype.UpdatePost = function (req, res) {
    };
    PostRouter.prototype.DeletePost = function (req, res) {
    };
    PostRouter.prototype.routes = function () {
        this.router.get('/', this.GetPosts);
    };
    return PostRouter;
}());
// export
var postRoutes = new PostRouter();
postRoutes.routes();
exports.default = postRoutes.router;
