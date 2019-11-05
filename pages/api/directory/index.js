const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  const results = await query(sql`
    SELECT
      *
    FROM
      directory
  `)

  // Return a list of entries.
  res.json([
    {
      name: 'Si digital',
      slug: 'sidigital'
    },
    {
      name: 'Strong Island',
      slug: 'strong-island'
    }
  ])
}
