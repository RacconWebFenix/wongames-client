import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //  1 - Rederizar Componente `render`
    // 2 - Selecionar elemento a ser testado `screen (queries) getBy...`
    // 3 - expect - assertion - asserção - comparação - Análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black label when is color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  // it('should render a bigger logo without text if hideOnMobile', () => {
  //   renderWithTheme(<Logo $hideOnMobile={true} />)
  //   expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
  //     'width',
  //     '5.8rem',
  //     {
  //       media: '(max-width: 768px)'
  //     }
  //   )
  // })
})
