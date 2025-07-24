# Professional Portfolio Website

A fully responsive and professional portfolio website built with React, Tailwind CSS, and Node.js + Express backend with MongoDB integration.

## Features

### Frontend
- **Modern React Application** with JSX and Tailwind CSS
- **Responsive Design** that works on all devices
- **Dark/Light Mode Toggle** with smooth transitions
- **Smooth Animations** using Framer Motion
- **Professional Sections**:
  - Home/Landing Page with hero section
  - About Me with bio, skills, and achievements
  - Skills showcase with proficiency levels
  - Projects portfolio with live demos
  - Resume section with PDF download
  - Contact form with validation
  - Blog section for articles
  - Admin panel for content management

### Backend
- **RESTful API** built with Node.js and Express
- **MongoDB Integration** for data persistence
- **JWT Authentication** for admin access
- **Email Notifications** via Nodemailer
- **Contact Form Processing** with validation
- **Blog Management** with CRUD operations
- **Admin Dashboard** for managing content

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (icons)
- Axios (API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for emails
- bcrypt for password hashing

## Installation & Setup

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env file with your configuration
# Start development server
npm run dev

# Start production server
npm start
```

### Environment Variables
Create a `.env` file in the backend directory with:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
PORT=5000
```

## API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/blog` - Get published blog posts
- `GET /api/blog/:id` - Get single blog post
- `GET /api/health` - Health check

### Admin Endpoints (Authentication Required)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/contacts` - Get all contact messages
- `PATCH /api/admin/contacts/:id/read` - Mark contact as read
- `GET /api/admin/blog` - Get all blog posts (including drafts)
- `POST /api/admin/blog` - Create new blog post
- `PUT /api/admin/blog/:id` - Update blog post
- `DELETE /api/admin/blog/:id` - Delete blog post

## Admin Access

### Demo Credentials
- **Email**: admin@example.com
- **Password**: admin123

### Admin Features
- View contact form submissions
- Mark messages as read/unread
- Manage blog posts (create, edit, delete)
- View website statistics
- Dashboard with analytics

## Deployment

### Frontend (Vercel/Netlify)
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

### Backend (Render/Heroku)
```bash
# For Render
# Connect your GitHub repository
# Set environment variables in Render dashboard
# Deploy automatically on push

# For Heroku
heroku create your-app-name
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-secret
git push heroku main
```

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get the connection string
4. Update `MONGODB_URI` in your environment variables

## Customization

### Styling
- Edit `tailwind.config.js` for custom colors and themes
- Modify component styles in individual JSX files
- Add custom CSS in `src/index.css`

### Content
- Update personal information in component files
- Replace placeholder images with your own
- Modify project data in `src/pages/Projects.jsx`
- Update skills and proficiencies in `src/pages/Skills.jsx`

### Features
- Add new pages by creating components and routes
- Extend API with additional endpoints
- Add new database models as needed
- Implement additional authentication providers

## Performance Optimizations

- **Lazy Loading**: Components are optimized for performance
- **Image Optimization**: Uses WebP format where possible
- **Code Splitting**: Automatic with Vite bundler
- **Caching**: API responses can be cached
- **SEO**: Meta tags and semantic HTML structure

## Security Features

- **Input Validation**: All forms validate input
- **JWT Authentication**: Secure admin access
- **CORS Protection**: Configured for security
- **Rate Limiting**: Can be added for API protection
- **Password Hashing**: bcrypt for secure passwords

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).