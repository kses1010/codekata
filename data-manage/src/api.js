const DOMAIN = 'https://learn.codeit.kr/2895';

export async function getReviews() {
  const response = await fetch(`${DOMAIN}/film-reviews`);
  return await response.json();
}
