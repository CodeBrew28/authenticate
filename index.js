const { send } = require('micro')
const { Team } = require('schemas')(mongoose);

const authenticate = mongoose => {
    const { Team } = require('schemas')(mongoose)
    return fn => async (req, res) => {
        console.log("hi1")
        const newTeam = new Team({
            name: "aria",
            email: "aria@gmail.com"
          })
        await newTeam.save()
        console.log("hi2")
      
        // const team = await Team.findOne({name}).exec()
        // console.log(team)
        console.log("hi3")
        // console

        return send(res, 401, 'Unauthorized')
    }
}


module.exports = authenticate