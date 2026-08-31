# Ashirbad Mishra — Website Source Update

This folder contains the uploaded website files with only the changes required to use the newly supplied portrait and collaboration logos.

## Changed files

### `index.html`
Updated:
- Hero image now uses `assets/images/Ashirbad Photo.png`.
- Collaboration section now uses the uploaded institutional logos.
- Added the supplied National Institute of Advanced Studies logo.
- IITM remains a text tile because no IITM logo was present in the uploaded package.
- Corrected "Your CV documents..." to first-person wording.
- Added HTML `EDIT` comments showing where future text/image/logo changes should be made.

### `css/style.css`
Updated only to:
- display the hero portrait correctly;
- display collaboration logos consistently inside the existing logo boxes.

### Everything else
All other uploaded HTML pages, the CV, and existing assets were left untouched because they did not require changes for the supplied images/logos.

## Future image changes

### Hero portrait
Change this line in `index.html`:

`src="assets/images/Ashirbad Photo.png"`

Put the new image in:

`assets/images/`

### Collaboration logos
The collaboration section is in `index.html`.

Current mappings:

- University of Birmingham → `assets/logos/Birmingham.png`
- CICERO → `assets/logos/Cicero.png`
- NIES → `assets/logos/logo-nies.png`
- Chinese Academy of Sciences → `assets/logos/download-cHIENA.jpeg`
- ICHEC → `assets/logos/ICHEC.png`
- University of Leeds → `assets/logos/download-LEEDS.png`
- IITM → currently text only; add an approved IITM logo later if supplied
- PGIMER → `assets/logos/PGIMER.jpeg`
- National Institute of Advanced Studies → `assets/logos/National_Institute_of_Advanced_Studies_Logo.png`

## Future text changes

Most homepage text is marked in `index.html` with comments beginning:

`<!-- EDIT TEXT:`

The comments do not appear on the published website.

## Local preview

Copy the contents of this folder into the workspace's `website/` directory. The existing `start.bat` / PowerShell workspace server will automatically serve the updated files from that directory.

No hard-coded port or additional server modification is required.
