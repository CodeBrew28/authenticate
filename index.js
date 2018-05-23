const { send } = require('micro')

const authenticate = mongoose => {
    const { Team } = require('schemas')(mongoose)
    return fn => async (req, res) => {
        const newTeam = new Team({
            name: "aria",
            email: "aria@gmail.com"
          })
        await newTeam.save()
      
        const team = await Team.findOne({token}).exec()
        console.log(team)
        console.log("hi")
        // console

        return send(res, 401, 'LOL')
    }
}


module.exports = authenticate