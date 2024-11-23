<script lang="ts">
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

    type CustomActionData = ActionData & {
        email?: string;
        error?: string;
    };

    export let form: CustomActionData;
    let isLoading = false;
    let showNotification = false;

    $: if (form) {
        showNotification = true;
        setTimeout(() => showNotification = false, 3000); // Cache la notification après 3s
    }
</script>

{#if showNotification && form}
    <div
        transition:fade
        class="fixed top-4 right-4 left-4 md:left-auto md:w-96 p-4 rounded-lg shadow-lg {form.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}"
        role="alert"
    >
        {#if form.error}
            {form.error}
        {:else}
            Connexion réussie !
        {/if}
    </div>
{/if}

<div class="min-h-screen bg-slate-50">
    <header class="w-full p-4 bg-white shadow-sm md:hidden">
        <div class="flex items-center justify-between">
            <button class="p-2" aria-label="Retour">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            <h1 class="text-lg font-semibold text-slate-800">Connexion</h1>
            <div class="w-8"></div>
        </div>
    </header>

    <main class="px-4 pt-6 pb-16 mx-auto max-w-md md:pt-16 lg:pt-20">
        <div class="hidden md:block text-center mb-10">
            <h1 class="text-2xl font-bold text-slate-800 lg:text-3xl">Bienvenue</h1>
            <p class="mt-2 text-slate-600">Connectez-vous à votre compte</p>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm md:p-8 md:shadow-md">
            {#if form?.error}
                <div class="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
                    {form.error}
                </div>
            {/if}

            <form 
    method="POST" 
    use:enhance={({ }) => {
        isLoading = true;
        
        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                window.location.href = result.location;
                return;
            }
            
            await update();
            isLoading = false;
        };
    }}
    class="space-y-4"
>
                <div>
                    <label for="email" class="block mb-1.5 text-sm font-medium text-slate-700">
                        Adresse email
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form?.email ?? ''}
                            required
                            class="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="nom@exemple.com"
                        />
                    </div>
                </div>

                <div>
                    <label for="password" class="block mb-1.5 text-sm font-medium text-slate-700">
                        Mot de passe
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            class="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between pt-2">
                    <label class="flex items-center">
                        <input
                            type="checkbox"
                            name="remember"
                            class="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                        />
                        <span class="ml-2 text-sm text-slate-600">Se souvenir de moi</span>
                    </label>
                    <a href="/reset-password" class="text-sm font-medium text-blue-500 hover:text-blue-600">
                        Mot de passe oublié ?
                    </a>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    class="relative w-full mt-6 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {#if isLoading}
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span>
                    {/if}
                    <span>{isLoading ? 'Connexion...' : 'Se connecter'}</span>
                </button>
            </form>

            <div class="mt-6 text-center">
                <p class="text-sm text-slate-600">
                    Pas encore de compte ?
                    <a href="/register" class="font-medium text-blue-500 hover:text-blue-600">
                        Créer un compte
                    </a>
                </p>
            </div>
        </div>

        <p class="mt-8 text-center text-sm text-slate-500 px-4">
            En vous connectant, vous acceptez nos
            <a href="/terms" class="text-blue-500 hover:text-blue-600">conditions d'utilisation</a>
            et notre
            <a href="/privacy" class="text-blue-500 hover:text-blue-600">politique de confidentialité</a>
        </p>
    </main>
</div>