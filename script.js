/* ===== Turundushub – script ===== */

/* 1) CONTACT DETAILS */
const CONFIG = {
  email: "of.turundushub@gmail.com",
  // Formspree form address, e.g. "https://formspree.io/f/abcdwxyz".
  // While empty, the form falls back to opening the visitor's email app.
  formEndpoint: "https://formspree.io/f/myeeegko"
};

/* 2) ENGLISH TEXT. Estonian is the text already written in index.html. */
const EN = {
  "nav.services": "Services", "nav.pricing": "Pricing", "nav.team": "Team", "nav.work": "Work", "nav.faq": "FAQ",
  "cta.quote": "Get a quote", "cta.prices": "See prices",
  "hero.eyebrow": "Student company · Estonia",
  "hero.title": "We help small businesses get more customers online.",
  "hero.sub": "We build a fast, clear and good-looking website. We make sure people can find you on Google and Google Maps.",
  "trust.reply": "We reply within 24 hours", "trust.prices": "Clear prices", "trust.direct": "You talk directly to us",

  "why.title": "Why does a small business need a good website?",
  "why.sub": "Before a customer calls, they look you up. What will they find?",
  "why.1.t": "Customers search online", "why.1.p": "Most people google before they buy. If you are not there, they choose someone else.",
  "why.2.t": "A website builds trust", "why.2.p": "A good site shows you are serious. Prices, contacts and your work are in one place.",
  "why.3.t": "Be found on Google Maps", "why.3.p": "Nearby customers search the map. A good profile brings them to your door.",

  "services.title": "What we do", "services.sub": "Everything a small business needs online. From one place.",
  "services.1.t": "Website building", "services.1.p": "We design and build a website that works well on phones and computers.",
  "services.2.t": "Monthly maintenance", "services.2.p": "We keep your site working, safe and up to date, so you don't have to think about it.",
  "services.3.t": "SEO", "services.3.p": "We set up your site so Google understands who you are and shows you to the right people.",
  "services.4.t": "Google Maps profile", "services.4.p": "We set up your Google Business Profile so nearby customers can find you on the map.",

  "pricing.title": "Clear prices. No surprises.", "pricing.sub": "Pick a package. We confirm the exact price after a short chat.",
  "pricing.from": "from", "pricing.upto": "up to", "pricing.popular": "Most popular",
  "pricing.basic.name": "Basic website", "pricing.basic.for": "When you need a simple online business card.",
  "pricing.basic.1": "One-page website", "pricing.basic.2": "Works on phone and computer", "pricing.basic.3": "Contact form", "pricing.basic.4": "Basic SEO",
  "pricing.biz.name": "Business website", "pricing.biz.for": "When you want more customers and a clear view of your services.",
  "pricing.biz.1": "Up to 5 pages", "pricing.biz.2": "Services and prices presented", "pricing.biz.3": "Contact form and map", "pricing.biz.4": "Basic SEO", "pricing.biz.5": "Google Business Profile setup",
  "pricing.prem.name": "Premium website", "pricing.prem.for": "When you need more than a standard site.",
  "pricing.prem.1": "Up to 10 pages", "pricing.prem.2": "Custom-made design", "pricing.prem.3": "Gallery, blog or booking", "pricing.prem.4": "More thorough SEO", "pricing.prem.5": "Google Business Profile setup",
  "pricing.maint": "Maintenance €30/month", "pricing.maint.p": "Updates, security and small changes.",
  "pricing.seo": "SEO and Google Maps – ask for a quote", "pricing.seo.p": "The price depends on your business. We tell you upfront.",

  "steps.title": "How it works", "steps.sub": "Four simple steps. You don't need to know anything technical.",
  "steps.1.t": "You contact us", "steps.1.p": "Write or call. We reply within 24 hours.",
  "steps.2.t": "We plan together", "steps.2.p": "We talk about what you need. You get a price and a timeline.",
  "steps.3.t": "We build your site", "steps.3.p": "We show you progress along the way. You can ask for changes.",
  "steps.4.t": "Launch and support", "steps.4.p": "Your site goes live. We stay close if questions come up.",

  "team.title": "A young, motivated team", "team.sub": "You work directly with us. Not a sales department, but the people who build your site.",
  "team.seb.role": "Web developer", "team.seb.p": "About 4 years of web development experience. Responsible for site structure and quality.",
  "team.dan.role": "Web developer", "team.dan.p": "About 1 year of web development experience. Brings fresh ideas and looks after the details.",
  "team.photo": "[Real photo goes here]",

  "work.title": "Our work", "work.sub": "Our real projects will appear here.", "work.ph": "Sample image",
  "work.client": "[Client name]", "work.desc": "[Short description of what we did]",

  "reviews.title": "What clients say", "reviews.sub": "Real client feedback will be added here.",
  "reviews.ph": "[A real client review goes here]", "reviews.who": "[Name, company]",

  "faq.title": "Frequently asked questions",
  "faq.1.q": "How long does it take to build a website?", "faq.1.a": "A simple site usually takes 1–2 weeks. A bigger site takes longer. We give you the exact time after our first chat.",
  "faq.2.q": "What do I need to provide?", "faq.2.a": "Your logo, photos and texts, if you have them. If not, we help you make them. Mainly, tell us about your business.",
  "faq.3.q": "Can I edit the site myself?", "faq.3.a": "Yes, if you want to. We show you how. Or you can ask us to make the changes. With maintenance it is easy.",
  "faq.4.q": "What does maintenance include?", "faq.4.a": "Updates, keeping the site secure, and small changes to texts and images. It costs €30 per month.",
  "faq.5.q": "Do you help with domain and hosting?", "faq.5.a": "Yes. We help you choose, buy and set them up. Domain and hosting are a separate cost. We tell you the price upfront.",

  "contact.title": "Let's start your website today.", "contact.sub": "Write a few lines. We reply within 24 hours.",
  "form.name": "Your name", "form.biz": "Business name", "form.email": "Email", "form.phone": "Phone",
  "form.service": "Which service are you interested in?",
  "form.s.website": "Website building", "form.s.maint": "Website maintenance", "form.s.seo": "SEO", "form.s.maps": "Google Maps profile", "form.s.other": "Other / not sure",
  "form.msg": "Message", "form.send": "Send request", "form.note": "We reply within 24 hours.",
  "contact.direct": "Or contact us directly",

  "footer.tagline": "Websites that bring customers.", "footer.student": "Student company", "footer.rights": "All rights reserved."
};

const MSG = {
  et: {
    invalid: "Palun täitke nimi, e-post ja sõnum.",
    sending: "Saadan...",
    sent: "Aitäh! Sõnum on saadetud. Vastame 24 tunni jooksul.",
    failed: "Saatmine ebaõnnestus. Palun kirjutage meile otse: ",
    opened: "Avasime teie e-posti programmi. Vajutage seal „Saada“.",
    subjectPrefix: "Päring Turundushubi kodulehelt",
    lines: ["Nimi", "Ettevõte", "E-post", "Telefon", "Teenus"]
  },
  en: {
    invalid: "Please fill in your name, email and message.",
    sending: "Sending...",
    sent: "Thank you! Your message was sent. We reply within 24 hours.",
    failed: "Sending failed. Please email us directly: ",
    opened: "We opened your email app. Press “Send” there.",
    subjectPrefix: "Enquiry from the Turundushub website",
    lines: ["Name", "Business", "Email", "Phone", "Service"]
  }
};

const isSet = v => v && !/^\[.*\]$/.test(v);
let lang = "et";

/* ---------- Language switch ---------- */
const i18nNodes = [...document.querySelectorAll("[data-i18n]")];
const ET = {};
i18nNodes.forEach(n => { ET[n.dataset.i18n] = ET[n.dataset.i18n] ?? n.innerHTML; });

const META = {
  et: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
  en: {
    title: "Turundushub – Websites for small businesses",
    desc: "Turundushub is an Estonian student company that builds websites for small businesses, maintains them, and helps customers find you on Google and Google Maps."
  }
};

function setLang(next) {
  lang = next;
  document.documentElement.lang = next;
  const dict = next === "en" ? EN : ET;
  i18nNodes.forEach(n => {
    const text = dict[n.dataset.i18n];
    if (text !== undefined) n.innerHTML = text;
  });
  document.title = META[next].title;
  document.querySelector('meta[name="description"]').content = META[next].desc;
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === next));
  });
  try { localStorage.setItem("lang", next); } catch (e) { /* storage may be blocked */ }
}

document.querySelectorAll(".lang-switch button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
if (saved === "en") setLang("en");

/* ---------- Contact details ---------- */
if (isSet(CONFIG.email)) {
  document.querySelectorAll("#contact-email, .js-email").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });
}
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Pricing buttons preselect the service ---------- */
document.querySelectorAll("[data-service]").forEach(a =>
  a.addEventListener("click", () => { document.getElementById("f-service").value = a.dataset.service; }));

/* ---------- Contact form ---------- */
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");
const submitBtn = form.querySelector('button[type="submit"]');

function say(text, kind) {
  note.removeAttribute("data-i18n"); // stop the language switch from overwriting this message
  note.className = "form-note full" + (kind ? " " + kind : "");
  note.textContent = text;
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const m = MSG[lang];
  const f = form.elements;
  let ok = true;
  [f.name, f.email, f.message].forEach(el => {
    const bad = !el.value.trim() || (el.type === "email" && !el.checkValidity());
    el.classList.toggle("invalid", bad);
    if (bad) ok = false;
  });
  if (!ok) { say(m.invalid, "err"); return; }
  if (f._gotcha.value) return; // spam trap: real visitors never fill this in

  const service = f.service.options[f.service.selectedIndex].text;
  const data = {
    name: f.name.value.trim(), business: f.business.value.trim(), email: f.email.value.trim(),
    phone: f.phone.value.trim(), service, message: f.message.value.trim()
  };

  if (CONFIG.formEndpoint) {
    submitBtn.disabled = true;
    say(m.sending);
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      form.reset();
      say(m.sent, "ok");
    } catch (err) {
      say(m.failed + CONFIG.email, "err");
    } finally {
      submitBtn.disabled = false;
    }
    return;
  }

  // Fallback while no Formspree address is set: open the visitor's email app.
  const body = [
    `${m.lines[0]}: ${data.name}`, `${m.lines[1]}: ${data.business}`, `${m.lines[2]}: ${data.email}`,
    `${m.lines[3]}: ${data.phone}`, `${m.lines[4]}: ${service}`, "", data.message
  ].join("\n");
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(m.subjectPrefix)}&body=${encodeURIComponent(body)}`;
  say(m.opened, "ok");
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const el = en.target;
        el.classList.add("in");
        io.unobserve(el);
        // Once faded in, drop the reveal styles so hover effects react instantly.
        setTimeout(() => { el.classList.remove("reveal", "in"); el.style.transitionDelay = ""; }, 1000);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });
} else {
  revealEls.forEach(el => el.classList.add("in"));
}
