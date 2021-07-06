import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Little House Cigars & Pipes',
  description: 'We sell the best products at great prices',
  keywords: 'cigars, buy cigars, pipes',
}

export default Meta