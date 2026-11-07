"use strict";

// ============================================
// HELPERS
// ============================================

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];
    });
}

function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) {
        return "";
    }

    try {
        const url = new URL(value, document.baseURI);

        const allowed =
            url.protocol === "https:" ||
            url.protocol === "http:" ||
            (
                window.location.protocol === "file:" &&
                url.protocol === "file:"
            );

        return allowed ? url.href : "";
    } catch {
        return "";
    }
}

function prefersReducedMotion() {
    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
}

function getMainProjects() {
    return Array.isArray(window.PROJECTS)
        ? window.PROJECTS.filter(project => project && typeof project === "object")
        : [];
}

function getMinorProjects() {
    return Array.isArray(window.MINOR_PROJECTS)
        ? window.MINOR_PROJECTS.filter(project => project && typeof project === "object")
        : [];
}

function getProjectMedia(project) {
    if (!Array.isArray(project.media)) {
        return [];
    }

    return project.media.filter(item =>
        item &&
        ["image", "video", "gif"].includes(item.type) &&
        safeUrl(item.src)
    );
}


// ============================================
// PAGE VIEW COUNTER
// ============================================

async function trackPageView() {
    const element = document.getElementById("pageViews");

    if (!element) {
        return;
    }

    const hostname = window.location.hostname;

    // Avoid counting ordinary local development previews.
    if (
        !hostname ||
        hostname === "localhost" ||
        hostname.endsWith(".localhost") ||
        hostname === "127.0.0.1" ||
        hostname === "[::1]"
    ) {
        element.textContent = "—";
        return;
    }

    const namespace = encodeURIComponent(hostname);
    const key = "portfolio-visits";

    const controller = new AbortController();

    const timeout = window.setTimeout(() => {
        controller.abort();
    }, 5000);

    try {
        const response = await fetch(
            `https://abacus.jasoncameron.dev/hit/${namespace}/${key}`,
            {
                signal: controller.signal,
                credentials: "omit"
            }
        );

        if (!response.ok) {
            throw new Error(`Counter returned HTTP ${response.status}`);
        }

        const data = await response.json();
        const value = Number(data.value);

        if (
            data.value === null ||
            data.value === undefined ||
            !Number.isFinite(value) ||
            value < 0
        ) {
            throw new Error("Counter returned an invalid value");
        }

        element.textContent = Math.floor(value).toLocaleString();
    } catch (error) {
        console.warn("Page counter unavailable:", error);
        element.textContent = "—";
    } finally {
        window.clearTimeout(timeout);
    }
}


// ============================================
// MEDIA MARKUP
// ============================================

function mediaMarkup(item, index, active, projectTitle) {
    const source = escapeHtml(safeUrl(item.src));

    // Inline display prevents gallery CSS from overriding hidden.
    const visibility = active
        ? ""
        : 'hidden style="display: none;"';

    const title = String(projectTitle || "Project");

    if (item.type === "video") {
        const posterUrl = safeUrl(item.poster);

        const poster = posterUrl
            ? `poster="${escapeHtml(posterUrl)}"`
            : "";

        const label = escapeHtml(
            item.alt || `${title} — video ${index + 1}`
        );

        return `
            <video
                ${visibility}
                data-media-index="${index}"
                src="${source}"
                ${poster}
                aria-label="${label}"
                controls
                playsinline
                preload="metadata"
            >
                Your browser does not support embedded video.
                <a href="${source}">Open the video</a>.
            </video>
        `;
    }

    const description = item.type === "gif"
        ? "animated preview"
        : "screenshot";

    const alt = escapeHtml(
        item.alt || `${title} — ${description} ${index + 1}`
    );

    return `
        <img
            ${visibility}
            data-media-index="${index}"
            src="${source}"
            alt="${alt}"
            loading="lazy"
            decoding="async"
        >
    `;
}

function galleryMarkup(project, projectIndex, minor = false) {
    const media = getProjectMedia(project);

    const frameId = minor
        ? `misc-frame-${projectIndex}`
        : `frame-${projectIndex}`;

    const frameClass = minor
        ? "misc-media-frame"
        : "media-frame";

    const thumbsClass = minor
        ? "misc-thumbs"
        : "media-thumbs";

    const thumbClass = minor
        ? "misc-thumb"
        : "thumb";

    const mediaContent = media.length
        ? media.map((item, index) =>
            mediaMarkup(item, index, index === 0, project.title)
        ).join("")
        : `
            <div class="project-no-media">
                <span>NO MEDIA AVAILABLE</span>
            </div>
        `;

    const thumbnails = media.length > 1
        ? `
            <div class="${thumbsClass}"
                 role="group"
                 aria-label="${escapeHtml(project.title)} media selection">

                ${media.map((item, index) => {
            const video = item.type === "video";

            const label = video
                ? `Show video ${index + 1}`
                : `Show image ${index + 1}`;

            return `
                        <button
                            type="button"
                            class="${thumbClass} ${video ? "thumb-video" : ""} ${index === 0 ? "active" : ""}"
                            data-frame="${frameId}"
                            data-slide="${index}"
                            aria-controls="${frameId}"
                            aria-pressed="${index === 0}"
                            aria-label="${label}"
                        >
                            ${video
                ? '<span aria-hidden="true">▶</span>'
                : index + 1}
                        </button>
                    `;
        }).join("")}

            </div>
        `
        : "";

    return `
        <div class="${frameClass}" id="${frameId}">
            ${mediaContent}
            ${minor ? "" : awardMarkup(project)}
        </div>

        ${thumbnails}
    `;
}


// ============================================
// AWARD BADGE
// ============================================

function awardMarkup(project) {
    const awards = Array.isArray(project.awards)
        ? project.awards.filter(award =>
            typeof award === "string" && award.trim()
        )
        : [];

    if (!awards.length) {
        return "";
    }

    return `
        <div class="award-badge">

            <div class="award-badge-top">
                <span class="award-star" aria-hidden="true">★</span>
                <span>ACHIEVEMENT</span>
                <span class="award-star" aria-hidden="true">★</span>
            </div>

            <div class="award-badge-main">
                ${escapeHtml(project.awardOrganisation || "THE ROOKIES")}
            </div>

            <div class="award-badge-line" aria-hidden="true"></div>

            <div class="award-badge-awards">
                ${awards.map(award =>
        `<span>${escapeHtml(award)}</span>`
    ).join("")}
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
    if (!Array.isArray(links)) {
        return "";
    }

    const validLinks = links.filter(link =>
        link && safeUrl(link.url)
    );

    if (!validLinks.length) {
        return "";
    }

    return `
        <div class="dossier-links">

            ${validLinks.map(link => `
                <a
                    href="${escapeHtml(safeUrl(link.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escapeHtml(link.label || "View project")}
                    <span aria-hidden="true">↗</span>
                </a>
            `).join("")}

        </div>
    `;
}


// ============================================
// RENDER MAIN PROJECTS
// ============================================

function renderDossiers() {
    const container = document.getElementById("dossier-list");

    if (!container) {
        console.warn("Project container #dossier-list was not found.");
        return;
    }

    const projects = getMainProjects();

    if (!projects.length) {
        container.innerHTML = "<p>No projects are available yet.</p>";
        return;
    }

    container.innerHTML = projects.map((project, index) => {
        const featuredClass = project.featured
            ? "featured-dossier"
            : "";

        // A featured project is not automatically an award winner.
        const hasAwards =
            Array.isArray(project.awards) &&
            project.awards.some(award =>
                typeof award === "string" && award.trim()
            );

        return `
            <article
                class="dossier ${featuredClass}"
                data-case="${escapeHtml(project.id)}"
            >

                <div class="dossier-media">

                    ${project.featured ? `
                        <div class="featured-label">
                            <span>FEATURED PROJECT</span>
                            <span>CASE FILE — ${escapeHtml(project.id)}</span>
                        </div>
                    ` : ""}

                    ${galleryMarkup(project, index)}

                </div>

                <div class="dossier-spec">

                    <div class="case-id">
                        CASE FILE — ${escapeHtml(project.id)}
                    </div>

                    <h3>${escapeHtml(project.title)}</h3>

                    ${project.featured && hasAwards ? `
                        <div class="featured-recognition">
                            <span class="recognition-symbol"
                                  aria-hidden="true">★</span>
                            <span>${escapeHtml(project.metric)}</span>
                        </div>
                    ` : ""}

                    <div class="spec-row">
                        <span class="spec-label">ROLE</span>
                        <span class="spec-value">
                            ${escapeHtml(project.role)}
                        </span>
                    </div>

                    <div class="spec-row">
                        <span class="spec-label">STACK</span>
                        <span class="spec-value">
                            ${escapeHtml(project.stack)}
                        </span>
                    </div>

                    <div class="spec-row">
                        <span class="spec-label">STATUS</span>
                        <span class="spec-value status">
                            ${escapeHtml(project.status)}
                        </span>
                    </div>

                    <div class="spec-row">
                        <span class="spec-label">METRIC</span>
                        <span class="spec-value">
                            ${escapeHtml(project.metric)}
                        </span>
                    </div>

                    <p class="dossier-desc">
                        ${escapeHtml(project.description)}
                    </p>

                    ${linksMarkup(project.links)}

                </div>

            </article>
        `;
    }).join("");

    setupMediaControls(container);
}


// ============================================
// FIND OR CREATE MORE WORK SECTION
// ============================================

function createMiscSection() {
    let section = document.getElementById("misc");

    if (!section) {
        const workSection = document.getElementById("work");

        if (!workSection) {
            console.warn("Cannot create More Work: #work was not found.");
            return null;
        }

        section = document.createElement("section");

        section.id = "misc";
        section.className = "work misc-section";
        section.setAttribute("aria-labelledby", "misc-title");

        section.innerHTML = `
            <div class="section-label">
                // ADDITIONAL PROJECTS
            </div>

            <div class="section-intro">
                <h2 id="misc-title">More Work</h2>
                <p>
                    Smaller projects, prototypes, coursework
                    and technical experiments.
                </p>
            </div>

            <div id="minor-project-list" class="misc-grid"></div>
        `;

        // Insert after Selected Work, not inside it.
        workSection.insertAdjacentElement("afterend", section);
    }

    section.classList.add("misc-section");

    let container =
        section.querySelector("#minor-project-list") ||
        section.querySelector("#misc-list");

    if (!container) {
        container = document.createElement("div");
        container.id = "minor-project-list";
        section.appendChild(container);
    }

    container.classList.add("misc-grid");

    return section;
}


// ============================================
// RENDER MINOR PROJECTS
// ============================================

function renderMisc() {
    const section = createMiscSection();

    if (!section) {
        return;
    }

    const container =
        section.querySelector("#minor-project-list") ||
        section.querySelector("#misc-list");

    const projects = getMinorProjects();

    if (!projects.length) {
        container.innerHTML = "<p>No additional projects are available yet.</p>";
        return;
    }

    container.innerHTML = projects.map((project, index) => `
        <article
            class="misc-card"
            data-case="${escapeHtml(project.id)}"
        >

            <div class="misc-media">
                ${galleryMarkup(project, index, true)}
            </div>

            <div class="misc-content">

                <div class="misc-case">
                    CASE FILE — ${escapeHtml(project.id)}
                </div>

                <h3>${escapeHtml(project.title)}</h3>

                <div class="misc-meta">
                    <span>${escapeHtml(project.role)}</span>
                    <span>${escapeHtml(project.stack)}</span>
                </div>

                <div class="misc-status">
                    ${escapeHtml(project.status)}
                </div>

                <p>${escapeHtml(project.description)}</p>

                <div class="misc-metric">
                    ${escapeHtml(project.metric)}
                </div>

                ${linksMarkup(project.links)}

            </div>

        </article>
    `).join("");

    setupMediaControls(container);
}


// ============================================
// SHARED GALLERY CONTROLS
// ============================================

function setupMediaControls(container) {
    container.querySelectorAll("video").forEach(video => {
        video.volume = 0.5;

        // Play only one project video at a time.
        video.addEventListener("play", () => {
            document.querySelectorAll(
                "#dossier-list video, #minor-project-list video, #misc-list video"
            ).forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });

    container.querySelectorAll("[data-frame][data-slide]")
        .forEach(button => {
            button.addEventListener("click", () => {
                const frame = document.getElementById(
                    button.dataset.frame
                );

                const slideIndex = Number(button.dataset.slide);

                if (!frame || !Number.isInteger(slideIndex)) {
                    return;
                }

                const mediaItems = Array.from(
                    frame.querySelectorAll("[data-media-index]")
                );

                const selectedMedia = mediaItems.find(media =>
                    Number(media.dataset.mediaIndex) === slideIndex
                );

                if (!selectedMedia) {
                    return;
                }

                mediaItems.forEach(media => {
                    const active = media === selectedMedia;

                    media.hidden = !active;

                    if (active) {
                        media.style.removeProperty("display");
                    } else {
                        media.style.display = "none";
                    }

                    if (media.tagName === "VIDEO" && !active) {
                        media.pause();
                    }
                });

                const group = button.parentElement;

                group.querySelectorAll("[data-slide]").forEach(thumb => {
                    const active = thumb === button;

                    thumb.classList.toggle("active", active);
                    thumb.setAttribute("aria-pressed", String(active));
                });

                // Selecting a video reveals its controls.
                // Playback begins only when the visitor presses Play.
            });
        });
}


// ============================================
// GITHUB CALL TO ACTION
// ============================================

function createGithubCTA() {
    const existing = document.getElementById("github-cta");

    if (existing) {
        return existing;
    }

    const miscSection = document.getElementById("misc");

    if (!miscSection) {
        return null;
    }

    const section = document.createElement("section");

    section.id = "github-cta";
    section.className = "github-cta";

    section.setAttribute(
        "aria-labelledby",
        "github-cta-title"
    );

    section.innerHTML = `
        <div class="github-cta-inner">

            <div>
                <p class="github-prompt">
                    &gt; access_source_repository_
                </p>

                <h2 id="github-cta-title">
                    WANT TO SEE MORE?
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
                <span>SEE MY GITHUB</span>
                <span>
                    /Darkuu <span aria-hidden="true">↗</span>
                </span>
            </a>

        </div>
    `;

    miscSection.insertAdjacentElement("afterend", section);

    return section;
}


// ============================================
// SCROLL REVEAL
// ============================================

function setupRevealObserver() {
    const elements = document.querySelectorAll(
        ".dossier, .specs-panel, .misc-card, " +
        ".experience-item, .section-intro, " +
        ".contact-content, .github-cta-inner"
    );

    const revealAll = () => {
        elements.forEach(element => {
            element.classList.add("in-view");
        });
    };

    if (
        prefersReducedMotion() ||
        !("IntersectionObserver" in window)
    ) {
        revealAll();
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, {
        // A small threshold also works with tall project cards.
        threshold: 0.01
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Reveal content reached through keyboard navigation too.
    document.addEventListener("focusin", event => {
        if (!(event.target instanceof Element)) {
            return;
        }

        elements.forEach(element => {
            if (element.contains(event.target)) {
                element.classList.add("in-view");
                observer.unobserve(element);
            }
        });
    });
}


// ============================================
// INTRO ANIMATION
// ============================================

function setupIntroAnimation() {
    const intro = document.getElementById("introScreen");

    if (!intro) {
        document.body.classList.remove("intro-active");
        return;
    }

    const motionPreference = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (motionPreference.matches) {
        document.body.classList.remove("intro-active");
        intro.remove();
        return;
    }

    let leaveTimer;
    let removeTimer;

    const finishIntro = () => {
        window.clearTimeout(leaveTimer);
        window.clearTimeout(removeTimer);

        document.body.classList.remove("intro-active");
        intro.remove();

        motionPreference.removeEventListener("change", onMotionChange);
    };

    const onMotionChange = event => {
        if (event.matches) {
            finishIntro();
        }
    };

    motionPreference.addEventListener("change", onMotionChange);

    document.body.classList.add("intro-active");

    leaveTimer = window.setTimeout(() => {
        intro.classList.add("intro-leaving");
        document.body.classList.remove("intro-active");

        removeTimer = window.setTimeout(finishIntro, 650);
    }, 1450);
}


// ============================================
// PAGE PROGRESS AND NAVIGATION
// ============================================

function setupPageProgress() {
    const progress = document.getElementById("scrollProgress");

    const links = Array.from(
        document.querySelectorAll(".hud-nav a")
    );

    const navigationItems = links.map(link => {
        const hash = link.hash;

        if (!hash || hash === "#") {
            return null;
        }

        let id;

        try {
            id = decodeURIComponent(hash.slice(1));
        } catch {
            return null;
        }

        const section = document.getElementById(id);

        return section ? { link, section } : null;
    }).filter(Boolean);

    let scheduled = false;

    const update = () => {
        scheduled = false;

        const documentHeight = document.documentElement.scrollHeight;

        const scrollable = Math.max(
            0,
            documentHeight - window.innerHeight
        );

        const percentage = scrollable > 0
            ? Math.max(
                0,
                Math.min(100, window.scrollY / scrollable * 100)
            )
            : 0;

        if (progress) {
            progress.style.width = `${percentage}%`;
        }

        const marker = window.innerHeight * 0.3;

        let activeItem = null;
        let closestTop = -Infinity;

        navigationItems.forEach(item => {
            const top = item.section.getBoundingClientRect().top;

            if (top <= marker && top > closestTop) {
                closestTop = top;
                activeItem = item;
            }
        });

        // Highlight the final section at the bottom of the page.
        if (
            scrollable > 0 &&
            window.scrollY >= scrollable - 2
        ) {
            activeItem = navigationItems.reduce((last, item) => {
                if (
                    !last ||
                    item.section.getBoundingClientRect().top >
                    last.section.getBoundingClientRect().top
                ) {
                    return item;
                }

                return last;
            }, null);
        }

        links.forEach(link => {
            if (activeItem && activeItem.link === link) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const scheduleUpdate = () => {
        if (scheduled) {
            return;
        }

        scheduled = true;
        window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", scheduleUpdate, {
        passive: true
    });

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(scheduleUpdate);
        observer.observe(document.body);
    }

    if (document.fonts) {
        document.fonts.ready.then(scheduleUpdate);
    }

    update();
}


// ============================================
// BOOT LINE
// ============================================

function setupBootLine() {
    const bootline = document.getElementById("bootline");

    if (!bootline) {
        return;
    }

    const loadingText = "> loading profile";
    const completedText = "> profile loaded — welcome";

    if (prefersReducedMotion()) {
        bootline.textContent = completedText;
        return;
    }

    const cursor = document.createElement("span");

    cursor.className = "cursor";
    cursor.textContent = "_";
    cursor.setAttribute("aria-hidden", "true");

    let index = 0;

    function typeBoot() {
        // Stop typing if reduced motion is enabled mid-animation.
        if (prefersReducedMotion()) {
            bootline.textContent = completedText;
            return;
        }

        bootline.textContent = loadingText.slice(0, index);
        bootline.appendChild(cursor);

        if (index < loadingText.length) {
            index++;
            window.setTimeout(typeBoot, 35);
        } else {
            window.setTimeout(() => {
                bootline.textContent = completedText;

                if (!prefersReducedMotion()) {
                    bootline.appendChild(cursor);
                }
            }, 400);
        }
    }

    typeBoot();
}


// ============================================
// UPDATE CASE COUNT
// ============================================

function updateCaseCount() {
    const count = document.getElementById("caseCount");

    if (!count) {
        return;
    }

    // Count both main and minor projects.
    count.textContent = String(
        getMainProjects().length + getMinorProjects().length
    );
}


// ============================================
// WINDOWS XP TASKBAR
// ============================================

function setupTaskbar() {
    const toggle = document.getElementById("startMenuToggle");
    const menu = document.getElementById("startMenu");
    const clock = document.getElementById("taskbarClock");

    if (clock) {
        const updateClock = () => {
            const now = new Date();
            clock.dateTime = now.toISOString();
            clock.textContent = new Intl.DateTimeFormat(undefined, {
                hour: "numeric",
                minute: "2-digit"
            }).format(now);
        };

        updateClock();
        window.setInterval(updateClock, 30_000);
    }

    if (!toggle || !menu) {
        return;
    }

    const closeMenu = () => {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const opening = menu.hidden;
        menu.hidden = !opening;
        toggle.setAttribute("aria-expanded", String(opening));
    });

    menu.addEventListener("click", event => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("pointerdown", event => {
        if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !menu.hidden) {
            closeMenu();
            toggle.focus();
        }
    });
}


// ============================================
// INITIALISE
// ============================================

function initialisePortfolio() {
    const tasks = [
        setupIntroAnimation,
        updateCaseCount,
        renderDossiers,
        renderMisc,
        createGithubCTA,
        setupRevealObserver,
        setupBootLine,
        setupPageProgress,
        setupTaskbar
    ];

    // A failure in one feature should not stop all other features.
    tasks.forEach(task => {
        try {
            task();
        } catch (error) {
            console.error(
                `Portfolio feature failed: ${task.name}`,
                error
            );

            if (task === setupIntroAnimation) {
                document.body.classList.remove("intro-active");
                document.getElementById("introScreen")?.remove();
            }

            if (task === setupRevealObserver) {
                document.querySelectorAll(
                    ".dossier, .specs-panel, .misc-card, " +
                    ".experience-item, .section-intro, " +
                    ".contact-content, .github-cta-inner"
                ).forEach(element => {
                    element.classList.add("in-view");
                });
            }
        }
    });

    // The counter handles its own network failures.
    void trackPageView();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initialisePortfolio,
        { once: true }
    );
} else {
    initialisePortfolio();
}
