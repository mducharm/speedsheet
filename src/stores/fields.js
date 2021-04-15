import { writable } from "svelte/store";

const storedFields = JSON.parse(localStorage.getItem("fields"));

export const fields = writable(storedFields || []);

fields.subscribe(value => {
    localStorage.setItem("fields", JSON.stringify(value));
});