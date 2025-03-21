import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tnuazgd", // Remplacez par votre service ID EmailJS
        "template_le5wsye", // Remplacez par votre template ID EmailJS
        form,
        "9gS8cFY2ALdOKoEKB" // Remplacez par votre user ID EmailJS
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Erreur lors de l'envoi !");
          console.error("Erreur EmailJS :", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact">
      <Header />

      <div className="contact-page">
        <div className="box-contact-infos">
          <h1 className="title-contact">Mes Coordonnées</h1>
          <p className="txt-contact">
            <strong>EMAIL :</strong> yohan.rosano@hotmail.fr
          </p>
          <br />
          <p className="txt-contact">
            <strong>Téléphone :</strong> 06.35.43.74.09
          </p>
          <br />
          <p className="txt-contact">
            {" "}
            <strong>Linkedin: </strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yohan-rosano/"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/yohan-rosano/
            </a>{" "}
          </p>
          <br />
        </div>
      </div>
      <div className="box-contact-form">
        <div className="form-contact">
          <h1 className="form-contact-title">Formulaire de Contact</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="input-name"
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="input-name"
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="input-area"
              name="message"
              placeholder="Votre message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading} className="w-full">
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
            {status && <p className="text-center mt-2">{status}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
