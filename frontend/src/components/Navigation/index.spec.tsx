import { render, screen } from '@testing-library/react'
import { Navigation } from './index'
import { cleanup } from '@testing-library/react'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

it('renders the navigation with the correct menu items', async () => {
  render(<Navigation />)
  const [home, logs] = [await screen.findByText('Home'), await screen.findByText('Logs')]

  expect(home).toHaveClass('ant-menu-title-content')
  expect(logs).toHaveClass('ant-menu-title-content')

  cleanup()
})
