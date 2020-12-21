import { Writable, writable } from 'svelte/store';

export const CellNamesStore: Writable<string[]> = writable<string[]>([])
export const UnattributedCellNamesStore: Writable<string[]> = writable<string[]>([])
