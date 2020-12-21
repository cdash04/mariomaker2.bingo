<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { cellNames } from '../data/cellNames';
  import BingoRow from './BingoRow.svelte';
  import { CellNamesStore, UnattributedCellNamesStore} from '../stores/CellNamesStore'


  let firstRow: string[];
  let secondRow: string[];
  let thirdRow: string[];
  let fourthRow: string[];
  let fifthRow: string[];
  let unattributedCellNames: string[];

  const unsubsribe = CellNamesStore.subscribe((value: string[]): void => {
    const shuffledCellNames = [...cellNames.sort(() => Math.random() - 0.5)];
    firstRow = shuffledCellNames.slice(0, 5);
    secondRow = shuffledCellNames.slice(5, 10);
    thirdRow = shuffledCellNames.slice(10, 15);
    fourthRow = shuffledCellNames.slice(15, 20);
    fifthRow = shuffledCellNames.slice(20, 25);
    UnattributedCellNamesStore.set(cellNames.slice(25));
  });

  function shuffle(): void {
    CellNamesStore.set(cellNames);
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
  <BingoRow cellNames={firstRow}></BingoRow>
  <BingoRow cellNames={secondRow}></BingoRow>
  <BingoRow cellNames={thirdRow} freeCellRow={true}></BingoRow>
  <BingoRow cellNames={fourthRow}></BingoRow>
  <BingoRow cellNames={fifthRow}></BingoRow>
</div>

<button class="shuffle" on:click={shuffle}>
  shuffle
</button>