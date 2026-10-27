// ============================================
// PROJECT DATA
// ============================================




// ============================================
// MISC PROJECT DATA
// ============================================




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

        el.textContent = "â€”";
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
                <span class="award-star">â˜…</span>
                <span>ACHIEVEMENT</span>
                <span class="award-star">â˜…</span>
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
                    ${link.label} â†—
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
        window.PROJECTS.map(
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
                                        CASE FILE â€” ${project.id}
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
                                    ? "â–¶"
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
                                CASE FILE â€” ${project.id}
                            </div>


                            <h3>
                                ${project.title}
                            </h3>


                            ${project.featured ? `

                                <div class="featured-recognition">

                                    <span class="recognition-symbol">
                                        â˜…
                                    </span>

                                    <span>
                                        THE ROOKIES â€” FINALIST &amp;
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
        window.MINOR_PROJECTS.map(
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
                                    ? "â–¶"
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
                                CASE FILE â€” ${project.id}
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
                    /Darkuu â†—
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
            ".dossier, .specs-panel, .misc-card, .experience-item, .section-intro, .contact-content, .github-cta-inner"
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
// PAGE PROGRESS & SECTION NAVIGATION
// ============================================

function setupIntroAnimation() {
    const intro = document.getElementById("introScreen");
    if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.classList.add("intro-active");
    window.setTimeout(() => {
        intro.classList.add("intro-leaving");
        document.body.classList.remove("intro-active");
        window.setTimeout(() => intro.remove(), 650);
    }, 1450);
}

function setupPageProgress() {
    const progress = document.getElementById("scrollProgress");
    let scheduled = false;

    const updateProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (progress) progress.style.width = `${percentage}%`;
        scheduled = false;
    };

    window.addEventListener("scroll", () => {
        if (!scheduled) {
            window.requestAnimationFrame(updateProgress);
            scheduled = true;
        }
    }, { passive: true });
    updateProgress();

    if (!("IntersectionObserver" in window)) return;
    const links = [...document.querySelectorAll(".hud-nav a")];
    const sections = links
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);
    const activeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(link => {
                const active = link.hash === `#${entry.target.id}`;
                if (active) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-25% 0px -60% 0px" });
    sections.forEach(section => activeObserver.observe(section));
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
                        "> profile loaded â€” welcome";


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
        window.PROJECTS.length;
}


// ============================================
// INITIALISE
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupIntroAnimation();

        updateCaseCount();

        renderDossiers();

        renderMisc();

        createGithubCTA();

        setupRevealObserver();

        setupBootLine();

        setupPageProgress();

        trackPageView();

    }
);

