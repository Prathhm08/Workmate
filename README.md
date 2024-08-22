# 🌟 WorkMate

WorkMate is an intuitive platform that bridges the gap between customers and skilled workers. Whether you're looking to hire a professional or offer your services, WorkMate provides a seamless experience tailored to meet the needs of both parties. With streamlined booking, detailed profiles, and robust management tools, WorkMate ensures that finding and managing work is easier than ever.

## 🚀 Features

### 👨️ Customer Interface
- **Browse Workers**: Explore profiles, reviews, and ratings of available workers.
- **Online Booking**: Securely book workers online via Stripe.
- **Profile Management**: Personalize your profile with details like gender, blood group, and profile picture.
- **Feedback & Ratings**: Provide feedback and rate workers after a job is completed, with reviews visible on their profiles.

### 👷 Worker Interface
- **Profile Approval**: Worker profiles are carefully reviewed and approved to ensure quality.
- **Booking Management**: Track bookings with details of who reserved your services and when.
- **Profile Details**: Maintain a comprehensive profile with contact info, qualifications, experience, availability, and more.

### 🔍 Additional Features
- **Find a Worker**: Easily search for workers by name to find the right fit for your needs.
- **Home Page**: Access testimonials from other users, explore services offered, view FAQs, and contact us through the dedicated section.

## 🛠️ Technologies Used

- **Frontend**: Toastify, Swiper
- **Backend**: Express, Mongoose, JWT, Stripe
- **Database**: MongoDB
- **Image Storage**: Cloudinary

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/workmate.git
   ```
2. **Install frontend dependencies:**
    ```bash
    cd workmate
    cd frontend
    npm install
    npm run start
    ```
3. **Set up environment variables in a .env.local file (VITE_CLOUD_NAME and VITE_UPLOAD_PRESET)**
    ```bash
    VITE_CLOUD_NAME = your_cloud_name
    VITE_UPLOAD_PRESET = your_preset_name
    ```
4. **Set up config.js**
    ```bash
    BASE_URL = your_backend_url
    ```
5. **Install backend dependencies:(in another terminal)**
    ```bash
    cd workmate
    cd backend
    npm install
    npm run start-dev
    ```
6. **Set up environment variables in a .env file**
    ```bash
    PORT = your_port
    MONGO_URL= your_mongodb_url
    JWT_SECRET_KEY  = your_jwt_secretkey
    STRIPE_SECRET_KEY = your_stripe_secretkey
    CLIENT_SITE_URL =  your_frontend_url
    ```

## 📢   Development & Feedback

Feel free to contribute to the development of WorkMate and share your feedback! We welcome pull requests and suggestions to improve the platform.

## 📧 Contact

For any questions or inquiries, you can reach me at [prathampriv8@gmail.com](mailto:prathampriv8@gmail.com).
