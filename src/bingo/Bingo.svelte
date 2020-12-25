<script lang="ts">
  import BingoRow from './BingoRow.svelte';
  import { cells } from '../data/cellNames';
  import { CellNamesStore, UnattributedCellNamesStore} from '../stores/CellNamesStore'
  import { onDestroy, onMount } from 'svelte';
  import type { Cell } from '../models/Cell';

  const flipDurationMs = 200;


  let shuffledCellNames: Cell[];
  let firstRow: Cell[];
  let secondRow: Cell[];
  let thirdRow: Cell[];
  let fourthRow: Cell[];
  let fifthRow: Cell[];

  const unsubsribe = CellNamesStore.subscribe((value: Cell[]): void => {
    shuffledCellNames = [...value.sort(() => Math.random() - 0.5)];
    firstRow = shuffledCellNames.slice(0, 5);
    secondRow = shuffledCellNames.slice(5, 10);
    thirdRow = shuffledCellNames.slice(10, 15);
    fourthRow = shuffledCellNames.slice(15, 20);
    fifthRow = shuffledCellNames.slice(20, 25);
    UnattributedCellNamesStore.set(cells.slice(25));
  });

  function shuffle(): void {
    CellNamesStore.set(cells);
  }

  onMount((): void => {
    shuffle();
  });

  onDestroy(() => {
    unsubsribe();
  });
</script>

<style lang="scss">
  .cells {
    display: flex;
    flex-direction: column;
    border: solid 0.5px #000;
  }

  .shuffle {
    margin-top: 0.5rem;
    color: #000;
    background-color: #fce9bd;
    border: solid 1px #000;
    transition: background-color ease 250ms;

    &:hover {
      cursor: pointer;
      background-color: darken(#fce9bd, 10);
    }
  }
</style>

<div class="cells">
  <BingoRow cells={firstRow}></BingoRow>
  <BingoRow cells={secondRow}></BingoRow>
  <BingoRow cells={thirdRow} freeCellRow={true}></BingoRow>
  <BingoRow cells={fourthRow}></BingoRow>
  <BingoRow cells={fifthRow}></BingoRow>
</div>

<button class="shuffle" on:click={shuffle}>
  shuffle
</button>