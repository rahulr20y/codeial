
const development ={
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: 'codeial69',
            pass: 'codeial@123'
        }
    },
    google_client_id: "407148742436-la8u01ubvmbdpvant5kh4a58tkitchmc.apps.googleusercontent.com",
    google_client_secret: "h2GONoYY4j4ix0vZvisQdWl9",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial'
}

const production = {
    name: 'production'
}

module.exports = development;