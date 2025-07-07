'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const errs: any = {};
    if (!formData.name) errs.name = 'Name is required';
    if (!formData.phone) errs.phone = 'Phone is required';
    if (!formData.email || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.message) errs.message = 'Please describe your concern';
    if (!formData.preferredTime) errs.preferredTime = 'Preferred time is required';
    if (!formData.agree) errs.agree = 'You must agree to be contacted';
    return errs;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-1">Phone</label>
        <input
          type="text"
          className="rounded-md border border-softgray p-3 w-full"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="rounded-md border border-softgray p-3 w-full"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-1">What brings you here?</label>
        <textarea
          className="rounded-md border border-softgray p-3 w-full"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Preferred time to reach you</label>
        <input
          type="text"
          className="rounded-md border border-softgray p-3 w-full"
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
        />
        {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
        />
        <label>I agree to be contacted</label>
        {errors.agree && <p className="text-red-500 text-sm ml-2">{errors.agree}</p>}
      </div>

      <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">
        Submit
      </button>
    </form>
  );
}
