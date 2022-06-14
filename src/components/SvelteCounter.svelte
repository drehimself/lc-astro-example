<script>
  export let title;
  let count = 0;
</script>

<div>
  <h2>{title}</h2>
  <div class="space-x-4">
    <button on:click={() => count--} class="px-4 py-2 bg-blue-500 text-white">
      -
    </button>
    <button on:click={() => count++} class="px-4 py-2 bg-blue-500 text-white">
      +
    </button>
    <span>{count}</span>
  </div>
</div>
