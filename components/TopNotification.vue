<script setup lang="ts">
import useNotifications, {type INotification} from "~/composables/useNotifications";

const props = defineProps<{
  notification: INotification;
}>();

const { id, text, type, rounded = false, timeout = undefined, closeable = false } = props.notification;
const classes = computed(() => [
  'alert',
  {
    'rounded-none': !rounded,
    'alert-warning': type === 'warning',
    'alert-success': type === 'success',
    'alert-error': type === 'error',
    'alert-info': type === 'info',
  },
]);

const notifications = useNotifications();
const removeNotification = (id: number) => {
  const index = notifications.value.findIndex((notification: INotification) => notification.id === id);
  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
}

onMounted(() => {
  if (timeout) {
    setTimeout(() => {
      removeNotification(id);
    }, timeout);
  }
});
</script>

<template>
  <ul v-auto-animate>
    <li>
      <div role="alert" :class="classes">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>
          {{ text }}
        </span>
        <template v-if="closeable">
          <button class="btn btn-sm" @click="removeNotification(id)">
            Close
          </button>
        </template>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>