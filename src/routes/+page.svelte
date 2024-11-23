<script lang="ts">
    import { page } from '$app/stores';
    import TabBar from '$lib/components/TabBar.svelte';
    
    export let data;

    $: favoriteItems = data.favoriteItems;
    
    // Données fictives pour les plus utilisés
    const mostUsedItems = [
        {
            id: 1,
            name: 'airfryer',
            type: 'Cuisine',
            image: '/images/air.avif',
            usageCount: 15
        },
        {
            id: 2,
            name: 'scanner',
            type: 'Bureau',
            image: '/images/scan.avif',
            usageCount: 12
        },
        {
            id: 3,
            name: 'aspirateur',
            type: 'Entretien',
            image: '/images/aspirateur.avif',
            usageCount: 10
        },
        {
            id: 4,
            name: 'perceuse',
            type: 'Bricolage',
            image: '/images/perceuse.jpg',
            usageCount: 8
        }
    ];
</script>

<div class="px-4 py-2 mb-16 bg-[#F8F9FF]">
    <!-- Barre de recherche -->
    <div class="fixed top-0 left-0 right-0 bg-white px-4 py-2 z-10">
        <div class="relative">
            <input
                type="text"
                placeholder="Search"
                class="w-full px-4 py-2 bg-gray-100 rounded-full pl-10"
            />
            <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    </div>

    <!-- Stats -->
    <div class="mt-16 grid grid-cols-2 gap-4 mb-6">
        <div class="bg-blue-50 p-4 rounded-xl">
            <div class="text-2xl font-bold">22.5 l</div>
            <div class="text-sm text-gray-600">Consommation d'eau bleue évitée</div>
        </div>
        <div class="bg-green-50 p-4 rounded-xl">
            <div class="text-2xl font-bold">1.5 kgCO2e</div>
            <div class="text-sm text-gray-600">Émissions de gaz à effet de serre évitées</div>
        </div>
    </div>

    <!-- Appareils favoris -->
    <div class="mb-6">
        <h2 class="text-xl font-bold mb-4">Mes appareils favoris</h2>
        <div class="flex overflow-x-auto space-x-4 no-scrollbar">
            {#if favoriteItems.length > 0}
                {#each favoriteItems as item}
                    <div class="flex-none w-36">
                        <div class="bg-white rounded-lg shadow-sm">
                            <img
                                src={item.image}
                                alt={item.name}
                                class="w-full h-32 object-cover rounded-t-lg"
                            />
                            <div class="p-2">
                                <h3 class="text-sm font-normal">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                {/each}
            {:else}
                <div class="w-full text-center text-gray-500">
                    Aucun appareil favori pour le moment
                </div>
            {/if}
        </div>
    </div>

    <!-- Les + utilisés -->
    <div>
        <h2 class="text-xl font-bold mb-4">Les + utilisés</h2>
        <div class="flex overflow-x-auto space-x-4 no-scrollbar">
            {#each mostUsedItems as item}
                <div class="flex-none w-36">
                    <div class="bg-white rounded-lg shadow-sm">
                        <img
                            src={item.image}
                            alt={item.name}
                            class="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div class="p-2">
                            <h3 class="text-sm font-normal">{item.name}</h3>
                            <p class="text-xs text-gray-500">{item.type}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>

<TabBar />