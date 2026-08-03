/* ============================================
   PROJECT DATA
   Edit this list — one object per song/project.
   `artwork` is an image URL (cover art). `url` is where the track lives
   (Bandcamp, YouTube, SoundCloud, a file link, etc).
   `role` should be "Mixed", "Mastered", or "Mixed & Mastered".
   ============================================ */
const PROJECTS = [
  {
    artist: "CGA",
    country: "Taiwan / S. Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    url: "https://www.youtube.com/watch?v=A_KSyX1IXdw",
  },
  {
    artist: "Artist Name",
    country: "Country",
    genre: "Genre",
    role: "Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    url: "https://example.com/track-two",
  },
  {
    artist: "Artist Name",
    country: "Country",
    genre: "Genre",
    role: "Mixed",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    url: "https://example.com/track-three",
  },
];

function renderProjects() {
  const list = document.getElementById("tracklist");
  list.innerHTML = PROJECTS.map((project) => `
    <li class="track">
      <img class="track__art" src="${project.artwork}" alt="${project.artist} artwork" loading="lazy">
      <div class="track__info">
        <span class="track__title">${project.artist}</span>
        <span class="track__meta">${project.country} · ${project.genre}</span>
        <span class="track__tag">${project.role}</span>
      </div>
      <a class="track__link" href="${project.url}" target="_blank" rel="noopener noreferrer">
        Listen ↗
      </a>
    </li>
  `).join("");
}

/* ============================================
   FADER RAIL: tracks scroll position + active section
   ============================================ */
function initRail() {
  const thumb = document.getElementById("railThumb");
  const track = document.querySelector(".rail__track");
  const stops = document.querySelectorAll(".rail__stop");
  const sections = document.querySelectorAll("main > section[data-section]");

  function updateThumb() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
    const trackHeight = track.clientHeight - 12; // thumb height
    thumb.style.top = `${ratio * trackHeight}px`;
  }

  function updateActiveSection() {
    let current = sections[0]?.dataset.section;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) {
        current = section.dataset.section;
      }
    });
    stops.forEach((stop) => {
      stop.classList.toggle("is-active", stop.dataset.section === current);
    });
  }

  function onScroll() {
    updateThumb();
    updateActiveSection();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

/* ============================================
   CONTACT FORM: Formspree submit
   ============================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("YOUR_FORM_ID")) {
      status.textContent = "Form not connected yet — add your Formspree endpoint in index.html.";
      status.style.color = "#e8a33d";
      return;
    }

    status.textContent = "Sending…";
    status.style.color = "#9a9da3";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Message sent — thanks!";
        status.style.color = "#4fa893";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "#e8a33d";
      }
    } catch (err) {
      status.textContent = "Network error — please try again.";
      status.style.color = "#e8a33d";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initRail();
  initContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});
