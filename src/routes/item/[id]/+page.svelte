<script lang="ts">
	import type { Item, User } from "@prisma/client";
  const imgSrc = "https://s3-alpha-sig.figma.com/img/3d9c/c43d/c74e0700da624d7f403073a62cb6c4ad?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qIYI80~sDtP4nF1DV6c0mzA7FmJzvFpvy1vfrKkYHKYbtkrvVa2GLiiADbUgLiLcHZkC7UZTraL16~TicLYfMPFKvKfsWlvm1yrmD0WrYQHUCC2ZPfr3J~5~zdPUQbJp-tZ31oO~QD8T0NNd5pclqxML8IP8181Mc97VwsgaBmcOIr3izTZNI8lg-f3-4tIGJdD0jkKKbNXRRpei6khsU7V8TL5RKgrUxzXE7PGpx-zVRyB8OTY~wPCsSxTqssSUHS-skTEgVrMSU2unrjRxTBqTvOYze3nkeo8agybz6KerXFxf8nZUhrCs~ZDtsz8QmoZNCttiOjhs1b6WIb~1ag__" 
  const { data } = $props() as { data: { item: Item, owner: User, items: Item[] }}
  function goBack () {
    window.history.back()
  }
</script>
<div class="h-screen w-full flex flex-col space-y-4">
  <div class="h-[30%] flex justify-start self-start bg-black w-full overflow-hidden">
    <div class="absolute flex justify-between w-[90%] mx-4 mt-4">
      <p class="text-transparent">t</p>
      <div class="bg-white rounded-full w-10 h-10 flex justify-center items-center" onclick={goBack}>
        <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" /> <!-- Tige horizontale -->
          <polyline points="12 5 5 12 12 19" /> <!-- Pointe de la flèche -->
        </svg>
      </div>
      <div class="absolute bg-white rounded-full w-10 h-10 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21s-6-4.35-9-8.28C1.67 10.07 3.27 5.5 7.5 5.5c2.54 0 4.5 2 4.5 2s1.96-2 4.5-2c4.23 0 5.83 4.57 4.5 7.22C18 16.65 12 21 12 21z"/>
        </svg>
      </div>
    </div>
    <img src={imgSrc} alt="imprimante" class="w-full h-[250px]"/>
  </div>
  <div class="flex ml-4 justify-between flex-col">
      <h1 class="font-semibold text-xl">{ data.item.name }</h1>
      <div class="mt-2 text-gray-500 text-[11px]">de {data.owner.firstName} {data.owner.address}</div>
  </div>
  <div class="bg-green-100 rounded-full flex items-center py-1 px-1 justify-start self-start ml-4">
    <div class="w-1 h-1 bg-green-700 rounded-full mx-1"></div>
    <p class="text-xs text-green-700 font-semibold">Disponible dès aujourd'hui</p>
  </div>
  <div class="mx-4">
    <p class="text-lg font-light">{data.item.description}</p>
  </div>
  <button class="rounded-lg border bg-black text-white py-3 w-fit px-7 self-center font-medium ">Réserver cette appareil</button>
  <!-- <div class="mb-6">
    <h2 class="text-xl font-bold mb-4">Appareils similaires</h2>
    <div class="flex overflow-x-auto space-x-4 no-scrollbar">
        {#each data.items as item}
            <div class="flex-none w-64">
                <div class="bg-white rounded-lg shadow">
                    <img
                        src={item.image}
                        alt={item.name}
                        class="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div class="p-4">
                        <h3 class="font-semibold">{item.name}</h3>
                        <p class="text-sm text-gray-600">{item.description}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
  </div> -->
</div>
<style>
  
</style>