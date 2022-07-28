<script lang="ts">
  import { Greet } from '$lib/wailsjs/go/main/App'
  let g = Greet('foo')
</script>

<h1>Welcome to SvelteKit a b</h1>

<div>
  {#await g}
    loading
  {:then value }
    { value }
  {/await}
</div>
