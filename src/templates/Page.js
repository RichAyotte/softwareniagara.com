import Helmet from 'react-helmet'
import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Page from '../components/Page'

export default ({ pageContext: { page } } = { page: {} }) => {
  return (
    <DefaultLayout>
      <Action to='/'>
        📅 Back to Events
      </Action>
      <Page {...page} />
      <Helmet>
        <title>{page.title} | Software Niagara</title>
      </Helmet>
    </DefaultLayout>
  )
}
