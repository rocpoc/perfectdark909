import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

const renderAtPath = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders app', () => {
  const { container } = renderAtPath('/');
  expect(container).toBeInTheDocument();
});

test('renders crawlable artist detail metadata', async () => {
  renderAtPath('/artists/brick');

  expect(
    screen.getByRole('heading', { name: 'Brick' })
  ).toBeInTheDocument();

  await waitFor(() => {
    expect(document.title).toContain('Brick | Perfect Dark Artist');
  });

  expect(
    document.querySelector('link[rel="canonical"]')?.getAttribute('href')
  ).toBe('https://perfectdark909.com/artists/brick');

  const jsonLd = Array.from(
    document.querySelectorAll('script[type="application/ld+json"]')
  ).map((script) => JSON.parse(script.textContent ?? '{}'));

  expect(
    jsonLd.some((item) => item['@type'] === 'Person' && item.name === 'Brick')
  ).toBe(true);
});

test('renders first-party info page sections', () => {
  renderAtPath('/info');

  expect(screen.getByRole('heading', { name: 'What We Do' })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Artist Roster' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Brick/ })).toHaveAttribute(
    'href',
    '/artists/brick'
  );
});
