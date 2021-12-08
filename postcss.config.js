module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss')('./tailwindcss.js'),
        require('postcss-preset-env'),
    ]
};