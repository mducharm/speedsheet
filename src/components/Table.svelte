<script>
  import { records } from "../stores/records";
  import { fields } from "../stores/fields";
</script>

<div class="flex flex-col items-center h-screen w-full bg-teal-lighter">
  <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
    <thead>
      <tr class="text-left border-b-2 border-gray-300">
        {#each $fields as field}
          <th class="px-4 py-3">{field.name}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each $records as record}
        <tr class="bg-gray-100 border-b border-gray-200">
          <td class="px-4 py-3" />
        </tr>
      {/each}
    </tbody>
  </table>

  {#if $records.length === 0}
    <div>No data</div>
  {/if}
</div>
