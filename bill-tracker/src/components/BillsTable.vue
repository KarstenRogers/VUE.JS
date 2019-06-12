<template>
  <table class="table w-full">
    <thead class="bg-blue text-white">
      <tr>
        <th class="p-4" scope="col">Date</th>
        <th class="p-4" scope="col">Amount</th>
        <th class="p-4" scope="col">Category</th>
        <th class="p-4" scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="p-4 bg-blue-lighter text-center">
        <td colspan="4" class="p-4">
          <button class="underline" @click="triggerShowAddBill">Add new</button>
        </td>
      </tr>
      <tr v-for="(bill, index) in bills" :key="index" class="p-4">
        <td class="p-4">{{ bill.date | moment("MMM D YYYY") }}</td>
        <td class="p-4">${{ bill.amount }}</td>
        <td class="p-4">{{ bill.category }}</td>
        <td class="p-4"><button @click="removeBill(index)">𝗫</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BillsTable",
  props: ["bills"],
  methods: {
    triggerShowAddBill: function() {
      this.$emit("triggerShowAddBill");
    },
    removeBill: function(index) {
      this.$emit("removeBill", index);
    }
  }
};
</script>
