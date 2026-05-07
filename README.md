# Multiverse Archive 🦸‍♂️⚡

A modern superhero and villain database built with React and React Router that allows users to browse characters from across the multiverse, explore detailed profiles, save favorites, and send fighters into an animated Battle Arena.

The application pulls live character data from the public Superhero API and transforms it into an interactive archive experience complete with cinematic battle sequences, animated countdowns, and stat-based winner calculations.

---

## ✨ Features

- Browse hundreds of heroes and villains from Marvel, DC, and other universes
- Search characters instantly using the live search bar
- View detailed character profiles inside a responsive modal
- Save favorite characters for quick access later
- Add fighters directly into the Battle Arena
- Animated “READY... SET... FIGHT!” battle countdown system
- Automatic stat-based winner calculation using power stats
- Responsive design for desktop and mobile devices
- Smooth hover animations and cinematic UI styling

---

## 🛠️ Technologies Used

- React
- React Router DOM
- JavaScript (ES6+)
- CSS3
- Superhero API by Akabab

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── BattleCard.jsx
│   ├── BattleResult.jsx
│   ├── HeroCard.jsx
│   ├── HeroDetails.jsx
│   ├── HeroList.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Battle.jsx
│   ├── Favorites.jsx
│   └── Home.jsx
│
├── utils/
│   └── calculateWinner.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## ⚔️ Battle System

The Battle Arena compares two fighters using their power stats:

- Intelligence
- Strength
- Speed
- Durability
- Power
- Combat

Each stat is summed together to determine the overall winner. If both totals match, the fight ends in a tie.

The battle sequence includes:

1. READY...
2. SET...
3. FIGHT!
4. Clash animation
5. Winner reveal

Because every showdown deserves at least a little Saturday-morning-cartoon energy. 🌌

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/RPG-TaRon/Superhero-API.git
```

### 2. Navigate into the project folder

```bash
cd multiverse-archive
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```bash
http://localhost:5173
```

---

## 📸 Core Pages

### Home Page
Browse and search through the multiverse archive while viewing detailed character information.

### Battle Arena
Select fighters and watch animated battles unfold with stat-based winner calculations.

### Favorites
Save and manage your favorite characters for quick access and future battles.

---

## 🎨 UI & Design

The application uses a bold cinematic design featuring:

- Dark futuristic backgrounds
- Gold accent highlights
- Animated battle effects
- Responsive card layouts
- Hover glow interactions
- Mobile-friendly layouts

The styling system is fully custom-built using CSS.

---

## 🧠 Reflection

### Most Challenging Part
The most challenging part of this project was coordinating the animated battle stages and timing logic while keeping the UI responsive and the state easy to manage.

### Design Decision
I chose to centralize major application state inside `App.jsx` so fighter selections, favorites, and notifications could be shared cleanly across multiple pages using props and React Router.

---

## 🔮 Future Improvements

- Team battle mode (3v3 battles)
- Sound effects and music
- Character power scaling system
- Tournament brackets
- Dark/light anime themes
- Local storage for saved favorites
- Online multiplayer battles
- Character comparison charts

---

## Deployed Link
- https://superhero-api-sable.vercel.app/