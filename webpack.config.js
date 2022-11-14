const fs = require('fs');
const glob = require('glob');
const path = require('path');

const service = process.argv.pop();

module.exports = function (options) {
    const o = {
        ...options,
    }

    o.output = {
        filename: `${service === 'assets' ? 'libs' : 'apps'}/${service}/[name].js`,
        libraryTarget: 'commonjs',
    };

        o.entry = {
            main: path.join(__dirname, 'apps', service, '/src/main.ts'),
        }

    if (fs.existsSync(path.join(__dirname, 'apps', service, '/knexfile.ts'))) {
        o.entry.knexfile = path.join(__dirname, 'apps', service, '/knexfile.ts');
        glob.sync(path.join(__dirname, 'apps', service, '/src/config/database/**/*.ts'), {
            cwd: path.join(__dirname, 'apps', service),
            absolute: false,

        }).reduce((acc, path) => {
            const entry = path.split(service).pop().replace('.ts','');
            acc[entry] = path;
            return acc;
        }, o.entry);
    }


    return o;
};
