import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { prisma } from '$lib/prisma';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        
        console.log('Tentative de connexion pour:', email);

        if (!email || !password) {
            return fail(400, {
                error: { message: 'Email et mot de passe requis' }
            });
        }

        const user = await prisma.user.findUnique({
            where: { email: email.toString() }
        });

        if (!user || user.password !== password.toString()) {
            return fail(400, {
                error: { message: 'Email ou mot de passe incorrect' }
            });
        }

        cookies.set('session', JSON.stringify({
            userId: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }), {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30
        });

        
        redirect(302, '/');
    }
} satisfies Actions;