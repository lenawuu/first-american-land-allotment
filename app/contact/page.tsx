"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import {
  Mail,
  Phone,
  MapPin,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus(Math.random() > 0.2 ? "success" : "error");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <NavBar />

      {/* Hero Section */}
      <header className="relative py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
              Contact Us
            </h1>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl">
              Have questions or want to contribute to our research? We'd love to
              hear from you.
            </p>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-earth">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-earth">Email</h3>
                    <p className="text-earth/70">info@firstamericanland.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-copper/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-earth">Phone</h3>
                    <p className="text-earth/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-earth">Address</h3>
                    <p className="text-earth/70">
                      First American Land Allotment Project
                      <br />
                      Vanderbilt University
                      <br />
                      2301 Vanderbilt Place
                      <br />
                      Nashville, TN 37235
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-earth">
                  Office Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-earth/70">Monday - Friday</span>
                    <span className="font-medium text-earth">
                      9:00 AM - 5:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-earth/70">Saturday</span>
                    <span className="font-medium text-earth">
                      10:00 AM - 2:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-earth/70">Sunday</span>
                    <span className="font-medium text-earth">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-earth">
                  Send Us a Message
                </h2>

                {formStatus === "idle" ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-earth mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-earth/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-earth bg-muted/50"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-earth mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-earth/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-earth bg-muted/50"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-earth mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-earth/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-earth bg-muted/50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-earth mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-earth/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-earth bg-muted/50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-earth mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-earth/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 text-earth bg-muted/50"
                        required
                      ></textarea>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-earth mb-1">
                        Attachments (Optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-earth/20 border-dashed rounded-md hover:bg-muted/50 transition-colors">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-earth/40" />
                          <div className="flex text-sm text-earth/70">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-accent hover:text-accent/80"
                            >
                              <span>Upload files</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-earth/50">
                            PDF, DOC, DOCX, JPG, JPEG, PNG up to 10MB
                          </p>
                        </div>
                      </div>

                      {/* File List */}
                      {files.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-earth mb-2">
                            Selected Files:
                          </h4>
                          <ul className="space-y-2">
                            {files.map((file, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between bg-muted px-3 py-2 rounded-md"
                              >
                                <span className="text-sm truncate max-w-[80%] text-earth/70">
                                  {file.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-earth/50 hover:text-red-500"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-accent text-cream hover:bg-accent/90 group"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                ) : formStatus === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-earth">
                      Message Sent!
                    </h3>
                    <p className="text-earth/70 mb-6">
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      onClick={() => setFormStatus("idle")}
                      className="bg-accent text-cream hover:bg-accent/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-earth">
                      Something Went Wrong
                    </h3>
                    <p className="text-earth/70 mb-6">
                      We couldn't send your message. Please try again or contact
                      us directly.
                    </p>
                    <Button
                      onClick={() => setFormStatus("idle")}
                      className="bg-accent text-cream hover:bg-accent/90"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
