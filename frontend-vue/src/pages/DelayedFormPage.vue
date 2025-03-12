<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <a-card v-if="loaded" style="width: 400px; text-align: center; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)">
      <a-typography-title :level="2">Add New User</a-typography-title>
      <a-form
        ref="formRef"
        :model="formState"
        layout="vertical"
        @finish="handleSubmit"
      >
        <a-form-item
          label="Name"
          name="name"
          :rules="[{ required: true, message: 'Please enter your name!' }]"
        >
          <a-input v-model:value="formState.name" placeholder="Enter your name" />
        </a-form-item>
        <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]"
        >
          <a-input v-model:value="formState.email" placeholder="Enter your email" />
        </a-form-item>
        <a-button type="primary" html-type="submit" block>Add User</a-button>
      </a-form>
    </a-card>
    <a-typography-title v-else :level="3">Loading form...</a-typography-title>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';

export default {
  name: 'DelayedFormPage',
  setup() {
    const loaded = ref(false);
    const formRef = ref(null);
    const formState = reactive({
      name: '',
      email: ''
    });

    onMounted(() => {
      setTimeout(() => {
        loaded.value = true;
      }, 3000);
    });

    const handleSubmit = async (values) => {
      try {
        await axios.post('http://localhost:8080/api/users', values);
        message.success('User added successfully!');
        formState.name = '';
        formState.email = '';
        formRef.value.resetFields();
      } catch (error) {
        console.error('Error adding user:', error);
        message.error('Failed to add user.');
      }
    };

    return {
      loaded,
      formRef,
      formState,
      handleSubmit,
    };
  },
};
</script>