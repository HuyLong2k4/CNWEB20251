import CommentForm from "../components/CommentForm";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Bình luận</h1>
      <CommentForm />
    </main>
  );
}
