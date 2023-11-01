import { fireEvent, screen } from '@testing-library/react'
import Menu from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should hendle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecioar o menu full
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botao abrir no menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should show register box', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Log in Now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })
  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Marcos" />)

    expect(screen.queryByText(/My account/i)).toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).toBeInTheDocument()

    expect(screen.queryByText(/Log in Now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
  })

  it('should show wishlist and account when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()

    expect(screen.getByText(/Log in Now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })
})
