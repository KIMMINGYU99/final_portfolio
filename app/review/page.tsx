import ReviewList from "@/components/client/review/ReviewList";
import ReviewForm from "@/components/client/review/ReviewForm";

const ReviewPage = () => {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center">REVIEW</h1>
        </header>
        <section>
          <ReviewForm />
          <ReviewList />
        </section>
      </div>
    </main>
  );
};

export default ReviewPage;
