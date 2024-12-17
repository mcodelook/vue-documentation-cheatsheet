// (e.g., "12/10/2024")
export const formatShortDate = date => {
    return new Date(date).toLocaleDateString()
}

// (e.g., "12/10/2024, 3:30:45 PM")
export const formatDateWithTime = date => {
    return new Date(date).toLocaleString()
}

// (e.g., "2024-12-10")
export const formatISODate = date => {
    return new Date(date).toISOString()
}
