<script lang="ts">
    export let cellName: string;
    export let free: boolean = false;
</script>

<style>
    .cell {
      display: flex;
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
    }

    .-free {
      background-color: #fff;
    }
</style>

<div class="cell" class:-free={free}>
  { cellName }
</div>

<!-- markup (zero or more items) goes here -->