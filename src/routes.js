const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdhandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdhandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
        // INi Comentar
    },
]

module.exports = routes