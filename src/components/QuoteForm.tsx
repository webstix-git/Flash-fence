"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface QuoteFormProps {
  variant?: "dark" | "light";
}

export default function QuoteForm({ variant = "dark" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "fencing",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus("error");
      setFeedbackMessage("Name and phone number are required so we can text/call you.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMessage(data.message || "Your quote request has been sent! Owner Dylan Gardow will text or call you shortly.");
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "fencing",
          details: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Something went wrong. Please call us directly at 715-299-0663.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setFeedbackMessage("Connection error. Please check your signal or call 715-299-0663 directly.");
    }
  };

  if (status === "success") {
    return (
      <div className={`form-card${variant === "light" ? " form-card--light" : ""}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: "350px" }}>
        <CheckCircle2 size={64} style={{ color: "var(--color-success)", marginBottom: "var(--space-md)" }} />
        <h3 className="form-card-title">Request Received!</h3>
        <p className="form-card-subtext" style={{ maxWidth: "450px" }}>
          {feedbackMessage}
        </p>
        <button
          className="btn btn-secondary"
          style={{ marginTop: "var(--space-lg)" }}
          onClick={() => setStatus("idle")}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`form-card${variant === "light" ? " form-card--light" : ""}`} id="quote-form-anchor">
      <div className="form-title-group">
        <span className="text-mono">Fast Quote Request</span>
        <h3 className="form-card-title">Get Your Free Estimate</h3>
        <p className="form-card-subtext">
          Dylan Gardow will receive an SMS alert instantly and get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
            className="form-input"
            disabled={status === "loading"}
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 715-555-0199"
            required
            className="form-input"
            disabled={status === "loading"}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="form-input"
            disabled={status === "loading"}
          />
        </div>

        {/* Service Type */}
        <div className="form-group">
          <label htmlFor="serviceType" className="form-label">
            Select Service *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="form-select"
            disabled={status === "loading"}
          >
            <option value="fencing">Fencing Installation</option>
            <option value="excavation">Small Excavation</option>
            <option value="prep">Site Prep & Land Clearing</option>
            <option value="concrete">Concrete & Storm Prep</option>
            <option value="other">Other Projects</option>
          </select>
        </div>

        {/* Project Details */}
        <div className="form-group form-full">
          <label htmlFor="details" className="form-label">
            Project Description
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Describe your fence type (vinyl, wood, chain link) or excavation scope. Include approximate linear footage if known."
            className="form-textarea"
            disabled={status === "loading"}
          />
        </div>

        {/* Feedback Messages */}
        {status === "error" && (
          <div className="form-full form-feedback form-feedback-error">
            <AlertCircle size={20} />
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="form-full" style={{ marginTop: "var(--space-sm)" }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", height: "52px" }}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin" size={20} style={{ marginRight: "var(--space-xs)" }} />
                Sending Alert...
              </>
            ) : (
              <>
                <Send size={18} style={{ marginRight: "var(--space-xs)" }} />
                Send Quote Request
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
