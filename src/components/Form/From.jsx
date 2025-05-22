import { useState } from "react";
import s from "./Form.module.scss";
import clsx from "clsx";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://hook.eu2.make.com/fnm6yrhv7lwx1kvme34ystrqwfo0uhf5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <input
          type="text"
          className={s.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className={clsx(s.label, formData.name && s.hidden)}>
          Enter your name
        </label>
      </div>
      <div className={s.inputWrapper}>
        <input
          type="email"
          className={s.input}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className={clsx(s.label, formData.email && s.hidden)}>
          Enter a valid email address
        </label>
      </div>
      <div className={clsx(s.inputWrapper, s.inputMessage)}>
        <textarea
          name="message"
          className={s.input}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <label className={clsx(s.label, formData.message && s.hidden)}>
          Enter your message
        </label>
      </div>
      <button type="submit" className={s.btn}>
        SUBMIT
      </button>
    </form>
  );
}
