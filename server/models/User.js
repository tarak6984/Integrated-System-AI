import db from '../config/database.js';
import bcrypt from 'bcryptjs';

class User {
  static async create({ name, email, password }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const stmt = db.prepare(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
      );
      
      const result = stmt.run(name, email, hashedPassword);
      
      return this.findById(result.lastInsertRowid);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new Error('Email already exists');
      }
      throw error;
    }
  }

  static findByEmail(email) {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  }

  static findById(id) {
    const stmt = db.prepare('SELECT id, name, email, created_at, updated_at FROM users WHERE id = ?');
    return stmt.get(id);
  }

  static async comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}

export default User;
