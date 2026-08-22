# Muneeb Analytics — Personal Brand Site

Client project. A personal branding and portfolio site for Muneeb, a professional data
analyst, built to present his services, credentials, and video content to prospective
clients.

**Live:** [muneebanalytics.com](https://www.muneebanalytics.com/)

![Homepage](./docs/home.png)

<!-- TODO: Commit a homepage screenshot to /docs. 1200-1600px wide, browser chrome
     cropped out, real content loaded (no skeleton states). -->

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript 5.8 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Components | Radix UI primitives (shadcn/ui) |
| Animation | Motion |
| Video | Video.js + HLS adaptive streaming, with quality selector |
| Forms | Formik + Yup validation, EmailJS delivery |
| Hosting | Vercel |

---

## What I built

Roughly 9 pages: [TODO — list the actual sections, e.g. home, about, services,
portfolio, video library, testimonials, blog, contact].

Three areas took the majority of the work.

### Adaptive video streaming

The site is video-heavy — Muneeb's credibility with prospective clients comes largely
from watching him explain his work. A plain `<video>` tag meant visitors on slower
connections either sat through long buffering or left.

I integrated Video.js with HLS (HTTP Live Streaming). The player serves multiple bitrate
renditions and switches automatically based on available bandwidth, with a manual
quality selector for viewers who want to force a resolution.

![Quality selector](./docs/video-player.png)


### Contact form

Formik with a Yup validation schema, including an international country selector backed
by `world-countries`. Submissions are delivered through EmailJS, which avoided standing
up and maintaining a backend for what is otherwise a static marketing site — enquiries
land directly in the client's inbox.

---

## Performance

Measured with Lighthouse against the live site.

| | Mobile | Desktop |
|---|---|---|
| Performance | 91 | TODO |
| Accessibility | 86 | TODO |
| Best Practices | 100 | TODO |
| SEO | 83 | TODO |

---

Built and delivered for a paying client; in active use.
