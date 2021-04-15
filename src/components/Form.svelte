<script>
  import { fields } from "../stores/fields";
  import EditForm from "./EditForm.svelte";
</script>

<div class="flex items-center h-screen w-full bg-teal-lighter">
  <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:mx-auto md:w-1/2">
    <form
      class="mb-4 md:flex md:flex-wrap md:justify-between"
      action="/"
      method="post"
    >

      {#each $fields as field}
        <div class="flex flex-col mb-4 md:w-full">
          <label
            class="mb-2 uppercase font-bold text-lg text-grey-darkest"
            for={field.name}>{field.name}</label
          >
          <input type={field.type} class="border py-2 px-3 text-grey-darkest" />
        </div>
      {/each}
      <button
        class="block bg-teal hover:bg-teal-dark text-black mx-auto p-4 rounded"
        type="submit">Submit</button
      >
    </form>
  </div>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
