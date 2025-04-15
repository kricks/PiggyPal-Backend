export const parseDate = (dateValue: any): Date | null => {
    if (typeof dateValue !== 'string' || dateValue.trim() === '') {
        return null;
    }
    return new Date(dateValue);
};