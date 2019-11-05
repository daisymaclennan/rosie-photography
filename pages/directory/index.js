import React from 'react'
import Link from 'next/link'
import api from '../../lib/api'
import Layout from '../../components/layout'

const Page = ({ directory }) => (
  <Layout>
    <h2>Directory</h2>
    <ul>
      {directory.map(entry => (
        <li key={entry.slug}>
          <Link href='/directory/[slug]' as={`/directory/${entry.slug}`}>
            <a>{entry.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Page.getInitialProps = async (req) => {
  const directory = await api('directory')

  return {
    directory: directory
  }
}

export default Page
