const DOMAIN = 'https://learn.codeit.kr/2895';

export async function getReviews({order = 'createdAt', offset = 0, limit = 6}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${DOMAIN}/film-reviews?${query}`);
  return await response.json();
}
