import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('render component Footer', () => {
  it('should render elements footer', async () => {
    render(<Footer />);
    screen.getByRole('contentinfo');
  });
});
