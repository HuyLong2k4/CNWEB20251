"use client";
import { useState } from "react";
import axios from "axios";

export const useCommentForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comment: "",
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    try {
      const res = await axios.post(`${API_URL}/api/comment`, formData);
      setMessage(res.data.message);
      setFormData({ fullname: "", email: "", comment: "" });
    } catch (err: any) {
      setErrors(err.response?.data?.errors || {});
    }
  };

  return { formData, handleChange, handleSubmit, errors, message };
};
