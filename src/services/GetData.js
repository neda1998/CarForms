export const getOwnerData = async () => {
    try {
        const response = await fetch("../data/DataUser");
        if (!response.ok) {
            throw new Error("failed to fetch")
        };
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null
    }
}