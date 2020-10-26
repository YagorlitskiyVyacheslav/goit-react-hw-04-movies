import queryString from 'query-string';

export default function getQueryString(query) {
    return queryString.parse(query)
}