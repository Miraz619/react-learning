# 📚 BookHub - React Router Learning Project

A simple **Book Store application** built with React Router v7 to learn routing, state management, and localStorage.

## 🔗 Live Demo

**[View Live](https://bookverse32.netlify.app/)**

## ✨ Features

- Browse books from JSON data
- Add books to **Read List** or **Wishlist**
- Sort by pages and ratings
- Data persists using localStorage
- Responsive navbar and tab-based UI

## 🛠️ Technologies

- React 19 + React Router 7
- Tailwind CSS + DaisyUI
- React Tabs + React Icons
- Vite

## 🚀 Quick Start

```bash
npm install
npm run dev       # Runs on http://localhost:5173
npm run build     # Build for production
```

## 📌 Key Concepts


### Sorting Implementation

- Sorting uses direct state updates in onClick handlers

### Data Storage

- **localStorage**: Persists read list and wishlist between sessions
- **State**: Manages temporary data like sorted books during the session

## 📂 Project Structure

- `src/Pages/` - Home, BookDetails, ReadList, WishList pages
- `src/Components/` - Navbar, Banner, Book cards, Footer
- `src/Router/` - Route configuration with loaders
- `src/utility/` - localStorage helper functions
- `public/booksData.json` - Book data source
