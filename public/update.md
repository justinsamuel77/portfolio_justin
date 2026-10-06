Update my existing portfolio website with the following changes. **Do not redesign or remove existing functionality unless explicitly requested below.** Keep the current overall design and structure, but make the requested content, image, skills, experience, project, contact form, and footer updates.

## 1. Profile Summary

Replace the current Profile Summary with exactly:

> Full Stack Developer with 3.5+ years of experience developing scalable web applications using React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, and REST APIs. Experienced in building CRM, HRMS, customer support, food ordering, taxi booking, and rental marketplace applications with real-time features, payment gateway integrations, third-party APIs, and test automation using Playwright.

## 2. Profile Image

Remove the current image:

`http://localhost:3000/static/media/programmer.4b9c875a0709a071e59b.jpg`

Replace it with:

`portfolio\public\justin_img.jpeg`

Make sure the new image is correctly referenced/imported according to the project's existing React/frontend setup.

## 3. "Check Resume" Button

Update the **Check Resume** button so that clicking it redirects the user to:

`https://drive.google.com/file/d/1VG4hNYKPDe2VGEgzNtUCfYHJIBXQ4y7o/view?usp=sharing`

The button must work correctly in the browser.

## 4. Skills Section

Replace the current Skills section/content with the following categories and skills.

Use appropriate icons for every skill.

**Important:** All skill icons must come from the **same icon package/library**. Do not mix icons from different packages or use separate image files for individual skills. Remove the current skill images/icons if necessary and use one consistent icon library/package throughout the Skills section.

### Frontend

* HTML
* CSS
* JavaScript
* TypeScript
* React.js
* Next.js
* Tailwind CSS

### Backend

* Node.js
* Express.js
* REST APIs
* GraphQL

### Database

* MongoDB
* MySQL

### Authentication & Integration

* JWT Authentication
* Firebase
* Third-Party API Integration

### Testing & Automation

* Playwright
* E2E Testing
* API Testing

### Real-Time Development

* WebSockets
* Real-Time Applications

### Payment Gateways

* Stripe
* PayPal
* Razorpay
* FlowPay
* Rapyd Pay
* Flutterwave
* Airwallex

### Tools

* Git
* GitHub

### AI-Assisted Development

* Claude
* GitHub Copilot
* MCP
* Playwright MCP
* Figma MCP
* GitHub MCP

Keep the Skills section visually consistent with the existing portfolio design and make sure it remains responsive on desktop and mobile.

## 5. Experience Section

Keep all existing experience entries.

Add one additional experience entry titled:

**Warely Technology**

Description:

> Singapore-based product company providing POS and digital ordering solutions including POS systems, KDS, ODS, kiosks, sound bar devices, and online food ordering platforms.

Do not duplicate any existing experience entries.

## 6. Projects Section

Keep all existing project cards.

Add a new project card:

### Project: Digital Ordering

Description:

> Built a restaurant digital ordering application for dine-in and takeaway through QR code-based ordering, supporting restaurant/outlet ordering, counter payments, and Rapyd Pay integration.

Use this project image:

`portfolio\public\do_image.jpeg`

Make sure the image is correctly imported and displayed.

### Project: Millennia Miles

Add another project card with the title:

**Millennia Miles**

Description:

> Built a taxi booking application supporting automatic and admin-based driver assignment, distance-based fare calculation, trip management, passenger-based vehicle selection, and driver availability scheduling.

Use this project image:

`portfolio\public\m-miles.png`

Make sure both new projects follow the same card layout, styling, animations, and responsive behavior as the existing project cards.

Do not duplicate either project.

## 7. Contact Form Validation

Add proper validation to the existing Contact Form.

At minimum, validate:

* Name is required.
* Email is required and must be a valid email format.
* Message is required.
* Prevent submission when required fields are empty or invalid.
* Display clear validation feedback to the user.
* Ensure the form works correctly when the user clicks the submit/send button.
* Prevent unnecessary page reloads if the existing application uses client-side submission.

Keep the existing contact form design and styling unless changes are necessary for validation feedback.

## 8. Footer

Replace the current footer copyright text with exactly:

> © 2026 Justin Samuel S. All rights reserved.

## 9. General Requirements

* Preserve the existing portfolio design and layout.
* Do not unnecessarily rewrite or restructure unrelated components.
* Do not remove existing projects, experience entries, sections, or functionality unless explicitly requested.
* Do not duplicate any content.
* Ensure all newly added images use the provided local files.
* Ensure all image paths/imports work correctly in the existing project structure.
* Ensure the website builds without errors.
* Ensure there are no broken image paths.
* Ensure the Resume button works correctly.
* Ensure the Contact Form validation works correctly.
* Ensure all skills have consistent icons from one icon package.
* Keep the UI responsive for desktop, tablet, and mobile.
* Follow the existing coding conventions and component structure of the project.
* Remove unused imports/assets created by the old profile image or skill images if they are no longer needed.
* Check for console errors and fix any issues introduced by these changes.
* Do not add unnecessary dependencies when an existing installed package can be used.
* If an icon does not exist for a specific technology, use a suitable generic icon from the **same icon package** rather than importing an icon from another library.
