<script setup lang="ts">
import { ref } from 'vue'
import { EyesClose, EyesOpen } from './icons'

const props = defineProps({
  type: {
    validator(value: string) {
      return ['text', 'password', 'email', 'number'].includes(value)
    },
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: 50
  }
})

const initialValue = ref(props.value)

const emit = defineEmits(['update:value'])

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  initialValue.value = value
  emit('update:value', value)
}

const isPasswordVisible = ref(false)

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div>
    <input
      :maxlength="maxlength"
      :id="id"
      :name="name"
      autocomplete="off"
      :type="type == 'password' ? (isPasswordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :value="initialValue"
      @input="updateValue($event)"
      :disabled="disabled"
      :readonly="readonly"
      :class="[
        'w-full px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-50 focus:outline-0 focus:border-0 focus:ring-0',
        className
      ]"
    />

    <button
      v-if="type == 'password'"
      type="button"
      @click="togglePasswordVisibility"
      class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
    >
      <EyesOpen v-if="isPasswordVisible" class="text-primary-500" />
      <EyesClose v-else />
    </button>
  </div>
</template>
