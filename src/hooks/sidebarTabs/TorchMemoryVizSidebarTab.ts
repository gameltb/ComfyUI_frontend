import { markRaw } from 'vue'
import { useI18n } from 'vue-i18n'

import TorchMemoryVizSidebarTab from '@/components/sidebar/tabs/TorchMemoryVizSidebarTab.vue'
import type { SidebarTabExtension } from '@/types/extensionTypes'

export const useTorchMemoryVizSidebarTab = (): SidebarTabExtension => {
  const { t } = useI18n()
  return {
    id: 'torch-memory-viz',
    icon: 'pi pi-book',
    title: t('sideToolbar.torchMemoryViz'),
    tooltip: t('sideToolbar.torchMemoryViz'),
    component: markRaw(TorchMemoryVizSidebarTab),
    type: 'vue'
  }
}
