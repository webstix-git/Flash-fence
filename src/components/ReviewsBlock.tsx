import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface ReviewsBlockProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
}

export default function ReviewsBlock({ testimonials, columns = 3 }: ReviewsBlockProps) {
  return (
    <>
      <div className={`reviews-grid${columns === 2 ? " reviews-grid--two-col" : ""}`}>
        {testimonials.map((t) => (
          <div key={t.id} className="review-card-light">
            <div>
              <div className="review-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-primary)" stroke="var(--color-primary)" />
                ))}
              </div>
              <p className="review-text">{t.content}</p>
            </div>
            <div className="review-footer">
              <span className="review-author">{t.author}</span>
              <span className="review-source">via {t.source}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-actions">
        <a
          href="https://www.google.com/search?q=flash+fence"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read Google Reviews
        </a>
        <a
          href="https://www.angi.com/companylist/us/wi/eau-claire/flash-fence-llc-reviews-1.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light"
        >
          See us on Angi
        </a>
      </div>
    </>
  );
}
