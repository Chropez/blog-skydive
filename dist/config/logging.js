"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}]`);
    }
};
const warn = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    }
    else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}]`);
    }
};
const error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    }
    else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}]`);
    }
};
const debug = (namespace, message, object) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    }
    else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}]`);
    }
};
exports.default = {
    info,
    warn,
    error,
    debug,
};
