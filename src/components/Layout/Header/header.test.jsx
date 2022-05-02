import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('render component Header', () => {
  it('should render elements header, h1, ', async () => {
    render(<App />);
    const header = screen.getByRole('banner');
    const h1 = screen.getByRole('heading');

    expect(header.childElementCount).toBe(1);
    expect(h1).toHaveTextContent(/CAPTUR/i);
    expect(h1).toHaveAttribute('style');
  });
});
