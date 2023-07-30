export const transformPhoneNumberToLink = (phone?: string | null) => {
    if (!phone) {
        return ''
    }
    return phone.replace(/ /g, '').replace('+', '00')
}