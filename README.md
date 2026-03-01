# Rant Nebula

**Unleash your thoughts. They float forever.**

Rant Nebula is a simple interactive web app where users can type their thoughts or rants and watch them float around the screen as animated shapes. Each rant is saved in the browser and reappears the next time the page is opened.

---

## Features

- Add unlimited rants  
- Random floating shapes (Bubble, Cloud, Blob)  
- Random size and movement for each rant  
- Persistent storage using `localStorage`  
- Minimal cosmic-themed UI  
- Press **Enter** or click **RANT!** to submit  

---

## Built With

- **HTML5** – Structure  
- **CSS3** – Styling & animations  
- **JavaScript (Vanilla JS)** – Logic, movement, and storage  

No frameworks. No libraries. Pure front-end implementation.

---

## Project Structure
Rant-Nebula/
│── index.html
│── style.css
│── script.js


---

## How It Works

1. User types a rant in the input field.  

2. When submitted:
   - The rant is saved to `localStorage`.  
   - A random shape (bubble, cloud, or blob) is created.  
   - The shape appears at a random position.  
   - It floats around the screen and bounces off edges.  

3. When the page reloads, saved rants are restored automatically.

---

## Core Logic

Rants are stored in an array:

```javascript
let rants = JSON.parse(localStorage.getItem('rants')) || [];

