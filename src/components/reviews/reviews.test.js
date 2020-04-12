import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const review = restaurants[0].reviews[0];

describe('Reviews', () => {
  it('should render reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('Review').length).toBe(reviews.length);
  });
});

describe('Review', () => {
  const component = mount(<Review {...review} />);

  it('should display user name properly', () => {
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(review.user);
  });
  it('should display user text properly', () => {
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(review.text);
  });
  it('should display Rating correctly', () => {
    expect(
      component
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(review.rating);
  });
});
