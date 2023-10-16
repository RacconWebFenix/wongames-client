import { render, screen } from '@testing-library/react'

import MediaMatch from '.'
import 'jest-styled-components'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  // hook test
  beforeEach(() => {
    render(
      <>
        <MediaMatch $greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch $lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )
    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hidden baded on the media passed', () => {
    expect(desktopHeading.parentNode).not.toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })
})
