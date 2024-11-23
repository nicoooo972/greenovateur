export function load({ locals }: { locals: { user: any } }) {
    return {
        user: locals.user
    };
}