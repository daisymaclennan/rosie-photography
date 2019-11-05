const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({});
    return;
  }

  const results = await query(sql`
    SELECT
      *
    FROM
      users
  `)
}
