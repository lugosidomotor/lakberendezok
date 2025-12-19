# Lakberendezők.com

Modern lakberendező platform.

## Struktúra

```
lakberendezok.com/
├── index.html              # Főoldal
├── lakberendezok.html      # Lakberendezők listája
├── lakberendezo.html       # Lakberendező részletes oldal
├── blog.html               # Blog lista
├── css/style.css           # Stílusok
├── js/
│   ├── data.js             # Adatok (lakberendezők + blog posztok)
│   └── main.js             # Funkcionalitás
└── blog/[év]/[hónap]/      # Blog posztok
```

## Új Blogposzt Hozzáadása

1. Másold egy meglévő HTML-t a `blog/[év]/[hónap]/[slug].html` mappába
2. Add hozzá a `js/data.js` `blogPosts` tömb ELEJÉRE:

```javascript
{
    id: "2025-01-uj-cikk",
    title: "Cím",
    excerpt: "Rövid leírás...",
    category: "Trendek",
    date: "2025-01-15",
    author: "Szerző",
    image: "https://images.unsplash.com/photo-xxx?w=800&q=80",
    path: "blog/2025/01/uj-cikk.html"
}
```

## Új Lakberendező Hozzáadása

Add hozzá a `js/data.js` `designers` tömbjéhez - lásd a meglévő példákat.

## Képek

Unsplash képeket használunk, URL formátumban: `https://images.unsplash.com/photo-xxx?w=800&q=80`