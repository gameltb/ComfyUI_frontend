<template>
  <SidebarTabTemplate :title="$t('sideToolbar.torchMemoryViz')">
    <template #tool-buttons> </template>
    <template #body>
      <VirtualGrid
        :items="memoryVizSnapshots"
        :gridStyle="{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          padding: '0.5rem',
          gap: '0.5rem'
        }"
      >
        <template #item="{ item }">
          <Button style="width: 100%;" @click="open_snapshot(item)">{{ item.name }}</Button>
        </template>
      </VirtualGrid>
    </template>
  </SidebarTabTemplate>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import ConfirmPopup from 'primevue/confirmpopup'
import ContextMenu from 'primevue/contextmenu'
import type { MenuItem } from 'primevue/menuitem'
import ProgressSpinner from 'primevue/progressspinner'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { computed, ref, shallowRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import VirtualGrid from '@/components/common/VirtualGrid.vue'
import { api } from '@/scripts/api'

import SidebarTabTemplate from './SidebarTabTemplate.vue'

const memoryVizSnapshots = ref([])

api
  .fetchApi('/api/paper_playground/list_memory_viz_snapshot')
  .then((resp) => resp.json())
  .then((data) => (memoryVizSnapshots.value = data))

function open_snapshot(snapshot) {
  window.open('/memory_viz/?res_uuid=' + snapshot.res_uuid, '_blank')
}
</script>
