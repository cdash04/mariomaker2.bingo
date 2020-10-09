<script lang="ts">
  import BingoRow from "./BingoRow.svelte";
  const cellNames: string[] = [
    'enemy spam',
    'sound effects everywhere',
    'tech level',
    'pick a door/pipe',
    'bring yoshie to the goal',
    '1-1 remake',
    'collect all coins',
    'music level',
    'softlock with no way of dying',
    'infinite fire flower boss fight',
    'enemy spam (with star)',
    'themed after another game',
    'kaizo clocks',
    'level can be cheesed',
    'auto mario level',
    '"first level" in title',
    'Meowser or boom-boom',
    'title level',
    'terribly named level',
    'kills mario at the start',
    'on/off blocks',
    'Little timmy level',
    'Japanese speedrun',
    'refreshing level',
    'straight path to the goal',
    'water level',
    'dev path/item',
    'Waiting',
    '#DGR level',
    'level made for someone else',
    'naked pipe',
    'multiplayer',
  ]

  let shuffledCellNames = [...cellNames.sort(() => Math.random() - 0.5)];

  $: firstRow = shuffledCellNames.splice(0, 5);
  $: secondRow = shuffledCellNames.splice(0, 5);
  $: thirdRow = shuffledCellNames.splice(0, 5);
  $: fourthRow = shuffledCellNames.splice(0, 5);
  $: fifthRow = shuffledCellNames.splice(0, 5);

  function shuffle(): void {
    shuffledCellNames = [...cellNames.sort(() => Math.random() - 0.5)];
  }


</script>

<style>
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