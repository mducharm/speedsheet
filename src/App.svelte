<script>
  import EditForm from "./components/EditForm.svelte";
  import Form from "./components/Form.svelte";
  import Table from "./components/Table.svelte";

  function exportCsv() {

	const rows = [
    ["name1", "city1", "some other info"],
    ["name2", "city2", "more info"]
];

	let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

	var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
  }
</script>

<!--Nav-->
<nav class="bg-gray-800 p-2 mt-0 w-full">
  <div class="container mx-auto flex flex-wrap items-center">
    <div
      class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold"
    >
      <h1
        class="text-white no-underline hover:text-white hover:no-underline"
      >
        <span class="text-2xl pl-2">
          <i class="em em-grinning">
            <img
              src="five.png"
              alt=""
              class="inline object-cover w-16 h-16 mr-2"
            />
          </i> SpeedSheet
        </span>
      </h1>
    </div>
    <div
      class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"
    >
      <ul
        class="list-reset flex justify-between flex-1 md:flex-none items-center"
      >
        <li class="mr-3">
			<EditForm></EditForm>
        </li>
        <li class="mr-3">
			<button 
				class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				on:click={exportCsv}
			>Export</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div>
  <Form />
  <Table />
</div>

<style global lang="postcss">
  body {
    margin: 0px;
    padding: 0px;
  }
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
