<script lang="ts">
  import { Greet } from '$lib/wailsjs/go/main/App'
  let x = 30
  let g = Greet('foo')
</script>

<h1>Welcome to SvelteKit a b</h1>

{ x + 3.5 }

<div>
  {#await g}
    loading
  {:then value }
    { value }
  {/await}
</div>
