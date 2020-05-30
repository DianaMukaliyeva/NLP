export const getAnalys = async (url='', data={}) => {
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        return ({'error': error});
    }
}
