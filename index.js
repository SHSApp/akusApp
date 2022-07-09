const express = require('express')
const prisonerRouter = require('./routes/prisoner.routes')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/api', prisonerRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

