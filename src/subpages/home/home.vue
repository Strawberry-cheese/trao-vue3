<template>
  <nut-cell-group title="基础用法">
    <nut-cell title="primary 类型">
      <template v-slot:link>
        <nut-tag type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="success 类型">
      <template v-slot:link>
        <nut-tag type="success">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="danger 类型">
      <template v-slot:link>
        <nut-tag type="danger">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="warning 类型">
      <template v-slot:link>
        <nut-tag type="warning">标签</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>



<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>
