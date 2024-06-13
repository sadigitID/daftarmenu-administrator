<script setup lang="ts">
defineProps({
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

const emit = defineEmits(['update:value'])

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:value', value)
}
</script>

<template>
  <input
    :maxlength="maxlength"
    :id="id"
    :name="name"
    autocomplete="off"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue($event)"
    :disabled="disabled"
    :readonly="readonly"
    :class="[
      'w-full px-4 py-2 text-sm leading-6 placeholder:text-gray-400 text-gray-900 border-0 border-transparent rounded-lg outline-0 bg-gray-50 focus:outline-0 focus:border-0 focus:ring-0',
      className
    ]"
  />
</template>