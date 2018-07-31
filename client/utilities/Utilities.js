export const formatDollars    = ( num=0 ) => `$${ Math.round( num ).toLocaleString() }`;

export const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    });