<script lang="ts">
  import Icon from 'svelte-awesome';
  import { refresh } from 'svelte-awesome/icons';
  import { UnattributedCellNamesStore } from '../stores/CellNamesStore';
  export let cellName: string;
  export let free: boolean = false;

  let unattributedCellNames: string[];

  UnattributedCellNamesStore.subscribe((value) => {
    unattributedCellNames = value;
  });

  function changeCellName(currentCellName: string): void {
    const [ newCellName, ...rest ] = [...unattributedCellNames.sort(() => Math.random() - 0.5)];
    cellName = newCellName;
    UnattributedCellNamesStore.set([...rest, currentCellName]);
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
    <div class="actions" on:click={() => changeCellName(cellName)}>
      <Icon data={refresh} spin/>
    </div>
  {/if}
  { cellName }
</div>

<!-- markup (zero or more items) goes here -->