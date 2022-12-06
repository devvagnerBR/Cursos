const mongoose = require( 'mongoose' )


const taskSchema = mongoose.Schema( {

    name: { type: String, required: true },
    done: { type: Boolean, default: false },

    checklist: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true

    }

} )


module.exports = mongoose.model( 'Task', taskSchema )


// C:\mongosh-1.6.1\bin

//C:\WINDOWS\System32\cmd.exe