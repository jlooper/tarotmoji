module.exports = function(content) {
    if (this.request.match(/app\\.(css|scss|less|sass)$/)) {
        return content;
    }
    content += `
    const application = require("tns-core-modules/application");
    require("tns-core-modules/ui/styling/style-scope");

    if (exports[exports.length - 1]) {
        let cssContent = exports[exports.length - 1][1];
        application.addCss(cssContent);
    }
    `;

    return content;
}