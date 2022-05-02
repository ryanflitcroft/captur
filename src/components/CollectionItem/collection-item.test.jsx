import { render, screen, waitFor } from '@testing-library/react';
import '../../fixtures/matchMedia.mock';
import App from '../../App';

describe('render component CollectionItem', () => {
  it('should render elements figure, a, img, figcaption, a, span', async () => {
    render(<App />);

    waitFor(() => {
      screen.getAllByRole('figure');
      screen.getAllByTitle(/view on unsplash/i);
      screen.getAllByAltText(/[a-z]* by [a-z]*/i);
      screen.getAllByLabelText(/image description provided by photographer/i);
      screen.getAllByTitle(/view [a-z]* on unsplash/i);
      screen.getAllByLabelText(/name of photographer/i);
    });
  });
});
