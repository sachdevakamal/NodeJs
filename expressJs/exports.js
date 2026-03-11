// export default function homePage() {
//     return "<h1>Home Page</h1>";
// }

// export function aboutPage() {
//     return "<h1>About Page</h1>";
// }

// export function contactPage() {
//     return "<h1>Contact Page</h1>";
// }

// export default function homePage() {
//     return "<h1>Home Page</h1> <a href='/login'>Login</a>";
// }

// export function loginPage() {
//     return `<form action="/submit" method="post">
//         <input type="text" name="username" placeholder="Username" required>
//         <input type="password" name="password" placeholder="Password" required>
//         <button type="submit">Login</button>
//     </form>
//     <br><a href="/">Back to Home</a>`;
// }

// export function submitPage() {
//     return "<h1>Data Submitted</h1>";
// }   
import path from 'path';
export function absolutePath() {
    const absolutePath = path.resolve('html_files');
    return absolutePath;
}

export function publicPath() {
    const publicPath = path.resolve('css_files');
    return publicPath;
}