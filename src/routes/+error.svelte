<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center justify-center h-screen gap-2">
  <h1 class="text-4xl font-bold">{$page.status}: {$page.error?.message}</h1>
  <a href="/" class="btn btn-primary">Go Home</a>
</div>
