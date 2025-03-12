<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <a-card v-if="loaded" style="width: 400px; text-align: center; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)">
      <a-typography-title level="2">Add New User</a-typography-title>
      <a-form
        :form="form"
        layout="vertical"
        @finish="handleSubmit"
      >
        <a-form-item
          label="Name"
          name="name"
          :rules="[{ required: true, message: 'Please enter your name!' }]"
        >
          <a-input placeholder="Enter your name" />
        </a-form-item>
        <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]"
        >
          <a-input placeholder="Enter your email" />
        </a-form-item>
        <a-button type="primary" html-type="submit" block>Add User</a-button>
      </a-form>
    </a-card>
    <a-typography-title v-else level="3">Loading form...</a-typography-title>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';
import { Card, Form, Input, Button, Typography } from 'ant-design-vue';

export default {
  name: 'DelayedFormPage',
  components: {
    ACard: Card,
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ATypographyTitle: Typography.Title,
  },
  setup() {
    const loaded = ref(false);
    const form = ref(null);

    setTimeout(() => {
      loaded.value = true;
    }, 3000);

    const handleSubmit = async (values) => {
      try {
        await axios.post('http://localhost:8080/api/users', values);
        message.success('User added successfully!');
        form.value.resetFields();
      } catch (error) {
        console.error('Error adding user:', error);
        message.error('Failed to add user.');
      }
    };

    return {
      loaded,
      form,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
</style>
