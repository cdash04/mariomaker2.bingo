<script lang="ts">
  import Icon from 'svelte-awesome';
  import { refresh } from 'svelte-awesome/icons';
  import type { Cell } from '../models/Cell';
  import { UnattributedCellNamesStore } from '../stores/CellNamesStore';
  export let cell: Cell;
  export let free: boolean = false;

  let unattributedCellNames: Cell[];

  UnattributedCellNamesStore.subscribe((value) => {
    unattributedCellNames = value;
  });

  function changeCellName(currentCell: Cell): void {
    const [ newCell, ...rest ] = [...unattributedCellNames.sort(() => Math.random() - 0.5)];
    cell = newCell;
    UnattributedCellNamesStore.set([...rest, currentCell]);
  }
</script>

<style lang="scss">
    .cell {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fce9bd;
      border: solid 0.5px #000;
      color: #000;
      text-transform: uppercase;
      font-size: 1.3rem;
      padding: 1rem;
      width: 8rem;
      height: 8rem;
      transition: background-color ease 250ms;

      &:hover {
        background-color: darken(#fce9bd, 15);
        cursor: pointer;

        .actions {
          display: flex;
          position: absolute;
        }
      }

      &.-free {
        cursor: auto;
        background-color: #fff;
      }

      .actions {
        display: none;
        position: absolute;
        margin: 0.25rem;
        right: 0;
        top: 0;
      }
    }

</style>

<div class="cell" class:-free={free}>
  {#if !free}
    <div class="actions" on:click={() => changeCellName(cell)}>
      <Icon data={refresh} spin/>
    </div>
  {/if}
  { cell?.name }
</div>

<!-- markup (zero or more items) goes here -->