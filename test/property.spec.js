import request from 'supertest'
import app from '../app/app.js'

describe('/api/properties', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /properties ', async () => {
      await request(app)
        .post('/api/properties')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /properties', async () => {
      await request(app)
        .get('/api/properties')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /properties/:id', async () => {
      await request(app)
        .put('/api/properties/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /properties/:id', async () => {
      await request(app)
        .delete('/api/properties/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
