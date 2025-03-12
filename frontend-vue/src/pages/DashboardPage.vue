<template>
  <div>
    <h1>Performance Testing Dashboard</h1>
    
    <!-- Sort and Add Record buttons -->
    <a-button @click="toggleSortOrder">Sort</a-button>
    <a-button @click="showAddModal">Add Record</a-button>

    <!-- Table with pagination -->
    <a-table
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :row-key="'id'"
      :pagination="pagination"
    />

    <!-- Modal for adding new record -->
    <a-modal
      v-model:visible="visible"
      title="Add Record"
      @ok="handleAdd"
      @cancel="closeModal"
    >
      <a-input
        v-model="newRecord.name"
        placeholder="Name"
      />
      <a-input
        v-model="newRecord.email"
        placeholder="Email"
      />
    </a-modal>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { Table, Button, Modal, Input } from 'ant-design-vue';

export default {
  name: 'DashboardPage',
  components: {
    ATable: Table,
    AButton: Button,
    AModal: Modal,
    AInput: Input,
  },
  setup() {
    const data = ref([]);
    const loading = ref(false);
    const visible = ref(false);
    const newRecord = ref({ name: '', email: '' });
    const sortOrder = ref('ascend');
    const pageSize = ref(5);
    const currentPage = ref(1);

    // Fetch data from API
    const fetchData = async () => {
      loading.value = true;
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        const sortedData = response.data.sort((a, b) =>
          sortOrder.value === 'ascend'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        data.value = sortedData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      loading.value = false;
    };

    // Handle sort order toggle
    const toggleSortOrder = () => {
      sortOrder.value = sortOrder.value === 'ascend' ? 'descend' : 'ascend';
    };

    // Show modal to add record
    const showAddModal = () => {
      visible.value = true;
    };

    // Close modal
    const closeModal = () => {
      visible.value = false;
    };

    const handleAdd = async () => {
      try {
        await axios.post('http://localhost:8080/api/users', newRecord.value);
        fetchData(); // Refresh data after adding
        closeModal();
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    const handlePaginationChange = (page, size) => {
      currentPage.value = page;
      pageSize.value = size;
      pagination.value.current = page;
      pagination.value.pageSize = size;
    };

    const pagination = ref({
      current: currentPage.value,
      pageSize: pageSize.value,
      onChange: handlePaginationChange,
    });

    const columns = ref([
      { title: 'Name', dataIndex: 'name', key: 'name', sorter: true },
      { title: 'Email', dataIndex: 'email', key: 'email' },
    ]);

    onMounted(() => {
      fetchData();
    });

    watch([sortOrder, pageSize, currentPage], fetchData);

    return {
      data,
      loading,
      visible,
      newRecord,
      columns,
      pagination,
      toggleSortOrder,
      showAddModal,
      closeModal,
      handleAdd,
    };
  },
};
</script>

<style scoped>
</style>
