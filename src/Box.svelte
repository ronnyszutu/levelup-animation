<script>
    import { drag } from './drag';
</script>

<div use:drag={{direction: 'y',}} class="box" />
<div use:drag={{direction: 'x',}} class="box" />
<div use:drag class="box" />

<style>
    .box {
        background: var(--primary);
        box-shadow: var(--level-2);
        height: 100px;
        width: 100px;
    }
</style>