"use client";
import { InputField } from "./InputField";
import { useCommentForm } from "../hooks/useCommentForm";

export default function CommentForm() {
  const { formData, handleChange, handleSubmit, errors, message } = useCommentForm();

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg w-fit">
      <InputField
        label="Họ tên"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        error={errors.fullname}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <div className="mb-3">
        <label className="block font-semibold">Bình luận (tùy chọn)</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-80 h-24"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Gửi
      </button>

      {message && <p className="text-green-600 mt-2">{message}</p>}
    </form>
  );
}
