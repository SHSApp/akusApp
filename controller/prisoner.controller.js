const db = require('../db/db')

class PrisonerController {
    async addPrisoner(req, res) {
        const {surname, name, lastname, birthday} = req.body
        const newPrisoner = await db.query('INSERT INTO prisoners (surname, name, lastname, birtday) VALUES ($1, $2, $3, $4) RETURNING *', [surname, name, lastname, birthday])
        res.json(newPrisoner.rows[0])
    }
    async getPrisoners(req, res) {
        const prisoners = await db.query('SELECT surname, name, lastname, birthday FROM prisoners')
        res.json(prisoners.rows)
    }
    async getOnePrisoner(req, res) {
        const id = req.params.id
        const prisoner = await db.query('SELECT surname, name, lastname, birthday FROM prisoners WHERE id = $1', [id])
        res.json(prisoner.rows[0])
    }
    async updatePrisoner(req, res) {
        const {id, surname, name, lastname, birthday} = req.body
        const prisoner = await db.query('UPDATE prisoners SET surname = $1, name = $2, lastname = $3, birthday = $4 WHERE id = $5 RETURNING *', [surname, name, lastname, birthdate])
        res.json(prisoner.rows[0])
    }
    async deletePrisoner(req, res) {
        const id = req.params.id
        const prisoner = await db.query('DELETE FROM prisoners WHERE id = $1', [id])
        res.json(prisoner.rows[0])
    }
}

module.exports = new PrisonerController()
