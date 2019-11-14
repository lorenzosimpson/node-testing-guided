const request = require('supertest')
const server = require('./server')

it('should set db environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            // run server
            //make a GET request
            return request(server).get('/').then(res => {
                //see that res is 200 ok
                expect(res.status).toBe(200)
            })
        });

        it('should return json response', () => {
            // run server
            //make a GET request
            return request(server).get('/').then(res => {
                //see that res is 200 ok
                expect(res.type).toMatch(/json/i)
            })
        })

        it('should return json response in Body', () => {
            // run server
            //make a GET request
            return request(server).get('/').then(res => {
                //see that res is 200 ok
                expect(res.body).toEqual({ api: "up" })
            })
        })
    })
})