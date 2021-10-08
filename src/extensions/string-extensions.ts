export {}; // this file needs to be a module

String.prototype.isNullOrEmpty = function (this: string): boolean {
    return this === null || this?.length === 0;
};
