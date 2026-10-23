/* ============================================================
   Kermesse Group's — interactions
   Vanilla JS, no dependencies.
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    };

    toggle.addEventListener("click", () => {
      setOpen(menu.classList.contains("hidden"));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Current year ---------- */
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll("[data-reveal]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ---------- Contact form ----------
     Static site: no backend. The form opens the visitor's
     mail client with a pre-filled message. Replace the address
     below with the real inbox, or connect a service such as
     Formspree / Netlify Forms.
  ----------------------------------- */
  const CONTACT_EMAIL = "contact@ncodiwha.ma";
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const get = (key) => String(data.get(key) ?? "").trim();

      const subject = `Demande de devis — ${get("type") || "Événement"}`;
      const body = [
        `Nom : ${get("name")}`,
        `Téléphone : ${get("phone")}`,
        `E-mail : ${get("email") || "—"}`,
        `Date : ${get("date") || "à définir"}`,
        `Type : ${get("type")}`,
        "",
        "Message :",
        get("message"),
      ].join("\n");

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.textContent = "Merci ! Votre messagerie s'ouvre avec la demande pré-remplie.";
      status.classList.remove("hidden");
      form.reset();
    });
  }
})();
