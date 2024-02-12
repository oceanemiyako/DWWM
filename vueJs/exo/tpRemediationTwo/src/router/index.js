import { createRouter, createWebHistory } from 'vue-router';
import InventoryList from './component/InventoryList';
import AddItem from './component/AddItem';
import ItemDetails from './component/ItemDetails';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inventory',
      component: InventoryList
    },
    {
      path: '/add',
      name: 'add',
      component: AddItem
    },

    {
      path: '/item/:id',
      name: 'item',
      component: ItemDetails,
      props: true
    }
  ]

})

export default router
