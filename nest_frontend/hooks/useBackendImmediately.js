import useBackend from "./useBackend"
import { useEffect } from "react"


/**
 * Like {@link useBackend}, but runs as soon as the component is rendered.
 *
 * @param fetchData - The function to use when fetching data.
 * @param method - The HTTP method to use.
 * @param path - The HTTP path to fetch the data at.
 * @param body - The body of the HTTP request (it will be JSONified before being sent).
 * @param init - Additional `init` parameters to pass to `fetch`.
 * @deprecated since 2021-05-19
 */
export default function useBackendImmediately(fetchData, method, path, body, init) {
    const { data, error, loading, fetchNow } = useBackend(fetchData, method, path, body, init)

    useEffect(
        () => {
            if(!(
                loading || data || error
            )) {
                fetchNow()
            }
        },
        [data, error, loading, fetchNow],
    )

    return { data, error, loading, fetchNow }
}
