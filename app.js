import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || '127.0.0.1';

let mobiles = [
    {
        name : 'OnePlus8Pro',
        brand : "OnePlus",
        sales : 200,
    },
    {
        name : 'Samsung S7',
            brand : "Samsung",
            sales : 170,
    },
    {
        name : 'Nokia V16',
            brand : "Nokia",
            sales : 90,
    }
];

export const getMobiles = ({response}) => response.body = mobiles;

const router = new Router();
router
.get('/mobile', getMobiles);
// .get('/mobile/:name', getMobile)
// .post('/mobile', addMobile)
// .put('/mobile/:name', updateMobile)
// .delete('/mobile/:name', removeMobile)

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
