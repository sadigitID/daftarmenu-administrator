<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import 'datatables.net-select'
import 'datatables.net-responsive'
import { layouts } from 'chart.js'

import { useRestoStore } from '@/stores/resto'
import { computed, onMounted, ref } from 'vue'
import {
  timestampToDate,
  timestampToDateFormated,
  timestampToMonthNameFormatted
} from '@/utils/date'

DataTable.use(DataTablesCore)

const resto = useRestoStore()
const data = ref<any>([])

const loadData = () => {
  let number = 0
  data.value = resto.upgrade_log.map((e) => {
    number += 1
    return Object.values({
      resto_number: number,
      resto_name: e.resto_name,
      resto_subs: e.resto_subs_package,
      resto_expr_date: timestampToMonthNameFormatted(e.resto_expr_date),
      resto_pay_method: e.resto_pay_method,
      resto_price: e.resto_pay_price
      // resto_date: timestampToDateFormated(e.resto_expr_date),
      // ...e
    })
  })
}

onMounted(async () => {
  await resto.fetchUpgradeLogData()
  loadData()
})

const optionTable = {
  responsive: true,
  scrollX: true,
  pageLength: 5,
  lengthMenu: [5, 10, 25, 50, 100],
  layouts: {
    topStart: {
      buttons: ['copy', 'csv', 'excel', 'pdf']
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-6 p-4 lg:p-6 bg-white rounded-2xl xl:bg-none">
    <h1 class="text-[20px] font-medium leading-4">Log Transaksi</h1>

    <DataTable class="display nowrap" :data="data" :options="optionTable">
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama Resto</th>
          <th>Paket</th>
          <th>Tanggal</th>
          <th>Metode Bayar</th>
          <th>Jumlah</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style>
@import 'datatables.net-dt';

:root {
  --gray-50: #f6f6f6;
  --gray-200: #d7d7d7;
  --gray-200-40: #d7d7d740;
}

.dt-layout-cell > .dt-length > select {
  border: none;
  background-color: var(--gray-50);
  padding: 8px !important;
  margin-right: 14px !important;
}
.dt-layout-cell > .dt-length > select:focus {
  outline-color: var(--gray-200);
}

.dt-layout-cell > .dt-search > label {
  font-size: 14px !important;
  margin-right: 14px !important;
}
.dt-layout-cell > .dt-search > input {
  /* background: #000 !important; */
  border: none !important;
  background-color: var(--gray-50) !important;
  padding: 8px 16px !important;
  outline: none !important;
  border-radius: 8px !important;
}
.dt-layout-cell > .dt-search > input:focus {
  outline-color: var(--gray-200-40) !important;
}
</style>
