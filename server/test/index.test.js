const app = require('../src/app.js')
const session = require('supertest')
const users = require('../src/utils/users')


const agent = session(app)


describe('GET /rickandmorty/characters/', () => {
  it('Response should be with status: 200 ',async () => {
    const res = await agent.get('/rickandmorty/characters/1')
    expect(res.status).toEqual(200)
  });

  it('Should respond with an object with the properties: id, name, species, gender, status, origin, image', async () => {
    const res = await agent.get('/rickandmorty/characters/3')
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('species')
    expect(res.body).toHaveProperty('gender')
    expect(res.body).toHaveProperty('status')
    expect(res.body).toHaveProperty('origin')
    expect(res.body).toHaveProperty('image')
  });

  it('Should respond with status 500 if occur an error', async () => {
    const res = await agent.get('/rickandmorty/characters/asd')
    expect(res.status).toEqual(500)
  })
})

describe('GET /rickandmorty/login', () => {
  it('If the user email and password is correct, should obtain an objet, acces: true', async () => {
   const res = await agent.get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`)
   
   expect(res.body).toEqual({access : true})
  });

  it('If the user email and password is incorrect, should obtain an objet, acces: false', async () => {
   const res = await agent.get(`/rickandmorty/login?email=notuser&password=notpass`)
   
   expect(res.body).toEqual({access : false})
  })
});

describe('POST /rickandmorty/fav', () => {
  it('Should respond with the same object that is received in the request body', async () => {
    
  });
});