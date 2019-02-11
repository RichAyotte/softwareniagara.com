import React from 'react'

import { formatDate } from '../../util/dates'
import StyledEvent, { 
  StyledAddress,
  StyledBody,
  StyledHeader,
  StyledHeading,
  StyledH1,
  StyledH2,
  StyledTypography,
} from './Event.css'

const mapsLink = venue => [
  'title', 
  'address', 
  'city', 
  'province', 
  'postalCode'
].reduce((accumulator, key) => {
  return `${accumulator}${venue[key].replace(/ /g, '+')},+`
}, 'https://maps.google.com?q=')

const renderCategory = category => {
  if (!category) {
    return
  }

  const { html, title } = category
  return (
    <>
      <StyledHeading style={{marginTop: '2.5rem'}}>
        About {title}
      </StyledHeading>
      <StyledTypography dangerouslySetInnerHTML={{__html: html}} />
    </>
  )
}

const renderVenue = venue => {
  if (!venue) {
    return
  }

  const { address, city, postalCode, province, title } = venue

  return (
    <>
      <StyledHeading style={{marginTop: '2.5rem'}}>Venue</StyledHeading>
      <StyledAddress>
        <a href={mapsLink(venue)} target="_blank">{title}</a><br />
        {address}<br />
        {city}, {province}<br />
        {postalCode}<br />
      </StyledAddress>
    </>
  )
}

export default (event) => {
  const {
    category,
    date: d, 
    html, 
    time, 
    title, 
    venue 
  } = event
  const date = formatDate(d)

  return (
    <StyledEvent>
      <StyledHeader>
        <StyledH1>{title}</StyledH1>
        <StyledH2>{time} · {date} · {venue && venue.title}</StyledH2>
      </StyledHeader>
      <StyledBody>
        <StyledHeading>Details</StyledHeading>
        <StyledTypography dangerouslySetInnerHTML={{__html: html}} />
        {renderVenue(venue)}
        {renderCategory(category)}
      </StyledBody>
    </StyledEvent>
  )
}
