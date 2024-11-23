import type { Handle } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'

interface User extends JwtPayload {
    id: string
    email: string
}

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined in environment variables')
}



export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('auth_token')

    if (token) {
        try {
            // Assurons-nous que JWT_SECRET est une string
            const user = jwt.verify(token, JWT_SECRET as string) as User
            event.locals.user = user
        } catch {
            event.cookies.delete('auth_token', { path: '/' })
        }
    }

    return resolve(event)
}

declare global {
    namespace App {
        interface Locals {
            user: { id: string; email: string; } | null
        }
    }
}