const { send } = require('micro')

const authenticate = mongoose => {
    const { Team } = require('schemas')(mongoose)
    return fn => async (req, res) => {
        return send(res, 401, 'Unauthorized')
    }
}


module.exports = authenticate