import { REVIEWS } from "../../data/reviews.js";
import Title from "../Title/Title.jsx";
export default function StudentReviews() {
  return (
    <section
      id="StudentReviews"
      className="max-w-7xl mx-auto p-20 sm:px-6 lg:px-8 mb-16 flex flex-col justify-center items-center  "
    >
      <Title className="text-center">Comentarios</Title>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4  animate-scroll">
        {REVIEWS.map((review) => (
          <div
            key={review.title}
            className="shadow-lg p-4 rounded-2xl bg-white break-inside-avoid"
          >
            <h3 className="font-bold text-2xl">{review.title}</h3>
            <p className="mt-2">{review.review}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img
                  src={review.student_img}
                  className="w-12 h-12 rounded-full"
                  alt="student_image"
                />
                <div className="flex flex-col">
                  <p>{review.student_name}</p>
                  <p className="text-gray-400 text-sm">{review.occupation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-3xl px-2">
                <p>{review.stars}</p>
                <span>⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
