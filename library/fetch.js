import useSWR from "swr"

const fetchtool = url => {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const {data, error} = useSWR(url, fetcher)

	return {
		data,
		isLoading: !error && !data,
		isError: error
	}
}

export {fetchtool}
