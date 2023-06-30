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
    const fav = {
      id: 34,
      name: 'rick',
      species: 'human',
      gender: 'male',
      status: 'alive',
      origin: 'unkwown',
      image: 'url',
    };

    const res = await agent.post('/rickandmorty/fav').send(fav)
    expect(res.body).toEqual({message: 'Added favorite!', favorite: fav})
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  beforeAll(async () => {
    const characters = [  {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    }]

    const req1 = await agent.post('/rickandmorty/fav').send(characters[0])
    const req2 = await agent.post('/rickandmorty/fav').send(characters[1])
  })
  it('Should respond with an object with list of favorites if not send params id', async () => {
    const res = await agent.delete('/rickandmorty/fav')
    expect(res.body).toEqual({myFavorite: res.body.favorite})
  })
  it('Should respond with the list of favorites without the character deleted!', async () =>{
    const id = 2
    const res = await agent.delete(`/rickandmorty/fav/${id}`)
    
    expect(res.status).toEqual(200)
  })
})