const labels: any = {
  sex: {
    male: '남자',
    female: '여자',
  },
  fit: {
    small: '작음',
    good: '적당함',
    big: '큼',
  },
};

export type SizeReview = {
  id: number,
  createdAt: Date,
  sex: string,
  fit: string,
  height: number,
  size: number,
}

interface Props {
  sizeReviews: SizeReview[];
}

export default function SizeReviewList({ sizeReviews }: Props) {
  return (
    <ul>
      {sizeReviews.map((sizeReview) => (
        <li key={sizeReview.id}>
          <div>
            <div>
              {formatDate(new Date(sizeReview.createdAt))}
            </div>
            <div>
              ({labels.sex[sizeReview.sex]} {sizeReview.height}cm
              기준) {sizeReview.size}
            </div>
          </div>
          <div>
            {labels.fit[sizeReview.fit]}
          </div>
        </li>
      ))}
    </ul>
  );
}


function formatDate(date: Date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}. ${MM}. ${dd}.`;
}
