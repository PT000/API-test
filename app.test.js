const { app } = require('./app');
const sqlite3 = require('sqlite3').verbose();
const request = require('supertest');
const db = new sqlite3.Database(':memory:');

const seedDb = db => {
    db.run('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)');
    db.run('DELETE FROM persons');
    const stmt = db.prepare('INSERT INTO persons (name, age) VALUES (?, ?)');
    stmt.run('Anna', 1);
    stmt.finalize();
}
test('get persons', () => {
    db.serialize(async () => {
        seedDb(db);
        const res = await request(app).get('/');
        const response = [
            { name: 'Anna', id: 1, age: 1 }
        ]
        expect(res.status).toBe(200);
        expect(res.body).toEqual(response);
    })
});

test('add person', () => {
    db.serialize(async () => {
        seedDb(db);
        await request(app)
            .post('/')
            .send({ name: 'John', age: 2 });
        const res = await request(app).get('/');
        const response = [
            { name: 'Anna', id: 1, age: 1 },
            { name: 'John', id: 2, age: 2 }
        ]
        expect(res.status).toBe(200);
        expect(res.body).toEqual(response);
    })
});
test('update person', () => {
    db.serialize(async () => {
        seedDb(db);
        await request(app)
            .put('/1')
            .send({ name: 'John', age: 2 });
        const res = await request(app).get('/');
        const response = [
            { name: 'Jane', id: 1, age: 1 }
        ]
        expect(res.status).toBe(200);
        expect(res.body).toEqual(response);
    })
});
test('delete person', ()  => {
    db.serialize(async () => {
        seedDb(db);
        const res = await request(app).delete('/1');
        const response = [];
        expect(res.status).toBe(200);
        expect(res.body).toEqual(response);
    })
});
