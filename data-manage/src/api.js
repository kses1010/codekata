const DOMAIN = 'https://learn.codeit.kr/2895';

export async function getReviews(order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(`${DOMAIN}/film-reviews?${query}`);
  return await response.json();
}
