import {request} from "graphql-request"
import useSWR from "swr"

// REST API Fetcher
const restfetch = url => {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const {data, error} = useSWR(url, fetcher)

	return {
		data,
		isLoading: !error && !data,
		isError: error
	}
}

// GraphQL Fetcher
const graphfetch = (url, query) => {
	const fetcher = query => request(url, query)
	const {data, error} = useSWR(query, fetcher)

	return {
		data,
		isLoading: !error && !data,
		isError: error
	}
}

export {restfetch, graphfetch}
