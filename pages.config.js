import { resolve } from 'path'

const pages = [
    {name: 'index', path: resolve(__dirname, 'index.html')},
    {name: 'matrix', path: resolve(__dirname, '../src/pages/matrix.html')},
    {name: 'bms', path: resolve(__dirname, '../src/pages/bms.html')},
    {name: 'coaching', path: resolve(__dirname, '../src/pages/coaching.html')},
    {name: 'portal', path: resolve(__dirname, '../src/pages/portal.html')},
    {name: 'products', path: resolve(__dirname, '../src/pages/products.html')},
];

export default pages