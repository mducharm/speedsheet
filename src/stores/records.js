
import { writable } from "svelte/store";

const storedRecords = JSON.parse(localStorage.getItem("records"));

export const records = writable(storedRecords || []);

records.subscribe(value => {
    localStorage.setItem("records", JSON.stringify(value));
});