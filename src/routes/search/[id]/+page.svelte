<script lang="ts">
	import SearchBar from "../../../components/SearchBar.svelte";


  const categories = ['Catégorie A', 'Catégorie B', 'Catégorie C', 'Catégorie D', 'Catégorie E', 'Catégorie F',]

</script>

<div class="flex flex-col items-center">
  <SearchBar />
  <div class="w-full mt-8">
    {#each categories as categorie }
      <div class="w-full font-medium text-lg flex justify-between border-gray-300 border-[0.5px] py-4">
        <span class="ml-4">{categorie}</span>
        <span class="mr-4">></span>
      </div>
    {/each}
  </div>
  <div>

  </div>
</div>