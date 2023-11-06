export const formatDateTime = (inputDate) => {
    const date = new Date(inputDate);
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit'};
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);
    return {
        date: formattedDate,
        time: formattedTime
    };
}