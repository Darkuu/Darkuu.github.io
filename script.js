// ============================================
// PROJECT DATA
// ============================================

const PROJECTS = [

    // ========================================
    // 00 — MAKEOOBER
    // ========================================

    {
        id: "00",
        title: "Makeoober",
        featured: true,

        role: "Lead Programmer (4-person team)",
        stack: "Unity · C# · OpenXR",

        status: "FINALIST",
        metric: "Finalist & Highly Commended — The Rookies",

        awards: [
            "FINALIST & HIGHLY COMMENDED THE ROOKIES 2026",
        ],

        description:
            "My most detailed project to date. Makeoober is an XR makeover game created for a health and beauty retail store, where players become an intergalactic makeup artist helping alien Goobers from different planets. I contributed to programming, game design, organisation, and playtesting, helping develop interactive systems and refine the overall experience. The project gave our team valuable experience developing XR gameplay while adapting the visual design and interactions to match a commercial brand identity. Developed by a 4-person team, with final production completed by 3 members.",

        media: [
            {
                type: "image",
                src: "Thumbnails/Makeoober01.png"
            },
            {
                type: "video",
                src: "Videos/MakeooberTrailer.mp4"
            }
        ],

        links: [
            {
                label: "Rookies",
                url: "https://www.therookies.co/entries/50610"
            },
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/Project-Drogas/tree/main"
            }
        ]
    },


    // ========================================
    // 01 — BECOMING
    // ========================================

    {
        id: "01",
        title: "Becoming",

        role: "Gameplay Programmer (Intern)",
        stack: "Unity · C# · OpenXR",

        status: "Commercial Exhibition",
        metric: "Live exhibition — August 2026",

        description:
            "Becoming is an immersive multimedia exhibition exploring personal transformation through interactive environments combining photography, virtual reality, installation art, and spatial design. As a Programming Intern at Colourless Creative, I contributed to the Unity project by implementing interaction features, fixing production bugs, supporting playtesting, and improving reliability for a public installation environment. This experience gave me practical experience working within an existing production pipeline, collaborating with artists and designers, and delivering polished features under commercial deadlines.",

        media: [
            {
                type: "video",
                src: "Videos/BecomingTrailer.mp4"
            },
            {
                type: "image",
                src: "Thumbnails/Becoming02.png"
            }
        ],

        links: [
            {
                label: "Becoming Exhibition",
                url: "https://www.becoming-exhibition.com/"
            },
            {
                label: "About Becoming",
                url: "https://www.becoming-exhibition.com/about-us"
            }
        ]
    },


    // ========================================
    // 02 — TAU VEHICLES
    // ========================================

    {
        id: "02",
        title: "Tau Vehicles — Warhammer 40,000",

        role: "Solo Developer",
        stack: "Lua · Garry's Mod (Source) · Blender",

        status: "Released (Community Project)",
        metric: "6,500+ visitors · 1,600+ subscribers · 325 favourites",

        description:
            "My most popular project to date. I developed functional Warhammer 40,000-inspired weapons and vehicles for Garry's Mod using Lua, creating custom vehicle behaviour, physics systems, and exported models. The project was developed independently and is currently used by multiple active roleplay communities.",

        media: [
            {
                type: "image",
                src: "Thumbnails/LVSTau.png"
            },
            {
                type: "video",
                src: "Videos/TauVehicle.mp4"
            },
            {
                type: "image",
                src: "Thumbnails/GmodTau.png"
            },
            {
                type: "image",
                src: "Thumbnails/GmodTau3.png"
            },
            {
                type: "image",
                src: "Thumbnails/GmodTau2.png"
            }
        ],

        links: [
            {
                label: "Steam Workshop",
                url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3513769630"
            },
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/GMOD-LVS-TauVehicles"
            }
        ]
    },


    // ========================================
    // 03 — ART CLASS
    // ========================================

    {
        id: "03",
        title: "Art Class",

        role: "Gameplay Programmer (4-person team)",
        stack: "Unity · C#",

        status: "University Project",
        metric: "Educational game developed for children",

        description:
            "An educational game created as part of university coursework. I contributed to gameplay programming, engine-side development, and playtesting. The game teaches visual composition by having players analyse and grade artwork based on different artistic styles.",

        media: [
            {
                type: "image",
                src: "Thumbnails/ArtGame.png"
            },
            {
                type: "video",
                src: "Videos/ArtGame.mp4"
            },
            {
                type: "image",
                src: "Thumbnails/ArtGame0.png"
            },
            {
                type: "image",
                src: "Thumbnails/ArtGame1.png"
            },
            {
                type: "image",
                src: "Thumbnails/ArtGame2.png"
            }
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/EKA-Kompozicija"
            }
        ]
    },


    // ========================================
    // 04 — SPIDER MEADOW
    // ========================================

    {
        id: "04",
        title: "Spider Meadow (Webbed Valley)",

        role: "Gameplay Programmer (2-person team)",
        stack: "Unity · C#",

        status: "Released (University Project)",
        metric: "Full release on itch.io",

        description:
            "A farming and exploration game developed as my first major university game project. I worked on programming, engine-side features, bug fixing, and playtesting while collaborating with one other developer. The project gave me experience building gameplay systems from the ground up and established the foundation for my later Unity projects.",

        media: [
            {
                type: "image",
                src: "Thumbnails/SpiderMeadow.png"
            },
            {
                type: "image",
                src: "Thumbnails/SpiderGame01.png"
            },
            {
                type: "image",
                src: "Thumbnails/SpiderGame02.png"
            },
            {
                type: "image",
                src: "Thumbnails/SpiderGame03.png"
            },
            {
                type: "video",
                src: "Videos/SpiderMeadow.mp4"
            }
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/Project-Spider"
            },
            {
                label: "Itch.io",
                url: "https://daarku.itch.io/spider-meadow"
            }
        ]
    },


    // ========================================
    // 05 — NOISE MAP GENERATOR
    // ========================================

    {
        id: "05",
        title: "Noise Map Generator",

        role: "Solo Developer",
        stack: "Unity · C#",

        status: "Prototype",
        metric: "Procedural generation learning project",

        description:
            "A procedural terrain generation prototype created to explore noise-based systems. I implemented terrain generation using noise algorithms and used the project to develop my understanding of procedural workflows, which later influenced my work with more advanced systems.",

        media: [
            {
                type: "image",
                src: "Thumbnails/NoiseGame.jpg"
            },
            {
                type: "image",
                src: "Thumbnails/LandGenerator1.png"
            },
            {
                type: "image",
                src: "Thumbnails/LandGenerator2.png"
            },
            {
                type: "image",
                src: "Thumbnails/LandGenerator3.png"
            }
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/LandGenerator"
            },
            {
                label: "Play It",
                url: "https://play.unity.com/en/games/02df1b75-df99-4be6-9cad-80be371dbd2c/land-generator-prototype"
            }
        ]
    },


    // ========================================
    // 06 — VR ESCAPE ROOM
    // ========================================

    {
        id: "06",
        title: "VR Escape Room",

        role: "Solo Developer",
        stack: "Unity · C# · OpenXR",

        status: "Prototype",
        metric: "First complete VR coursework project",

        description:
            "A VR escape room created as my final project for VR coursework. I developed the complete experience independently, implementing VR interactions, gameplay logic, and puzzle systems. The project gave me practical experience working with VR development beyond small experiments and helped build my understanding of immersive interaction design.",

        media: [
            {
                type: "image",
                src: "Thumbnails/VREscapeRoom.png"
            },
            {
                type: "video",
                src: "Videos/EscapeRoom.mp4"
            }
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/EKA-Escape_Room"
            }
        ]
    },


    // ========================================
    // 07 — PHP FINAL PROJECT
    // ========================================

    {
        id: "07",
        title: "PHP Web Application",

        role: "Full-Stack Developer (Solo)",
        stack: "PHP · MySQL · Apache · HTML · CSS · JavaScript",

        status: "School Final Project",
        metric: "Backend development · Database architecture · Self-hosted",

        description:
            "A web application developed as my final school project, covering both application development and server-side infrastructure. I built the project using PHP and designed the underlying relational database structure, including tables and relationships between data. I also worked with Apache for self-hosting and configured the application to operate as a complete web system. The project gave me practical experience with backend programming, database architecture, server configuration, and connecting multiple parts of a web application together.",

        media: [
            {
                type: "image",
                src: "Thumbnails/Database2.png"
            },
            {
                type: "image",
                src: "Thumbnails/Database3.png"
            }
        ],

        links: [
            {
                label: "GitHub",
                url: "https://github.com/Darkuu/RVTWebsiteRepo"
            }
        ]
    }

];


// ============================================
// MISC PROJECT DATA
// ============================================

const MISC_PROJECTS = [

    // ========================================
    // 08 — BLENDER CHARACTERS
    // ========================================

    {
        id: "08",
        title: "Blender Characters",

        role: "3D Artist (Coursework)",
        stack: "Blender",

        status: "University Project",
        metric: "Character design and rigging coursework",

        description:
            "A collection of original characters created for Character Design coursework. I worked on modelling, texturing, and rigging characters while developing my understanding of 3D asset creation pipelines.",

        media: [
            {
                type: "image",
                src: "Thumbnails/Character01.png"
            },
            {
                type: "image",
                src: "Thumbnails/Character02.png"
            },
            {
                type: "image",
                src: "Thumbnails/Character03.png"
            }
        ],

        links: []
    },


    // ========================================
    // 09 — BLENDER STATUE
    // ========================================

    {
        id: "09",
        title: "Blender Statue",

        role: "3D Artist (Coursework)",
        stack: "Blender",

        status: "University Project",
        metric: "Modelled and textured from scratch",

        description:
            "A 3D statue created for Blender coursework, inspired by Warhammer 40,000 T'au battlesuit designs. I created the model from scratch, including modelling, texturing, and presentation renders.",

        media: [
            {
                type: "image",
                src: "Thumbnails/TauThumb.png"
            },
            {
                type: "gif",
                src: "Thumbnails/TauGif.gif"
            }
        ],

        links: []
    },


    // ========================================
    // 10 — ROSTER & DATABASE AUTOMATION
    // ========================================

    {
        id: "10",
        title: "Roster & Database Automation",

        role: "Systems Developer (Solo)",
        stack: "Google Sheets · Apps Script · MySQL",

        status: "Active Project",
        metric: "Used by a long-running community",

        description:
            "An automation system created to improve management workflows for a long-running community. I developed tools for organising data, generating timestamps, and reducing manual administration through Google Apps Script and database integration.",

        media: [
            {
                type: "image",
                src: "Thumbnails/excellogo.png"
            },
            {
                type: "image",
                src: "Thumbnails/Excel.png"
            },
            {
                type: "image",
                src: "Thumbnails/Excel2.png"
            },
            {
                type: "image",
                src: "Thumbnails/Excel3.png"
            }
        ],

        links: []
    }

];


// ============================================
// PAGE VIEW COUNTER
// ============================================

async function trackPageView() {

    const el =
        document.getElementById("pageViews");

    if (!el) return;

    const namespace =
        location.hostname || "local-preview";

    const key =
        "portfolio-visits";

    try {

        const res = await fetch(
            `https://abacus.jasoncameron.dev/hit/${namespace}/${key}`
        );

        if (!res.ok) {
            throw new Error("Counter unavailable");
        }

        const data =
            await res.json();

        el.textContent =
            Number(data.value).toLocaleString();

    } catch (err) {

        console.warn(
            "Page counter unavailable:",
            err
        );

        el.textContent = "—";
    }
}


// ============================================
// MEDIA MARKUP
// ============================================

function mediaMarkup(item, index, active) {

    const hidden =
        active ? "" : "hidden";


    // VIDEO

    if (item.type === "video") {

        return `
            <video
                ${hidden}
                data-media-index="${index}"
                controls
                playsinline
                preload="metadata"
            >
                <source
                    src="${item.src}"
                    type="video/mp4"
                >

                Your browser does not support video.
            </video>
        `;
    }


    // GIF

    if (item.type === "gif") {

        return `
            <img
                ${hidden}
                data-media-index="${index}"
                src="${item.src}"
                alt=""
                loading="lazy"
            >
        `;
    }


    // IMAGE

    return `
        <img
            ${hidden}
            data-media-index="${index}"
            src="${item.src}"
            alt=""
            loading="lazy"
        />
    `;
}


// ============================================
// AWARD BADGE
// ============================================

function awardMarkup(project) {

    if (
        !project.awards ||
        project.awards.length === 0
    ) {
        return "";
    }

    return `
        <div class="award-badge">

            <div class="award-badge-top">
                <span class="award-star">★</span>
                <span>ACHIEVEMENT</span>
                <span class="award-star">★</span>
            </div>

            <div class="award-badge-main">
                THE ROOKIES
            </div>

            <div class="award-badge-line"></div>

            <div class="award-badge-awards">
                ${project.awards.map(award => `
                    <span>${award}</span>
                `).join("")}
            </div>

            <div class="award-badge-bottom">
                OFFICIAL RECOGNITION
            </div>

        </div>
    `;
}


// ============================================
// PROJECT LINKS
// ============================================

function linksMarkup(links) {

    if (
        !links ||
        links.length === 0
    ) {
        return "";
    }

    return `
        <div class="dossier-links">

            ${links.map(link => `
                <a
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${link.label} ↗
                </a>
            `).join("")}

        </div>
    `;
}


// ============================================
// RENDER MAIN PROJECTS
// ============================================

function renderDossiers() {

    const container =
        document.getElementById(
            "dossier-list"
        );

    if (!container) {

        console.error(
            "ERROR: #dossier-list was not found."
        );

        return;
    }


    container.innerHTML =
        PROJECTS.map(
            (project, projectIndex) => {

                const featuredClass =
                    project.featured
                        ? "featured-dossier"
                        : "";


                return `
                    <article
                        class="dossier ${featuredClass}"
                        data-case="${project.id}"
                    >

                        <div class="dossier-media">

                            ${project.featured ? `
                                <div class="featured-label">

                                    <span>
                                        FEATURED PROJECT
                                    </span>

                                    <span>
                                        CASE FILE — ${project.id}
                                    </span>

                                </div>
                            ` : ""}


                            <div
                                class="media-frame"
                                id="frame-${projectIndex}"
                            >

                                ${
                    project.media.length > 0
                        ? project.media.map(
                            (media, mediaIndex) =>
                                mediaMarkup(
                                    media,
                                    mediaIndex,
                                    mediaIndex === 0
                                )
                        ).join("")
                        : `
                                            <div class="project-no-media">
                                                <span>
                                                    NO MEDIA AVAILABLE
                                                </span>

                                                <small>
                                                    SOURCE CODE PROJECT
                                                </small>
                                            </div>
                                        `
                }


                                ${awardMarkup(project)}

                            </div>


                            ${
                    project.media.length > 1
                        ? `

                                    <div class="media-thumbs">

                                        ${project.media.map(
                            (media, mediaIndex) => `

                                                <button
                                                    type="button"

                                                    class="thumb ${
                                media.type === "video"
                                    ? "thumb-video"
                                    : ""
                            } ${
                                mediaIndex === 0
                                    ? "active"
                                    : ""
                            }"

                                                    data-project="${projectIndex}"
                                                    data-slide="${mediaIndex}"

                                                    aria-label="${
                                media.type === "video"
                                    ? "Play video"
                                    : "View image " +
                                    (mediaIndex + 1)
                            }"
                                                >
                                                    ${
                                media.type === "video"
                                    ? "▶"
                                    : mediaIndex + 1
                            }
                                                </button>

                                            `
                        ).join("")}

                                    </div>

                                `
                        : ""
                }

                        </div>


                        <div class="dossier-spec">

                            <div class="case-id">
                                CASE FILE — ${project.id}
                            </div>


                            <h3>
                                ${project.title}
                            </h3>


                            ${project.featured ? `

                                <div class="featured-recognition">

                                    <span class="recognition-symbol">
                                        ★
                                    </span>

                                    <span>
                                        THE ROOKIES — FINALIST &amp;
                                        HIGHLY COMMENDED
                                    </span>

                                </div>

                            ` : ""}


                            <div class="spec-row">

                                <span class="spec-label">
                                    ROLE
                                </span>

                                <span class="spec-value">
                                    ${project.role}
                                </span>

                            </div>


                            <div class="spec-row">

                                <span class="spec-label">
                                    STACK
                                </span>

                                <span class="spec-value">
                                    ${project.stack}
                                </span>

                            </div>


                            <div class="spec-row">

                                <span class="spec-label">
                                    STATUS
                                </span>

                                <span class="spec-value status">
                                    ${project.status}
                                </span>

                            </div>


                            <div class="spec-row">

                                <span class="spec-label">
                                    METRIC
                                </span>

                                <span class="spec-value">
                                    ${project.metric}
                                </span>

                            </div>


                            <p class="dossier-desc">
                                ${project.description}
                            </p>


                            ${linksMarkup(project.links)}

                        </div>

                    </article>
                `;
            }
        ).join("");


    setupMainMediaControls();

}


// ============================================
// MAIN PROJECT MEDIA CONTROLS
// ============================================

function setupMainMediaControls() {

    const container =
        document.getElementById(
            "dossier-list"
        );

    if (!container) return;


    container
        .querySelectorAll("video")
        .forEach(video => {

            video.volume = 0.5;

        });


    container
        .querySelectorAll(".thumb")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const projectIndex =
                        Number(
                            button.dataset.project
                        );

                    const slideIndex =
                        Number(
                            button.dataset.slide
                        );


                    const frame =
                        document.getElementById(
                            `frame-${projectIndex}`
                        );

                    if (!frame) return;


                    frame
                        .querySelectorAll(
                            "[data-media-index]"
                        )
                        .forEach(media => {

                            const isActive =
                                Number(
                                    media.dataset.mediaIndex
                                ) === slideIndex;


                            media.hidden =
                                !isActive;


                            if (
                                media.tagName === "VIDEO" &&
                                !isActive
                            ) {

                                media.pause();

                                media.currentTime = 0;

                            }

                        });


                    const thumbs =
                        button
                            .closest(".dossier-media")
                            .querySelectorAll(
                                ".thumb"
                            );


                    thumbs.forEach(thumb => {

                        thumb.classList.remove(
                            "active"
                        );

                    });


                    button.classList.add(
                        "active"
                    );

                }
            );

        });
}


// ============================================
// CREATE MISC SECTION
// ============================================

function createMiscSection() {

    if (
        document.getElementById(
            "misc"
        )
    ) {
        return document.getElementById(
            "misc"
        );
    }


    const dossierList =
        document.getElementById(
            "dossier-list"
        );

    if (!dossierList) {
        return null;
    }


    const section =
        document.createElement(
            "section"
        );

    section.id = "misc";

    section.className =
        "misc-section";


    section.innerHTML = `

        <div class="section-heading misc-heading">

            <div>

                <span class="section-kicker">
                    // MISC
                </span>

                <h2>
                    Experiments
                </h2>

            </div>

            <p>
                Smaller prototypes, technical experiments,
                coursework, tools and other projects.
            </p>

        </div>


        <div
            class="misc-grid"
            id="misc-list"
        ></div>

    `;


    dossierList.parentNode.insertBefore(
        section,
        dossierList.nextSibling
    );


    return section;
}


// ============================================
// RENDER MISC PROJECTS
// ============================================

function renderMisc() {

    const section =
        createMiscSection();

    if (!section) return;


    const container =
        document.getElementById(
            "misc-list"
        );

    if (!container) return;


    container.innerHTML =
        MISC_PROJECTS.map(
            (project, projectIndex) => {

                return `

                    <article
                        class="misc-card"
                        data-case="${project.id}"
                    >

                        <div class="misc-media">

                            <div
                                class="misc-media-frame"
                                id="misc-frame-${projectIndex}"
                            >

                                ${
                    project.media.length > 0
                        ? project.media.map(
                            (media, mediaIndex) =>
                                mediaMarkup(
                                    media,
                                    mediaIndex,
                                    mediaIndex === 0
                                )
                        ).join("")
                        : `
                                            <div class="project-no-media">
                                                <span>
                                                    NO MEDIA AVAILABLE
                                                </span>
                                            </div>
                                        `
                }

                            </div>


                            ${
                    project.media.length > 1
                        ? `

                                    <div class="misc-thumbs">

                                        ${project.media.map(
                            (media, mediaIndex) => `

                                                <button
                                                    type="button"

                                                    class="misc-thumb ${
                                media.type === "video"
                                    ? "thumb-video"
                                    : ""
                            } ${
                                mediaIndex === 0
                                    ? "active"
                                    : ""
                            }"

                                                    data-misc-project="${projectIndex}"
                                                    data-misc-slide="${mediaIndex}"

                                                    aria-label="${
                                media.type === "video"
                                    ? "Play video"
                                    : "View image " +
                                    (mediaIndex + 1)
                            }"
                                                >
                                                    ${
                                media.type === "video"
                                    ? "▶"
                                    : mediaIndex + 1
                            }
                                                </button>

                                            `
                        ).join("")}

                                    </div>

                                `
                        : ""
                }

                        </div>


                        <div class="misc-content">

                            <div class="misc-case">
                                CASE FILE — ${project.id}
                            </div>


                            <h3>
                                ${project.title}
                            </h3>


                            <div class="misc-meta">

                                <span>
                                    ${project.role}
                                </span>

                                <span>
                                    ${project.stack}
                                </span>

                            </div>


                            <div class="misc-status">
                                ${project.status}
                            </div>


                            <p>
                                ${project.description}
                            </p>


                            <div class="misc-metric">
                                ${project.metric}
                            </div>


                            ${linksMarkup(project.links)}

                        </div>

                    </article>

                `;

            }
        ).join("");


    setupMiscMediaControls();

}


// ============================================
// MISC MEDIA CONTROLS
// ============================================

function setupMiscMediaControls() {

    const container =
        document.getElementById(
            "misc-list"
        );

    if (!container) return;


    container
        .querySelectorAll("video")
        .forEach(video => {

            video.volume = 0.5;

        });


    container
        .querySelectorAll(".misc-thumb")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const projectIndex =
                        Number(
                            button.dataset.miscProject
                        );

                    const slideIndex =
                        Number(
                            button.dataset.miscSlide
                        );


                    const frame =
                        document.getElementById(
                            `misc-frame-${projectIndex}`
                        );

                    if (!frame) return;


                    frame
                        .querySelectorAll(
                            "[data-media-index]"
                        )
                        .forEach(media => {

                            const isActive =
                                Number(
                                    media.dataset.mediaIndex
                                ) === slideIndex;


                            media.hidden =
                                !isActive;


                            if (
                                media.tagName === "VIDEO" &&
                                !isActive
                            ) {

                                media.pause();

                                media.currentTime = 0;

                            }

                        });


                    const thumbs =
                        button
                            .closest(".misc-media")
                            .querySelectorAll(
                                ".misc-thumb"
                            );


                    thumbs.forEach(thumb => {

                        thumb.classList.remove(
                            "active"
                        );

                    });


                    button.classList.add(
                        "active"
                    );

                }
            );

        });
}


// ============================================
// GITHUB CTA
// ============================================

function createGithubCTA() {

    // Don't create it twice.

    if (
        document.getElementById(
            "github-cta"
        )
    ) {
        return document.getElementById(
            "github-cta"
        );
    }


    const miscSection =
        document.getElementById(
            "misc"
        );

    if (!miscSection) {
        return null;
    }


    const section =
        document.createElement(
            "section"
        );


    section.id =
        "github-cta";


    section.className =
        "github-cta";


    section.innerHTML = `

        <div class="github-cta-inner">

            <div>

                <p class="github-prompt">
                    &gt; access_source_repository_
                </p>

                <h2>
                    WANT TO SEE
                    MORE?
                </h2>

                <p class="github-description">
                    Explore more projects, experiments,
                    prototypes and source code on my GitHub.
                </p>

            </div>


            <a
                href="https://github.com/Darkuu"
                target="_blank"
                rel="noopener noreferrer"
                class="github-cta-button"
            >

                <span>
                    SEE MY GITHUB
                </span>

                <span>
                    /Darkuu ↗
                </span>

            </a>

        </div>

    `;


    miscSection.parentNode.insertBefore(
        section,
        miscSection.nextSibling
    );


    return section;
}


// ============================================
// SCROLL REVEAL
// ============================================

function setupRevealObserver() {

    const elements =
        document.querySelectorAll(
            ".dossier, .specs-panel, .misc-card"
        );


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elements.forEach(el => {

            el.classList.add(
                "in-view"
            );

        });

        return;
    }


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "in-view"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );
}


// ============================================
// BOOT LINE
// ============================================

function setupBootLine() {

    const bootline =
        document.getElementById(
            "bootline"
        );

    if (!bootline) return;


    const bootText =
        "> loading profile";


    let index = 0;


    bootline.textContent =
        "";


    const cursor =
        document.createElement(
            "span"
        );


    cursor.className =
        "cursor";


    cursor.textContent =
        "_";


    function typeBoot() {

        if (
            index <=
            bootText.length
        ) {

            bootline.textContent =
                bootText.slice(
                    0,
                    index
                );


            bootline.appendChild(
                cursor
            );


            index++;


            setTimeout(
                typeBoot,
                35
            );

        } else {

            setTimeout(
                () => {

                    bootline.textContent =
                        "> profile loaded — welcome";


                    bootline.appendChild(
                        cursor
                    );

                },
                400
            );

        }
    }


    typeBoot();
}


// ============================================
// UPDATE CASE COUNT
// ============================================

function updateCaseCount() {

    const count =
        document.getElementById(
            "caseCount"
        );


    if (!count) return;


    count.textContent =
        PROJECTS.length;
}


// ============================================
// INITIALISE
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCaseCount();

        renderDossiers();

        renderMisc();

        createGithubCTA();

        setupRevealObserver();

        setupBootLine();

        trackPageView();

    }
);