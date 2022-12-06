const express = require( 'express' )
const checkListRouter = require( './src/routes/checklist' )

require('./config/database')


const app = express()

// para enviar informações tipo json
app.use( express.json() )

app.use( '/checklists', checkListRouter )





app.listen( 3000, () => {
    console.log( 'server is running at 3000' );
} )

