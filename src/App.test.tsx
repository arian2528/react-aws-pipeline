import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

const renderWithRouter = (ui: JSX.Element , {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
      ...render(ui, {wrapper: BrowserRouter}),
  }
}

test('App rendering and navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  // verify page content for default route
  expect(screen.getByText(/Create Ticket/i)).toBeInTheDocument()
});

test('landing on ticket list', () => {
  renderWithRouter(<App />, {route: '/tickets'})

  expect(screen.getByText(/Browse Tickets/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  // verify navigation to "no match" route
  expect(screen.getByText(/No match for this route/i)).toBeInTheDocument()
})
