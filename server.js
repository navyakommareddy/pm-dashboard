'use strict';

const express    = require( 'express' );

const app            = express();
const path           = require( 'path' );
const morgan         = require( 'morgan' );
const bodyParser     = require( 'body-parser' );
const methodOverride = require( 'method-override' );
const database       = require(path.resolve( './server/config/db.config.js' ));

const APP_PORT = process.env.PORT || 2305;
const APP_HOST = process.env.HOST || 'localhost';

/////////////// MiddleWares ///////////////

app.use( morgan( 'dev' ) );
app.use( methodOverride() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { "extended": true } ) );
app.use( express.static( __dirname ) );

/////////////// Routes ///////////////

const index = require( path.resolve( 'server/index/router' ) );
const projectRoutes = require(path.resolve('./server/project/project.route'));
const projectInvoiceRoutes = require(path.resolve('./server/projectInvoice/projectInvoice.route'));
const invoiceRoutes = require(path.resolve('./server/invoice/invoice.route'));
const taskorderRoutes = require(path.resolve('./server/taskorder/taskorder.route'));
const mouRoutes = require(path.resolve('./server/mou/mou.route'));

// app.use( '/', index );

if ( app.get( 'env' ) === 'development' ) {
    app.use( ( err, req, res, next ) => {
        console.log( err );
        return err ? res.status( err.status || 500 ).end() : next();
    });
}

app.use( function( err, req, res, next) {
  return res.render('error', {
    message: err.message,
    error: {}
  });
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.listen( APP_PORT, APP_HOST, () => {
    console.log( `App Started at ${ APP_HOST }:${ APP_PORT }` );
});

database.authenticate().then(()=>{
    console.log("connection success");
})
.catch(err=>{
    console.log("unable to connect",err);
});
app.use('/project',projectRoutes);
app.use('/projectinvoice',projectInvoiceRoutes);
app.use('/taskorderinvoice',invoiceRoutes);
app.use('/taskorder',taskorderRoutes);
app.use('/mou',mouRoutes);
