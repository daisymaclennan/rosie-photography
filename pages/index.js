import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <p>Sed risus adipiscing hendrerit in vestibulum sed aenean, sodales vivamus est risus aenean vestibulum. Lorem ut sollicitudin sapien in vestibulum ut suscipit amet porttitor. Vestibulum ipsum in sapien est consectetur ante. Nunc condimentum vivamus aenean ante risus condimentum euismod, ipsum, faucibus ante in adipiscing lorem.</p>
    <Link href='/directory'>
      <a>Directory</a>
    </Link>
  </Layout>
)
