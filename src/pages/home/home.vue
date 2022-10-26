<template>
  <nut-cell-group title="样式风格">
    <nut-cell title="空心样式">
      <template v-slot:link>
        <nut-tag plain>标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="圆角样式">
      <template v-slot:link>
        <nut-tag round type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="标记样式">
      <template v-slot:link>
        <nut-tag mark type="primary">标签</nut-tag>
      </template>
    </nut-cell>
    <nut-cell title="可关闭标签">
      <template v-slot:link>
        <nut-tag v-if="show" closeable @close="close" type="primary">标签</nut-tag>
      </template>
    </nut-cell>
  </nut-cell-group>
</template>


<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      close,
      show
    };
  }
};
</script>



