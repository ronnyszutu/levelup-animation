import { writable } from "svelte/store";

export const alert = writable({
    text: "WARNING",
    isActive: false,
})