<script>
  import { fields } from "../stores/fields";
  import EditForm from "./EditForm.svelte";
</script>

<div class="flex items-center h-screen w-full bg-teal-lighter">

    <!-- <EditForm /> -->
    
    <form class="mb-6 px-9">
        {#each $fields as field}
        <div class="flex flex-col mb-4">
            <label
            class="mb-2 font-bold text-lg text-grey-darkest"
            for={field.name}>{field.name}</label
            >
            <input type={field.type} class="border py-2 px-3 text-grey-darkest" />
        </div>
        {/each}
        <button type="submit"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >Submit</button>
    </form>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
