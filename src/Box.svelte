<script>
    import { drag } from './drag';
    import { fade } from 'svelte/transition';

    let isVisible = true;

    function handleDragStop(e) {
        if(e.detail.x > 300) {
            isVisible = false;
        }
    }
</script>

<!-- <div use:drag={{direction: 'y',}} class="box" /> -->
<!-- <div use:drag={{direction: 'x',}} class="box" /> -->
<!-- <div use:drag class="box" /> -->

{#if isVisible}
     <div 
        transition:fade
         use:drag 
         on:click={() => {}}
         class="box"
         on:dragStop={handleDragStop}
     />
{/if}

<style>
    .box {
        background: var(--primary);
        box-shadow: var(--level-2);
        height: 100px;
        width: 100px;
    }
</style>