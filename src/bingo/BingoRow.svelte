<script lang="ts">
  import type { Cell } from "../models/Cell";
  import BingoCell from "./BingoCell.svelte";
  export let cells: Cell[];
  export let freeCellRow: boolean = false;
  const freeCell: Cell = {
    id: 0,
    name: 'free'
  }
  $: [firstCell, secondCell, , secondLastCell, lastCell ] = cells;
</script>

<style>
    .row {
        display: flex;
        flex-direction: row;
    }
</style>

<div class="row">
  {#if freeCellRow}
    <BingoCell cell={firstCell}></BingoCell>
    <BingoCell cell={secondCell}></BingoCell>
    <BingoCell cell={freeCell} free={true} ></BingoCell>
    <BingoCell cell={secondLastCell}></BingoCell>
    <BingoCell cell={lastCell}></BingoCell>
  {:else}
  {#each cells as cellName}
      <BingoCell cell={cellName}></BingoCell>
  {/each}
  {/if}
</div>