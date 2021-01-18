import 'isomorphic-fetch';
import qs from 'qs';

const DEFAULT_HEADERS = { 'content-type': 'application/json' };

const handleResponse = (response: Response) => {
    if (response.ok) {
        return response.json();
    }

    throw new Error();
};

type Params = { body?: any, headers?: any, method?: string, queryParams?: any };

export default async function (
    endPoint: string,
    { body, headers: requestHeaders , method = 'GET', queryParams }: Params = {}
) {

    const headers: any = {
        ...DEFAULT_HEADERS,
        ...requestHeaders
    };

    const params: any = { headers, method };

    if (body) {
        params.body = JSON.stringify(body);
    }

    const response = await fetch(`${process.env.API_URL}${endPoint}${queryParams ? '?' + qs.stringify(queryParams): ''}`, params);

    return handleResponse(response);
}