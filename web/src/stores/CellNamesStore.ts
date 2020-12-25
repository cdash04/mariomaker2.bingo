import { Writable, writable } from 'svelte/store';
import type { Cell } from '../models/Cell';

export const CellNamesStore: Writable<Cell[]> = writable<Cell[]>([])
export const UnattributedCellNamesStore: Writable<Cell[]> = writable<Cell[]>([])
