<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    
    let isProfileMenuOpen = false;
    
    const toggleProfileMenu = () => {
        isProfileMenuOpen = !isProfileMenuOpen;
    };
</script>

<div class="min-h-screen bg-white">
    <!-- Navbar Desktop -->
    <nav class="hidden md:block fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="/" class="text-xl font-bold text-slate-800">
                        Logo
                    </a>
                </div>

                <!-- Navigation centrale -->
                <div class="flex items-center space-x-4">
                    <a href="/" class="px-3 py-2 text-slate-600 hover:text-blue-600">
                        Accueil
                    </a>
                    <a href="/search" class="px-3 py-2 text-slate-600 hover:text-blue-600">
                        Recherche
                    </a>
                    <button class="px-3 py-2 text-slate-600 hover:text-blue-600" aria-label="Ajouter">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>   
                    <a href="/messages" class="px-3 py-2 text-slate-600 hover:text-blue-600 relative" aria-label="Messages">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>

                <!-- Profil Desktop -->
                <div class="relative">
                    <button 
                        on:click={toggleProfileMenu}
                        class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-50"
                    >
                        <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span class="text-sm font-medium text-white">
                                {$page.data.user?.firstName?.[0].toUpperCase() ?? ''}
                            </span>
                        </div>
                        {$page.data.user?.firstName ?? ''} {$page.data.user?.lastName ?? ''}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {#if isProfileMenuOpen}
                        <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-slate-200">
                            <a href="/profile" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                                Mon profil
                            </a>
                            <a href="/settings" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                                Paramètres
                            </a>
                            <hr class="my-1 border-slate-200" />
                            <button class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50">
                                Déconnexion
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </nav>

    <!-- Contenu principal -->
    <main class="flex items-center justify-center min-h-[calc(100vh-64px)] md:pt-16">
        <div class="p-8">
            {console.log($page.data)}
            {#if $page.data.user}
                <h1 class="text-2xl font-bold">
                    Bienvenue {$page.data.user.firstName} {$page.data.user.lastName} !
                </h1>
            {:else}
                <h1>Veuillez vous connecter</h1>
            {/if}
        </div>
    </main>

    <!-- Tab Bar Mobile -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 md:hidden">
        <div class="flex justify-between items-center h-16 px-6">
            <!-- Accueil -->
            <a href="/" class="flex flex-col items-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span class="text-xs mt-1">Accueil</span>
            </a>

            <!-- Recherche -->
            <a href="/search" class="flex flex-col items-center text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span class="text-xs mt-1">Recherche</span>
            </a>

            <!-- Ajouter -->
            <a href="/add" class="flex flex-col items-center text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span class="text-xs mt-1">Ajouter</span>
            </a>

            <!-- Messages -->
            <a href="/messages" class="flex flex-col items-center text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-xs mt-1">Messages</span>
            </a>

            <!-- Profil -->
            <a href="/profile" class="flex flex-col items-center text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-xs mt-1">Profil</span>
            </a>
        </div>
    </div>
</div>