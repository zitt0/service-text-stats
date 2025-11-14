# Text Statistics Service

Your task is to implement a small HTTP endpoint in **Node.js** using the **Koa.js** framework.

This challenge is designed to evaluate your ability to structure a small service, handle input validation, and produce clean, maintainable code.

---

## 🚀 Goal

Create a **POST** endpoint:

```
POST /text/stats
```

The endpoint receives a JSON payload containing a `"text"` field and returns basic statistics about the text.

---

## 📥 Input

**Request body (JSON):**

```json
{
  "text": "your string here"
}
```

---

## 📤 Output

Return a JSON response with the following fields:

```json
{
  "wordCount": number,
  "characterCount": number,
  "mostCommonWord": string
}
```

### Definitions

- **wordCount** — number of whitespace-separated words
- **characterCount** — total number of characters (including spaces)
- **mostCommonWord** — the word that appears most frequently

  - Case-insensitive
  - If no valid words exist, return `null`

---

## 🧪 Requirements

Your implementation should:

- Validate inputs (e.g., missing or non-string `"text"` field)
- Return appropriate HTTP status codes

---

## ▶️ Running Your Service

```bash
npm install
npm start
```

---

## 💬 Questions?

If anything is unclear, feel free to ask during the interview.

---
