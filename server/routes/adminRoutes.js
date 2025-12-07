import express from 'express';
import db from '../config/database.js';

const router = express.Router();

// Get all users
router.get('/users', (req, res) => {
  try {
    const stmt = db.prepare(`
      SELECT id, name, email, created_at, updated_at 
      FROM users 
      ORDER BY created_at DESC
    `);
    const users = stmt.all();
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user statistics
router.get('/stats', (req, res) => {
  try {
    // Total users
    const totalUsersStmt = db.prepare('SELECT COUNT(*) as count FROM users');
    const totalUsers = totalUsersStmt.get().count;

    // New users in last 7 days
    const newUsersStmt = db.prepare(`
      SELECT COUNT(*) as count 
      FROM users 
      WHERE created_at >= datetime('now', '-7 days')
    `);
    const newUsers = newUsersStmt.get().count;

    // Users by month for chart (last 6 months)
    const chartDataStmt = db.prepare(`
      SELECT 
        strftime('%m', created_at) as month,
        strftime('%Y', created_at) as year,
        COUNT(*) as count
      FROM users
      WHERE created_at >= datetime('now', '-6 months')
      GROUP BY year, month
      ORDER BY year, month
    `);
    const chartData = chartDataStmt.all();

    res.json({
      totalUsers,
      newUsers,
      chartData
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user
router.delete('/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('DELETE FROM users WHERE id = ?');
    const result = stmt.run(id);

    if (result.changes === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
