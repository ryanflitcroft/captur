import {
  findAllByRole,
  findByRole,
  render,
  screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CollectionItem from './CollectionItem';
import mockData from '../../fixtures/mockData';

describe('render component CollectionItem', () => {
  it('should render elements figure, a, img, figcaption, span', async () => {
    render(
      <MemoryRouter
        initialEntries={[
          '/',
          { pathname: 'https://unsplash.com/photos/fkL_jC8rUGI' },
          { pathname: 'https://unsplash.com/@cristofer' },
        ]}
        initialIndex={0}
      >
        <CollectionItem item={mockData} />
      </MemoryRouter>
    );

    const figure = await screen.findByRole('figure');
    const img = await screen.findByAltText(/green tree in the forest/i);
    const anchors = await screen.findAllByRole('link');
    const figcaption = await screen.findByText(/green tree in the forest/i, {
      exact: false,
    });
    const span = await screen.findByText(/ryan flitcroft/i);

    expect(figure.childElementCount).toBe(2);
    expect(img).toHaveAttribute(
      'src',
      'https://images.unsplash.com/photo-1573828562803-1d582aa6ab6a?'
    );
    expect(
      anchors.forEach((a) => {
        expect(a.childElementCount).toBe(1);
      })
    );
    expect(anchors[0]).toContainElement(img);
    expect(anchors[1]).toContainElement(span);
    expect(figcaption).toContainElement(anchors[1]);
    expect(figcaption).toContainElement(span);
  });
});
