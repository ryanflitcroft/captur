import { render, screen, waitFor } from '@testing-library/react';
import '../../fixtures/matchMedia.mock';
import App from '../../App';
import { mockData1 } from '../../fixtures/mockData';

describe('render component CollectionList', () => {
  it('should render elements section', async () => {
    render(<App />);
    const section = screen.getByRole('region');
    await screen.findAllByRole('figure');
    expect(section.childElementCount).toEqual(mockData1.length);
  });
});
