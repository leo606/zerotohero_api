import express from 'express'


const app = express()

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('asdasdasdasd')
})

const port = 5000
app.listen(port, () => {
    console.log(`server running @ http://localhost:${port}`)

})
