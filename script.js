// ============================================
// PROJECT DATA — edit this array to add/remove case files
// ============================================
const PROJECTS = [
    {
        id: "00",
        title: "Makeoober",
        role: "Programming, Game Design, Playtest, Organisation",
        stack: "Unity · C# · Miro",
        status: "SHIPPED — ACTIVE",
        metric: "FINALIST",
        description: "My most detailed project to date, i reccomend looking at the Rookies submission first, click the button below! Makeoober is a creative makeover XR game where you step into the role of an intergalactic make-up artist for alien goobers from distant planets. <br> The game was created for a health and beauty retail store, with its visual design carefully tailored to reflect the store's branding and aesthetic. The project also provided our team with a valuable opportunity to gain hands-on experience in XR development, an area in which we had limited prior experience. <br> Made by 4 people (Though finished it in a group of 3)",
        media: [
            { type: "image", src: "Thumbnails/Makeoober01.png" },
            { type: "video", src: "Videos/MakeooberTrailer.mp4" },
        ],
        links: [
            { label: "Rookies", url: "https://www.therookies.co/entries/50610" },
            { label: "GitHub", url: "https://github.com/Darkuu/Project-Drogas/tree/main" }
        ]
    },
    {
        id: "01",
        title: "Becoming",
        role: "Programming, Playtester, Intern",
        stack: "Unity · C# · Miro",
        status: "SHIPPED — ACTIVE",
        metric: "UNDER NDA",
        description: "Becoming is an immersive art exhibition exploring personal transformation, identity, and the continuous process of becoming. The exhibition presents nine unique stories through specially designed, multilayered, and interactive environments that combine art photography, virtual reality, installations, and spatial design. </b> Each narrative unfolds within a distinct virtual apartment environment, where physical space and digital experiences merge to create an emotional journey of self reflection and discovery. Through the integration of storytelling, technology, and immersive design, the project invites visitors to explore change, identity, and the different versions of themselves they encounter throughout life. Rather than providing definitive answers, Becoming creates a space for questions, dialogue, and personal interpretation — encouraging visitors to engage with the artwork on both an emotional and intellectual level. I worked on this project for Colourless Creative as an intern.  ",
        media: [
            { type: "image", src: "Thumbnails/Becoming02.png" },
            { type: "image", src: "Thumbnails/Becoming01.png" }
        ],
        links: [
            { label: "Tickets", url: "https://www.aula.lv/pasakumi/becoming-atklasanas-pasakums?event=2411" },
        ]
    },
    {
        id: "02",
        title: "Art Class",
        role: "Programming, engine work, playtesting — 4-person team",
        stack: "Unity · C#",
        status: "SHIPPED — COURSEWORK",
        metric: "Built for children, completed as part of studies",
        description: "A game for children built with a team of four. Gameplay involves grading art by learning its style — designed to teach visual composition through play.",
        media: [
            { type: "image", src: "Thumbnails/ArtGame.png" },
            { type: "video", src: "Videos/ArtGame.mp4" },
            { type: "image", src: "Thumbnails/ArtGame0.png" },
            { type: "image", src: "Thumbnails/ArtGame1.png" },
            { type: "image", src: "Thumbnails/ArtGame2.png" }
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Darkuu/EKA-Kompozicija" }
        ]
    },
    {
        id: "03",
        title: "[LVS] Tau Vehicles — Warhammer 40,000",
        role: "Solo — Lua scripting, model export, vehicle physics",
        stack: "Lua · Garry's Mod (Source) · Blender",
        status: "SHIPPED — ACTIVE",
        metric: "6.500+ visitors · 1,600+ subscribers · 325 favourites",
        description: "My most popular project to date. Almost fully functional Warhammer 40k weapons and vehicles within Garry's Mod, built in Lua using Luna's Star Wars vehicles as a learning base. Currently used across a number of active roleplay servers.",
        media: [
            { type: "image", src: "Thumbnails/LVSTau.png" },
            { type: "video", src: "Videos/TauVehicle.mp4" },
            { type: "image", src: "Thumbnails/GmodTau.png" },
            { type: "image", src: "Thumbnails/GmodTau3.png" },
            { type: "image", src: "Thumbnails/GmodTau2.png" }
        ],
        links: [
            { label: "Steam Workshop", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3513769630" },
            { label: "GitHub", url: "https://github.com/Darkuu/GMOD-LVS-TauVehicles" }
        ]
    },
    {
        id: "04",
        title: "Spider Meadow (Webbed Valley)",
        role: "Programming, engine work, playtesting, bug fixing",
        stack: "Unity · C#",
        status: "SHIPPED — 2-PERSON TEAM",
        metric: "Full release on itch.io",
        description: "You play as a spider who must farm bugs, explore the world, and uncover the truth about the government that banished you and your kind. Built with a two-person team. <br> This was our first main project of a game for our university. First game created by me, tought me a lot of new lessons, i would love to re-make it with my current knowledge.",
        media: [
            { type: "image", src: "Thumbnails/SpiderMeadow.png" },
            { type: "image", src: "Thumbnails/SpiderGame01.png" },
            { type: "image", src: "Thumbnails/SpiderGame02.png" },
            { type: "image", src: "Thumbnails/SpiderGame03.png" },
            { type: "video", src: "Videos/SpiderMeadow.mp4" }
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Darkuu/Project-Spider" },
            { label: "Itch.io", url: "https://daarku.itch.io/spider-meadow" }
        ]
    },
    {
        id: "05",
        title: "Noise Map Generator",
        role: "Solo — first procedural generation project",
        stack: "Unity · C#",
        status: "PROTOTYPE",
        metric: "Early learning project",
        description: "A basic noise-based terrain generator — one of my first projects, and the starting point for later work on procedural systems. I was very new to development when i created this.",
        media: [
            { type: "image", src: "Thumbnails/NoiseGame.jpg" },
            { type: "image", src: "Thumbnails/LandGenerator1.png" },
            { type: "image", src: "Thumbnails/LandGenerator2.png" },
            { type: "image", src: "Thumbnails/LandGenerator3.png" }
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Darkuu/LandGenerator" },
            { label: "Play it", url: "https://play.unity.com/en/games/02df1b75-df99-4be6-9cad-80be371dbd2c/land-generator-prototype" }
        ]
    },
    {
        id: "06",
        title: "VR Escape Room",
        role: "Solo — final project for VR coursework",
        stack: "Unity · VR (OpenXR)",
        status: "PROTOTYPE - SHIPPED",
        metric: "First full VR project outside small tests",
        description: "A VR escape room built as my final project for VR lectures — my first complete VR build beyond small experiments. I'm like the result, but I can already see what I'd rebuild differently with what I know now, i've learnt a lot since creating it.",
        media: [
            { type: "image", src: "Thumbnails/VREscapeRoom.png" },
            { type: "video", src: "Videos/EscapeRoom.mp4" }
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Darkuu/EKA-Escape_Room" }
        ]
    },

    {
        id: "07",
        title: "Blender Characters",
        role: "Solo — modeling and rigging",
        stack: "Blender",
        status: "COURSEWORK",
        metric: "Character Design coursework",
        description: "A small collection of characters created and rigged for Character Design classes.",
        media: [
            { type: "image", src: "Thumbnails/Character01.png" },
            { type: "image", src: "Thumbnails/Character02.png" },
            { type: "image", src: "Thumbnails/Character03.png" }
        ],
        links: []
    },
    {
        id: "08",
        title: "Blender Statue",
        role: "Solo — modeling and texturing",
        stack: "Blender",
        status: "COURSEWORK",
        metric: "Fully modeled and textured from scratch",
        description: "A statue built for Blender lessons, inspired by Warhammer 40K T'au battlesuits — fully modeled and textured by me.",
        media: [
            { type: "image", src: "Thumbnails/TauThumb.png" },
            { type: "gif", src: "Thumbnails/TauGif.gif" }
        ],
        links: []
    },
    {
        id: "09",
        title: "Roster & Database Automation (Google Sheets & MySql / Apache)",
        role: "Solo — systems design and automation",
        stack: "Google Sheets · Apps Script",
        status: "ACTIVE — LONG-RUNNING",
        metric: "Used for a long-running community",
        description: "Automated roster systems for a long-running server community — sorting data, adding timestamps, and streamlining management via Google Apps Script.",
        media: [
            { type: "image", src: "Thumbnails/excellogo.png" },
            { type: "image", src: "Thumbnails/Excel.png" },
            { type: "image", src: "Thumbnails/Excel2.png" },
            { type: "image", src: "Thumbnails/Excel3.png" }
        ],
        links: []
    }
];

// ============================================
// LIVE PAGE VIEW COUNTER
// ============================================
async function trackPageView() {
    const el = document.getElementById("pageViews");
    const namespace = location.hostname || "local-preview";
    const key = "portfolio-visits";
    try {
        const res = await fetch(`https://abacus.jasoncameron.dev/hit/${namespace}/${key}`);
        if (!res.ok) throw new Error("counter unavailable");
        const data = await res.json();
        el.textContent = data.value.toLocaleString();
    } catch (err) {
        el.textContent = "—";
    }
}
trackPageView();

document.getElementById("caseCount").textContent = PROJECTS.length;

// ============================================
// RENDER DOSSIERS
// ============================================
function mediaMarkup(item, i, active) {
    if (item.type === "video") {
        return `<video ${active ? "" : "hidden"} data-i="${i}" controls playsinline><source src="${item.src}" type="video/mp4"></video>`;
    }
    return `<img ${active ? "" : "hidden"} data-i="${i}" src="${item.src}" alt="">`;
}

function linksMarkup(links) {
    if (!links.length) return "";
    return `<div class="dossier-links">${links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</div>`;
}

function renderDossiers() {
    const container = document.getElementById("dossier-list");
    container.innerHTML = PROJECTS.map((p, idx) => `
    <article class="dossier" data-case="${p.id}">
      <div class="dossier-media">
        <div class="media-frame" id="frame-${idx}">
          ${p.media.map((m, i) => mediaMarkup(m, i, i === 0)).join("")}
        </div>
        ${p.media.length > 1 ? `
        <div class="media-thumbs">
          ${p.media.map((m, i) => `<button class="thumb ${m.type === "video" ? "thumb-video" : ""} ${i === 0 ? "active" : ""}" data-project="${idx}" data-slide="${i}" aria-label="${m.type === "video" ? "Play video" : "View image " + (i + 1)}">
            ${m.type === "video" ? "▶" : (i + 1)}
          </button>`).join("")}
        </div>` : ""}
      </div>
      <div class="dossier-spec">
        <div class="case-id">CASE FILE — ${p.id}</div>
        <h3>${p.title}</h3>
        <div class="spec-row"><span class="spec-label">ROLE</span><span class="spec-value">${p.role}</span></div>
        <div class="spec-row"><span class="spec-label">STACK</span><span class="spec-value">${p.stack}</span></div>
        <div class="spec-row"><span class="spec-label">STATUS</span><span class="spec-value status">${p.status}</span></div>
        <div class="spec-row"><span class="spec-label">METRIC</span><span class="spec-value">${p.metric}</span></div>
        <p class="dossier-desc">${p.description}</p>
        ${linksMarkup(p.links)}
      </div>
    </article>
  `).join("");

    container.querySelectorAll("video").forEach(video => {
        video.volume = 0.5;
    });

    container.querySelectorAll(".thumb").forEach(btn => {
        btn.addEventListener("click", () => {
            const pIdx = btn.dataset.project;
            const slide = Number(btn.dataset.slide);
            const frame = document.getElementById(`frame-${pIdx}`);
            frame.querySelectorAll("[data-i]").forEach(el => {
                const isActive = Number(el.dataset.i) === slide;
                el.hidden = !isActive;
                if (el.tagName === "VIDEO" && !isActive) el.pause();
            });
            frame.parentElement.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

renderDossiers();

// ============================================
// SCROLL REVEAL
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".dossier, .specs-panel").forEach(el => revealObserver.observe(el));

// ============================================
// BOOT LINE TYPE EFFECT
// ============================================
const bootline = document.getElementById("bootline");
const bootText = "> loading profile";
let bi = 0;
bootline.textContent = "";
const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "_";
function typeBoot() {
    if (bi <= bootText.length) {
        bootline.textContent = bootText.slice(0, bi);
        bootline.appendChild(cursor);
        bi++;
        setTimeout(typeBoot, 35);
    } else {
        setTimeout(() => {
            bootline.textContent = "> profile loaded — welcome";
            bootline.appendChild(cursor);
        }, 400);
    }
}
typeBoot();