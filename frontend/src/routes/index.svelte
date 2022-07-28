<script lang="ts">
  import { Greet } from '$lib/wailsjs/go/main/App'
  let name = ''
  let g: Promise<string>|null = null

  function onClick() {
    if (name == '') {
      g = null
    } else {
      g = Greet(name)
    }
  }
</script>

<h1>Welcome to SvelteKit</h1>

<div>Please enter your name below 👇</div>
<input type="text" bind:value={name}/> <button on:click={onClick}>Great</button>

<div>
  {#if g}
    {#await g}
      loading
    {:then value }
      { value }
    {/await}
  {/if}
</div>

<div>
  <a href="/about">About</a>
</div>
