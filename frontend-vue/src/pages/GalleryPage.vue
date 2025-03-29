<template>
  <div style="padding: 20px">
    <a-row :gutter="16" style="margin-bottom: 20px" align="middle">
      <a-col>
        <a-upload
          list-type="picture-card"
          v-model:file-list="fileList"
          :before-upload="beforeUpload"
          @preview="handlePreview"
        >
          <div v-if="fileList.length < 8">
            <plus-outlined />
            <div style="margin-top: 8px">Add image</div>
          </div>
        </a-upload>
      </a-col>
      <a-col>
        <a-button type="primary" @click="handleUpload">
          <template #icon><upload-outlined /></template>
          Save images
        </a-button>
      </a-col>
      <a-col>
        <a-button @click="fetchImages">Show all images</a-button>
      </a-col>
    </a-row>
    <a-row :gutter="[16, 16]">
      <a-col v-for="image in imageList" :key="image.id">
        <div style="position: relative">
          <img
            :src="`data:image/png;base64,${image.content}`"
            :alt="image.filename"
            style="width: 200px; height: 200px; object-fit: cover; border-radius: 5px"
          />
          <a-button
            type="text"
            danger
            @click="handleDeleteImage(image.id)"
            style="
              position: absolute;
              top: 5px;
              right: 5px;
              background: rgba(255, 255, 255, 0.7);
              border-radius: 50%;
            "
          >
            <template #icon><delete-outlined /></template>
          </a-button>
        </div>
      </a-col>
    </a-row>
    <a-modal
      :visible="previewVisible"
      :footer="null"
      @cancel="handleCancel"
    >
      <img v-if="previewImage" :src="previewImage" alt="Preview" style="width: 100%" />
    </a-modal>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { 
  PlusOutlined, 
  UploadOutlined, 
  DeleteOutlined 
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'GalleryPage',
  components: {
    PlusOutlined,
    UploadOutlined,
    DeleteOutlined
  },
  setup() {
    const API_URL = 'http://localhost:8080/api/gallery';
    const fileList = ref([]);
    const imageList = ref([]);
    const previewImage = ref('');
    const previewVisible = ref(false);

    onMounted(() => {
    });

    const handleUpload = async () => {
      const formData = new FormData();
      fileList.value.forEach(file => {
        if (file.originFileObj) {
          formData.append('file', file.originFileObj);
        }
      });

      try {
        await axios.post(`${API_URL}/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        message.success('Images uploaded successfully');
        fileList.value = [];
      } catch (error) {
        console.error('Upload failed:', error);
        message.error('Failed uploading images.');
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/all`);
        imageList.value = response.data;
      } catch (error) {
        console.error('Failed fetching images:', error);
        message.error('Failed fetching images.');
      }
    };

    const handleDeleteImage = async (id) => {
      try {
        await axios.delete(`${API_URL}/delete/${id}`, {
          responseType: 'text'
        });
        message.success('Deleted image.');
        fetchImages();
      } catch (error) {
        console.error('Delete failed:', error);
        message.error('Failed deleting image.');
      }
    };

    const handlePreview = (file) => {
      previewImage.value = file.url || (file.originFileObj ? URL.createObjectURL(file.originFileObj) : '');
      previewVisible.value = true;
    };

    const handleCancel = () => {
      previewVisible.value = false;
    };

    const beforeUpload = (file) => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('You can only upload image files!');
      }
      return false;
    };

    return {
      fileList,
      imageList,
      previewImage,
      previewVisible,
      handleUpload,
      fetchImages,
      handleDeleteImage,
      handlePreview,
      handleCancel,
      beforeUpload
    };
  }
});
</script>