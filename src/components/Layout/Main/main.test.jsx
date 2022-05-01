import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';
import { mockData1, mockData2 } from '../../../fixtures/mockData';
const PER_PAGE = 30;

describe('render component Main', () => {
  it('should render elements p, section, input, button, figure, a, img, figcaption, a, span', async () => {
    render(<App />);

    const p = screen.getByText(/...loading/i);
    expect(p.textContent).toBe('...Loading');

    const section = screen.getByRole('region');
    const input = screen.getByPlaceholderText(/search by keyword/i);
    const button = screen.getByRole('button');

    const figures = await screen.findAllByRole('figure');
    const imageLinks = await screen.findAllByTitle(/view on unsplash/i);
    const images = await screen.findAllByAltText(/[a-z]* by [a-z]*/i);
    const figcaptions = await screen.findAllByLabelText(
      /image description provided by photographer/i
    );
    const captionLinks = await screen.findAllByTitle(
      /view [a-z]* on unsplash/i
    );
    const spans = await screen.findAllByLabelText(/name of photographer/i);

    expect(p.textContent).toBe('');
    expect(section.childElementCount).toBe(PER_PAGE);
    expect(section.nodeName).toBe('SECTION');
    expect(input).toHaveDisplayValue('');
    expect(button.textContent).toBe('Search');

    figures.forEach((element) => {
      expect(element.nodeName).toBe('FIGURE');
      expect(element.childElementCount).toBe(2);
    });

    imageLinks.forEach((element) => {
      expect(element.nodeName).toBe('A');
      expect(element.childElementCount).toBe(1);
      expect(element).toHaveAttribute('href');
    });

    images.forEach((element) => {
      expect(element.nodeName).toBe('IMG');
      expect(element).toHaveAttribute('src');
      expect(element).toHaveAttribute('alt');
    });

    figcaptions.forEach((element) => {
      expect(element.textContent).toBeTruthy();
      expect(element.nodeName).toBe('FIGCAPTION');
      expect(element.childElementCount).toBe(2);
    });

    captionLinks.forEach((element) => {
      expect(element.nodeName).toBe('A');
      expect(element.childElementCount).toBe(1);
      expect(element).toHaveAttribute('href');
    });

    expect(imageLinks[0]).toHaveAttribute('href', `${mockData1[0].links.html}`);
    expect(images[0]).toHaveAttribute('src', `${mockData1[0].urls.small}`);
    expect(figcaptions[0]).toHaveTextContent(
      `${mockData1[0].alt_description[0].toUpperCase()}${mockData1[0].alt_description.substring(
        1
      )} by ${mockData1[0].user.first_name} ${mockData1[0].user.last_name}`
    );
    expect(captionLinks[0]).toHaveAttribute(
      'href',
      `${mockData1[0].user.links.html}`
    );
    expect(spans[0]).toHaveTextContent(`${mockData1[0].user.first_name}`);
  });

  it('should render different data on button click, based on user input', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/search by keyword/i);
    const button = screen.getByRole('button');

    userEvent.type(input, 'seattle');
    expect(input).toHaveDisplayValue('seattle');
    userEvent.click(button);

    await waitFor(() => {
      const figures = screen.getAllByRole('figure');
      expect(figures.length).toBe(PER_PAGE);
    });

    const imageLinks = await screen.findAllByTitle(/view on unsplash/i);
    const images = await screen.findAllByAltText(/[a-z].by.[a-z]/i);
    const figcaptions = await screen.findAllByLabelText(
      /image description provided by photographer/i
    );
    const captionLinks = await screen.findAllByTitle(
      /view [a-z]* on unsplash/i
    );
    const spans = await screen.findAllByLabelText(/name of photographer/i);

    expect(input).toHaveDisplayValue('');
    expect(imageLinks[0]).toHaveAttribute('href', `${mockData2[0].links.html}`);
    expect(images[0]).toHaveAttribute('src', `${mockData2[0].urls.small}`);
    expect(figcaptions[0]).toHaveTextContent(
      `${mockData2[0].alt_description[0].toUpperCase()}${mockData2[0].alt_description.substring(
        1
      )} by ${mockData2[0].user.first_name} ${mockData2[0].user.last_name}`
    );
    expect(captionLinks[0]).toHaveAttribute(
      'href',
      `${mockData2[0].user.links.html}`
    );
    expect(spans[0]).toHaveTextContent(`${mockData2[0].user.first_name}`);
  });
});
