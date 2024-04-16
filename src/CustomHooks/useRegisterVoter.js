import { useFetch } from "./useFetch";

export const UseRegisterVoter = () => {
    const peticion = useFetch();
    const registerVoter = async (params) => {
        try {
            const response = await peticion(
                "http://192.168.1.120:5000/api/voters/post-voter",
                {
                    method: "POST",
                    body: JSON.stringify(params),
                }
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    return {
        registerVoter,
    };
};
