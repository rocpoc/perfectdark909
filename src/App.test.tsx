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

test('renders home gallery with optimized responsive images', async () => {
  renderAtPath('/');

  const heroImage = await screen.findByAltText(
    'Perfect Dark shirt overlooking snow-covered mountains'
  );

  expect(heroImage).toHaveAttribute('src', '/images/optimized/film-hero.jpg');
  expect(heroImage).toHaveAttribute(
    'srcset',
    expect.stringContaining('/images/optimized/film-hero@800.jpg 1000w')
  );
  expect(heroImage).toHaveAttribute('sizes', expect.stringContaining('100vw'));
  expect(heroImage).toHaveAttribute('loading', 'eager');
  expect(heroImage).toHaveAttribute('fetchpriority', 'high');

  expect(
    screen.getByAltText('Bunker March 6 SIAH x Perfect Dark x Bit Crusher dance floor')
  ).toHaveAttribute('src', '/images/optimized/bunker-main.jpg');
});

test('renders crawlable artist detail metadata', async () => {
  renderAtPath('/artists/brick');

  expect(
    await screen.findByRole('heading', { name: 'Brick' })
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

test('renders first-party info page sections', async () => {
  renderAtPath('/info');

  expect(
    await screen.findByRole('heading', { name: 'What We Do' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Artist Roster' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Brick/ })).toHaveAttribute(
    'href',
    '/artists/brick'
  );
});

test('renders not-found metadata for unknown client routes', async () => {
  renderAtPath('/does-not-exist');

  expect(
    await screen.findByRole('heading', { name: 'Page not found' })
  ).toBeInTheDocument();

  await waitFor(() => {
    expect(document.title).toBe('Page Not Found | Perfect Dark');
  });

  expect(
    document.querySelector('meta[name="robots"]')?.getAttribute('content')
  ).toBe('noindex,follow');
});

test('mixer route has been removed', async () => {
  renderAtPath('/mixer');

  expect(
    await screen.findByRole('heading', { name: 'Page not found' })
  ).toBeInTheDocument();

  await waitFor(() => {
    expect(document.title).toBe('Page Not Found | Perfect Dark');
  });
});
