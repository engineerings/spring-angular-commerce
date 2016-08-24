module.exports = function () {
    var config = {

        // all js to check
        alljs: [
            '../app/*.js',
            '../app/**/*.js',
            '../common/**/*.js',
            './*.js'
        ]
    };

    return config;
};
