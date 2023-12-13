/**
 * @Copyright junior-team 2023
 */

import { useMutation } from 'react-query'
import { apiPostAuthRegister } from '~api/auth'

const useRegisterMutation = () => {
    const { isLoading, data, error, mutate } = useMutation((data: any) => apiPostAuthRegister(data))

    return {
        isLoading,
        data,
        error,
        mutate
    }
}

export default useRegisterMutation