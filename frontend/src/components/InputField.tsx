"use client";
import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  type?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<Props> = ({ label, name, value, type = "text", error, onChange }) => (
  <div className="mb-3">
    <label className="block font-semibold">{label}</label>
    <input
      className="border rounded px-2 py-1 w-80"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);
