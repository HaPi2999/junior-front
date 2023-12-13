/**
 * @Copyright junior-team 2023
 */

import { BASE_URL } from '~/constants'

export const apiPostAuthRegister = async (data: any) => await fetch(`${BASE_URL}/auth/sign-up`, {
    method: 'post',
    body: data
})