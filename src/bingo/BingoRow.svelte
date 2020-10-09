<script lang="ts">
  import BingoCell from "./BingoCell.svelte";
  export let cellNames: string[];
  export let freeCellRow: boolean = false;
  let firstCell: string, secondCell: string, secondLastCell: string, lastCell: string;

  if (freeCellRow) {
    [firstCell, secondCell, , secondLastCell, lastCell ] = cellNames;
  }
</script>

<style>
    .row {
        display: flex;
        flex-direction: row;
    }
</style>

<div class="row">
  {#if freeCellRow}
    <BingoCell cellName={firstCell}></BingoCell>
    <BingoCell cellName={secondCell}></BingoCell>
    <BingoCell cellName={'free'} free={true} ></BingoCell>
    <BingoCell cellName={secondLastCell}></BingoCell>
    <BingoCell cellName={lastCell}></BingoCell>
  {:else}
    {#each cellNames as cellName}
        <BingoCell cellName={cellName}></BingoCell>
    {/each}
  {/if}
</div>