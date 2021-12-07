module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss')('./tailwindcss.js'),
        require('postcss-preset-env'),
    ]
};