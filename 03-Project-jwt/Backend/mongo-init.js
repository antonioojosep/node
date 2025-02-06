db.auth('admin', 'secret')

db = db.getSiblingDB('jwt-basic')

db.createUser({
  user: 'admin',
  pwd: 'secret',
  roles: [
    {
      role: 'readWrite',
      db: 'jwt-basic'
    }
  ]
}) 