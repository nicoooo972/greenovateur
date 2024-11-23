declare global {
    namespace App {
        interface Locals {
            user: {
                userId: number;
                email: string;
                firstName: string;
                lastName: string;
            } | null;
        }
    }
}

export {};