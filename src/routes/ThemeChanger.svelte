<script lang="ts">
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  onMount(() => themeChange(false));

  function toggleTheme(event: MouseEvent) {
    event.preventDefault();
    console.log(event.currentTarget);
    const btn = event.currentTarget as HTMLButtonElement;
    const checked = btn.classList.contains("chkd");
    if (checked) {
      btn.style.setProperty("--handleoffsetcalculator", "calc(var(--handleoffset) * -1)");
      btn.classList.remove("chkd");
    } else {
      btn.classList.add("chkd");
      btn.style.setProperty("--handleoffsetcalculator", "var(--handleoffset)");
    }
  }
</script>

<button
  data-toggle-theme="business,corporate"
  class="border border-base-content p-1 w-16 h-8 rounded-full tgl"
  on:click={toggleTheme}
>
  <div class="flex items-center justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="swap-off inline-block w-5 h-5 fill-current"
      ><path
        d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"
      /></svg
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="swap-on inline-block w-5 h-5 fill-current"
      ><path
        d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
      /></svg
    >
  </div>
</button>

<style>
  .tgl {
    --tglbg: hsl(var(--b2));
    --handleoffset: 2rem;
    --handleoffsetcalculator: calc(var(--handleoffset) * -1);
    --togglehandleborder: 0 0;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 1;
    background-color: hsl(var(--bc) / var(--tw-bg-opacity));
    --tw-bg-opacity: 1;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition: background, box-shadow 0.2s ease-in-out;
    box-shadow: var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset,
      var(--togglehandleborder);
  }
  .tgl:focus-visible {
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    outline-color: hsl(var(--bc) / 0.2);
  }
</style>
