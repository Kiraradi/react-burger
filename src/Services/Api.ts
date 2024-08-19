import { URL_SERVER } from "../consts"


export const getIngredientsFromSServer = async () => {
    try {
        const response = await fetch(URL_SERVER)
        if(response.ok) {
            const data = await response.json();
            if (data.success) {
                return data.data
            } else return []  

        } else {
            throw new Error('ERROR')
        }
    } catch(err) {
        console.log('error ==>', err);
        return []
    }
}