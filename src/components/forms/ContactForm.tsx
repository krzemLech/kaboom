import { useState, type FormEvent } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { ActionInputError, actions, isInputError } from "astro:actions";
import { FormInput } from "./Input";
import type { FormData, FormErrors, FormStatuses } from "../../types";

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const [status, setStatus] = useState<FormStatuses>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrors = (error: ActionInputError<FormErrors>) => {
    setErrors(error.fields);
  };

  const resetError = (field: keyof FormErrors) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    resetError(id as keyof FormErrors);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await actions.addMsg({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (isInputError(response.error)) {
        handleErrors(response.error);
        throw new Error("Validation Errors");
      } else if (response.error) {
        throw new Error(response.error.message);
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
      // Reset error message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="Name"
        id="name"
        required={true}
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <FormInput
        label="Email"
        id="email"
        required={true}
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <FormInput
        label="Message"
        id="message"
        required={true}
        value={formData.message}
        onChange={handleInputChange}
        textarea
        rows={4}
        error={errors.message}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 rounded-lg
                 bg-gradient-to-r from-[#FF4D4D] via-[#FF9900] to-[#FFCC00]
                 text-zinc-800 font-medium
                 transform transition-all duration-300
                 hover:scale-[1.02] hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-[#FF9900]
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2 justify-center">
            Sending... <CogIcon className="size-6 animate-spin text-black" />
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center justify-center gap-2 text-green-500 animate-fade-in">
          <CheckCircleIcon className="size-6 mb-0.5" />
          <span>Message sent successfully!</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center justify-center gap-2 text-red-500 animate-fade-in">
          <ExclamationCircleIcon className="size-6 mb-0.5" />
          <span>
            {errorMessage || "Failed to send message. Please try again."}
          </span>
        </div>
      )}
    </form>
  );
};
