import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('render component Loading', () => {
  it('should render elements p', async () => {
    render(<Loading />);
    await screen.findByText(/...loading/i);
  });
});
