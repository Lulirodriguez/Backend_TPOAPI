const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// me traigo los modelos que quiero

const MarcaModelo = require('./models/marcas');
const UsuarioModelo = require('./models/usuarios');
const CompraModelo = require('./models/compras');
const ItemModelo = require('./models/items');
const DireccionEnvioModelo = require('./models/direccionesDeEnvio');
const MetodoPagoModelo = require('./models/metodosDePago');
const TransaccionModelo = require('./models/transacciones');
const CategoriasModelo = require('./models/categorias')
const ItemsXCompraModelo = require('./models/itemsXCompra');

// configuracion de la base de datos local

const sequelize = new Sequelize('apitest', 'luliR', 'mysql2271', {
    host: 'localhost',
    dialect: 'mysql',
});

// crear los modelos en la base de datos (sin usar consultas sql)

const Marca = MarcaModelo(sequelize,Sequelize);
const User = UsuarioModelo(sequelize, Sequelize);
const Compra = CompraModelo(sequelize, Sequelize);
const Item = ItemModelo(sequelize, Sequelize);
const DireccionEnvio = DireccionEnvioModelo(sequelize,Sequelize);
const MetodoPago = MetodoPagoModelo(sequelize,Sequelize);
const Transaccion = TransaccionModelo(sequelize,Sequelize);
const Categoria = CategoriasModelo(sequelize,Sequelize);
const ItemXCompra = ItemsXCompraModelo(sequelize,Sequelize);

const loadData = async () => {
    // Usuario administrador
    admin = {
    'nombre': 'Admin',
    'apellido': 'UADE',
    'username': 'admin@uade.edu.ar',
    'password': bcrypt.hashSync('uade1234', 10),
    'isAdmin': true,
    }

    //Categorias
    await User.create(admin);
    categoria = {
        'nombre': 'Tenis',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Futbol',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Rugby',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Hockey',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Voley',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Golf',
    }
    await Categoria.create(categoria);
    categoria = {
        'nombre': 'Gym',
    }
    await Categoria.create(categoria);
    
    //Productos

    //Tenis
    producto = {
        'nombre': 'Raqueta Access',
        'descripcion': 'Principal herramienta de juego',
        'idCategoria': 1,
        'imagen': 'https://elksport.com/pub/media/catalog/product/r/a/raqueta-tenis-access-elk-sport.jpg',
        'precioU': 2000,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Tubo de Pelotas Tenis Slazenger',
        'descripcion': 'Alta calidad de rebote, camaras de aire reforzadas',
        'idCategoria': 1,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_911957-MLA31125000601_062019-O.jpg',
        'precioU': 1050,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Cuerda para encordado de Raqueta',
        'descripcion': 'Cuerdas de alta resistencia, para mas duración',
        'idCategoria': 1,
        'imagen': 'https://vts-tenis.com/images/taller/encordar/vts-tenis-encordado-raquetas-06-677.jpg',
        'precioU': 470,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Anti vibrador de raqueta',
        'descripcion': 'Atenua la vibracion de las cuerdas',
        'idCategoria': 1,
        'imagen': 'https://http2.mlstatic.com/antivibradores-head-individuales-pro-damp-tenis-deporcity-D_NQ_NP_944422-MLA31079608249_062019-F.jpg',
        'precioU': 200,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Grip',
        'descripcion': 'Recubrimiento firme del mango. Agarre solido',
        'idCategoria': 1,
        'imagen': 'https://www.hectortenis.com/wp-content/uploads/2018/02/cubre2babolat.jpg',
        'precioU': 400,
    }
    await Item.create(producto);

    //Futbol
    producto = {
        'nombre': 'Pelota',
        'descripcion': 'Pelota Adidas',
        'idCategoria': 2,
        'imagen': 'https://image.made-in-china.com/202f0j10ubPfzdgBgcor/Customized-Soccer-Ball-Sports-Goods-Wholesale-PVC-Football.jpg',
        'precioU': 3400,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Pelota Nike',
        'descripcion': 'Pelota de futbol marca Nike',
        'idCategoria': 2,
        'imagen': 'https://i.pinimg.com/originals/a9/2e/5c/a92e5c478af3f3a931597499abad9af2.jpg',
        'precioU': 3750,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Botines HyperVenom',
        'descripcion': 'Botines de alta gama',
        'idCategoria': 2,
        'imagen': 'https://www.zapatos.es/media/catalog/product/cache/image/650x650/7/4/74524_2.jpg',
        'precioU': 6200,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Medias deportivas',
        'descripcion': 'Medias deportivas',
        'idCategoria': 2,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_680405-MLA31676276256_082019-O.jpg',
        'precioU': 1200,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Canilleras Puma',
        'descripcion': 'Protege contra los impactos fuertes',
        'idCategoria': 2,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_615617-MLA44959419510_022021-W.jpg',
        'precioU': 1600,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Medias largas Nike',
        'descripcion': 'Medias talla grande de fútbol',
        'idCategoria': 2,
        'imagen': 'https://s.alicdn.com/@sc04/kf/HTB1_MmtBOCYBuNkHFCc763HtVXa9.png',
        'precioU': 1500,
    }
    await Item.create(producto);

    //Rugby
    producto = {
        'nombre': 'Pelota',
        'descripcion': 'Pelota oficial Gilbert',
        'idCategoria': 3,
        'imagen': 'https://thumbs.nosto.com/quick/rbxh5h46/8/57765_alt_b47310faa2b96cde79ccc49bdd743a8d746f7384f420e97d52e3f7def51d685a/b253652a219272885bd76d0eaf3dee2236881d97e42fd52d326430703764bd13a/A',
        'precioU': 3300,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Apoya pelota',
        'descripcion': 'Apoya pelota marca Gilbert',
        'idCategoria': 3,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_790971-MLA45003677247_022021-V.jpg',
        'precioU': 700,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Casco protector',
        'descripcion': 'Casco protector, agarre firme, semi permeable',
        'idCategoria': 3,
        'imagen': 'http://kaurisport.com/wp-content/uploads/casco_rugby_kauri.jpg',
        'precioU': 2200,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Protector Bucal Oficial de Los Pumas',
        'descripcion': 'Protector Bucal Oficial utilizado por la selección argentina de rugby',
        'idCategoria': 3,
        'imagen': 'http://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/dsc081571-be06a9fbfef922360515172508676485-640-0.jpg',
        'precioU': 1600,
    }
    await Item.create(producto);
    producto = {
        'nombre': '',
        'descripcion': '',
        'idCategoria': 3,
        'imagen': '',
        'precioU': 0,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Medias',
        'descripcion': 'Medias verdes y negras',
        'idCategoria': 3,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_768874-MLA31078451740_062019-V.jpg',
        'precioU': 1100,
    }
    await Item.create(producto);

    //Hockey
    producto = {
        'nombre': 'Palo de Hockey Brabo',
        'descripcion': 'Palo de Hockey marca Brabo',
        'idCategoria': 4,
        'imagen': 'https://hockeygear.com.ar/wp-content/uploads/2018/08/315.82410.000_TC_10_black_edition_DF-350x350.jpeg',
        'precioU': 3400,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Combo palo Grays + bocha',
        'descripcion': 'Conjunto palo y bocha',
        'idCategoria': 4,
        'imagen': 'https://www.anuncioya.com/uplimg/100116/img_A_735782a723d20d47c924e2e1c38793b6cc1da7.jpg',
        'precioU': 3750,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Mochila Hockey',
        'descripcion': 'Mochile para transporte de equipos',
        'idCategoria': 4,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_648493-MLA31047348804_062019-V.jpg',
        'precioU': 6300,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Canilleras Rosas',
        'descripcion': 'Canilleras rosas con protección de tobillo',
        'idCategoria': 4,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_840392-MLA31592396131_072019-O.jpg',
        'precioU': 1500,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Protector bucal',
        'descripcion': 'Previene lesiones en la dentadura',
        'idCategoria': 4,
        'imagen': 'https://d3ugyf2ht6aenh.cloudfront.net/stores/289/403/products/bucal-simple-rosa1-86f51032fda19b010215884457936942-1024-1024.jpg',
        'precioU': 3100,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Combo 3 Bochas ',
        'descripcion': 'Tres bochas de hockey marca Nassau',
        'idCategoria': 4,
        'imagen': 'https://deportesonce.com.ar/wp-content/uploads/virtuemart/product/bocha-punteada.jpg',
        'precioU': 5000,
    }
    await Item.create(producto);

    //Voley
    await Item.create(producto);
    producto = {
        'nombre': 'Pelota Voley Molten',
        'descripcion': 'Pelota Voley marca Molten, con cámara de aire reforzada',
        'idCategoria': 5,
        'imagen': 'https://m.media-amazon.com/images/I/819mkih42NL._AC_SX425_.jpg',
        'precioU': 5750,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Zapatillas Unisex',
        'descripcion': 'Zapatillas deportivas',
        'idCategoria': 5,
        'imagen': 'https://www.rossettideportes.com/media/catalog/product/cache/b7a516a322cb3276e23246da31b85bd0/z/a/zapatillas-voley-hombre-asics-gel-task-as-b704y400-4_1.jpg',
        'precioU': 5000,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Rodilleras',
        'descripcion': 'Rodilleras blancas, agarre firme',
        'idCategoria': 5,
        'imagen': 'https://sonder.com.ar/wp-content/uploads/2019/09/1410.jpg',
        'precioU': 1350,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Red Playera de Voley',
        'descripcion': 'Red de Voley para uso playero',
        'idCategoria': 5,
        'imagen': 'https://ae01.alicdn.com/kf/H5644858a37c04d52a7e76a6e13a29717j/Super-venta-Universal-estilo-9-5X1M-voleibol-Red-de-polietileno-Material-playa-voleibol-red-voleibol-pelota.jpg_q50.jpg',
        'precioU': 1600,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Inflador De Pelota',
        'descripcion': 'Inflador De pelotas de voley manual',
        'idCategoria': 5,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_802057-MLA31827636904_082019-O.jpg',
        'precioU': 2500,
    }
    await Item.create(producto);

    //Golf
    producto = {
        'nombre': 'Tubo 3 pelotas',
        'descripcion': 'Pelotas de golf x3',
        'idCategoria': 6,
        'imagen': 'https://thegolfershop.com.ar/wp-content/uploads/2020/05/pelotas-golf-taylormade-tp5x-the-golfe-shop-3.jpg',
        'precioU': 3600,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Pelota Pro VX1',
        'descripcion': 'Pelota de golf modelo Pro V1X',
        'idCategoria': 6,
        'imagen': 'https://thegolfershop.com.ar/wp-content/uploads/2020/05/prov1x.jpg',
        'precioU': 1250,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Mochila de Palos de Golf',
        'descripcion': 'Bolso para transportar equipo de Golf',
        'idCategoria': 6,
        'imagen': 'https://www.lo-mejor.com/wp-content/uploads/2019/11/bolsa-palos-de-golf-sin-ruedas-300x300.jpg',
        'precioU': 6300,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Apoya Pelotas',
        'descripcion': 'Soporte de pelotas de golf',
        'idCategoria': 6,
        'imagen': 'https://m.media-amazon.com/images/I/41SWNhbr8cL.jpg',
        'precioU': 1300,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Mochila de palos Premium',
        'descripcion': 'Mochila de palos de golf de alta gama',
        'idCategoria': 6,
        'imagen': 'https://sc01.alicdn.com/kf/He0acfd3b8fac40339d49a9d10c5fb095a/200453451/He0acfd3b8fac40339d49a9d10c5fb095a.jpg',
        'precioU': 8000,
    }
    await Item.create(producto);

    //Gym
    producto = {
        'nombre': 'Mancuernas x2',
        'descripcion': '2 Mancuernas 5 KG',
        'idCategoria': 7,
        'imagen': 'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/kit-mancuerna-a-rosca-con-discos-maciza-pesas-%20%282%29.jpg',
        'precioU': 7700,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Macuernas de peso ajustable',
        'descripcion': 'Macuernas x2, peso regulable',
        'idCategoria': 7,
        'imagen': 'https://sc04.alicdn.com/kf/H5bfc3ab65aa740ff9a25d00f419e95f2C.jpg',
        'precioU': 7700,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Pesa Rusa',
        'descripcion': 'Pesa modelo Ruso',
        'idCategoria': 7,
        'imagen': 'https://cdn.shopify.com/s/files/1/0046/7045/5854/products/211_08a5acc0-3d1b-4cf5-a54b-1923902b6829_700x.jpg?v=1594992600',
        'precioU': 7000,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Colchoneta',
        'descripcion': 'Colchoneta para gym en casa, usos diversos',
        'idCategoria': 7,
        'imagen': 'https://images-na.ssl-images-amazon.com/images/I/71sVvxSU1AL._SL1334_.jpg',
        'precioU': 1900,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Maquina Multifuncion',
        'descripcion': 'Maquina para ejercitar Gemelos',
        'idCategoria': 7,
        'imagen': 'https://www.dhresource.com/f2/albu/g17/M00/D9/67/rBVa4V_IbwGAJRUiAAF3y5XYbHc637.jpg',
        'precioU': 5600,
    }
    await Item.create(producto);
    producto = {
        'nombre': 'Soga para saltar',
        'descripcion': 'Soga de saltar de cuádrupe hilo',
        'idCategoria': 7,
        'imagen': 'https://http2.mlstatic.com/D_NQ_NP_862263-MLA45629681679_042021-V.jpg',
        'precioU': 1600,
    }
    await Item.create(producto);
    console.log("Información inicial cargada con éxito!");
}

sequelize.sync({force: false}).then(() => {
        console.log("Las tablas están sincronizadas");
        loadData();
    }
);

// lo exporto => se requiere en app.js

module.exports = {
    Marca,
    User,
    Compra,
    Item,
    DireccionEnvio,
    MetodoPago,
    Transaccion,
    Categoria,
    ItemXCompra,
}