import { redirect, type Handle } from '@sveltejs/kit';

const protectedRoutes = ['/messages', '/profile', '/settings', '/add', '/search'];

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    console.log("session", session);    

    if (session) {
        try {
            const user = JSON.parse(session);
            // Rend l'utilisateur disponible dans event.locals
            event.locals.user = user;
            console.log('User in session:', user);
        } catch (error) {
            console.error('Error parsing session:', error);
        }
    }


    const isProtectedRoute = protectedRoutes.some(route => 
        event.url.pathname.startsWith(route)
    );

    if (isProtectedRoute && !event.locals.user) {
        throw redirect(302, '/login');
    }

    return resolve(event);
};