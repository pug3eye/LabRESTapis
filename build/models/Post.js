"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: {
        type: String,
        default: '',
        required: true
    },
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    featured_image: {
        type: String,
        default: ''
    }
});
exports.default = mongoose_1.model('Post', PostSchema);
