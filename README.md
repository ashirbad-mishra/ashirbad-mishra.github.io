# Ashirbad Mishra — Academic Website

This folder contains the complete public-facing website of **Ashirbad Mishra**, including the HTML pages, stylesheets, images, logos, and supporting documents.

The website is organized so that individual pages and assets can be updated independently without changing the overall website structure.

---

## 📁 Website Structure

```text
website/
│
├── index.html
├── about.html
├── projects.html
├── publications.html
├── conferences.html
├── news.html
├── contact.html
│
├── css/
│   └── style.css
│
└── assets/
    ├── images/
    ├── logos/
    └── CV_Ashirbad_Mishra.pdf
```

---

## 🌐 Main Website Pages

| File                | Page             | Purpose                                                                                   |
| ------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| `index.html`        | **Home**         | Hero section, research overview, collaboration logos, visitor counter and main navigation |
| `about.html`        | **About**        | Academic profile, research background, skills, education and researcher metrics           |
| `projects.html`     | **Projects**     | Research projects, positions, institutions and contributions                              |
| `publications.html` | **Publications** | Peer-reviewed publications, citations and research outputs                                |
| `conferences.html`  | **Conferences**  | Conference presentations, participation and related academic activities                   |
| `news.html`         | **News**         | Research updates, announcements, awards and other academic news                           |
| `contact.html`      | **Contact**      | Contact information and enquiry form                                                      |

---

## 🎨 Styling

### `css/style.css`

This is the **main stylesheet for the entire website**.

Use this file when changing:

* Navigation font size and spacing
* Page spacing
* Heading sizes
* Text colours
* Button appearance
* Hero image dimensions
* Section spacing
* Publication/conference spacing
* Project layout
* Responsive/mobile behaviour
* Collaboration logo layout
* General typography

### Important

Most visual changes should be made in:

```text
css/style.css
```

rather than modifying individual HTML files.

---

# 🖼️ Assets

## `assets/images/`

Contains photographs and other website images.

### Current primary portrait

```text
assets/images/Ashirbad Photo.png
```

This is used for the main hero/profile image.

To replace the portrait, keep the new image in this folder and update the corresponding image reference in `index.html` if the filename changes.

---

## `assets/logos/`

Contains collaboration and institutional logos displayed on the website.

Keep all collaboration logos in this folder so they remain easy to replace or update.

When replacing a logo, preferably retain the existing filename to avoid changing HTML references.

---

## 📄 CV

```text
assets/CV_Ashirbad_Mishra.pdf
```

This is the downloadable CV linked from the website.

To update the CV:

1. Replace the PDF in `assets/`.
2. Keep the same filename if possible.
3. No HTML change should then be necessary.

---

# ✏️ Where to Edit Website Content

## Home page

Edit:

```text
index.html
```

Use this file for:

* Name
* Current position
* Hero introduction
* Research overview
* Research themes
* Collaboration section
* Visitor counter
* Home-page buttons

---

## About

Edit:

```text
about.html
```

Use this file for:

* Researcher biography
* Academic background
* Research interests
* Education
* Skills
* Research metrics
* h-index
* i10-index

---

## Projects

Edit:

```text
projects.html
```

Use this file for:

* Project names
* Project descriptions
* Positions
* Host institutions
* Partner institutions
* Individual contributions
* Additional research projects

---

## Publications

Edit:

```text
publications.html
```

Use this file for:

* Publication titles
* Authors
* Journals
* Publication years
* DOI links
* Citation information
* Publication metrics

When adding a new publication, follow the structure of the existing publication entries.

---

## Conferences

Edit:

```text
conferences.html
```

Use this file for:

* Conference name
* Presentation title
* Presentation type
* Location
* Date/year
* Conference description

---

## News

Edit:

```text
news.html
```

Use this file for:

* Research updates
* Awards
* New publications
* Conference participation
* Academic milestones
* Announcements

---

## Contact

Edit:

```text
contact.html
```

Use this file for:

* Email address
* Institutional affiliation
* Contact information
* Enquiry form configuration

---

# 🔗 Navigation

The navigation menu is present across the website pages.

If a new page is added:

1. Create the new HTML file.
2. Add the navigation link to the existing pages.
3. Maintain the existing navigation structure and styling.

Navigation styling is controlled primarily through:

```text
css/style.css
```

---

# 📐 Design Principles

The website follows a:

* Minimal
* Formal
* Academic
* Scientific
* Clean
* Responsive

visual style.

When modifying the website, preserve:

* Existing typography
* Navy/slate colour palette
* Consistent spacing
* Responsive behaviour
* Existing navigation
* Existing asset organization
* Consistent button and heading styles

Avoid introducing unnecessary frameworks or changing the overall architecture unless required.

---

# 🔄 Updating Content

For routine updates, the following files are the main ones to edit:

```text
index.html          → Home
about.html          → About/profile
projects.html       → Research projects
publications.html   → Publications
conferences.html    → Conferences
news.html           → News/updates
contact.html        → Contact
css/style.css       → Design/layout
```

For images:

```text
assets/images/
```

For logos:

```text
assets/logos/
```

For CV:

```text
assets/CV_Ashirbad_Mishra.pdf
```

---

# 🚀 Publishing

The website is designed to be published through:

**GitHub Pages**

Repository:

```text
ashirbad-mishra/ashirbad-mishra.github.io
```

Live website:

```text
https://ashirbad-mishra.github.io/
```

The root `index.html` is the main entry point of the public website.

---

# 🕘 Version History

Previous website versions should be preserved through the **Git commit history** of the GitHub repository.

Before major future changes:

1. Make the required edits.
2. Test the website locally.
3. Commit the changes with a meaningful commit message.
4. Push the new version to GitHub.

Example:

```text
Update publications and research projects
```

This allows earlier versions of the website to be recovered if necessary.

---

## Current Working Principle

**Modify → Test locally → Commit → Publish**

The existing website structure should be preserved whenever possible. Future updates should be incremental rather than rebuilding the website from scratch.
