<script lang="ts">
  import { Sprout } from '@lucide/svelte';
</script>

<a href="#home" class="brand" aria-label="Bloomé Scent home">
  <Sprout size={25} strokeWidth={1.35} aria-hidden="true" />
  <span>Bloomé <i>Scent</i></span>
</a>

<style>
  .brand { display: inline-flex; align-items: center; gap: .52rem; width: fit-content; white-space: nowrap; text-decoration: none; }
  span { font: 400 2.05rem/.9 var(--display); }
</style>
