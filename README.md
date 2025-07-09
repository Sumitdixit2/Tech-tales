```markdown
# 🚀 Tech Tales - Blog Website

Tech Tales is a modern and responsive blog website built with **React** and **Tailwind CSS**, using **Appwrite** as the backend-as-a-service platform. It's designed for developers, tech writers, and enthusiasts who want to share or explore posts on web development, programming, and other tech-related topics.

---

## 🌐 Live Demo

https://tech-tales-gamma.vercel.app/

---

## 📸 Screenshots

![Screenshot 2025-07-08 134942](https://github.com/user-attachments/assets/c3b0d399-0712-4056-83bc-d8099e3f63e9)

---

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS 
- **Routing**: React Router DOM
- **Backend**: Appwrite (Database, Storage, Authentication)
- **Deployment**: Vercel

---

## 🚀 Features

- 🔐 User authentication (login/signup/logout)
- 📝 Create, edit, delete blog posts
- 🖼 Upload and display featured images
- 🧾 Rich HTML content rendering using `html-react-parser`
- 📱 Responsive design for all devices
- 🔍 Home-page search bar to filter posts
- ⚡ Fast and modern UI

---

## 📁 Folder Structure

```

Tech-tales/
├── public/
├── src/
│   ├── appwrite/       # Appwrite configuration
│   ├── components/     # Reusable components (Navbar, Footer, PostCard, etc.)
│   ├── pages/          # Home, Post, Create Post, Edit Post, etc.
│   ├── context/        # Auth context provider
│   ├── App.jsx
│   └── main.jsx
├── .env                # Appwrite credentials
├── package.json
└── README.md

````

---

## 🛠️ Installation

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Sumitdixit2/Tech-tales.git
cd Tech-tales
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root and add your Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

> Get these values from your [Appwrite Console](https://console.appwrite.io/)

### 4. Start the development server

```bash
npm run dev
```

---

## 📖 How to Use

* ✨ Visit the homepage to browse all blog posts
* ✍️ Log in to create your own blog posts with a featured image
* 🗑 Edit or delete your posts anytime

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve something, fix a bug, or suggest a feature:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📬 Contact

**Sumit Dixit**
📧 [sumitdixit00007@gmail.com](mailto:sumitdixit00007@gmail.com)
📎 [LinkedIn](https://www.linkedin.com/in/sumit-dixit-2b1b01322/)
📎 [GitHub](https://github.com/Sumitdixit2)

---

> Made with ❤️ using React and Appwrite
