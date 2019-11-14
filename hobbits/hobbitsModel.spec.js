const db = require('../data/dbConfig')
const { insert } = require('./hobbitsModel')

describe('hobbits model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hobbits').truncate()
        })
        it('should insert a hobbit to the db', async () => {
            // add a hobbit 
            // check if it was added 
            await insert({ name: 'sam' })
            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(1)
        })

        it('should insert the provided hobbit to the db', async () => {
            // add a hobbit 
            // check if it was added 
            await insert({ name: 'sam' })
            await insert({ name: 'frodo' })
            await insert({ name: 'lorenzo'})
            const hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(3)
            expect(hobbits[0].name).toBe('sam')
            expect(hobbits[1].name).toBe('frodo')
            expect(hobbits[2].name).toBe('lorenzo')
        })

        it('should return inserted hobbit', async () => {
            let hobbit = await insert({ name: 'sam' })
            expect(hobbit.name).toBe('sam')
            expect(hobbit.id).toBeDefined();

        })
    })
})