<script lang="ts">
  import { page } from "$app/stores";
  let input: HTMLInputElement

  async function searchRequest (str: string) {
    let query = new URLSearchParams($page.url.searchParams.toString());
    query.set('search', str)
    await fetch('/search').then(res => res.json()).then(console.log)
  }

  let timeoutId = $state<number>()

  function debounce (event: { target: HTMLInputElement }) {
    const value = event.target.value
    if (value.length < 3 && value.length !== 0) return
    if (timeoutId) window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      searchRequest(event.target.value).then(console.log)
    }, 750)
  }
</script>

<input bind:this={input} oninput={debounce} class="search-input w-11/12 mt-4 rounded-lg" placeholder="search" />
<style>
  .search-input {
    padding: 10px 10px 10px 35px; /* Espacement pour la loupe */
    border: 1px solid #ccc;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" color="gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="16" y1="16" x2="22" y2="22"></line></svg>') no-repeat 10px center;
    background-size: 20px 20px; /* Ajuste la taille de l'icône */
  }
</style>