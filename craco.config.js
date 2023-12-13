const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '~api': resolvePath('./src/api'),
            '~components': resolvePath('./src/components'),
            '~pages': resolvePath('./src/pages'),
            '~services': resolvePath('./src/services'),
            '~hooks': resolvePath('./src/hooks'),
            '~interfaces': resolvePath('./src/interfaces'),
            '~': resolvePath('./src')
        }
    },
}