var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Zapatilla = /** @class */ (function () {
    function Zapatilla(id, title, price, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
    return Zapatilla;
}());
var zapatillas = [
    new Zapatilla(0, "Air Jordan 4 Starfish", 199.99, "Con un diseño inspirado en las expediciones espaciales, este modelo llega con toda la fuerza y la belleza de los materiales técnicos que se usan en los trajes de astronauta.", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/bbb86c37-c657-4367-a5d1-84e5b24e04d3/fecha-de-lanzamiento-de-las-air-jordan-4-starfish.jpg"),
    new Zapatilla(1, "Air Max 1 LV8 Dark Teal Green", 149.99, "Las Nike Air Max 1 LV8 rediseñan las legendarias originales que siguen en lo más alto de su reinado desde 1987.", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a238e26b-b109-4964-83f4-504063d5e9d3/fecha-de-lanzamiento-de-las-air-max-1-lv8-dark-teal-green.jpg"),
    new Zapatilla(2, "SB Dunk Low x Sean Cliver Holiday Special", 99.99, "Este regalo con temática de la temporada de Sean Cliver utiliza ante aterciopelado, piel premium y detalles de nieve metalizados para darle un toque invernal a un básico del skate.", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c817dfd2-e826-4eff-b058-ff6972b2ea1d/fecha-de-lanzamiento-de-las-sb-dunk-low-x-sean-cliver-holiday-special.jpg"),
    new Zapatilla(3, "Air Max Tailwind 5 Iron Grey", 179.99, "Nacidas durante el cambio de milenio, las Tailwind 5 son tan actuales ahora como hace dos décadas.", "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/4e308f23-0825-4056-a088-8084288cede9/fecha-de-lanzamiento-de-las-air-max-tailwind-5-iron-grey.jpg"),
    new Zapatilla(4, "Zoom 004 x MMW Stone", 449.99, "Mediante su trabajo en Givenchy y su propia marca, Alyx, el director creativo Matthew M. Williams se ha hecho famoso por llevar la moda a nuevos horizontes.", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ba5ce688-bb51-4527-aa20-f54a3320e2ba/fecha-de-lanzamiento-de-las-zoom-004-x-mmw-stone.jpg"),
    new Zapatilla(5, "Air Jordan 1 J. Balvin", 189.99, "La primera vez que las vimos fue durante el descanso de un espectáculo en el mayor escenario del fútbol americano.", "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/7f166335-08d6-467e-bb19-bb85d6a7b163/fecha-de-lanzamiento-de-las-air-jordan-1-jbalvin.jpg")
];
function getZapatilla() {
    return zapatillas;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/zapatillas', bodyParser.json(), function (req, res) {
    var zNew = new Zapatilla(zapatillas.length + 1, req.body.title, req.body.price, req.body.description, req.body.images);
    zapatillas.push(zNew);
    res.status(200).send({
        id: zNew.id,
        title: zNew.title,
        price: zNew.price,
        description: zNew.description,
        images: zNew.image
    });
});
app.get('/', function (req, res) {
    res.send('The URL of zapatillas is http://localhost:8000/zapatillas');
});
app.get('/zapatillas', function (req, res) {
    res.json(getZapatilla());
});
function getZapatillasById(zapatillaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapatillaId; });
    return z;
}
app.get('/zapatillas/:id', function (req, res) {
    res.json(getZapatillasById(parseInt(req.params.id)));
});
function updateZapatillasById(req, zapatillaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapatillaId; });
    var index = zapatillas.indexOf(z);
    z.title = req.body.title,
        z.price = req.body.price,
        z.description = req.body.description,
        z.images = req.body.images;
    zapatillas[index] = z;
    return z;
}
app.put('/zapatillas/:id', function (req, res) {
    res.json(updateZapatillasById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteZapatillasById(zapatillaId) {
    var z;
    z = zapatillas.find(function (z) { return z.id == zapatillaId; });
    var index = zapatillas.indexOf(z);
    delete zapatillas[index];
    return z;
}
app["delete"]('/zapatillas/:id', function (req, res) {
    res.json(deleteZapatillasById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
