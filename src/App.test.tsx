import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Basic React app using Docker, Hook up to AWS CI/CD CodePipeline on S3 using GitHub Actions message', () => {
  render(<App />);
  const linkElement = screen.getByText(`Basic React app using Docker, Hook up to AWS CI/CD CodePipeline on S3 using GitHub Actions`);
  expect(linkElement).toBeInTheDocument();
});
