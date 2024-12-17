<template>
    <LayoutBase :sourcePath="componentPath">
        <template #header> Declaring Emitted Events and Validation </template>
        <template #form>
            <form @submit.prevent="submitForm">
                <label for="email" class="block">Email</label>
                <BaseInputField
                    placeholder="example@mail.com"
                    v-model="loginData.email"
                    type="email"
                    id="email"
                    @focus="emit('inFocus', 'email')"
                />

                <label for="pincode" class="block">Pin code</label>
                <BaseInputField
                    placeholder="Enter your PIN"
                    v-model="loginData.pincode"
                    id="pincode"
                    @focus="emit('inFocus', 'pincode')"
                />

                <BaseButton class="block mt-3" type="submit" text="Login" />
                <StatusComponent
                    v-if="notification.isVisible"
                    :status="notification.status"
                    :message="notification.message"
                    @close="hideNotification"
                />
            </form>
        </template>
    </LayoutBase>
</template>

<script setup>
import { reactive } from 'vue'
import { useStatusNotification } from '@/core/composables/useStatusNotification'

const { notification, showNotification, hideNotification } =
    useStatusNotification()

const emit = defineEmits({
    inFocus: null,
    submit: ({ email, pincode }) => {
        //I literally can't find any usage for this, emit doesn't return success or error so acting on it is impossible
        if (email && pincode) {
            return false
        }
        return true
    }
})

const loginData = reactive({
    email: '',
    pincode: ''
})

const validateForm = () => {
    if (!loginData.email || isNaN(Number(loginData.pincode))) {
        showNotification(
            'error',
            'Invalid input: Ensure email is filled and PIN is a valid number.'
        )
        return false
    }
    return true
}

const submitForm = () => {
    if (!validateForm()) {
        return
    }

    emit('submit', loginData)
    showNotification('success', 'Login successful!')
}

// eslint-disable-next-line no-undef
const componentPath = COMPONENT_PATH
</script>
