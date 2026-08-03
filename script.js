/* ============================================
   ARTIST PHOTOS
   One photo per artist — shown next to their name as a group header.
   Just paste a direct image link for each artist below.
   ============================================ */
const ARTIST_PHOTOS = {
  "CGA": "https://placehold.co/160x160/1e2024/9a9da3?text=CGA",
  "Matt Wellbanks": "https://placehold.co/160x160/1e2024/9a9da3?text=MW",
  "Cabin Cult": "https://placehold.co/160x160/1e2024/9a9da3?text=CC",
};

/* ============================================
   PROJECT DATA
   Edit this list — one object per song/project.

   `title`   — the song/album title (shown as the card heading)
   `artist`  — artist name
   `country` — artist's country
   `genre`   — genre (fill in as you go — "Genre" is a placeholder)
   `role`    — "Mixed", "Mastered", or "Mixed & Mastered"
   `artwork` — image URL (cover art) — placeholder for now
   `links`   — array of {label, url}. Usually just one (e.g. "Listen"),
               but you can add more (e.g. Tidal + Amazon Music) for the
               same project — each shows as its own button on the card.
   ============================================ */
const PROJECTS = [
  // ---- CGA (Taiwan / South Africa — Reggae) ----
  {
    title: "Who? Dub",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a2471297423_2.jpg",
    links: [{ label: "Watch", url: "https://www.youtube.com/watch?v=A_KSyX1IXdw" }],
  },
  {
    title: "No Signal",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a4023571431_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/no-signal" }],
  },
  {
    title: "Zen Space",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a0311069803_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/zen-space" }],
  },
  {
    title: "Beautiful (feat. Farrell Adams)",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed ",
    artwork: "https://f4.bcbits.com/img/a1600511566_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/beautiful-feat-farrell-adams" }],
  },
  {
    title: "Drive Skank",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a4032221694_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/drive-skank" }],
  },
  {
    title: "Celestia",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Ambient",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a3287760549_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/celestia" }],
  },
  {
    title: "Romulus",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a3100587762_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/romulus" }],
  },
  {
    title: "Ascension",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Ambient",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a1359676991_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/ascension" }],
  },
  {
    title: "Retro Ghost",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "  ",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a0693711120_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/retro-ghost" }],
  },
  {
    title: "Bliss",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Ambient",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a0110168345_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/bliss" }],
  },
  {
    title: "Udrunk",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Punk",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a3308812582_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/udrunk" }],
  },
  {
    title: "Hexzen",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Rock",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a1650122416_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/hexzen" }],
  },
  {
    title: "Doobie",
    artist: "CGA",
    country: "Taiwan / South Africa",
    genre: "Reggae",
    role: "Mixed & Mastered",
    artwork: "https://f4.bcbits.com/img/a4021740850_2.jpg",
    links: [{ label: "Listen", url: "https://cgamusic.bandcamp.com/track/doobie" }],
  },

  // ---- Matt Wellbanks (Canada — Folk / Acadian fiddle & voice) ----
  {
    title: "Full Album",
    artist: "Matt Wellbanks",
    country: "Canada",
    genre: "Folk / Acadian Fiddle & Voice",
    role: "Mixed & Mastered",
    artwork: "https://resources.tidal.com/images/ca0c8b61/1194/43a2/9f99/4b1277293b9c/1280x1280.jpg",
    links: [
      { label: "Tidal", url: "https://tidal.com/album/421774453" },
      { label: "Amazon Music", url: "https://music.amazon.com/albums/B0DZ8DV7RV" },
    ],
  },

  // ---- Cabin Cult (Taiwan / Canada) ----
  {
    title: "Formadge",
    artist: "Cabin Cult",
    country: "Taiwan / Canada",
    genre: "Genre",
    role: "Mixed & Mastered",
    artwork: "https://i1.sndcdn.com/artworks-ptjxwvehy8Jrfbg6-Cf6q8w-t500x500.jpg",
    links: [{ label: "Listen", url: "https://soundcloud.com/bassdarren/formadge" }],
  },
  {
    title: "Succession",
    artist: "Cabin Cult",
    country: "Taiwan / Canada",
    genre: "Genre",
    role: "Mixed & Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    links: [{ label: "Listen", url: "https://soundcloud.com/bassdarren/succession" }],
  },
  {
    title: "Papillon 9",
    artist: "Cabin Cult",
    country: "Taiwan / Canada",
    genre: "Genre",
    role: "Mixed & Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    links: [{ label: "Listen", url: "https://soundcloud.com/bassdarren/papillon-9" }],
  },
  {
    title: "Winter Palms",
    artist: "Cabin Cult",
    country: "Taiwan / Canada",
    genre: "Genre",
    role: "Mixed & Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    links: [{ label: "Listen", url: "https://soundcloud.com/bassdarren/winter-palms" }],
  },
  {
    title: "So Much Clamour",
    artist: "Cabin Cult",
    country: "Taiwan / Canada",
    genre: "Genre",
    role: "Mixed & Mastered",
    artwork: "https://placehold.co/300x300/1e2024/9a9da3?text=Artwork",
    links: [{ label: "Listen", url: "https://soundcloud.com/bassdarren/so-much-clamour" }],
  },
];

function renderProjects() {
  const container = document.getElementById("tracklist");

  // Group projects by artist, preserving first-appearance order
  const groups = [];
  const groupIndex = {};
  PROJECTS.forEach((project) => {
    if (!(project.artist in groupIndex)) {
      groupIndex[project.artist] = groups.length;
      groups.push({ artist: project.artist, items: [] });
    }
    groups[groupIndex[project.artist]].items.push(project);
  });

  container.innerHTML = groups.map((group) => `
    <div class="project-group">
      <div class="artist-heading">
        <img class="artist-photo" src="${ARTIST_PHOTOS[group.artist] || 'https://placehold.co/160x160/1e2024/9a9da3?text=%3F'}" alt="${group.artist}">
        <h3 class="artist-name">${group.artist}</h3>
      </div>
      <ol class="tracklist">
        ${group.items.map((project) => `
          <li class="track">
            <img class="track__art" src="${project.artwork}" alt="${project.title} artwork" loading="lazy">
            <div class="track__info">
              <span class="track__title">${project.title}</span>
              <span class="track__meta">${project.country} · ${project.genre}</span>
              <span class="track__tag">${project.role}</span>
            </div>
            <div class="track__links">
              ${project.links.map((link) => `
                <a class="track__link" href="${link.url}" target="_blank" rel="noopener noreferrer">
                  ${link.label} ↗
                </a>
              `).join("")}
            </div>
          </li>
        `).join("")}
      </ol>
    </div>
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
