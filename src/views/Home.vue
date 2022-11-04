<template>
  <div class="flex items-center justify-center">
  <el-table :data="filterTableData">
    <el-table-column label="ID" prop="id" />
    <el-table-column label="商品" prop="name" />
    <el-table-column label="价格" prop="price" />
    <el-table-column label="库存" prop="stock" />
    <el-table-column label="分类" prop="type" />
    <el-table-column label="浏览量" prop="look" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索商品" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleDetails(scope.$index, scope.row)"
          >详情</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleAddCart(scope.$index, scope.row)"
          >添加</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script setup>
import { computed, ref } from 'vue'
const tableGoods = ref([
  {
    id: 1,
    name: '商品1',
    price: 100,
    stock: 10,
  },
  {
    id: 2,
    name: '商品2',
    price: 200,
    stock: 20,
  },
  { 
    id: 3,
    name: '商品3',
    price: 300,
    stock: 30,
  },
  {
    id: 4,
    name: '商品4',
    price: 400,
    stock: 40,
  },
]) 

const search = ref('')
const filterTableData = computed(() => {
  return tableGoods.value.filter((item) => {
    return item.name.includes(search.value)
  })
})

const handleDetails = (index, row) => {
  console.log(index, row)
  alert('详情')
}

const handleAddCart = (index, row) => {
  //tableGoods.value.splice(index, 1)
  alert("ID: " + row.id + " 商品" + row.name)
}


</script>