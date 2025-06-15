# Personal Book Reviews Website

A modern, responsive website for sharing book reviews, built with HTML, CSS, and JavaScript. This website is designed to be hosted on GitHub Pages.

## Features

- Clean, modern design
- Responsive layout that works on all devices
- Dynamic book review cards with star ratings
- Easy to customize and extend

## Getting Started

1. Clone this repository
2. Customize the content in `index.html`
3. Add your book reviews to the `bookReviews` array in `js/main.js`
4. Add book cover images to the `images` directory
5. Update the social media links in `index.html`
6. Deploy to GitHub Pages

## Customizing Book Reviews

To add a new book review, add an object to the `bookReviews` array in `js/main.js`:

```javascript
{
    title: "Book Title",
    author: "Author Name",
    rating: 4.5, // Rating out of 5
    date: "2024-03-20", // Format: YYYY-MM-DD
    summary: "Your review summary...",
    coverImage: "images/your-book-cover.jpg"
}
```

## Customizing Styles

The website's appearance can be customized by modifying the CSS in `styles/main.css`. The current design uses a clean, modern color scheme with:

- Primary color: #3498db (Blue)
- Secondary color: #2c3e50 (Dark Blue)
- Background colors: White and #f8f9fa (Light Gray)

## Deployment

1. Push your changes to GitHub
2. Go to your repository settings
3. Under "GitHub Pages", select the main branch as the source
4. Your website will be available at `https://yourusername.github.io/repository-name`

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the MIT License. 