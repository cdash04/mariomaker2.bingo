<script lang="ts">
  import BingoCell from "./BingoCell.svelte";
  import BingoRow from "./BingoRow.svelte";
  let cellNames: string[] = [
    'enemy spam',
    'sound effects everywhere',
    'tech level',
    'pick a door/pipe',
    'bring yoshie to the goal',
  ]

  
</script>

<style>
  .cells {
    display: flex;
    flex-direction: column;
    border: solid 0.5px #000;
  }
</style>

<div class="cells">
  <BingoRow cellNames={cellNames}></BingoRow>
  <BingoRow cellNames={cellNames}></BingoRow>
  <BingoRow cellNames={cellNames} freeCellRow={true}></BingoRow>
  <BingoRow cellNames={cellNames}></BingoRow>
  <BingoRow cellNames={cellNames}></BingoRow>
</div>