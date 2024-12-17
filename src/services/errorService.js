export const logErrorToService = error => {
    const errorDetails = {
        message: error.message,
        timestamp: new Date().toISOString()
    }

    console.log('Sending to error tracking service:', errorDetails)
}

export const showErrorNotification = info => {
    alert(info)
}
