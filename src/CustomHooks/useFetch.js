import {useNavigate} from 'react-router-dom'

export const useFetch = () => {
    
    const navigate = useNavigate ();

    const respuesta = async (uri, opt = {}) => {
        try {
            if(!navigator.onLine) {
                navigate('/failed')
                console.log(navigator.onLine)
                
                return {
                    ok: false,
                    message: "error de conexion",
                    total: 0,
                    data: null
                }
            }

            const response = await fetch ( uri, {
                ...opt,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return response.json();

        } catch (error) {
            return {
                ok: false,
                message: "error interno.",
                total: 0,
                data: null
            }
        }
    };

    return respuesta
}